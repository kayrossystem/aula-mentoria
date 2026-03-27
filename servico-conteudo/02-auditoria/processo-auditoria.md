# Processo de Auditoria Completa — Viral Lab

> **Filosofia:** Auditoria não é só "o conteúdo é bom ou ruim".
> É entender onde o cliente está, onde o nicho está, e qual é o caminho mais curto para crescimento real.
>
> Agentes: Alan Nicolas + @analyst + avinash-kaushik + competitor-analyst + content-validator + pedro-sobral + content-chief
> Tempo estimado: 60-75 minutos
> Prazo: Dia 3-5 do onboarding

---

## ANTES DE COMEÇAR — Insumos obrigatórios

Você precisa ter em mãos antes de rodar qualquer agente:

- [ ] Briefing preenchido e validado (Fase 1 do checklist)
- [ ] Perfil Instagram do cliente acessível (@perfil)
- [ ] Nomes dos 3 concorrentes indicados no briefing
- [ ] Dados de métricas atuais do cliente (Bloco 2 do briefing)
- [ ] Arquivo `conhecimento-nicho.md` da Fase 2 (Alan Nicolas já rodou)

Se qualquer item estiver faltando → **PARE. Não inicie a auditoria.**

---

## ETAPA 1 — CONTEXTO DO NICHO E BENCHMARKS
> Agente: @analyst (Alex) + pedro-sobral
> Tempo: 15 minutos
> Por que primeiro: toda análise precisa de parâmetro. Sem benchmark do nicho, você não sabe se o cliente está mal ou se o nicho inteiro está assim.

### Acione o `/AIOX/agents/analyst`

```
Preciso de benchmarks de crescimento e engajamento para o seguinte nicho no Instagram Brasil:

Nicho: [NICHO DO CLIENTE]
Subnicho/especialização: [EX: dermatologista estética / coach de emagrecimento feminino / etc]
Tipo de audiência do cliente: [B2B / B2C / Misto]

Me forneça:

1. BENCHMARKS DE CRESCIMENTO
   - Taxa de crescimento mensal típica para um perfil bem gerenciado neste nicho
   - Quantos seguidores em 6 meses com estratégia consistente (partindo de 1k, 5k, 10k, 20k)
   - Nichos adjacentes com melhor ou pior performance no Instagram

2. BENCHMARKS DE ENGAJAMENTO
   - Taxa de engajamento média do nicho (likes + comentários + saves ÷ seguidores)
   - Save rate esperado para carrosseis educativos neste nicho
   - Taxa de visualização típica para Reels neste nicho

3. FORMATOS QUE MAIS CRESCEM NESTE NICHO
   - Qual formato gera mais alcance (novos seguidores): Reel / Carrossel / Stories
   - Qual formato gera mais conversão (DM, link, CTA): Reel / Carrossel / Stories
   - Duração ideal de Reel para este nicho
   - Frequência de publicação de quem cresce mais rápido

4. ALGORITMO + NICHO
   - Palavras-chave que o algoritmo do Instagram reconhece para este nicho
   - Hashtags estratégicas (não as mais populares — as que entregam para audiência qualificada)
   - Horários de pico de engajamento para a audiência deste nicho

5. RED FLAGS DO NICHO
   - Erros mais comuns que travam o crescimento neste nicho específico
   - O que funciona em outros nichos mas NÃO funciona neste
```

**Salve o resultado como:** `benchmarks-nicho.md`

---

### Acione o `/squads/traffic-masters/pedro-sobral`

```
Analise o seguinte contexto de crescimento orgânico no Instagram:

Nicho: [NICHO]
Perfil atual: @[PERFIL] — [N] seguidores
Meta de crescimento: [META DO CLIENTE EM 12 MESES]

Com base na sua metodologia de crescimento orgânico:

1. Qual é a estratégia de conteúdo que mais acelera seguidores neste nicho hoje?
2. Qual é a janela de oportunidade que este nicho ainda não explorou?
3. Quais são os 3 tipos de Reel que mais convertem em novos seguidores para este perfil?
4. Qual deve ser a frequência mínima de publicação para o algoritmo distribuir este perfil?
5. Qual é a estratégia de bio + CTA que maximiza a conversão de visitante em seguidor?
6. Existe alguma tática de colaboração (collab, dueto, menção) relevante para este nicho?
```

**Adicione ao arquivo:** `benchmarks-nicho.md`

---

> 🔴 **VETO CONDITION — ETAPA 1**
> Benchmarks não encontrados para o nicho → ampliar pesquisa para nicho adjacente e documentar diferença.
> Sem dados de formato mais eficaz para o nicho → não iniciar criação de conteúdo sem esta informação.

