# Processo de Posicionamento — Viral Lab

> **Agente orquestrador:** brand-chief
> **Agentes especializados:** donald-miller · marty-neumeier · hormozi-hooks · oren-klaff · positioning-expert · carousel-creator · stories-strategist · content-validator
> **Agentes AIOX:** @po Pax (Definition of Done)
>
> **Tempo estimado:** 3 a 4 horas de trabalho real com agentes
> **Output:** Bio Imperial (2 variações) + CLC 10 slides + 3 StoryAds + Declaração de Posicionamento
>
> ⚠️ **Este é o documento que define quem o cliente é antes de qualquer post.
> Um erro aqui contamina todos os meses seguintes. Não existe pressa nesta fase.**

---

## GATE DE ENTRADA — NÃO COMECE SEM ISSO

🔴 **VETO CONDITION DE FASE:** Antes de qualquer ação de posicionamento, confirme:

- [ ] Relatório de Auditoria concluído e score do perfil calculado
- [ ] Benchmarks do nicho levantados (Parte 0 do relatório preenchida)
- [ ] Formulário de briefing 100% preenchido (todos os 10 blocos)
- [ ] Documento de Alinhamento de Expectativas assinado pelo cliente
- [ ] Análise de concorrentes completa (mínimo 3 concorrentes)
- [ ] Tom de voz do cliente identificado e registrado

**Se qualquer item acima estiver incompleto → PARE. Volte para a fase anterior.**

> Posicionamento sem briefing completo é suposição. Suposição vira retrabalho.
> Retrabalho com cliente de R$20k vira cancelamento.

---

## ETAPA 0 — BRAND-CHIEF: LEITURA ESTRATÉGICA

> **Agente:** brand-chief
> **Tempo:** 20 minutos
> **Propósito:** antes de qualquer criação, o brand-chief lê TUDO e identifica os insumos de posicionamento ocultos no briefing e na auditoria. Não cria nada ainda — diagnostica.

### Prompt para o brand-chief

```
Você é o brand-chief. Leia os seguintes documentos do cliente [NOME]:

1. Formulário de briefing: [colar conteúdo do Bloco 3, 4, 5 e 6 do briefing]
2. Relatório de auditoria: [colar Resultado Executivo + Parte 4 + Parte 7]
3. Análise de concorrentes: [colar gaps e oportunidades identificados]

Com base nesses insumos, extraia e me entregue:

A) MATERIAL BRUTO DE POSICIONAMENTO (sem filtro — tudo que for relevante)
   - Diferencial real que o cliente tem (mesmo que ele não saiba nomear)
   - Método ou processo que só ele faz desse jeito
   - Frase que o cliente disse que parou tudo (a resposta espontânea do briefing)
   - Avatar mais qualificado (não o genérico — o que tem dinheiro e tem dor)
   - Objeção principal que bloqueia a compra

B) O QUE NÃO DEVE ENTRAR NO POSICIONAMENTO
   - O que os concorrentes já estão dizendo (evitar saturação)
   - O que o cliente quer dizer mas não diferencia
   - Promessas que não consegue provar ainda

C) HIPÓTESE DE POSICIONAMENTO (1-2 frases, raw)
   - Sua leitura inicial: quem é esse profissional para a audiência
   - Qual é o frame que devemos instalar

Não entregue a bio ainda. Entregue o diagnóstico de posicionamento.
```

**Salve o resultado como:** `posicionamento-raw.md`

🔴 **VETO CONDITION:** Se o brand-chief não conseguir identificar nenhum diferencial real, o processo para. Próximo passo: sessão de aprofundamento com o cliente (30 min de call para extrair o diferencial oculto). Não posicione um profissional genérico — o resultado vai ser conteúdo genérico.

---

## ETAPA 1 — DONALD MILLER: CLAREZA DE MENSAGEM (STORYBRAND)

> **Agente:** donald-miller
> **Tempo:** 30 minutos
> **Framework:** StoryBrand 7-Part Framework
> **Propósito:** garantir que a mensagem do cliente seja clara o suficiente para que qualquer pessoa, em 5 segundos, entenda o que ele faz e por que deve se importar.
>
> *"Se você confundir, você vai perder." — Donald Miller*

