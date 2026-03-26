# Plano de Epics e Stories — AIOS Core v5.0.3
> **@pm (Morgan) — Brownfield Discovery Fase 10**
> Data: 2026-03-23
> Insumo: `docs/TECHNICAL-DEBT-REPORT.md` (Fase 9 — @analyst Alex)
> Status do sistema: Score 4.7/10 → Meta: 7.5/10 em 90 dias

---

## Sumário Executivo

Três epics, 11 stories, 76 pontos totais. Sequência obrigatória: EPIC-001 (P0) → EPIC-002 (P1) → EPIC-003 (P2). As Stories 1.3, 1.4 e 3.2 podem ser executadas em paralelo com qualquer outra — sem dependência técnica.

**Score projetado ao final de cada epic:**
- Após EPIC-001: 6.5/10
- Após EPIC-002: 7.5/10
- Após EPIC-003: 8.0/10

---

## EPIC-001 — Estabilização da Base de Qualidade (P0)

**Objetivo:** Eliminar os dois riscos que bloqueiam qualquer release seguro: cobertura < 40% e type safety desativado.

**Contexto de negócio:** Um framework de orquestração de IA sem type safety e sem testes é como um piloto automático sem redundância — funciona até não funcionar, e quando falha, a causa raiz é difícil de encontrar. Cada entrega futura sem resolver esses P0s carrega risco composto crescente.

**Prazo:** Sprint 1-2 (4 semanas)
**Pontos totais:** 26
**Arquivo de execução:** `docs/architecture/EPIC-001-EXECUTION.yaml`

### Stories do EPIC-001

| Story | Título | Pontos | Dependência | Pode Paralelizar? |
|-------|--------|--------|-------------|-------------------|
| 1.1 | Habilitar checkJs e resolver erros de tipo | 8 | Nenhuma | Sim |
| 1.2 | Reativar e corrigir 20+ testes desabilitados | 13 | 1.1 | Não |
| 1.3 | Depreciar aiox-minimal com redirect | 3 | Nenhuma | Sim (com 1.1) |
| 1.4 | ADR e canonizar @aiox/installer | 2 | Nenhuma | Sim (com 1.1) |

**Gate de saída do EPIC-001:**
- `npm run typecheck` retorna exit code 0
- Cobertura global >= 60%
- Zero testes desabilitados (`xit`, `xtest`, `skip`)
- `aiox-minimal` exibe aviso de deprecation
- ADR-001 publicado

---

## EPIC-002 — Consolidação de Arquitetura (P1)

**Objetivo:** Desfazer os god objects e unificar o hook system para que o código seja modificável com segurança.

**Contexto de negócio:** Com o piso de qualidade estabelecido, o próximo bloqueio é operacional: arquivos de 54KB e 36KB que ninguém consegue modificar com confiança, e 5 implementações de hook que se divergem a cada mudança. Isso aumenta o custo de cada nova feature e o risco de cada refatoração.

**Prazo:** Sprint 3-4 (semanas 5-8)
**Pontos totais:** 34
**Arquivo de execução:** `docs/architecture/EPIC-002-EXECUTION.yaml`
**Gate de entrada:** EPIC-001 concluído

### Stories do EPIC-002

| Story | Título | Pontos | Dependência |
|-------|--------|--------|-------------|
| 2.1 | Decompor master-orchestrator.js (54KB) | 13 | EPIC-001 |
| 2.2 | Decompor workflow-executor.js (36KB) | 8 | EPIC-001 (paralelo com 2.1 na Fase 1) |
| 2.3 | Projetar interface abstrata de hook system | 5 | EPIC-001 |
| 2.4 | Implementar hook adapter Claude Code + Cursor | 8 | 2.3 |

**Gate de saída do EPIC-002:**
- Nenhum arquivo core > 20KB
- Cobertura global >= 70%
- Cobertura dos módulos extraídos >= 80%
- Abstração de hook aprovada e 2/5 IDEs migradas

---

## EPIC-003 — Developer Experience (P2)

**Objetivo:** Fechar os gaps de documentação que travam adoção e upgrade.

**Contexto de negócio:** Usuários em v4.31 sem caminho de upgrade fragmentam a base instalada. MCP custom presets invisíveis fazem usuários criarem workarounds para algo que o sistema já resolve. API docs manuais divergem do código progressivamente.

**Prazo:** Sprint 5-6 (semanas 9-12)
**Pontos totais:** 16
**Arquivo de execução:** `docs/architecture/EPIC-003-EXECUTION.yaml`
**Gate de entrada:** EPIC-001 concluído (Stories 3.1 e 3.3). Story 3.2 pode iniciar imediatamente.

### Stories do EPIC-003

| Story | Título | Pontos | Dependência |
|-------|--------|--------|-------------|
| 3.1 | Migration guide v4.31 → v5.0.3 | 5 | EPIC-001 |
| 3.2 | Documentar MCP custom presets | 3 | Nenhuma |
| 3.3 | JSDoc + auto-geração de API docs | 8 | EPIC-001 |

**Gate de saída do EPIC-003:**
- `docs/migration/v4-to-v5.md` publicado
- MCP presets documentados com 2 exemplos testados
- `npm run docs:generate` funcional em CI

---

## Backlog Priorizado (Tabela de ROI)

