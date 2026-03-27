# Processo de Criação Mensal — Viral Lab

> **Agente orquestrador:** content-chief
> **Agentes especializados:** pedro-sobral · strategist · carousel-creator · reels-creator · stories-strategist · content-planner · content-validator
> **Agentes AIOX:** @po Pax (Definition of Done)
>
> **O que é entregue:** 8 carrosseis + 4 scripts de Reels + 8 sequências de Stories + 1 calendário editorial = **21 peças por mês**
> **Tempo estimado:** 4 a 5 horas de trabalho real com agentes
> **Frequência:** todo mês, entre os dias 20 e 25 do mês anterior (entrega até o dia 1 do mês de referência)
>
> ⚠️ **Este é o módulo que o cliente vê e paga todo mês.**
> Cada peça precisa responder 3 perguntas que o cliente vai fazer:
> *O que foi feito? Por que foi feito dessa forma? Qual resultado isso deve gerar?*
> Se uma peça não responde as três — não está pronta.

---

## GATE DE ENTRADA — NÃO COMECE SEM ISSO

🔴 **VETO CONDITION DE FASE:** Confirme todos os itens antes de qualquer criação:

**Para o Mês 1:**
- [ ] Bio Imperial publicada no perfil do cliente
- [ ] CLC publicado e fixado no topo do perfil
- [ ] Briefing do cliente 100% preenchido (todos os 10 blocos)
- [ ] Relatório de auditoria concluído com benchmarks do nicho
- [ ] Posicionamento aprovado (Onliness Statement definido)
- [ ] Tom de voz documentado no briefing (Bloco 6)

**Para Mês 2 em diante (adicional):**
- [ ] Métricas do mês anterior coletadas e registradas
- [ ] Top 3 posts do mês anterior identificados (formato + tema + alcance)
- [ ] Relatório de Resultados enviado ao cliente
- [ ] Feedback do cliente sobre as peças coletado

**Se qualquer item obrigatório estiver incompleto → PARE. Volte para a fase anterior.**

> Criar conteúdo sem saber o que funcionou no mês anterior é jogar dinheiro fora. Criar sem posicionamento instalado é construir em areia.

---

## ETAPA 0 — LOOP DE DADOS: O QUE O MÊS ANTERIOR ENSINOU

> **Agente:** content-chief
> **O que é feito:** análise dos dados do mês anterior para calibrar o mês seguinte
> **Por que dessa forma:** conteúdo sem dado é suposição. Dado sem interpretação é número. Aqui convertemos dado em decisão estratégica.
> **Resultado esperado:** cada mês melhora o anterior — o sistema fica mais preciso com o tempo
>
> *Para o Mês 1: substituir dados reais pelos benchmarks do nicho levantados na auditoria.*

### Para Mês 1 — Linha de Base dos Benchmarks

```
Acione o content-chief com:

Cliente: [NOME DO CLIENTE]
Mês de referência: Mês 1 (sem dados anteriores — usar benchmarks da auditoria)

Insumos disponíveis:
- Benchmarks do nicho: [colar da Parte 0 do Relatório de Auditoria]
- Score do perfil na auditoria: [X]/100
- Formato com melhor histórico: [colar da Parte 3 da auditoria]
- Gaps identificados nos concorrentes: [colar da seção 2.4 da auditoria]
- Estratégia 90 dias definida: [colar Parte 7 da auditoria]

Com base nesses insumos:
1. Qual é o foco estratégico do Mês 1? (o que estamos construindo — autoridade, alcance, ou conversão)
2. Qual formato deve ter maior volume? (baseado nos benchmarks do nicho)
3. Quais temas são prioritários? (baseado nos gaps dos concorrentes)
4. Qual a proporção ideal Tensão/Alinhamento/Demo para este mês? (pode variar da regra geral 50/25/25 dependendo do momento)
```

### Para Mês 2 em Diante — Loop de Dados Reais