### Prompt para donald-miller

```
Você é Donald Miller e vai aplicar o framework StoryBrand para [NOME DO CLIENTE].

Use o material bruto de posicionamento abaixo:
[colar conteúdo de posicionamento-raw.md]

Preencha o BrandScript completo:

1. PERSONAGEM (Herói = o cliente do cliente)
   - Quem é o herói desta história? (avatar do cliente)
   - O que o herói quer? (desejo declarado)
   - O que impede o herói de ter o que quer?

2. PROBLEMA (O vilão da história)
   - Problema externo: o obstáculo tangível e visível
   - Problema interno: como o herói SE SENTE por causa do problema
   - Problema filosófico: por que é INJUSTO que o herói tenha esse problema

3. GUIA (A marca = o cliente da Viral Lab)
   - Empatia: como o guia mostra que entende o herói
   - Autoridade: o que prova que o guia tem a solução

4. PLANO (O método)
   - Plano de processo: os 3 passos que o herói precisa dar
   - Plano de acordo: os compromissos que reduzem o medo de contratar

5. CHAMADA PARA A AÇÃO
   - CTA direto: o que queremos que o herói faça agora
   - CTA de transição: o que oferecemos para quem não está pronto

6. FRACASSO (O que acontece se o herói não agir)
   - O custo real de não resolver o problema
   - O que o herói perde se continuar como está

7. SUCESSO (A transformação)
   - Antes: como o herói está hoje
   - Depois: como o herói fica após contratar o guia
   - A frase de 1 linha que descreve a transformação

Entregue o BrandScript completo. Na sequência, escreva:
- Uma frase de posicionamento clara (para usar como diretriz, não como bio)
- Os 3 erros de clareza que o cliente está cometendo hoje na comunicação
```

**Salve o resultado como:** `brandscript.md`

---

## ETAPA 2 — MARTY NEUMEIER: DIFERENCIAÇÃO RADICAL

> **Agente:** marty-neumeier
> **Tempo:** 20 minutos
> **Framework:** Onliness Statement + Brand Gap
> **Propósito:** identificar o que torna este profissional a única escolha óbvia — não apenas uma boa opção.
>
> *"Quando todos ziguezagueiam, zaguezigue." — Marty Neumeier*

### Prompt para marty-neumeier

```
Você é Marty Neumeier. Analise o BrandScript de [NOME DO CLIENTE]:
[colar conteúdo de brandscript.md]

E a análise de concorrentes:
[colar gaps e o que os concorrentes fazem de posicionamento-raw.md]

Sua tarefa:

1. ONLINESS STATEMENT
   Complete: "[Nome] é a única [categoria] que [diferencial único] para [avatar]
   que [contexto específico]."

   Regras do Onliness Statement:
   - "Única" deve ser literalmente verdade — não "a melhor" ou "a mais completa"
   - Se não conseguir completar com honestidade, o diferencial ainda não foi encontrado
   - Teste: algum concorrente poderia usar essa mesma frase? Se sim, refaça.

2. BRAND GAP — O que o cliente diz que é vs o que a audiência percebe
   - O que o cliente acredita que é seu diferencial
   - O que a audiência provavelmente percebe hoje (baseado nos posts da auditoria)
   - O gap entre os dois: o que precisamos corrigir no posicionamento

3. POSICIONAMENTO DE CATEGORIA
   Qual categoria este profissional deve LIDERAR — não entrar?
   (Ex: não "coach de vendas" — "arquiteto de sistemas de vendas para PMEs")

4. AS 3 RAZÕES PARA NÃO COMPRAR (e como eliminar cada uma)
   - Razão 1 de não comprar → como o posicionamento elimina esse obstáculo
   - Razão 2 de não comprar → como o posicionamento elimina esse obstáculo
   - Razão 3 de não comprar → como o posicionamento elimina esse obstáculo

Entregue: Onliness Statement + análise do Brand Gap + categoria de liderança.
```

**Salve o resultado como:** `diferenciacao.md`

