# Processo de Acompanhamento Mensal de Métricas
**Viral Lab — Módulo 06 | Métricas & Resultados**
**Agentes:** avinash-kaushik (métricas que importam) + sean-ellis (North Star + PMF) + @data-engineer Dara
**Versão:** 1.0 | Atualizado em: {data}

---

> **O que este arquivo faz:** Define quais métricas coletar, como interpretar, o que fazer com os dados e quando uma métrica é sinal de sucesso versus sinal de alerta.
>
> **Por que dessa forma:** Avinash Kaushik: *"Métricas de vaidade fazem você se sentir bem. Métricas acionáveis fazem você tomar decisões."* 90% dos relatórios de agência mostram alcance e impressões — números que não dizem nada sobre o que fazer diferente. O processo da Viral Lab mostra exatamente o que significa cada número e qual ação ele exige.
>
> **Resultado esperado:** Gestor de conta chega em qualquer reunião com diagnóstico completo, decisão clara e próximo passo definido — sem improvisar.

---

## Princípios de Medição Viral Lab

**1. North Star Metric (sean-ellis)**
Cada cliente tem uma única métrica que importa mais do que todas as outras. Ela varia por objetivo — não existe uma NSM universal. Definir antes de qualquer relatório.

**2. Métricas Acionáveis vs Métricas de Vaidade (avinash-kaushik)**

| Vaidade — Não usar como argumento principal | Acionável — Base do relatório |
|---------------------------------------------|-------------------------------|
| Alcance total | Alcance de não seguidores |
| Impressões | Taxa de salvamento por post |
| Curtidas totais | Crescimento de seguidores qualificados |
| Visualizações de Stories | Resposta / swipe-up de Stories |
| Reproduções de Reels | Tempo médio de visualização de Reel |

**3. Dados reais vs Benchmarks (hierarquia)**
- Mês 1: usar benchmarks do nicho (auditoria) — base de comparação
- Mês 2+: usar dados do mês anterior como referência — não benchmarks externos
- Mês 4+: usar evolução do próprio perfil como argumento principal

**4. Diagnóstico antes de número**
Todo número entra no relatório com interpretação. Nunca número solto.
Formato: `{número} → {o que isso significa} → {o que fazer com isso}`

---

## Gate de Entrada — Antes de Iniciar

**Verificar disponibilidade dos dados:**

- [ ] Acesso ao Instagram Insights do cliente confirmado? (ou cliente vai enviar screenshot?)
- [ ] Mês anterior completo? (mínimo 28 dias de publicação)
- [ ] Calendário do mês anterior disponível para cruzar post × resultado?
- [ ] Métricas do mês anterior registradas no Notion (para comparativo)?

**Se qualquer item estiver bloqueado:**
→ Acionar gestor de conta para solicitar acesso antes de continuar
→ VETO CONDITION: relatório sem dados reais do cliente é relatório de benchmarks — não serve

---

## Métricas por Formato

### Reels

| Métrica | O Que Mede | Meta Base (Mês 1-3) | Meta Upside (Mês 4+) |
|---------|-----------|---------------------|----------------------|
| Alcance de não seguidores | Penetração em audiência nova | >40% do alcance total | >60% do alcance total |
| Tempo médio de visualização | Hook + retenção | >50% do vídeo | >65% do vídeo |
| Taxa de salvamento | Valor percebido do conteúdo | >1% de alcance | >2% de alcance |
| Seguidores ganhos por Reel | Conversão de alcance em seguidor | >0,3% de alcance | >0,8% de alcance |

**Diagnóstico automático Reels:**
- Alcance <40% não seguidores → problema de tema ou gancho inicial — revisar com pedro-sobral no próximo mês
- Tempo médio <30% → gancho não funcionou — reescrever primeiros 3 segundos
- Taxa salvamento <0,5% → conteúdo sem utilidade percebida — revisar tipo de post

---

### Carrosseis

| Métrica | O Que Mede | Meta Base | Meta Upside |
|---------|-----------|-----------|-------------|
| Taxa de salvamento | Valor percebido / conteúdo de referência | >2% de alcance | >5% de alcance |
| Taxa de compartilhamento | Conteúdo que provoca ou conecta | >0,5% de alcance | >1,5% de alcance |
| Alcance total | Distribuição do algoritmo | Crescimento de 10% mês a mês | Crescimento de 25% mês a mês |
| Taxa de clique para perfil | Interesse em quem publicou | >0,3% de alcance | >0,8% de alcance |