```
Acione o content-chief com:

Cliente: [NOME DO CLIENTE]
Mês analisado: [MÊS ANTERIOR]
Mês a planejar: [MÊS ATUAL]

DADOS DO MÊS ANTERIOR:
Top 3 posts por alcance:
1. [formato] · [tema] · alcance: [X] · [X]% não seguidores
2. [formato] · [tema] · alcance: [X] · [X]% não seguidores
3. [formato] · [tema] · alcance: [X] · [X]% não seguidores

Top 3 posts por engajamento (salvamentos + comentários):
1. [formato] · [tema] · [X] salvamentos · [X] comentários
2. [formato] · [tema] · [X] salvamentos · [X] comentários
3. [formato] · [tema] · [X] salvamentos · [X] comentários

Crescimento de seguidores no mês: +[X] ([X]%)
Leads gerados pelo conteúdo: [X]
Formato que mais cresceu: [formato]
Formato que menos performou: [formato]

Com base nesses dados:
1. O que dobrar no próximo mês? (o que funcionou acima do esperado)
2. O que reduzir ou mudar? (o que ficou abaixo dos benchmarks)
3. Quais temas novos testar? (baseado nos gaps e no que concorrentes ainda não exploram)
4. Ajuste na proporção Tensão/Alinhamento/Demo?
```

**Salve a decisão estratégica como:** `estrategia-mes[N].md`

---

## ETAPA 1 — ESTRATÉGIA DO MÊS: O NORTE ANTES DE CRIAR

> **Agente:** content-chief + pedro-sobral
> **O que é feito:** definição da estratégia completa do mês — tema central, mix de formatos, foco de crescimento e proporcão
> **Por que dessa forma:** sem estratégia definida antes de criar, os 21 conteúdos viram peças soltas sem pressão cumulativa. Com estratégia, o mês inteiro constrói uma narrativa
> **Resultado esperado:** coerência entre carrosseis, Reels e Stories — cada formato faz um trabalho diferente, mas todos apontam para o mesmo objetivo do mês

### Prompt para o content-chief

```
*diagnostico-mensal

Cliente: [NOME DO CLIENTE]
Nicho: [NICHO ESPECÍFICO]
Mês: [MÊS/ANO]
Decisão estratégica do mês: [colar de estrategia-mes[N].md]
Onliness Statement: [colar]
Tom de voz: [colar do briefing]

Datas especiais no mês: [feriados, sazonalidades, datas do nicho — ex: semana do atleta, dia do médico]
Lançamento ou campanha especial: [SIM com descrição / NÃO]

Entregue a ESTRATÉGIA DO MÊS completa:

1. TEMA CENTRAL DO MÊS (1 frase)
   O eixo temático que unifica os 21 conteúdos.
   Ex: "Agosto = mês de quebrar a crença de que joelho ruim é para sempre."

2. TRABALHO DE CADA FORMATO
   - Reels (4 peças): qual é o trabalho deles esse mês?
     (Crescimento = atrair novos seguidores não familiarizados com o método)
   - Carrosseis (8 peças): qual é o trabalho deles?
     (Autoridade + engajamento da base existente)
   - Stories (8 sequências): qual é o trabalho delas?
     (Retenção + conversão de quem já segue)

3. PROPORCÃO DO MÊS
   Tensão: [X]% · Alinhamento: [X]% · Demonstração: [X]%
   Justificativa: [por que esse mês tem essa proporção específica]

4. 4 TEMAS DE REELS (crescimento — novos públicos)
   Para cada tema: nome + nível Schwartz alvo + hook de abertura sugerido

5. 8 TEMAS DE CARROSSEIS (autoridade + engajamento)
   Para cada tema: nome + tipo de post (Imperial/Polêmico/Crença/Problema/Curiosidade/História/Oferta) + framework de copy + nível Schwartz

6. 8 TEMAS DE STORIES (retenção + conversão)
   Para cada sequência: objetivo (Engajamento/Aquecimento/Conversão) + CTA

7. DISTRIBUIÇÃO DA SEMANA
   Como distribuir os formatos ao longo da semana?
   (Ex: Reel na terça, Carrossel na quarta, Stories na quinta, etc.)
```

### Validação da Estratégia (pedro-sobral)

