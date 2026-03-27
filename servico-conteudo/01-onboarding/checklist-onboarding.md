# Checklist de Onboarding — Viral Lab

> **Regra de Pedro Valério:** Nada volta num fluxo. NUNCA.
> Cada fase só começa quando a anterior passou no gate.
> Cada veto condition é um bloqueio real — não uma sugestão.
>
> Use este checklist do momento que o contrato é assinado
> até a entrega do Mês 1. Nenhuma etapa é opcional.

---

## FASE 0 — CONTRATO ASSINADO
> Responsável: Você (Viral Lab)
> Prazo: Imediatamente após assinatura

- [ ] Contrato assinado recebido com data
- [ ] Primeiro pagamento confirmado
- [ ] Criar pasta do cliente no Google Drive: `Clientes/{Nome-Cliente}/`
- [ ] Criar painel do cliente no Notion (a partir do template)
- [ ] Adicionar cliente na planilha de controle da Viral Lab
- [ ] Enviar mensagem de boas-vindas no WhatsApp:

```
Olá [Nome]! Contrato confirmado e você já tem acesso ao seu painel. 🚀

Seu link do Notion: [LINK]

Nos próximos dias você recebe o formulário de briefing.
Preencha com calma — é a base de tudo que vamos criar juntos.

Qualquer dúvida, estou aqui. 💪
```

---

> 🔴 **VETO CONDITION — FASE 0**
> Pagamento não confirmado → NÃO criar pasta, NÃO enviar acesso, NÃO iniciar nada.
> Contrato sem assinatura → NÃO iniciar onboarding.
>
> ✅ **GATE DE SAÍDA:** Contrato assinado + pagamento confirmado + painel criado.

---

## FASE 1 — ENVIO E RECEBIMENTO DO BRIEFING
> Responsável: Você (Viral Lab) → enviar / Cliente → preencher
> Prazo: Enviado no Dia 1 / Recebido até o Dia 3

### Ações — Viral Lab

- [ ] Enviar formulário de briefing (`01-onboarding/formulario-briefing-cliente.md`) via WhatsApp e Email
- [ ] Enviar mensagem de instrução:

```
[Nome], aqui está o seu Formulário de Briefing:
[LINK ou arquivo]

São 10 blocos — leva uns 20 minutos.
Quanto mais completo, mais personalizado fica tudo.

Prazo: me manda até [DATA — 2 dias após envio]. 🎯
```

- [ ] Adicionar lembrete de follow-up para Dia 2 (se não recebeu)

### Ações — Ao receber o briefing

- [ ] Verificar se TODOS os blocos foram preenchidos
- [ ] Verificar se métricas atuais (Bloco 2) foram informadas
- [ ] Verificar se metas (Bloco 8) foram definidas
- [ ] Verificar se nicho específico (Bloco 9) foi respondido se aplicável
- [ ] Salvar briefing na pasta do cliente: `Clientes/{Nome}/briefing-cliente.pdf`
- [ ] Atualizar status no Notion: "Briefing Recebido ✅"

---

> 🔴 **VETO CONDITION — FASE 1**
> Briefing com mais de 3 campos em branco → DEVOLVER para o cliente completar antes de avançar.
> Bloco 2 (métricas) vazio → OBRIGATÓRIO pedir preenchimento. Sem linha de base, impossível medir crescimento.
> Bloco 8 (metas) vazio → OBRIGATÓRIO pedir preenchimento. Sem metas alinhadas, primeiro conflito será sobre "o que é resultado".
>
> ✅ **GATE DE SAÍDA:** Briefing completo com blocos 1, 2, 3, 4, 6 e 8 preenchidos.

---

## FASE 2 — EXTRAÇÃO DE CONHECIMENTO DO NICHO
> Responsável: Alan Nicolas + @analyst
> Prazo: Dia 2-3 (em paralelo com espera do briefing ou logo após receber)
> Tempo de trabalho: 30-45 minutos

- [ ] Abrir `/squadCreator/oalanicolas`
- [ ] Rodar `*assess-sources` com os 3 concorrentes listados no briefing
- [ ] Rodar `*find-0.8` para extrair o 0,8% de genialidade do nicho
- [ ] Rodar `*extract-implicit` para identificar padrões que os melhores do nicho fazem sem saber
- [ ] Acionar `/AIOX/agents/analyst` para compilar pesquisa do nicho
- [ ] Salvar resultado como: `Clientes/{Nome}/02-Auditoria/conhecimento-nicho.md`