**Diagnóstico automático Carrosseis:**
- Salvamento <1% → slide 1 ou slide 2 não está entregando promessa de valor
- Compartilhamento alto, salvamento baixo → conteúdo de identificação (bom para alcance, ruim para autoridade) — revisar mix de tipos
- Alcance parado → primeiro slide com visual fraco ou gancho genérico — revisar copy de abertura

---

### Stories

| Métrica | O Que Mede | Meta Base | Meta Upside |
|---------|-----------|-----------|-------------|
| Taxa de retenção por story | Sequência que prende | >60% do slide 1 ao último | >80% |
| Respostas diretas | Engajamento real, construção de relação | >0,5% de views | >1,5% de views |
| Cliques em link/swipe-up | Conversão de atenção em ação | >1% de views | >3% de views |
| Taxa de abandono | Ponto onde perde o cliente | Identificar o slide | Corrigir no próximo mês |

**Diagnóstico automático Stories:**
- Abandono no Story 1 → capa genérica ou sem gancho imediato
- Abandono no Story 3-4 → perda de ritmo ou sequência longa sem valor
- Zero respostas em 3 meses → stories sem pergunta, sem CTA de resposta, sem provocação

---

### Perfil (Métricas de Crescimento)

| Métrica | O Que Mede | Meta Base (Mensal) | Meta Upside (Mensal) |
|---------|-----------|--------------------|-----------------------|
| Novos seguidores | Crescimento absoluto | +2% da base atual | +5% da base atual |
| Taxa de conversão perfil→seguidor | Qualidade do posicionamento | >15% das visitas | >25% das visitas |
| Visitas ao perfil | Interesse gerado pelo conteúdo | Crescimento de 10% | Crescimento de 30% |
| Desinscrições | Saúde da audiência | <50% dos novos | <20% dos novos |

---

## North Star Metric por Objetivo do Cliente

Definir no onboarding. Revisar a cada trimestre se o objetivo mudou.

| Objetivo Principal | NSM Recomendada | Secundária |
|-------------------|-----------------|-----------|
| Crescer audiência | Novos seguidores qualificados / mês | Alcance de não seguidores |
| Gerar leads | DMs / semana atribuíveis ao conteúdo | Cliques em link |
| Autoridade no nicho | Taxa de salvamento de carrosseis | Compartilhamentos |
| Lançamento de produto | Alcance total dos Reels de oferta | Taxa de conversão perfil |
| Posicionamento premium | Taxa de visita ao perfil | Taxa de resposta de Stories |

**NSM do cliente [preencher no template-relatorio-resultados.md]:**
→ NSM: ___________________
→ Meta mensal: ___________________
→ Resultado deste mês: ___________________
→ Diagnóstico: ___________________

---

## Processo de Coleta de Dados

### Fontes de Dados

| Dado | Fonte | Frequência |
|------|-------|------------|
| Alcance por post | Instagram Insights → Conteúdo | Mensal (dia 7 do mês seguinte) |
| Seguidores ganhos | Instagram Insights → Visão geral | Mensal |
| Visitas ao perfil | Instagram Insights → Visão geral | Mensal |
| Tempo médio de Reel | Instagram Insights → Reel específico | Mensal |
| Taxa de salvamento | Instagram Insights → Post específico | Mensal |
| Clicks em link da bio | Instagram Insights ou Linktree | Mensal |

### Como Solicitar os Dados ao Cliente (quando não há acesso direto)

**Mensagem para o cliente — enviar dia 1 do mês seguinte:**

```
[Nome], vou montar o relatório do Mês [N].

Para deixar o relatório completo e útil para você, preciso de um print de:

1. Instagram Insights → Visão Geral → período do mês
   (mostra: seguidores, alcance, impressões, visitas ao perfil)

2. Instagram Insights → Conteúdo → top 3 posts com mais alcance

Me manda até [data — 5 dias úteis] que coloco tudo no relatório do seu painel.
```

**VETO:** Relatório sem os dados do cliente = relatório de estimativa. Informar ao cliente que o relatório será parcial se os dados não chegarem.

---

## Processo de Análise — Passo a Passo

### Etapa 1 — Organizar os Dados (30 minutos)

1. Abrir Notion do cliente → página Métricas & Resultados
2. Preencher a tabela do mês com todos os dados coletados
3. Calcular variação em relação ao mês anterior (ou benchmark do Mês 1)
4. Identificar os 3 posts de melhor performance do mês

### Etapa 2 — Diagnóstico por Formato (20 minutos)