```
Acione o pedro-sobral com:

Estratégia do mês definida pelo content-chief: [colar resultado acima]
Nicho: [NICHO]
Dados do perfil: seguidores [X], alcance médio [X], % não seguidores atual [X]%

Revise a estratégia dos 4 Reels com foco em crescimento orgânico:
1. Os temas de Reel têm potencial de alcançar não seguidores? (Sim/Não para cada um)
2. A duração recomendada para cada Reel? (7s / 15s / 30s / 60s — baseado no nicho)
3. O hook de abertura de cada Reel funciona nos primeiros 3 segundos?
4. Alguma mudança necessária antes de executar?

Se algum tema de Reel não tiver potencial de alcance — substitua por tema com maior potencial de distribuição para não seguidores.
```

**Salve como:** `estrategia-mes[N]-validada.md`

🔴 **VETO CONDITION:** Se os 4 temas de Reel não tiverem aprovação de pedro-sobral para alcance de não seguidores — refaça antes de criar qualquer conteúdo. Reels que não alcançam novos públicos são conteúdo de retenção, não de crescimento. Crescimento não acontece.

---

## ETAPA 2 — CALENDÁRIO EDITORIAL: A ORDEM QUE CONSTRÓI PRESSÃO

> **Agente:** content-planner
> **O que é feito:** distribuição das 21 peças ao longo do mês com datas, horários e sequência estratégica
> **Por que dessa forma:** a ordem de publicação não é aleatória. Carrossel de tensão antes de oferta. Reel de alcance antes de carrossel de autoridade. Stories de engajamento nos dias de menor publicação. A sequência certa cria pressão crescente no avatar
> **Resultado esperado:** o avatar que acompanha o perfil durante o mês completo sente uma narrativa — não peças soltas

### Prompt para o content-planner

```
*planejar

Cliente: [NOME DO CLIENTE]
Mês: [MÊS/ANO]
Estratégia validada: [colar de estrategia-mes[N]-validada.md]

REGRAS DE DISTRIBUIÇÃO:
- Frequência mínima: 5 publicações por semana (feed + stories)
- Nunca mais de 3 dias sem post no feed
- Reels: preferencialmente terça ou quarta (pico de alcance na maioria dos nichos)
- Carrosseis de autoridade: quarta ou quinta
- Carrosseis de oferta: nunca antes do décimo dia do mês
- Stories: mínimo 3 vezes por semana
- Primeiro post do mês: sempre um Reel (estabelece alcance para o algoritmo)
- Último post do mês: sempre um carrossel de autoridade ou resultado (fecha com imagem forte)

DATAS DO MÊS: [listar os dias úteis do mês — ex: 2, 3, 4, 7, 8, 9, 10...]
DATAS ESPECIAIS: [feriados, sazonalidades identificadas]
HORÁRIO IDEAL DO CLIENTE: [baseado nas métricas do perfil — ex: 19h-21h]

Entregue o CALENDÁRIO COMPLETO em formato de tabela:
- Coluna 1: Data
- Coluna 2: Dia da semana
- Coluna 3: Formato (Reel / Carrossel / Stories)
- Coluna 4: Tema específico (da estratégia validada)
- Coluna 5: Tipo (Imperial / Tensão / Alinhamento / etc.)
- Coluna 6: Horário de publicação
- Coluna 7: CTA da peça
```

**Salve como:** `calendario-mes[N]-draft.md`
*(Draft porque ainda não tem o conteúdo criado — será completado após a criação)*

---

## ETAPA 3 — 4 SCRIPTS DE REELS: A PEÇA DE CRESCIMENTO DO MÊS

> **Agente:** reels-creator (com validação de pedro-sobral)
> **O que é feito:** 4 roteiros completos de Reels com hook, corpo, CTA e briefing de gravação
> **Por que dessa forma:** Reels são a única peça que o Instagram distribui ativamente para pessoas que ainda não seguem o perfil. São a alavanca de crescimento de seguidores. Sem Reels bons, sem crescimento de base nova
> **Resultado esperado:** cada Reel deve alcançar no mínimo 40% de contas não seguidoras. Abaixo disso, o hook precisa ser reescrito antes do próximo mês

### Por que 7-30 segundos é a faixa de ouro