---

> 🔴 **VETO CONDITION — FASE 2**
> Menos de 3 concorrentes identificados → Solicitar ao cliente antes de avançar.
> Nicho sem criadores de referência identificáveis → Ampliar busca para nichos adjacentes antes de prosseguir.
>
> ✅ **GATE DE SAÍDA:** Arquivo `conhecimento-nicho.md` salvo com: top criadores do nicho, padrões de hook, frameworks usados, e mínimo 5 gaps identificados.

---

## FASE 3 — AUDITORIA COMPLETA
> Responsável: competitor-analyst + content-validator + avinash-kaushik
> Prazo: Dia 3-5
> Tempo de trabalho: 45-60 minutos

### 3A — Análise de Concorrentes

- [ ] Abrir `/squads/conteudo/competitor-analyst`
- [ ] Rodar `*espionar` com dados dos 3 concorrentes do briefing
- [ ] Verificar se retornou: top 5 posts por concorrente + frameworks + gaps + 10 sugestões
- [ ] Salvar como: `Clientes/{Nome}/02-Auditoria/analise-concorrentes.md`

### 3B — Auditoria do Perfil

- [ ] Abrir `/squads/conteudo/content-validator`
- [ ] Rodar `*auditar` nos últimos 9 posts do cliente
- [ ] Verificar se retornou: score geral + score por post + proporção + nível de consciência + 3 melhorias
- [ ] Salvar como: `Clientes/{Nome}/02-Auditoria/auditoria-perfil.md`

### 3C — Linha de Base de Métricas

- [ ] Abrir `/squads/data-squad/avinash-kaushik`
- [ ] Rodar análise com os dados do Bloco 2 do briefing
- [ ] Definir: baseline atual + metas de crescimento para 30/60/90 dias
- [ ] Salvar como: `Clientes/{Nome}/02-Auditoria/metricas-baseline.md`

### 3D — Relatório Final

- [ ] Preencher template `02-auditoria/template-relatorio-auditoria.md` com todos os dados
- [ ] Exportar como PDF
- [ ] Salvar: `Clientes/{Nome}/02-Auditoria/relatorio-auditoria.pdf`
- [ ] Atualizar status no Notion: "Auditoria Concluída ✅"

---

> 🔴 **VETO CONDITION — FASE 3**
> Score geral do perfil não calculado → Não entregar relatório sem este dado.
> Menos de 3 concorrentes analisados → Não avançar.
> Menos de 5 gaps identificados → Rodar análise novamente com mais profundidade.
> Metas de crescimento não definidas → Não avançar para posicionamento sem linha de base.
> Relatório sem as 3 melhorias prioritárias → Retrabalhar antes de entregar.
>
> ✅ **GATE DE SAÍDA:** PDF do relatório com score calculado + 3+ concorrentes + 5+ gaps + métricas baseline + 3 melhorias acionáveis.

---

## FASE 4 — POSICIONAMENTO
> Responsável: brand-chief + positioning-expert + stories-strategist + content-validator
> Prazo: Dia 5-8
> Tempo de trabalho: 60-90 minutos

### 4A — Fundação de Marca

- [ ] Abrir `/squads/brand-squad/brand-chief`
- [ ] Rodar análise de marca com dados do briefing (Blocos 3, 4, 6)
- [ ] Abrir `/squads/brand-squad/donald-miller`
- [ ] Mapear StoryBrand: personagem, problema, guia, plano, sucesso/fracasso
- [ ] Abrir `/squads/brand-squad/marty-neumeier`
- [ ] Identificar o diferencial único do cliente no nicho

### 4B — Bio Imperial

- [ ] Abrir `/squads/conteudo/positioning-expert`
- [ ] Rodar `*posicionar` com todos os dados do briefing + fundação de marca
- [ ] Verificar se retornou: 2 variações de bio + headline de perfil
- [ ] Salvar como: `Clientes/{Nome}/03-Posicionamento/bio-imperial.md`

### 4C — CLC (Carrossel de Posicionamento)

