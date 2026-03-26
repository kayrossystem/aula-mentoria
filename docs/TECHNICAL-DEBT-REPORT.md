# TECHNICAL-DEBT-REPORT.md — AIOS Core v5.0.3

> **Relatório Executivo de Dívida Técnica**
> Gerado por: @analyst (Alex) — Fase 9 do Brownfield Discovery
> Data: 2026-03-23
> Sistema: AIOS Core v5.0.3 — Framework de Orquestração de IA
> Repositório: `/home/usergabriel/aios-core/`
> Classificação: INTERNO — Para tomadores de decisão

---

## 1. Sumário Executivo

O AIOS Core v5.0.3 é um framework de orquestração de IA CLI-first construído em Node.js 18+, com uma arquitetura de 4 camadas (L1-L4) bem definida, 11 agentes especializados e suporte a 5 IDEs diferentes. Em termos de design de produto, o sistema demonstra maturidade conceitual acima da média: a separação de responsabilidades entre agentes, o sistema de workflows primários (SDC, QA Loop, Spec Pipeline, Brownfield Discovery) e a Constitution com 6 princípios inegociáveis são diferenciais competitivos reais. O volume de documentação — 1.179 arquivos em 4 idiomas, rastreados por SHA256 — indica um investimento significativo em adoção e manutenibilidade.

No entanto, a base técnica de execução não acompanhou a maturidade do design. Dois riscos críticos (P0) ameaçam diretamente a confiabilidade do produto em produção: cobertura de testes real abaixo de 40% (com mais de 20 testes deliberadamente desabilitados) e verificação de tipos completamente desativada em 243 arquivos de código core. Esses dois problemas, combinados, significam que qualquer mudança no core pode introduzir regressões silenciosas que só serão descobertas pelo usuário final — não pela suíte de testes.

No nível P1, quatro problemas amplificam o risco técnico e criam atrito operacional: dois installers sem canônico definido geram confusão de adoção; um hook system fragmentado em 5 implementações por IDE aumenta o custo de manutenção a cada nova versão; dois "god objects" (arquivos com mais de 36KB de lógica concentrada) criam gargalos de revisão e débito de testes; e um CLI deprecated ainda ativo expõe usuários a caminhos de execução não mantidos.

A decisão central para os próximos 60 dias é clara: antes de qualquer nova feature, é necessário estabilizar o piso de qualidade — reativar a verificação de tipos, resolver a dívida de testes e canonizar o installer. Sem isso, cada entrega futura carrega risco composto crescente. Este relatório fornece o roadmap, as métricas e a priorização necessários para essa tomada de decisão.

---

## 2. Scorecard de Saúde do Sistema

| Dimensão | Nota (0–10) | Justificativa | Tendência |
|---|---|---|---|
| **Arquitetura & Design** | 8.0 | 4 camadas bem definidas, boundary protection, Constitution formal | Estável |
| **Cobertura de Testes** | 3.5 | >20 testes desabilitados, cobertura real <40% | Degradando |
| **Type Safety** | 2.0 | `checkJs: false` em 243 arquivos core — risco silencioso máximo | Degradando |
| **Manutenibilidade** | 4.5 | God objects (54KB + 36KB), hooks fragmentados em 5 impl. | Degradando |
| **Consistência de Instalação** | 4.0 | 2 installers ativos sem canônico, CLI deprecated ainda operacional | Instável |
| **Documentação de Produto** | 7.5 | 1.179 .md em 4 idiomas, install manifest com SHA256 | Estável |
| **Documentação de Código** | 3.0 | Sem JSDoc consistente, sem auto-geração de API docs | Degradando |
| **Integração de IDEs** | 6.5 | 5 IDEs suportadas, mas hook system fragmentado aumenta custo | Risco |
| **Migration Path** | 2.5 | Sem guia v4.31→v5.0.3, MCP presets não documentados | Crítico |
| **Segurança de Deploy** | 5.0 | SHA256 no manifest é positivo; tipo/teste ruins são vetores de risco | Risco |
| **SCORE GERAL** | **4.7 / 10** | Produto maduro conceitualmente, base técnica crítica | Degradando |