---

## ETAPA 2 — ANÁLISE PROFUNDA DE CONCORRENTES
> Agente: Alan Nicolas + competitor-analyst
> Tempo: 20 minutos
> Por que: os concorrentes são o mapa do que funciona e do que ninguém está fazendo.

### Etapa 2A — Extração de Padrões (Alan Nicolas)

Antes de rodar o competitor-analyst, acione o `/squadCreator/oalanicolas`:

```
*assess-sources

Vou analisar 3 concorrentes do nicho [NICHO].
Antes de começar, me ajude a calibrar o que vou procurar:

Concorrentes:
1. @[CONCORRENTE-1]
2. @[CONCORRENTE-2]
3. @[CONCORRENTE-3]

Para cada um, me diga:
- Este perfil é fonte OURO (tem framework próprio, crescimento consistente, copia vale a pena)?
- É fonte PRATA (bom conteúdo mas sem método claro)?
- É fonte BRONZE (popular mas sem substância para extrair)?

Para os que são OURO:
- Qual é o padrão implícito que este criador usa sem saber?
- Qual é o framework que não está explícito mas está em todo conteúdo dele?
- Qual é o hook recorrente que para o scroll?
```

---

### Etapa 2B — Inteligência Competitiva (competitor-analyst)

Acione o `/squads/conteudo/competitor-analyst`:

```
*espionar

Cliente: [NOME DO CLIENTE]
Nicho: [NICHO]

Concorrentes para análise profunda:
1. @[CONCORRENTE-1]
2. @[CONCORRENTE-2]
3. @[CONCORRENTE-3]

Para cada concorrente, preciso:

PERFORMANCE
- Top 5 posts dos últimos 90 dias (tema + formato + engajamento estimado)
- Post com maior número de saves (indica conteúdo de valor real)
- Post com maior número de comentários (indica conteúdo que gera debate)
- Reel com maior número de visualizações

PADRÕES
- Classificação de cada top post por tipo (Imperial / Polêmico / Crença / Problema / Curiosidade / História / Oferta)
- Frameworks de copy identificados (quais dos 9 frameworks aparecem mais)
- Padrões de abertura que funcionam (como começa o slide 1 ou o primeiro segundo do Reel)
- Tom de voz e posicionamento de cada concorrente em 1 frase

ESTRATÉGIA
- Proporção estimada de conteúdo: Tensão / Alinhamento / Demonstração
- Frequência de publicação
- Uso de hashtags (estratégico ou aleatório)
- CTAs mais usados

GAPS COMPETITIVOS
- O que nenhum dos 3 está fazendo neste nicho que seria uma oportunidade?
- Qual tema está sendo subexplorado?
- Qual formato está ausente?
- Qual nível de consciência (Schwartz 1-5) está sendo ignorado?

SUGESTÕES
- 10 ideias de conteúdo baseadas nos gaps identificados
- 3 formatos de Reel que nenhum deles usa mas que funcionariam
```

**Salve o resultado como:** `analise-concorrentes.md`

---

> 🔴 **VETO CONDITION — ETAPA 2**
> Menos de 3 concorrentes analisados → solicitar ao cliente antes de avançar.
> Menos de 5 gaps identificados → aprofundar análise antes de prosseguir.
> Nenhum concorrente classificado como OURO → documentar e ajustar expectativa de extração.

---

## ETAPA 3 — AUDITORIA DO PERFIL DO CLIENTE
> Agente: content-validator
> Tempo: 15 minutos
> Por que: entender o ponto de partida real — com nota, não com opinião.

### Acione o `/squads/conteudo/content-validator`

```
*auditar

Perfil: @[PERFIL DO CLIENTE]
Nicho: [NICHO]
Dados de contexto: [INCLUIR DADOS DO BLOCO 2 DO BRIEFING]

Analise os últimos 9 posts e me forneça:

SCORE GERAL DO PERFIL (0-100)
- Calcule com base em: hook (25%), estrutura (20%), CTA (20%), tom (15%), proporção (10%), nível de consciência (10%)

SCORE POR POST
Para cada um dos 9 posts:
- Hook: /10
- Estrutura: /10
- CTA: /10
- Score final: /10
- Diagnóstico em 1 linha

ANÁLISE ESTRATÉGICA
- Proporção atual de conteúdo (Tensão / Alinhamento / Demonstração) em %
- Nível de consciência predominante (Schwartz 1-5) que está sendo trabalhado
- Existe consistência de tom de voz? Sim/Não + comentário
- O perfil tem identidade visual clara? Sim/Não + comentário
- O visitante novo entende o que este perfil oferece em menos de 5 segundos? Sim/Não

PROBLEMAS CRÍTICOS
- Liste os 3 problemas que mais estão travando o crescimento deste perfil
- Para cada problema: impacto (alto/médio/baixo) + o que acontece se não resolver

COMPARAÇÃO COM BENCHMARK
Com base nos benchmarks do nicho [NICHO]:
- O engajamento atual está acima, na média ou abaixo do nicho?
- O crescimento atual está acima, na média ou abaixo do nicho?
- O que os melhores do nicho fazem que este perfil ainda não faz?

3 MELHORIAS PRIORITÁRIAS
Para cada melhoria:
- Problema exato
- Solução com exemplo concreto aplicado a este perfil
- Impacto esperado em seguidores/engajamento ao implementar
```