- [ ] Rodar `*CLC` com dados do cliente + StoryBrand mapeado
- [ ] Abrir `/squads/storytelling/oren-klaff` para revisar frame control do slide 1
- [ ] Abrir `/squads/hormozi-squad/hormozi-hooks` para revisar hook do slide 1
- [ ] Verificar se o Slide 1 para a rolagem do feed em menos de 3 segundos
- [ ] Salvar como: `Clientes/{Nome}/03-Posicionamento/CLC-carrossel.md`

### 4D — StoryAds

- [ ] Abrir `/squads/conteudo/stories-strategist`
- [ ] Rodar `*storyad` para criar os 3 StoryAds
- [ ] Verificar: StoryAd 1 (tensão), StoryAd 2 (prova), StoryAd 3 (oferta com CTA)
- [ ] Salvar como: `Clientes/{Nome}/03-Posicionamento/storyads.md`

### 4E — Validação pelo Oráculo

- [ ] Abrir `/squads/conteudo/content-validator`
- [ ] Rodar `*auditar` nas 3 peças: bio + CLC + StoryAds
- [ ] Verificar score de cada peça

---

> 🔴 **VETO CONDITION — FASE 4**
> Score do CLC < 80 → Reescrever antes de entregar. Sem exceção.
> Score dos StoryAds < 80 → Reescrever antes de entregar.
> Bio sem 2 variações → Criar segunda variação antes de entregar.
> Slide 1 do CLC genérico ou sem provocação → Revisar com oren-klaff novamente.
> Tom de voz inconsistente com o briefing → Ajustar antes de entregar.
>
> ✅ **GATE DE SAÍDA:** Score ≥ 80 em todas as peças. Bio com 2 variações. CLC com hook forte no Slide 1.

---

## FASE 5 — ENTREGA DOS BÔNUS (AUDITORIA + POSICIONAMENTO)
> Responsável: Você (Viral Lab)
> Prazo: Dia 8-10 (até 10 dias após contrato assinado)

- [ ] Organizar pasta no Drive: `Clientes/{Nome}/02-Auditoria/` + `Clientes/{Nome}/03-Posicionamento/`
- [ ] Atualizar painel Notion com todas as entregas e links
- [ ] Verificar que TODOS os arquivos estão acessíveis pelo link compartilhado
- [ ] Enviar mensagem de entrega:

```
[Nome], seus bônus estão prontos! 🚀

Acesse seu painel completo aqui: [LINK NOTION]

📊 AUDITORIA: análise do seu perfil + concorrentes + oportunidades
🎯 POSICIONAMENTO: bio nova + carrossel + 3 StoryAds

Leia o relatório com calma. Tenho certeza que vai ter vários "ah-ha!"
me fala o que achou. 💪

Na semana que vem começa a produção do Mês 1 — 20 peças de conteúdo.
```

- [ ] Registrar data de entrega no controle interno
- [ ] Agendar follow-up para 48h depois (garantir que cliente recebeu e abriu)

---

> 🔴 **VETO CONDITION — FASE 5**
> Algum arquivo não está acessível no link → Corrigir permissão antes de enviar.
> Painel Notion sem atualização → Atualizar antes de enviar.
> Entrega depois do Dia 10 sem aviso prévio → Comunicar cliente com antecedência e novo prazo.
>
> ✅ **GATE DE SAÍDA:** Cliente confirmou recebimento + acesso ao Notion funcionando.

---

## FASE 6 — PLANEJAMENTO DO MÊS 1
> Responsável: Thiago Finch + strategist + pedro-sobral + content-planner
> Prazo: Dia 10-12
> Tempo de trabalho: 45-60 minutos

- [ ] Abrir `/squadCreator/thiago-finch`
- [ ] Rodar `*strategy-position` para definir objetivo do Mês 1 alinhado ao funil do cliente
- [ ] Abrir `/squads/traffic-masters/pedro-sobral` para estratégia de crescimento orgânico no Instagram
- [ ] Abrir `/squads/conteudo/strategist` para criar a campanha E1-E8 do mês
- [ ] Abrir `/squads/conteudo/content-planner` para gerar o calendário editorial
- [ ] Verificar proporção: 50% Tensão / 25% Alinhamento / 25% Demonstração
- [ ] Verificar mix: mínimo 2 Reels de 15-30s para alcance
- [ ] Salvar calendário como: `Clientes/{Nome}/Mês-01/calendario-mes01.md`