Reels curtos têm taxa de retenção maior. O algoritmo do Instagram mede se o usuário assistiu até o final — quanto maior a taxa de conclusão, mais o algoritmo distribui. Um Reel de 15s com 80% de conclusão supera um Reel de 60s com 30% de conclusão em distribuição.

**Exceção:** Reels educativos profundos (médicos, jurídico, contabilidade) podem ir a 60s se o conteúdo justificar — mas o hook precisa funcionar nos primeiros 3s independente da duração.

### Prompt para o reels-creator (executar 4 vezes — 1 por Reel)

```
*roteiro

Cliente: [NOME DO CLIENTE]
Nicho: [NICHO ESPECÍFICO]
Reel nº: [1, 2, 3 ou 4]
Tema: [colar tema específico da estratégia validada]
Nível Schwartz alvo: [1-5]
Duração alvo: [7s / 15s / 30s / 60s — conforme validação pedro-sobral]
Tom de voz: [colar do briefing]
Avatar: [colar descrição do avatar — Bloco 3 do briefing]
Hook sugerido na estratégia: [colar]

ONLINESS STATEMENT (para manter o frame): [colar]

Entregue o roteiro COMPLETO com:

HOOK (primeiros 3 segundos — o que faz parar o scroll)
[texto exato falado OU legenda exata OU ação exata]
Regra: o hook precisa funcionar mesmo sem som (60% dos Reels são vistos sem som)

CORPO (o desenvolvimento — o que entrega valor antes do CTA)
[texto dividido em beats — cada beat é uma frase ou ação]
Regra: sem pausa desnecessária, sem introdução longa, vai direto ao ponto

CTA FINAL (últimos 2-3 segundos)
[texto exato — 1 instrução única]
Regra: nunca mais de 1 CTA. "Salva + comenta + segue" não é CTA, é ruído.

BRIEFING DE GRAVAÇÃO
Cenário: [onde gravar — clínica, consultório, ar livre, em movimento]
Enquadramento: [rosto + busto / corpo inteiro / só legenda / câmera frontal / câmera selfie]
Legenda na tela: [quais frases devem aparecer em texto sobreposto]
Recursos visuais: [música? sticker? B-roll? texto animado?]
Outfit/aparência: [casual / profissional / jaleco / etc.]
Tom de entrega: [direto para câmera / como se explicasse para 1 pessoa / narrado]
```

**Salve cada resultado como:** `reel-0[N]-[tema-slug].md`

### Checklist de qualidade por Reel (pedro-sobral)

Antes de finalizar cada script, verificar:
- [ ] Hook funciona sem som (legenda ou ação visual nos primeiros 3s)?
- [ ] Duração estimada está dentro da faixa aprovada?
- [ ] O tema tem potencial de ressoar com não seguidores do nicho?
- [ ] Existe 1 CTA único e claro?
- [ ] O briefing de gravação é específico o suficiente para o cliente executar sem precisar perguntar?

🔴 **VETO CONDITION:** Script de Reel sem briefing de gravação completo não é entregue. O cliente não sabe gravar — ele precisa de instrução precisa. Reel com instrução vaga = cliente não grava = conteúdo que não existe.

---

## ETAPA 4 — 8 CARROSSEIS: AUTORIDADE E ENGAJAMENTO DA BASE

> **Agente:** carousel-creator
> **O que é feito:** 8 carrosseis completos com texto de todos os slides + legenda + hashtags
> **Por que dessa forma:** carrosseis são salvos e compartilhados — geram engajamento qualificado e aumentam o tempo que o post fica ativo no algoritmo. São a peça de autoridade e retenção da base existente
> **Resultado esperado:** meta de salvamentos por carrossel = 1% a 3% dos seguidores (ex: 5k seguidores → meta de 50-150 salvamentos por carrossel de autoridade)

### Mix obrigatório dos 8 carrosseis