> **Interpretação:** Score abaixo de 5.0 indica que o sistema está em zona de risco operacional. As dimensões de Type Safety, Migration Path e Cobertura de Testes puxam o score para baixo de forma desproporcional ao impacto real que têm na produção.

---

## 3. Riscos por Prioridade

### P0 — CRÍTICO (Ação imediata, bloqueia releases)

---

#### P0.1 — Cobertura de Testes Abaixo de 40% com Dívida Deliberada

**O que é:** Mais de 20 testes foram desabilitados durante a migração para v2.1 e nunca foram reativados. A cobertura real de código core está abaixo de 40%.

**Impacto no negócio:**
- Qualquer refatoração ou nova feature no core pode quebrar comportamentos existentes sem alertas.
- Tempo de debugging de regressões aumenta em 3–5x — bugs chegam ao usuário final, não à suíte.
- Impossibilita certificação de qualidade para clientes enterprise ou integrações críticas.
- Bloqueia contribuidores externos: sem testes, não há como validar PRs com confiança.

**Risco se não resolvido:** Alto e crescente. A cada nova entrega, mais código é adicionado sobre uma base sem cobertura garantida.

---

#### P0.2 — Type Safety Desativado em 243 Arquivos Core (`checkJs: false`)

**O que é:** A verificação de tipos do JavaScript via TypeScript compiler está desabilitada em todos os 243 arquivos identificados como core do sistema.

**Impacto no negócio:**
- Erros de tipo (null reference, propriedade inexistente, contrato de função quebrado) são invisíveis até runtime.
- Em um framework de orquestração de IA, erros silenciosos de tipo podem resultar em comportamentos inesperados de agentes em produção — difíceis de rastrear e reproduzir.
- Aumenta o custo de onboarding de novos desenvolvedores, que não têm o compilador como guia.
- Inviabiliza migração segura para TypeScript no futuro sem reescrita.

**Risco se não resolvido:** Crítico. Este é o tipo de problema que causa incidentes de produção com causa raiz obscura.

---

### P1 — ALTO (Resolver nos próximos 30–45 dias)

---

#### P1.1 — God Objects: `master-orchestrator.js` (54KB) e `workflow-executor.js` (36KB)

**O que é:** Dois arquivos concentram lógica de orquestração de forma monolítica. Um arquivo de 54KB em JavaScript equivale a aproximadamente 1.500–2.000 linhas de código com responsabilidades múltiplas.

**Impacto no negócio:**
- Gargalo de revisão de código: toda mudança de orquestração toca os mesmos arquivos, criando conflitos de merge frequentes.
- Testabilidade próxima de zero sem refatoração — impossível mockar dependências.
- Bus factor alto: apenas quem conhece o arquivo inteiro consegue fazer mudanças seguras.
- Onboarding de novos devs no core é proibitivamente caro.

---

#### P1.2 — Dois Installers Sem Canônico Definido

**O que é:** `@aiox/installer` e `@synkra/aiox-install` coexistem sem que haja documentação clara de qual é o oficial para novos projetos.

**Impacto no negócio:**
- Usuários novos não sabem qual instalar — primeiro ponto de fricção na adoção.
- Dois caminhos de instalação com comportamentos potencialmente divergentes criam suporte duplicado.
- Issues e bugs reportados podem ser específicos de um installer, dificultando reprodução.
- Identidade de marca fragmentada: `@aiox` vs `@synkra` confunde o posicionamento do produto.

---

#### P1.3 — Hook System Fragmentado em 5 Implementações por IDE

**O que é:** Cada uma das 5 IDEs suportadas (Claude Code, Codex, Gemini, Cursor, AntiGravity) tem sua própria implementação de hook system, sem abstração comum.