| # | Story | Epic | Pontos | Prioridade | ROI | Pode Iniciar |
|---|-------|------|--------|-----------|-----|-------------|
| 1 | **1.1** — Habilitar checkJs | E001 | 8 | P0 | CRITICO | Imediatamente |
| 2 | **1.3** — Depreciar aiox-minimal | E001 | 3 | P0 | ALTO | Imediatamente |
| 3 | **1.4** — ADR installer canônico | E001 | 2 | P0 | ALTO | Imediatamente |
| 4 | **3.2** — Documentar MCP presets | E003 | 3 | P2 | ALTO | Imediatamente |
| 5 | **1.2** — Reativar testes | E001 | 13 | P0 | CRITICO | Após 1.1 |
| 6 | **2.1** — Decompor orchestrator | E002 | 13 | P1 | ALTO | Após EPIC-001 |
| 7 | **2.3** — Interface hook system | E002 | 5 | P1 | MÉDIO | Após EPIC-001 |
| 8 | **2.2** — Decompor workflow-executor | E002 | 8 | P1 | ALTO | Após EPIC-001 |
| 9 | **3.1** — Migration guide v4→v5 | E003 | 5 | P2 | MÉDIO | Após EPIC-001 |
| 10 | **2.4** — Hook adapter Claude+Cursor | E002 | 8 | P1 | MÉDIO | Após 2.3 |
| 11 | **3.3** — JSDoc + auto-docs | E003 | 8 | P2 | MÉDIO | Após EPIC-001 |

**Total:** 76 pontos | **Tempo estimado:** 10-12 semanas (2 devs em tempo parcial)

---

## Recomendação de Início: Execute Story 1.1 PRIMEIRO

**Story:** `docs/stories/1.1.story.md`
**Título:** Habilitar checkJs e resolver erros de tipo bloqueantes
**Pontos:** 8 | **Tempo:** 3-5 dias

### Por que 1.1 e não outra?

**1. É o desbloqueador de todo o resto.**
A Story 1.2 (testes) depende de 1.1 estar ativa — reativar testes com tipos quebrados gera ruído que obscurece os bugs reais. A Story 3.3 (JSDoc) se beneficia diretamente do checkJs ativo. Sem 1.1, metade do plano fica subótimo.

**2. É a ação com maior ROI por dia de trabalho.**
3-5 dias de implementação eliminam P0.2 inteiro: uma categoria completa de bugs silenciosos em 243 arquivos core. Nenhuma outra story entrega tanto impacto por unidade de tempo.

**3. Não requer contexto prévio.**
@dev pode começar agora, sem dependências, sem aguardar decisões arquiteturais. O caminho é direto: `checkJs: true` → lista de erros → corrigir bloqueantes.

**4. Habilita paralelismo imediato.**
Enquanto @dev trabalha em 1.1, @architect pode executar 1.4 (ADR do installer) e qualquer dev disponível pode executar 1.3 (deprecar aiox-minimal) e 3.2 (documentar MCP presets) — ambas sem dependências técnicas.

### Sequência recomendada para a primeira semana

```
Dia 1-5:   @dev → Story 1.1 (checkJs)
Dia 1-2:   @architect → Story 1.4 (ADR installer)   [paralelo]
Dia 1:     @dev ou @pm → Story 1.3 (deprecar CLI)   [paralelo, 1 dia]
Dia 1-2:   @dev → Story 3.2 (MCP presets)           [paralelo, opcional]

Dia 6+:    @dev → Story 1.2 (testes) — após 1.1 concluída
```

---

## Artefatos Criados nesta Fase 10

```
docs/
├── EPIC-PLAN-PHASE10.md          ← Este documento (visão consolidada)
├── TECHNICAL-DEBT-REPORT.md      ← Fase 9 (insumo)
├── architecture/
│   ├── EPIC-001-EXECUTION.yaml   ← Execução do EPIC-001
│   ├── EPIC-002-EXECUTION.yaml   ← Execução do EPIC-002
│   └── EPIC-003-EXECUTION.yaml   ← Execução do EPIC-003
└── stories/
    ├── 1.1.story.md              ← checkJs
    ├── 1.2.story.md              ← testes
    ├── 1.3.story.md              ← deprecar aiox-minimal
    ├── 1.4.story.md              ← ADR installer
    ├── 2.1.story.md              ← decompor orchestrator
    ├── 2.2.story.md              ← decompor workflow-executor
    ├── 2.3.story.md              ← interface hook
    ├── 2.4.story.md              ← hook adapter
    ├── 3.1.story.md              ← migration guide
    ├── 3.2.story.md              ← MCP presets
    └── 3.3.story.md              ← JSDoc + auto-docs
```

---

## Próximos Passos

1. **Agora:** @dev lê `docs/stories/1.1.story.md` e inicia execução
2. **Hoje:** @architect lê `docs/stories/1.4.story.md` e escreve ADR-001
3. **Esta semana:** @po valida as stories 1.1 e 1.2 pelo checklist de 10 pontos (Story Development Cycle — Fase 2)
4. **Ao final do EPIC-001:** Reavaliação do score do sistema antes de iniciar EPIC-002

---

*Plano criado por @pm (Morgan) — Brownfield Discovery Fase 10*
*AIOS Core v5.0.3 — 2026-03-23*
*Próximo passo: @dev executa Story 1.1*