🔴 **VETO CONDITION:** Se o Onliness Statement não passar no teste ("algum concorrente poderia usar essa frase?"), a etapa não avança. Refaça com o brand-chief antes de continuar.

---

## ETAPA 3 — OREN KLAFF: FRAME CONTROL

> **Agente:** oren-klaff
> **Tempo:** 20 minutos
> **Framework:** Frame Stacking (Pitch Anything)
> **Propósito:** definir o frame de autoridade que o perfil deve instalar antes de qualquer post. Frame errado = conteúdo bom mas autoridade fraca.
>
> *"Quem define o frame define a percepção. A percepção define o preço que o cliente aceita pagar." — Oren Klaff*

### Prompt para oren-klaff

```
Você é Oren Klaff e vai definir o frame de autoridade para [NOME DO CLIENTE].

Contexto:
- Onliness Statement: [colar de diferenciacao.md]
- BrandScript resumido: [colar 3-4 pontos principais de brandscript.md]
- Nicho: [NICHO]
- Concorrentes analisados: [listar os 3 concorrentes]

Defina:

1. FRAME PRINCIPAL DE AUTORIDADE
   Qual é o frame que queremos que a audiência instale ao ver o perfil pela primeira vez?
   (Ex: "este médico é a referência em joelho no Brasil" / "este mentor é quem os outros mentores consultam")

   O frame precisa ser:
   - Verdadeiro (ou construível com o histórico real do cliente)
   - Específico (não "autoridade em saúde" — autoridade em QUÊ, PARA QUEM)
   - Provocativo (causa uma reação: "quero saber mais" ou "não concordo, mas estou ouvindo")

2. FRAME STACKING — SEQUÊNCIA DE INSTALAÇÃO
   Como instalar esse frame nos primeiros 3 conteúdos publicados?
   - Conteúdo 1 (CLC): qual frame instala + como instala
   - Conteúdo 2 (primeiro Reel): qual frame reforça + como
   - Conteúdo 3 (Story): qual frame solidifica + como

3. POWER FRAME — QUEM ENQUADRA QUEM
   Como o cliente deve se comunicar para que a audiência VENHA até ele,
   não o contrário?
   - Linguagem que atrai vs linguagem que persegue
   - 3 frases que devem entrar na bio/CLC que instalam poder sem arrogância

4. ANTI-FRAMES — O QUE ESTÁ DESTRUINDO A AUTORIDADE HOJE
   Com base na auditoria, quais elementos do perfil atual estão quebrando o frame de autoridade?
   (Ex: linguagem muito acessível que parece desespero, CTA agressivo que parece falta de opção)

Entregue: frame principal + sequência de instalação + 3 frases de poder.
```

**Salve o resultado como:** `frame-autoridade.md`

---

## ETAPA 4 — HORMOZI-HOOKS: TRADUÇÃO PARA LINGUAGEM DE SCROLL

> **Agente:** hormozi-hooks
> **Tempo:** 25 minutos
> **Framework:** Value Equation + Hook Architecture
> **Propósito:** pegar tudo que foi construído (clareza + diferenciação + frame) e traduzir para linguagem que para o scroll. Posicionamento bonito que não converte é decoração.
>
> *"A melhor oferta não ganha. Quem comunica melhor ganha." — Alex Hormozi*

### Prompt para hormozi-hooks