**Salve o resultado como:** `auditoria-perfil.md`

---

> 🔴 **VETO CONDITION — ETAPA 3**
> Score geral não calculado → refazer com os dados corretos.
> Menos de 9 posts analisados (perfil tem menos) → documentar e ajustar expectativa.
> Melhorias prioritárias genéricas ("postar mais") → refazer com prescrição específica.

---

## ETAPA 4 — ANÁLISE DE MÉTRICAS DE CRESCIMENTO
> Agente: avinash-kaushik (Data Squad)
> Tempo: 10 minutos
> Por que: crescimento de seguidores tem métricas específicas que precisam ser monitoradas — sem isso não sabemos o que otimizar.

### Acione o `/squads/data-squad/avinash-kaushik`

```
Preciso definir o sistema de métricas para acompanhar crescimento de seguidores no Instagram.

Contexto do cliente:
- Nicho: [NICHO]
- Seguidores atuais: [N]
- Meta em 12 meses: [META]
- Frequência de publicação planejada: 5x por semana
- Formatos: Carrossel (8/mês), Reels (4/mês), Stories (8/mês)
- Benchmark do nicho: [INCLUIR DADOS DA ETAPA 1]

Defina:

1. MÉTRICAS PRIMÁRIAS DE CRESCIMENTO (as que mais importam)
   - Quais 3 métricas do Instagram são as mais preditivas de crescimento de seguidores?
   - Como calcular e onde encontrar cada uma no app

2. MÉTRICAS POR FORMATO
   - Carrossel: qual métrica indica que este post vai crescer? (save rate, shares, tempo de leitura)
   - Reel: qual métrica indica que este Reel vai ser distribuído pelo algoritmo? (% de retenção, replay rate)
   - Stories: qual métrica indica saúde de audiência? (taxa de resposta, saída após cada story)

3. LINHA DE BASE DO CLIENTE
   Com os dados do briefing ([DADOS DO BLOCO 2]), calcule:
   - Alcance por seguidor atual (alcance médio ÷ seguidores)
   - Taxa de engajamento atual (total interações ÷ seguidores × 100)
   - Follow rate estimado (novos seguidores por mês como % da base atual)

4. METAS REALISTAS
   Com base no benchmark do nicho e na linha de base atual:
   - Meta de crescimento mensal para meses 1-3 (fase de plantio)
   - Meta de crescimento mensal para meses 4-6 (fase de aceleração)
   - Meta de crescimento mensal para meses 7-12 (fase de consolidação)

5. ALERTA DE PROBLEMAS
   - Qual métrica, se cair, indica que a estratégia precisa ser ajustada?
   - Qual métrica, se subir, indica que encontramos o tipo de conteúdo certo?
```

**Salve o resultado como:** `metricas-baseline.md`

---

> 🔴 **VETO CONDITION — ETAPA 4**
> Sem linha de base calculada → não iniciar entrega mensal sem este dado.
> Metas não definidas → alinhar com o cliente antes de avançar.

---

## ETAPA 5 — DIAGNÓSTICO CONSOLIDADO
> Agente: content-chief
> Tempo: 10 minutos
> Por que: alguém precisa juntar todos os dados e transformar em uma prescrição clara. Content-chief é o orquestrador estratégico.

### Acione o `/squads/conteudo/content-chief`