**Impacto no negócio:**
- Custo de manutenção multiplicado por 5: qualquer mudança no comportamento de hooks precisa ser replicada em cada implementação.
- Inconsistência de comportamento entre IDEs — bugs que afetam apenas uma IDE são difíceis de isolar.
- Barreira alta para adicionar suporte a uma 6ª IDE no futuro.
- Qualidade da integração varia conforme qual IDE recebeu mais atenção recentemente.

---

#### P1.4 — CLI Deprecated (`aiox-minimal`) Ainda Ativo em Produção

**O que é:** Um CLI marcado como deprecated continua operacional e acessível por usuários, sem data de remoção definida.

**Impacto no negócio:**
- Usuários podem estar usando o caminho deprecated sem saber, sendo expostos a comportamentos não mantidos.
- Bugs reportados por usuários no CLI deprecated consomem tempo de suporte sem retorno.
- Cria confusão sobre qual CLI é o "oficial" — problema de produto, não só técnico.
- Código deprecated ativo é superfície de ataque adicional para vulnerabilidades.

---

### P2 — MÉDIO (Resolver nos próximos 60–90 dias)

---

#### P2.1 — Documentação de API Não Auto-Gerada (1.179 .md sem JSDoc Consistente)

**Impacto:** Documentação manual de 1.179 arquivos diverge do código com o tempo. Sem JSDoc, não há single source of truth. Custo de atualização é proibitivo manualmente.

---

#### P2.2 — Migration Guide v4.31→v5.0.3 Ausente

**Impacto:** Usuários em v4.31 não têm caminho claro de upgrade. Isso trava adoção da versão mais recente e fragmenta a base instalada entre versões, multiplicando o custo de suporte.

---

#### P2.3 — MCP Custom Presets Não Documentados

**Impacto:** Funcionalidade existente invisível para o usuário. Usuários criam workarounds manuais para algo que o sistema já resolve — atrito desnecessário e subutilização de feature.

---

## 4. Oportunidades de Quick Win

> Critério de seleção: máximo impacto na saúde do sistema com mínimo esforço de execução (menos de 1 sprint por item).

| # | Ação | Esforço Estimado | Impacto | Resultado |
|---|---|---|---|---|
| **QW1** | Habilitar `checkJs: true` + resolver erros bloqueantes | 3–5 dias | Elimina P0.2 | Type safety ativo imediatamente |
| **QW2** | Reativar e corrigir os 20+ testes desabilitados | 5–7 dias | Eleva cobertura para ~65% | Cobertura real mensurável |
| **QW3** | Depreciar oficialmente `aiox-minimal` com mensagem de redirecionamento e data de remoção | 1 dia | Resolve P1.4 | Usuários guiados ao CLI correto |
| **QW4** | Publicar decision record: `@aiox/installer` é o canônico, `@synkra/aiox-install` entra em deprecation | 1 dia | Resolve P1.2 | Fim da confusão de adoção |
| **QW5** | Gerar migration guide v4.31→v5.0.3 (pode ser assistido por IA com base no changelog) | 2–3 dias | Resolve P2.2 | Desbloqueia upgrades represados |
| **QW6** | Documentar MCP custom presets no README existente | 1 dia | Resolve P2.3 | Feature descoberta sem custo |

**ROI Total dos Quick Wins:** 6 problemas resolvidos (2 P0 + 2 P1 + 2 P2) em aproximadamente 2 semanas de trabalho focado.

---

## 5. Roadmap de Melhorias

> Cada sprint = 2 semanas. Sequência otimizada para desbloquear o próximo passo.

### Sprint 1 (Semanas 1–2) — Estabilizar o Piso de Qualidade

**Objetivo:** Eliminar os dois P0 e os dois P1 mais rápidos.