```
Você é hormozi-hooks. Sua tarefa: traduzir o posicionamento de [NOME DO CLIENTE]
para linguagem de conteúdo que para o scroll e converte.

Inputs:
- Onliness Statement: [colar]
- Frame principal: [colar de frame-autoridade.md]
- Avatar e dor principal: [colar de brandscript.md]
- Transformação entregue: [colar o antes/depois do BrandScript]

Entregue:

1. VALUE EQUATION — quanto vale o que ele oferece na cabeça do cliente
   - Dream Outcome: qual é o resultado que o avatar sonha ter
   - Perceived Likelihood: quanto o avatar acredita que vai funcionar para ele
   - Time Delay: quanto tempo o avatar acha que vai levar
   - Effort/Sacrifice: quanto esforço o avatar imagina que vai precisar

   Para cada dimensão: como o posicionamento do cliente melhora a percepção do avatar?

2. 10 HOOKS DE POSICIONAMENTO (para usar na bio, CLC e primeiros Reels)
   Regras:
   - Cada hook deve parar o scroll em 3 segundos
   - Nenhum hook genérico ("Transformo vidas", "Especialista em saúde")
   - Cada hook deve ser específico para o nicho e para o avatar
   - Formato: curiosidade, provocação, resultado específico ou pergunta cortante

3. HOOK DE BIO (o mais forte dos 10, adaptado para até 150 caracteres)
   Deve communicar: quem, para quem, e o resultado em uma frase

4. ANTI-HOOKS — O que está afastando a audiência hoje
   Com base no briefing: quais frases ou elementos de comunicação atual estão
   comunicando o oposto do que o cliente quer?

Entregue todos os 10 hooks + hook de bio + análise de anti-hooks.
```

**Salve o resultado como:** `hooks-posicionamento.md`

---

## ETAPA 5 — POSITIONING-EXPERT: BIO IMPERIAL

> **Agente:** positioning-expert
> **Tempo:** 20 minutos
> **Propósito:** criar a bio final com todos os insumos consolidados. Não é uma bio genérica — é a síntese de 4 frameworks de posicionamento traduzidos para 150 caracteres.

### Prompt para o positioning-expert

```
*posicionar

Você vai criar a Bio Imperial de [NOME DO CLIENTE] usando os insumos abaixo:

ONLINESS STATEMENT: [colar de diferenciacao.md]
FRAME DE AUTORIDADE: [colar frame principal de frame-autoridade.md]
HOOK DE BIO (Hormozi): [colar de hooks-posicionamento.md]
BRANDSCRIPT — Transformação: [colar antes/depois de brandscript.md]
TOM DE VOZ: [colar do briefing — Bloco 6]
BIO ATUAL: [colar bio atual do cliente]

Crie:
- Variação A — Foco em autoridade e posição no nicho (até 150 caracteres)
- Variação B — Foco em transformação entregue ao cliente (até 150 caracteres)
- Headline de perfil — frase de impacto para destaque nos Stories ou Reels (até 80 caracteres)
- Nome do perfil — como o nome deve aparecer para máxima clareza de quem ele é

Para cada variação, explique em 1 linha qual frame ela instala e para qual tipo de visitante converte melhor.
```

**Salve o resultado como:** `bio-imperial.md`

---

## ETAPA 6 — CAROUSEL-CREATOR: CLC (CARROSSEL DE POSICIONAMENTO)

> **Agente:** carousel-creator
> **Tempo:** 40 minutos
> **Propósito:** o CLC é o conteúdo que o novo seguidor vê depois da bio. É o segundo segundo da primeira impressão. Precisa consolidar autoridade, apresentar o método e direcionar para ação.

### Prompt para o carousel-creator