| Carrossel | Tipo | Proporcão | Objetivo |
|-----------|------|-----------|---------|
| 1 | Imperial | Tensão | Instalar frame de autoridade |
| 2 | Polêmico | Tensão | Gerar debate e alcance orgânico |
| 3 | Crença | Tensão | Quebrar crença limitante do avatar |
| 4 | Problema | Tensão | Identificação — o avatar se reconhece |
| 5 | História | Alinhamento | Humanizar + conectar emocionalmente |
| 6 | Curiosidade | Tensão/Alinhamento | Abrir loop — avatar salva para rever |
| 7 | Resultado | Demonstração | Prova social — caso real ou resultado típico |
| 8 | Oferta | Demonstração | Apresentar o serviço com CTA direto |

> **Regra do Carrossel 8 (Oferta):** nunca publicar antes do dia 15 do mês. O avatar precisa ser aquecido pelos 7 carrosseis anteriores antes de receber uma oferta direta.

### Prompt para o carousel-creator (executar 8 vezes)

```
*carrossel

Cliente: [NOME DO CLIENTE]
Nicho: [NICHO ESPECÍFICO]
Carrossel nº: [1-8]
Tipo de post: [conforme mix acima — ex: Imperial]
Tema específico: [colar tema da estratégia validada]
Framework de copy: [conforme estratégia — ex: Abertura Curiosa]
Nível Schwartz alvo: [1-5]
Tamanho: [5 slides (temas simples) ou 10 slides (temas densos)]
Tom de voz: [colar do briefing]
Avatar: [colar do briefing — Bloco 3]
Onliness Statement: [colar — para manter o frame em todos os slides]
Crença a quebrar (se Crença/Polêmico): [colar da auditoria]
Prova social disponível (se Resultado/Oferta): [colar do briefing ou resultado de cliente]
CTA: [DM / salvar / link / comentar + o que exatamente — nunca mais de 1]

Dados para ancoragem no nicho:
Benchmarks: [colar dado relevante da auditoria — ex: "81% dos atletas amadores que param por lesão não voltam ao esporte em 1 ano"]

ENTREGUE:
- Slide 1: Hook (primeiros 2 segundos de scroll — máximo 15 palavras)
- Slides 2 a [N-1]: Desenvolvimento (máximo 40 palavras por slide)
- Slide final: CTA + frame de autoridade (1 instrução, 1 frase de fechamento)
- Legenda: primeira linha igual ao hook do Slide 1 + corpo + hashtags específicas do nicho
- Hashtags: 5-8 hashtags específicas (não genéricas)
```

**Salve cada resultado como:** `carrossel-0[N]-[tipo]-[tema-slug].md`

---

## ETAPA 5 — 8 SEQUÊNCIAS DE STORIES: RETENÇÃO E CONVERSÃO

> **Agente:** stories-strategist
> **O que é feito:** 8 sequências de 5 Stories cada — combinando engajamento, aquecimento e conversão
> **Por que dessa forma:** Stories são vistas apenas por quem já segue. Não crescem base nova, mas retêm quem já está lá e convertem quem está aquecido. São o canal de conversão mais eficiente depois do Reel de alcance
> **Resultado esperado:** taxa de retenção de Stories (quem assiste até o último) estável ou crescente mês a mês. DMs provenientes das sequências de conversão registrados e contabilizados como leads

### Mix obrigatório das 8 sequências

| Sequência | Objetivo | Proporcão | Quando publicar |
|-----------|---------|-----------|----------------|
| 1 | Engajamento (enquete / caixa de pergunta) | Alinhamento | Semana 1 |
| 2 | Bastidores / Processo | Alinhamento | Semana 1 |
| 3 | Tensão (dor do avatar) | Tensão | Semana 2 |
| 4 | Prova social (caso de cliente) | Demonstração | Semana 2 |
| 5 | Aquecimento (continua o tema do Reel da semana) | Tensão | Semana 3 |
| 6 | Engajamento (reação a comentários ou DMs recebidos) | Alinhamento | Semana 3 |
| 7 | Conversão (apresentar o serviço) | Demonstração | Semana 4 |
| 8 | CTA direto (fechar o mês com oferta ou agendamento) | Demonstração | Semana 4 |

> **Regra das sequências 7 e 8 (Conversão e CTA):** só publicar se o mês tiver gerado pelo menos 1 DM de interesse espontâneo. Se o avatar não foi aquecido o suficiente, substituir por 2 Stories de engajamento e adiar a conversão para a semana 1 do mês seguinte.