| Tarefa | Responsável | Entregável |
|---|---|---|
| Habilitar `checkJs: true`, corrigir erros bloqueantes | @dev + @architect | Type safety ativo em 243 arquivos |
| Reativar 20+ testes desabilitados | @dev + @qa | Cobertura ≥ 60% |
| Depreciar `aiox-minimal` com redirect | @dev | CLI deprecated fora do caminho principal |
| Decision record: canônico do installer | @architect + @pm | ADR publicado, `@aiox/installer` oficial |

**Gate de saída:** Cobertura ≥ 60%, zero erros de tipo bloqueantes, um CLI oficial.

---

### Sprint 2 (Semanas 3–4) — Resolver Débito de Documentação

**Objetivo:** Eliminar os três P2 e estabelecer auto-geração de docs.

| Tarefa | Responsável | Entregável |
|---|---|---|
| Gerar migration guide v4.31→v5.0.3 | @analyst + @pm | `docs/migration/v4-to-v5.md` publicado |
| Documentar MCP custom presets | @dev | Seção no README + exemplo funcional |
| Configurar JSDoc em arquivos core críticos (top 20 por uso) | @dev | Geração automática de API docs via CI |
| Iniciar deprecation de `@synkra/aiox-install` | @devops | Aviso publicado no npm + readme |

**Gate de saída:** Caminho de upgrade documentado, presets visíveis, base de JSDoc iniciada.

---

### Sprint 3 (Semanas 5–6) — Desmontar os God Objects

**Objetivo:** Quebrar `master-orchestrator.js` e `workflow-executor.js` em módulos testáveis.

| Tarefa | Responsável | Entregável |
|---|---|---|
| Mapear responsabilidades em `master-orchestrator.js` (54KB) | @architect | Diagrama de decomposição |
| Extrair módulos de orquestração (mínimo 3 módulos < 15KB) | @dev | Refatoração com testes regressivos |
| Mapear e decompor `workflow-executor.js` (36KB) | @dev + @architect | Módulos < 12KB cada |
| Cobertura de testes nos novos módulos | @qa | Cobertura ≥ 80% nos módulos extraídos |

**Gate de saída:** Nenhum arquivo core acima de 20KB, cobertura ≥ 70% global.

---

### Sprint 4 (Semanas 7–8) — Unificar o Hook System

**Objetivo:** Criar abstração comum para os 5 hooks de IDE.

| Tarefa | Responsável | Entregável |
|---|---|---|
| Auditar as 5 implementações de hook por IDE | @architect | Matriz de features comuns vs específicas |
| Projetar interface de hook abstrata | @architect | `hook-interface.md` + ADR |
| Implementar adapter para 2 IDEs prioritárias (Claude Code + Cursor) | @dev | Hook unificado para 2/5 IDEs |
| Planejar migração das outras 3 IDEs | @sm | Stories para sprint seguinte |

**Gate de saída:** Abstração de hook aprovada, 2 IDEs migradas, roadmap para as outras 3 definido.

---

### Sprint 5+ (Semanas 9–12) — Consolidação e Excelência

| Tarefa | Entregável |
|---|---|
| Migrar hooks das 3 IDEs restantes | Hook system unificado para todas as 5 IDEs |
| Remover `@synkra/aiox-install` (após período de deprecation) | Um único installer canônico |
| Completar cobertura de testes ≥ 80% global | Meta de qualidade sustentável atingida |
| Implementar JSDoc em 100% dos arquivos públicos da API | API docs auto-geradas em CI/CD |

---

## 6. Métricas de Sucesso

> Como saber, com dados, que o sistema melhorou.

### Métricas de Qualidade Técnica

| Métrica | Hoje | Meta Sprint 1 | Meta Sprint 3 | Meta Sprint 5 |
|---|---|---|---|---|
| Cobertura de testes (global) | <40% | ≥60% | ≥70% | ≥80% |
| Testes desabilitados | 20+ | 0 | 0 | 0 |
| Erros de tipo (`checkJs: true`) | N/A (desativado) | 0 críticos | 0 | 0 |
| Maior arquivo core (KB) | 54KB | 54KB | <20KB | <15KB |
| Implementações de hook | 5 independentes | 5 independentes | 3 unificadas | 1 abstração + 5 adapters |