```
*carrossel

Você vai criar o CLC — Carrossel de Posicionamento de [NOME DO CLIENTE].

Tipo de Post: Imperial (instala frame de autoridade e método)
Framework: Abertura Provocativa + Estrutura StoryBrand
Tamanho: 10 slides obrigatoriamente
Tom de voz: [colar do briefing — Bloco 6]

INSUMOS:
- BrandScript completo: [colar de brandscript.md]
- Onliness Statement: [colar de diferenciacao.md]
- Frame de autoridade: [colar de frame-autoridade.md]
- Hook mais forte: [colar hook selecionado de hooks-posicionamento.md]
- Prova social disponível: [colar do briefing — Bloco 3 ou 4]

ESTRUTURA OBRIGATÓRIA DOS 10 SLIDES:

Slide 1 — Hook (o que para o scroll)
Usar o hook mais forte. Deve fazer o avatar parar tudo.
Formato: declaração provocativa OU pergunta cortante OU dado surpreendente.

Slide 2 — Problema Real (o que mantém o avatar preso)
O problema interno — como ele SE SENTE, não apenas o que acontece.
Não use jargão. Use a linguagem exata que o avatar usaria.

Slide 3 — Por que o que ele já tentou não funcionou
Validar a tentativa passada do avatar sem diminuir. Apresentar o porquê da falha.
Isso constrói empatia e autoridade simultaneamente.

Slide 4 — A Virada (apresentar o guia e o método)
Quem é este profissional. Por que ele tem a solução. Apresentar o método com nome próprio
(se não tiver, o brand-chief criou um — usar o Onliness Statement como base).

Slide 5-8 — Os 4 Pilares do Método (1 pilar por slide)
Cada pilar: nome + 1-2 linhas de o que é + resultado que gera.
Concreto. Sem abstração. O avatar deve ver seu problema sendo resolvido.

Slide 9 — Prova Social
Resultado real de um cliente. Formato: antes → depois + contexto de tempo.
Se não tiver depoimento formal, use: "resultado típico de clientes que [ação]".

Slide 10 — CTA + Posicionamento Final
Frase que fecha o frame de autoridade + CTA direto e simples.
Não usar mais de 1 CTA. 1 instrução clara: o que o avatar deve fazer agora.

REGRAS:
- Cada slide: máximo 40 palavras
- Nenhuma palavra vaga: "incrível", "transformador", "único" sem evidência
- O avatar deve se ver em pelo menos 3 slides
- O slide 1 deve ser testado contra os 10 hooks gerados pelo hormozi — usar o mais forte
```

**Salve o resultado como:** `CLC-carrossel.md`

---

## ETAPA 7 — STORIES-STRATEGIST: 3 STORYADS

> **Agente:** stories-strategist
> **Tempo:** 25 minutos
> **Propósito:** sequências de Stories para os primeiros dias após publicar o CLC. Cada StoryAd tem um trabalho específico — tensão, prova e oferta. Proporcão 50/25/25 aplicada.

### Prompt para o stories-strategist

```
*storyad

Você vai criar 3 StoryAds de posicionamento para [NOME DO CLIENTE].

Tom de voz: [colar do briefing]
Avatar: [colar descrição do avatar do BrandScript]
Frame de autoridade instalado: [colar de frame-autoridade.md]
CTA definido: [DM / link na bio / salvar — escolher 1 por StoryAd]

StoryAd 1 — TENSÃO (Proporcão: Tensão)
Nível Schwartz: 1-2 (inconsciente ou consciente do problema)
Objetivo: fazer o avatar sentir a dor de estar onde está
5 stories que provocam identificação e terminam com pergunta aberta

StoryAd 2 — PROVA (Proporcão: Demonstração)
Nível Schwartz: 3-4 (consciente da solução/produto)
Objetivo: mostrar resultado real de cliente + instalar credibilidade
5 stories com: contexto do cliente → ação tomada → resultado → frame do método

StoryAd 3 — OFERTA (Proporcão: Demonstração + CTA)
Nível Schwartz: 4-5 (consciente do produto / pronto para agir)
Objetivo: apresentar a forma de trabalhar + direcionar para ação
5 stories com: o que você oferece → como funciona → resultado esperado → CTA direto

REGRAS:
- Cada story: máximo 2-3 frases (leitura rápida, não romance)
- Story 1 de cada sequência: hook que para o dedo de pular
- Último story de cada sequência: CTA claro e único
- Nenhum story genérico — tudo ancorando no avatar e no frame de autoridade definido
```

**Salve o resultado como:** `storyads.md`

---

## ETAPA 8 — CONTENT-VALIDATOR: VALIDAÇÃO PELO ORÁCULO

> **Agente:** content-validator `*auditar`
> **Tempo:** 15 minutos
> **Propósito:** nenhuma peça sai antes de passar pela validação. Score mínimo: 80/100.

### Prompt para o content-validator