### Prompt para o stories-strategist (executar 8 vezes)

```
*sequencia

Cliente: [NOME DO CLIENTE]
Sequência nº: [1-8]
Objetivo: [conforme mix acima — ex: Prova social]
Nível Schwartz alvo: [1-5 — conforme o objetivo da sequência]
Tom de voz: [colar do briefing]
Avatar: [colar do briefing]
CTA desta sequência: [curtir / responder / DM com palavra-chave / link / nenhum]

Contexto específico:
- Tema central do mês: [colar]
- O que foi publicado antes desta sequência: [ex: "o carrossel de Crença foi no dia anterior"]
- Dado ou provocação para ancorar: [ex: "80% dos coaches cobram barato por medo"]

Entregue 5 Stories completas:
- Story 1: Hook que para o dedo de pular (pergunta, afirmação provocativa ou dado)
- Story 2-4: Desenvolvimento (1 ideia por story, máximo 3 frases cada)
- Story 5: CTA ou encerramento com gancho para o próximo conteúdo

Para stories interativas (Sequências 1 e 6):
- Especificar qual recurso: enquete (2 opções) / caixa de pergunta / quiz / controle deslizante
- Incluir as 2 opções da enquete ou o texto da caixa de pergunta

Para stories de prova social (Sequência 4):
- Se tiver caso real: incluir contexto + resultado (autorização confirmada)
- Se não tiver: usar resultado típico anônimo (nunca inventar)
```

**Salve cada resultado como:** `stories-0[N]-[objetivo-slug].md`

---

## ETAPA 6 — VALIDAÇÃO COMPLETA PELO ORÁCULO

> **Agente:** content-validator `*auditar-lote`
> **O que é feito:** validação de todas as 21 peças antes da entrega
> **Por que dessa forma:** uma peça abaixo do padrão contamina a percepção do cliente sobre a qualidade total da entrega. O Oráculo é o filtro que garante que nada sai abaixo de 80
> **Resultado esperado:** score médio do lote ≥ 80. Peças abaixo: reescritas antes da entrega

### Prompt para o content-validator

```
*auditar-lote

Cliente: [NOME DO CLIENTE]
Mês: [MÊS/ANO]
Benchmark do nicho: [score médio dos concorrentes Ouro identificados na auditoria]

REELS para validação:
- reel-01-[tema-slug].md
- reel-02-[tema-slug].md
- reel-03-[tema-slug].md
- reel-04-[tema-slug].md

CARROSSEIS para validação:
- carrossel-01 a carrossel-08

STORIES para validação:
- stories-01 a stories-08

Para cada peça:
- Score (0-100)
- Status: APROVADO (≥80) / REPROVADO (<80)
- Se reprovado: diagnóstico em 2 linhas + o que corrigir
- Comparação com benchmark: acima / na média / abaixo dos concorrentes Ouro

Ao final:
- Score médio por formato (Reels / Carrosseis / Stories)
- Score médio geral do lote
- Top 3 peças (as mais fortes do mês)
- Bottom 3 peças (as que precisam de atenção)
- 1 padrão positivo do mês (o que está funcionando bem na criação)
- 1 padrão negativo do mês (o que precisa melhorar no próximo)
```

**Critério de entrega:**
- Score médio geral ≥ 80 → lote aprovado
- Peças individuais com score < 80 → reescrever antes de incluir no lote
- Score médio < 75 → revisar estratégia do mês antes de reescrever as peças

🔴 **VETO CONDITION:** Nenhuma peça com score < 80 sai para o cliente. Sem exceção. Nem quando o prazo apertar. Entregar conteúdo ruim é pior do que entregar atrasado — e um cliente de R$20k percebe a diferença.

---

## ETAPA 7 — CALENDÁRIO FINAL E ENTREGA

> **Agente:** content-planner + você (analista Viral Lab)
> **O que é feito:** completar o calendário com as peças aprovadas e preparar o pacote de entrega
> **Por que dessa forma:** o cliente não recebe um dump de arquivos. Recebe um sistema organizado que ele consegue executar sem precisar perguntar nada
> **Resultado esperado:** cliente publica 100% das peças no prazo, na ordem certa, nos horários certos