```
*diagnostico

Você recebeu os seguintes dados de análise do cliente [NOME]:

DADOS DO NICHO (arquivo: benchmarks-nicho.md):
[COLE O CONTEÚDO]

ANÁLISE DE CONCORRENTES (arquivo: analise-concorrentes.md):
[COLE O RESUMO DOS PRINCIPAIS PONTOS]

AUDITORIA DO PERFIL (arquivo: auditoria-perfil.md):
[COLE O SCORE E OS 3 PROBLEMAS CRÍTICOS]

MÉTRICAS BASELINE (arquivo: metricas-baseline.md):
[COLE A LINHA DE BASE E AS METAS]

Com base em tudo isso, me forneça:

1. DIAGNÓSTICO EM 3 LINHAS
   O que está travando o crescimento deste perfil em 3 frases diretas.

2. MAIOR OPORTUNIDADE IMEDIATA
   Se você pudesse fazer 1 mudança hoje que teria o maior impacto em crescimento — qual seria?

3. ESTRATÉGIA DOS PRIMEIROS 90 DIAS
   Com base nos dados:
   - Mês 1: foco em [O QUÊ] para [RESULTADO ESPERADO]
   - Mês 2: foco em [O QUÊ] para [RESULTADO ESPERADO]
   - Mês 3: foco em [O QUÊ] para [RESULTADO ESPERADO]

4. CONFIGURAÇÃO IDEAL DO MÊS 1
   Recomende:
   - Proporção de conteúdo: Tensão / Alinhamento / Demonstração
   - Mix de formatos: quantos Reels de alcance vs profundidade
   - Nível de consciência (Schwartz) que deve ser o foco
   - Tom de voz: mais provocativo, mais didático, ou mais empático neste nicho?

5. RED FLAGS PARA MONITORAR
   Quais 2-3 sinais indicam que a estratégia precisa de ajuste no Mês 1?
```

**Salve o resultado como:** `diagnostico-consolidado.md`

---

## ETAPA 6 — MONTAGEM DO RELATÓRIO FINAL
> Responsável: Você (Viral Lab)
> Tempo: 10 minutos

- [ ] Abrir template `02-auditoria/template-relatorio-auditoria.md`
- [ ] Preencher com dados de todos os arquivos gerados:
  - `benchmarks-nicho.md` → Parte 0 (contexto do nicho)
  - `analise-concorrentes.md` → Parte 1
  - `auditoria-perfil.md` → Parte 2
  - `metricas-baseline.md` → seção de métricas
  - `diagnostico-consolidado.md` → Parte 3 e prescrição
- [ ] Exportar como PDF
- [ ] Salvar: `Clientes/{Nome}/02-Auditoria/relatorio-auditoria.pdf`
- [ ] Atualizar Notion: status "Auditoria Concluída ✅"

---

## CHECKLIST FINAL DE QUALIDADE — Antes de entregar o relatório

- [ ] Score geral do perfil calculado com critérios ponderados
- [ ] Mínimo 3 concorrentes analisados com tops posts documentados
- [ ] Mínimo 5 gaps competitivos identificados
- [ ] Benchmarks do nicho definidos (crescimento esperado em 30/60/90 dias)
- [ ] Linha de base de métricas documentada
- [ ] Metas realistas definidas para 12 meses
- [ ] 3 problemas críticos identificados com impacto claro
- [ ] 3 melhorias prioritárias com exemplo concreto aplicado ao perfil
- [ ] Diagnóstico consolidado em no máximo 3 linhas
- [ ] Estratégia dos primeiros 90 dias definida
- [ ] Tom do relatório: prescritivo e direto — sem "talvez", sem "pode ser que"

---

> 🔴 **VETO CONDITION FINAL**
> Relatório sem metas numéricas → não entregar. Metas vagas geram conflito futuro.
> Melhorias genéricas que servem para qualquer nicho → reescrever com especificidade.
> Diagnóstico sem estratégia clara dos 90 dias → incompleto, refazer.
> Score não calculado → sem referência para medir evolução futura.
>
> ✅ **DEFINITION OF DONE (Pedro Valério + @po Pax):**
> Relatório PDF gerado com: score calculado + 3 concorrentes + 5+ gaps + benchmarks + metas + 3 melhorias acionáveis + diagnóstico consolidado + estratégia 90 dias.

---

## ARQUIVOS GERADOS NESTA FASE

```
Clientes/{Nome}/02-Auditoria/
├── conhecimento-nicho.md         (Alan Nicolas — Fase 2 do onboarding)
├── benchmarks-nicho.md           (analyst + pedro-sobral)
├── analise-concorrentes.md       (competitor-analyst)
├── auditoria-perfil.md           (content-validator)
├── metricas-baseline.md          (avinash-kaushik)
├── diagnostico-consolidado.md    (content-chief)
└── relatorio-auditoria.pdf       (ENTREGÁVEL FINAL)
```

---

*Viral Lab — Sistema de Gestão de Conteúdo com IA*
*Uso interno — operacional confidencial*