---

> 🔴 **VETO CONDITION — FASE 6**
> Calendário sem proporção 50/25/25 → Rebalancear antes de avançar.
> Sem nenhum Reel de alcance curto (15-30s) → Adicionar pelo menos 2 antes de avançar.
> Objetivo do mês não alinhado com o funil do cliente → Revisar com Finch antes de criar.
>
> ✅ **GATE DE SAÍDA:** Calendário completo com 20 peças distribuídas nas semanas + proporção correta + pelo menos 2 Reels de alcance.

---

## FASE 7 — CRIAÇÃO DO MÊS 1
> Responsável: carousel-creator + reels-creator + stories-strategist + hormozi-hooks + content-validator
> Prazo: Dia 12-22
> Tempo de trabalho: 2-3 horas

### 7A — Alimentação com conhecimento do nicho

- [ ] Abrir `/squadCreator/oalanicolas`
- [ ] Rodar `*extract-implicit` para alimentar a criação com padrões do nicho
- [ ] Ter o arquivo `conhecimento-nicho.md` aberto como referência durante toda a criação

### 7B — Criação dos 8 Carrosseis

- [ ] Abrir `/squads/conteudo/carousel-creator`
- [ ] Criar carrossel 01 (tema + tipo + framework conforme calendário)
- [ ] Criar carrossel 02
- [ ] Criar carrossel 03
- [ ] Criar carrossel 04
- [ ] Criar carrossel 05
- [ ] Criar carrossel 06
- [ ] Criar carrossel 07
- [ ] Criar carrossel 08
- [ ] Salvar cada um como: `carrossel-0[N]-[slug].md`

### 7C — Criação dos 4 Scripts de Reels

- [ ] Abrir `/squads/conteudo/reels-creator`
- [ ] Criar script-reel-01 (15-30s, foco em alcance)
- [ ] Criar script-reel-02 (15-30s, foco em alcance)
- [ ] Criar script-reel-03 (60s, autoridade/profundidade)
- [ ] Criar script-reel-04 (60s, autoridade/profundidade)
- [ ] Salvar cada um como: `script-reel-0[N]-[slug].md`

### 7D — Criação das 8 Sequências de Stories

- [ ] Abrir `/squads/conteudo/stories-strategist`
- [ ] Criar stories-01 (engajamento)
- [ ] Criar stories-02 (engajamento)
- [ ] Criar stories-03 (aquecimento)
- [ ] Criar stories-04 (aquecimento)
- [ ] Criar stories-05 (prova social)
- [ ] Criar stories-06 (prova social)
- [ ] Criar stories-07 (bastidores)
- [ ] Criar stories-08 (CTA direto)
- [ ] Salvar cada um como: `stories-0[N]-[slug].md`

### 7E — Revisão dos Hooks

- [ ] Abrir `/squads/hormozi-squad/hormozi-hooks`
- [ ] Revisar TODOS os slides 1 dos carrosseis — o hook é o que define se vai viralizar ou morrer
- [ ] Revisar TODOS os primeiros 3 segundos dos scripts de Reels
- [ ] Ajustar qualquer hook que for genérico, fraco ou não parar o scroll

### 7F — Revisão de CTAs

- [ ] Abrir `/squads/copy-squad/dan-kennedy`
- [ ] Revisar os CTAs finais de carrosseis e Reels
- [ ] Cada CTA deve ser: específico, imperativo, com benefício claro

---

> 🔴 **VETO CONDITION — FASE 7**
> Qualquer carrossel sem slide 1 forte (hook testado) → Revisar com hormozi-hooks antes de avançar.
> Script de Reel sem indicação de cena/visual → Completar antes de entregar.
> Stories sem CTA definido → Adicionar CTA em cada sequência.
> Conteúdo claramente genérico (poderia ser de qualquer pessoa do nicho) → Reescrever com dados específicos do cliente.
>
> ✅ **GATE DE SAÍDA:** 20 peças criadas, todos os hooks revisados, todos os CTAs revisados.

---

## FASE 8 — GATE DE QUALIDADE FINAL
> Responsável: content-validator + @qa Quinn + Pedro Valério
> Prazo: Dia 22-24
> Tempo de trabalho: 30-40 minutos