### Métricas de Produto e Adoção

| Métrica | Hoje | Meta 60 dias | Meta 90 dias |
|---|---|---|---|
| CLIs ativos (sem deprecated) | 2 (1 deprecated ativo) | 1 oficial + 1 em deprecation | 1 único |
| Installers sem canônico | 2 sem decisão | 1 canônico definido | 1 ativo (outro removido) |
| Usuários bloqueados por falta de migration guide | Desconhecido | 0 (guia publicado) | 0 |
| Tempo médio de onboarding de novo dev | Não medido | Baseline estabelecida | Redução de 20% |

### Métricas de Operação

| Métrica | Hoje | Meta |
|---|---|---|
| Tempo médio de debug de regressão | Alto (estimado) | Redução de 40% com tipo+teste |
| Conflitos de merge em arquivos core | Frequentes (god objects) | Redução de 60% após decomposição |
| Issues de suporte sobre instalação | Não medido | Queda de 50% após canônico definido |

### Sinal de Saúde Geral

**Score atual:** 4.7/10
**Meta em 60 dias:** ≥ 6.5/10
**Meta em 90 dias:** ≥ 7.5/10

---

## 7. Conclusão e Próximos Passos

### Diagnóstico Final

O AIOS Core v5.0.3 tem um **produto conceitualmente forte** — arquitetura de agentes, workflows primários, Constitution formal e suporte multi-IDE são ativos reais de diferenciação. O problema não é a visão. O problema é que a base de execução acumulou dívida técnica crítica em dois pontos que são, essencialmente, a rede de segurança do sistema: testes e verificação de tipos.

Um framework de orquestração de IA sem type safety e sem cobertura de testes adequada é como um piloto automático sem redundância — funciona até não funcionar, e quando falha, a causa raiz é difícil de encontrar.

### Decisão Necessária Agora

Existe uma escolha binária pela frente:

**Opção A — Estabilizar primeiro:** Pausar novas features por 4 semanas e executar Sprint 1 e Sprint 2 como prioridade absoluta. Resultado: piso de qualidade seguro antes da próxima entrega.

**Opção B — Paralelizar:** Designar uma faixa dedicada de 30% do capacity para dívida técnica em cada sprint, enquanto features continuam. Resultado: progresso mais lento, mas sem parar o produto. Risco: P0s permanecem abertos por mais tempo.

**Recomendação do @analyst:** Opção A para Sprint 1 (apenas 2 semanas de foco), depois Opção B para os sprints seguintes. O custo de 2 semanas de foco nos P0 é menor do que o custo de um incidente de produção com causa raiz de tipo ou regressão não coberta.

### Próximos Passos Concretos

1. **Hoje:** @pm convoca reunião de decisão com base neste relatório — Opção A ou B.
2. **Esta semana:** @architect publica ADR sobre canônico do installer (1 dia de trabalho).
3. **Sprint 1:** @dev + @qa executam P0.1 e P0.2 com gate de saída claro (cobertura ≥ 60%, tipo ativo).
4. **Sprint 2:** @analyst + @pm publicam migration guide v4.31→v5.0.3.
5. **Sprint 3+:** Decomposição dos god objects e unificação do hook system.

### Entrega do Brownfield Discovery

Este relatório conclui a **Fase 9** do Brownfield Discovery. O artefato de saída desta fase é este documento. A **Fase 10** (@pm) deve utilizar os riscos P0–P2 e o roadmap de sprints como insumo direto para criação do Epic de Estabilização Técnica e priorização do backlog.

---

*Relatório gerado por @analyst (Alex) — Brownfield Discovery Fase 9*
*AIOS Core v5.0.3 — 2026-03-23*
*Próximo passo: @pm — Fase 10 (Epic + Stories para desenvolvimento)*