Para cada formato (Reels, Carrosseis, Stories), aplicar o diagnóstico automático:
1. Qual métrica ficou abaixo da meta base?
2. Qual métrica ficou acima da meta base?
3. Qual é a hipótese de causa para os desvios?

**Regra do diagnóstico honesto:**
Se um mês foi fraco, dizer que foi fraco — com a causa provável. Cliente que recebe diagnóstico honesto confia mais. Cliente que recebe relatório otimista toda semana cancela quando percebe que está sendo enganado.

### Etapa 3 — North Star Metric (10 minutos)

1. Verificar NSM do cliente
2. Resultado: atingiu? ficou abaixo? acima?
3. Se abaixo: identificar qual formato ou qual semana foi o gargalo
4. Se acima: identificar o que causou e replicar no próximo mês

### Etapa 4 — Decisões para o Próximo Mês (20 minutos)

Com base no diagnóstico, definir **3 ajustes concretos** para o Mês N+1:

| Ajuste | Por quê | Impacto Esperado |
|--------|---------|------------------|
| {ajuste 1} | {dado que justifica} | {meta que resolve} |
| {ajuste 2} | {dado que justifica} | {meta que resolve} |
| {ajuste 3} | {dado que justifica} | {meta que resolve} |

**Regra dos ajustes:** Máximo 3 ajustes por mês. Mudar tudo de uma vez elimina a variável de controle — você não sabe o que funcionou.

### Etapa 5 — Relatório para o Cliente

1. Preencher `template-relatorio-resultados.md` com os dados e diagnóstico
2. Atualizar painel Notion (página Métricas & Resultados)
3. Enviar mensagem de entrega (Cenário 6 do `modelo-entrega-comunicacao.md`)

---

## Análise de Tendência Trimestral

**Executar nos meses 3, 6, 9 e 12.**

Além do relatório mensal normal, incluir:

1. **Comparativo de crescimento desde o início** (Mês 1 vs Mês atual)
2. **Evolução da NSM mês a mês** (tabela + gráfico descritivo)
3. **Top 5 posts de todos os tempos** (por métrica mais relevante para o objetivo)
4. **Padrões identificados** — que tipos de post performam melhor no perfil específico desse cliente
5. **Projeção para os próximos 3 meses** (Base e Upside — nunca número absoluto)

**Objetivo da análise trimestral:**
Mostrar a curva de crescimento — não o snapshot do mês. Cliente que vê a curva subindo renova. Cliente que só vê número mensal sem contexto fica inseguro.

---

## Sinais de Alerta nas Métricas

| Sinal | Diagnóstico | Ação |
|-------|------------|------|
| Crescimento de seguidores parado por 2 meses | Posicionamento fraco ou conteúdo sem alcance externo | Revisar hooks dos Reels com pedro-sobral + rever Onliness Statement |
| Taxa de salvamento caindo mês a mês | Conteúdo ficou genérico ou repetitivo | Revisar mix de tipos — menos Imperial, mais Crença e Curiosidade |
| Stories com abandono crescente | Sequências longas sem engajamento | Reduzir para 3 stories por sequência + adicionar pergunta no story 2 |
| DMs parando | Conteúdo sem CTA, sem provocação, sem resposta esperada | Adicionar 1 call-to-conversation por semana |
| Perfil com muitas visitas, poucos seguidores | Bio fraca ou feed sem coerência visual | Revisar bio + primeiros 9 posts do feed |

---

## Definition of Done — @po Pax

- [ ] **O que foi feito:** Coleta de dados + diagnóstico por formato + 3 ajustes para o próximo mês
- [ ] **Por que dessa forma:** Decisões baseadas em dados reais (não estimativas) + hierarquia NSM → métricas acionáveis → vaidade
- [ ] **Qual resultado deve gerar:** Gestor de conta chega em qualquer reunião preparado, cliente recebe diagnóstico honesto e percebe evolução mês a mês

**Verificação dos dados:**
- [ ] Todos os dados vieram do Instagram Insights (não estimativas)?
- [ ] NSM calculada e interpretada?
- [ ] 3 ajustes para o próximo mês definidos com justificativa de dado?
- [ ] Diagnóstico honesto — sem filtro positivo artificial?

**VETO CONDITION:** Relatório gerado sem acesso aos dados reais do cliente = relatório bloqueado. Informar ao cliente e aguardar dados antes de enviar.

---

*Viral Lab — Operação Interna Confidencial*
*Não compartilhar com clientes | Uso exclusivo do gestor de conta e equipe Viral Lab*