- [ ] Abrir `/squads/conteudo/content-validator`
- [ ] Rodar `*auditar-lote` em todos os 20 entregáveis
- [ ] Abrir `/AIOX/agents/qa`
- [ ] Rodar checklist de qualidade do lote completo
- [ ] Calcular score médio do lote
- [ ] Identificar peças com score < 80 e reescrever imediatamente
- [ ] Rodar validação novamente nas peças reescritas
- [ ] Score final aprovado: ≥ 80 de média com nenhuma peça abaixo de 70

---

> 🔴 **VETO CONDITION — FASE 8**
> Score médio < 80 → NÃO ENTREGAR. Reescrever peças abaixo da nota e revalidar.
> Qualquer peça com score < 70 → Reescrever completa antes de qualquer entrega.
> Tom de voz inconsistente identificado pelo validator → Ajustar todo o lote antes de entregar.
>
> ✅ **GATE DE SAÍDA:** Score médio ≥ 80. Nenhuma peça < 70. Tom de voz consistente em todo o lote.

---

## FASE 9 — ENTREGA DO MÊS 1
> Responsável: Você (Viral Lab) + @ux-design-expert Uma
> Prazo: Dia 24-25 (até 25 dias após contrato assinado)

- [ ] Organizar todos os arquivos na pasta: `Clientes/{Nome}/Mês-01/`
- [ ] Exportar calendário editorial como PDF
- [ ] Atualizar painel Notion: adicionar todas as peças com status "Pronto para publicar"
- [ ] Organizar no Notion: peças por semana + por formato + link para cada arquivo
- [ ] Verificar que todos os links estão funcionando
- [ ] Enviar mensagem de entrega:

```
[Nome], o Mês 1 está pronto! 🎨

Acesse seu painel: [LINK NOTION]

✅ 8 Carrosseis prontos no Canva
✅ 4 Scripts de Reels com orientações de gravação
✅ 8 Sequências de Stories
✅ Calendário editorial com datas e horários

Cada peça já está organizada por semana no seu painel.
O calendário diz exatamente o que publicar e quando.

Qualquer dúvida sobre como usar, me chama. 💪🔥
```

- [ ] Agendar check de meio de mês (Dia 15 do mês seguinte)
- [ ] Registrar data de entrega no controle interno

---

> 🔴 **VETO CONDITION — FASE 9**
> Algum arquivo não acessível → Corrigir antes de enviar.
> Notion sem organização por semana → Organizar antes de enviar.
> Entrega após Dia 25 sem aviso → Comunicar com 48h de antecedência.
>
> ✅ **GATE DE SAÍDA FINAL DO ONBOARDING:**
> Cliente recebeu e confirmou acesso.
> Painel Notion atualizado e organizado.
> Todas as 20 peças aprovadas com score ≥ 80.
> Data de entrega dentro do prazo contratado.

---

## RESUMO DE TEMPO — Do Contrato ao Mês 1 Entregue

| Fase | Prazo | Tempo de trabalho |
|------|-------|------------------|
| Fase 0 — Contrato | Dia 0 | 15 min |
| Fase 1 — Briefing | Dia 1-3 | 10 min (enviar) |
| Fase 2 — Extração nicho | Dia 2-3 | 45 min |
| Fase 3 — Auditoria | Dia 3-5 | 60 min |
| Fase 4 — Posicionamento | Dia 5-8 | 90 min |
| Fase 5 — Entrega bônus | Dia 8-10 | 20 min |
| Fase 6 — Planejamento Mês 1 | Dia 10-12 | 60 min |
| Fase 7 — Criação Mês 1 | Dia 12-22 | 3h |
| Fase 8 — Gate de qualidade | Dia 22-24 | 40 min |
| Fase 9 — Entrega Mês 1 | Dia 24-25 | 20 min |
| **TOTAL** | **25 dias** | **~7-8h de trabalho** |

> Com os agentes rodando, as 7-8h de trabalho real ficam em torno de 3-4h de execução ativa.
> O restante é tempo de espera entre fases (cliente preencher briefing, etc.)

---

*Viral Lab — Sistema de Gestão de Conteúdo com IA*
*Uso interno — operacional confidencial*