### Completar o calendário com os arquivos finais

Volte ao `calendario-mes[N]-draft.md` e adicione:
- Nome do arquivo correspondente a cada data
- Score do Oráculo de cada peça
- Briefing de gravação para cada Reel (link para o arquivo)
- Horário exato confirmado por plataforma (Instagram Insights)

**Salve como:** `calendario-mes[N]-final.md`

### Organização no Google Drive

```
Clientes/[Nome do Cliente]/
  Mês-0[N]-[Mês-Ano]/
    📅 Calendário Editorial (PDF)
    📁 Reels/
      reel-01-[tema]-roteiro.pdf    ← o cliente imprime e usa na gravação
      reel-02-[tema]-roteiro.pdf
      reel-03-[tema]-roteiro.pdf
      reel-04-[tema]-roteiro.pdf
    📁 Carrosseis/
      carrossel-01-[tipo]-[tema].pdf   ← texto pronto para formatar no Canva
      ... (carrosseis 02 a 08)
    📁 Stories/
      stories-01-[objetivo].pdf
      ... (stories 02 a 08)
    📁 Interno Viral Lab (não compartilhar)/
      estrategia-mes[N]-validada.md
      scores-oraculo-mes[N].md
```

### Mensagem de entrega (WhatsApp)

```
[NOME], seu Mês [N] está pronto.

Mandei no Drive:
📅 Calendário editorial com as datas e horários de cada peça
🎬 4 roteiros de Reels prontos para gravar (com instruções de gravação)
📊 8 carrosseis com texto completo para formatar no Canva
📱 8 sequências de Stories prontas para publicar

O primeiro post do mês é o [Reel nº 1 — tema], no dia [data], às [horário].

Dúvida no roteiro de algum Reel ou na formatação de algum carrossel?
Me manda aqui antes de publicar — mais rápido ajustar antes do que refazer depois.
```

---

## DEFINITION OF DONE — @PO PAX

> Lote mensal aprovado para entrega quando TODOS os itens abaixo estiverem marcados:

**Estratégia e planejamento:**
- [ ] Loop de dados executado (Mês 1: benchmarks / Mês 2+: dados reais)
- [ ] Estratégia do mês definida e validada por pedro-sobral
- [ ] Calendário draft criado com distribuição estratégica

**Conteúdo criado:**
- [ ] 4 scripts de Reels completos (roteiro + briefing de gravação)
- [ ] 8 carrosseis completos (todos os slides + legenda + hashtags)
- [ ] 8 sequências de Stories completas (5 stories cada com instrução de recursos)

**Validação:**
- [ ] Todas as 20 peças validadas pelo Oráculo (score individual ≥ 80)
- [ ] Score médio do lote ≥ 80
- [ ] Proporção 50/25/25 verificada no calendário final
- [ ] Carrossel de Oferta não publicado antes do dia 15

**Entrega:**
- [ ] Calendário final completo com nome dos arquivos e horários confirmados
- [ ] Google Drive organizado conforme estrutura acima
- [ ] Roteiros de Reels exportados como PDF (o cliente precisa imprimir)
- [ ] Mensagem de entrega enviada via WhatsApp
- [ ] Scores do Oráculo registrados na pasta interna

**Regra do Módulo 04 — verificação final:**
- [ ] Cada Reel responde: o que foi gravado / por que esse tema / que crescimento deve gerar
- [ ] Cada carrossel responde: o que foi criado / por que esse tipo / que engajamento deve gerar
- [ ] Cada sequência de Stories responde: o que foi criado / por que essa semana / que conversão deve gerar

🔴 **VETO CONDITION FINAL:** Entrega sem calendário final preenchido = entrega sem sistema. O cliente recebe arquivos sem saber o que publicar quando. Isso gera uma de duas coisas: cliente não publica (não tem resultado) ou cliente publica na ordem errada (resultado abaixo do esperado). Em ambos os casos: cancelamento em 90 dias.

---

*Viral Lab — Sistema de Gestão de Conteúdo com IA*
*Documento interno — uso exclusivo da equipe Viral Lab*