```
*auditar

Valide as seguintes peças de posicionamento de [NOME DO CLIENTE]:

1. Bio Imperial — arquivo: bio-imperial.md
2. CLC — arquivo: CLC-carrossel.md
3. StoryAds — arquivo: storyads.md

Para cada peça, entregue:
- Score (0-100) com critérios detalhados
- Pontos fortes: o que está funcionando
- Pontos de ajuste: o que precisa corrigir antes de entregar
- Aprovado/Reprovado: sim se score ≥ 80, não se score < 80

Critérios de avaliação:
- Hook: para o scroll em 3 segundos? (25%)
- Clareza: qualquer pessoa entende o que ele faz em 5 segundos? (20%)
- Especificidade: usa linguagem do nicho/avatar ou é genérico? (20%)
- Frame: instala autoridade ou parece mais um? (20%)
- CTA: existe? É claro? É único? (15%)

Benchmark: comparar com o que os concorrentes classificados como Ouro estão entregando.
```

🔴 **VETO CONDITION:** Score < 80 em qualquer peça = peça não sai. Refaça com o agente responsável e valide novamente. Máximo de 3 tentativas por peça. Na terceira reprovação, escale para brand-chief para revisão do posicionamento base antes de recriar.

---

## ETAPA 9 — ENTREGA AO CLIENTE

> **Tempo:** 10 minutos
> **Agente:** você (analista Viral Lab)

### Checklist de montagem da entrega

- [ ] bio-imperial.md com 2 variações aprovadas (score ≥ 80)
- [ ] CLC-carrossel.md com 10 slides aprovados (score ≥ 80)
- [ ] storyads.md com 3 sequências aprovadas (score ≥ 80)
- [ ] posicionamento-raw.md salvo na pasta do cliente (insumo interno)
- [ ] brandscript.md salvo (insumo interno — não enviar ao cliente)
- [ ] diferenciacao.md salvo (insumo interno — não enviar ao cliente)

### Organização de pastas (Google Drive)

```
Clientes/[Nome do Cliente]/
  03-Posicionamento/
    ✅ Entrega ao Cliente/
      bio-imperial.pdf
      CLC-carrossel.pdf
      storyads.pdf
    📁 Insumos Internos/
      posicionamento-raw.md
      brandscript.md
      diferenciacao.md
      frame-autoridade.md
      hooks-posicionamento.md
```

### Mensagem de entrega (WhatsApp)

```
[NOME], boa notícia — seu posicionamento está pronto.

Mandei no Drive:
📌 Bio Imperial — 2 variações (escolha uma para publicar agora)
📌 CLC — seu Carrossel de Posicionamento (10 slides prontos)
📌 3 StoryAds — sequências de Stories para publicar nos próximos dias

Antes de publicar qualquer coisa: troque a bio pelo Variação A.
Depois publique o CLC. Aí começa a rodar os StoryAds.

Essa sequência instala o posicionamento antes de qualquer novo seguidor chegar.
Está com dúvida em alguma peça? Me manda aqui.
```

---

## DEFINITION OF DONE — @PO PAX

> Este processo está concluído quando TODOS os itens abaixo estiverem marcados:

- [ ] Gate de entrada verificado (todos os 6 pré-requisitos confirmados)
- [ ] posicionamento-raw.md gerado pelo brand-chief e revisado
- [ ] Diferencial real identificado (Onliness Statement passa no teste de unicidade)
- [ ] BrandScript completo com os 7 elementos preenchidos
- [ ] Frame de autoridade definido com sequência de instalação
- [ ] Mínimo 10 hooks gerados e hook de bio selecionado
- [ ] Bio Imperial com 2 variações aprovadas pelo Oráculo (score ≥ 80)
- [ ] CLC com 10 slides aprovados pelo Oráculo (score ≥ 80)
- [ ] 3 StoryAds aprovados pelo Oráculo (score ≥ 80)
- [ ] Pastas no Google Drive organizadas conforme estrutura acima
- [ ] Mensagem de entrega enviada ao cliente via WhatsApp
- [ ] Insumos internos salvos na pasta correta (não enviados ao cliente)

🔴 **VETO CONDITION FINAL:** Se o Onliness Statement não existir ou não passar no teste de unicidade, nenhuma das peças pode ser entregue. Um posicionamento sem diferenciação real gera conteúdo idêntico ao dos concorrentes — e um cliente de R$20k vai perceber isso nos primeiros 30 dias.

---

*Viral Lab — Sistema de Gestão de Conteúdo com IA*
*Documento interno — uso exclusivo da equipe Viral Lab*
