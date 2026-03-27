# Experiência do Cliente — Painel Notion

> **Agentes:** @ux-design-expert Uma · hormozi-retention · nick-mehta
>
> **O que é feito:** criação e manutenção do workspace Notion do cliente — o painel onde ele acompanha tudo
> **Por que dessa forma:** cliente que não vê progresso cancela. Cliente que vê progresso renova. O Notion é onde o progresso se torna visível todo mês — e a percepção de valor precede o resultado real
> **Resultado esperado:** cliente abre o painel pelo menos 1 vez por semana sem ser solicitado — sinal de engajamento. Cliente que não abre o painel por 2 semanas consecutivas é sinal de alerta de churn
>
> *"Clientes não cancelam quando o resultado está abaixo do esperado. Cancelam quando não percebem o progresso que está acontecendo." — Nick Mehta*

---

## PRINCÍPIOS DE DESIGN DO PAINEL

> **@ux-design-expert Uma — 3 princípios inegociáveis:**

**1. Outcomes first, activities second**
O cliente não quer ver "8 carrosseis entregues". Quer ver "seus seguidores cresceram X%". A primeira coisa que o cliente vê ao abrir o painel é o resultado — não o processo.

**2. Progresso visível = retenção garantida**
Todo elemento do painel deve comunicar movimento: o mês avançando, os números subindo, os arquivos sendo entregues. Progresso visível é o antídoto para o churn.

**3. O cliente nunca precisa pedir nada que já deveria estar lá**
Se ele abrir o painel e precisar mandar mensagem para saber onde está o calendário do mês — o painel falhou. Tudo que o cliente precisa está no painel, na ordem que ele precisa.

---

## ESTRUTURA DO WORKSPACE NOTION

> **Quando criar:** no dia do contrato assinado — antes mesmo do briefing
> **Quem cria:** analista Viral Lab responsável pelo cliente
> **Acesso:** compartilhar com e-mail do cliente com permissão "Pode visualizar" (nunca "Pode editar")

### Arquitetura de páginas

```
🏠 [Nome do Cliente] — Viral Lab
│
├── 📊 Dashboard Principal          ← página inicial, sempre aberta
│
├── 📅 Conteúdo Mensal
│   ├── Mês 01 — [Mês/Ano]
│   ├── Mês 02 — [Mês/Ano]
│   └── ... (criado mês a mês)
│
├── 🎯 Posicionamento
│   ├── Relatório de Auditoria
│   ├── Bio Imperial
│   ├── CLC — Carrossel de Posicionamento
│   └── 3 StoryAds
│
├── 📈 Métricas & Resultados
│   └── Acompanhamento Mensal
│
└── 📚 Recursos de Apoio
    ├── Como formatar no Canva
    ├── Como gravar Reels
    └── Perguntas Frequentes
```

---

## PÁGINA: DASHBOARD PRINCIPAL

> Esta é a primeira página que o cliente vê. Precisa responder em 10 segundos: onde estou, o que está pronto e qual é o próximo passo.
> **@ux-design-expert Uma:** hierarquia visual — resultado → progresso → próximo passo. Nessa ordem.

### Bloco 1 — Cabeçalho (identidade do cliente)

```
# [Nome do Cliente] — Gestão de Conteúdo Anual
Nicho: [Nicho específico]
Perfil: @[handle]
Analista responsável: [Nome] | WhatsApp: [número]
Contrato: [Mês/Ano] → [Mês/Ano]
```

---

### Bloco 2 — Barra de Progresso do Contrato

> **hormozi-retention:** progresso visível é o principal mecanismo de retenção. Ver o contrato avançando cria investimento psicológico na continuidade.

```
Mês [N] de 12  ████████░░░░ [N/12 = X%]

✅ Meses concluídos: [N-1]
🔨 Mês atual: [Mês/Ano]
⏳ Meses restantes: [12-N]
```

**Instrução de atualização:** atualizar no início de cada mês, antes de enviar a entrega.

---

### Bloco 3 — Métricas Principais (atualizar todo mês)

> **nick-mehta:** coloque os números que o cliente contratou para ver. Não deliverables — outcomes. Seguidores, engajamento, leads. Tudo que cresce visualmente reforça o valor.

| Métrica | Início do contrato | Mês atual | Crescimento |
|---------|-------------------|-----------|-------------|
| Seguidores | [X] | **[X]** | +[X] (+[X]%) |
| Alcance médio/post | [X] | **[X]** | +[X]% |
| Taxa de engajamento | [X]% | **[X]%** | [▲/▼] [X]pp |
| Leads pelo conteúdo/mês | [X] | **[X]** | +[X] |

> **Instrução:** sempre mostrar o início do contrato como referência — nunca só o mês atual. O progresso só é percebido em comparação.

---

### Bloco 4 — Status das Entregas

> **@ux-design-expert Uma:** o cliente precisa saber o que está pronto, o que está em produção e o que vem a seguir — sem precisar perguntar.

**Bônus de Entrada:**
- [x] Relatório de Auditoria — entregue em [DD/MM/AAAA]
- [x] Bio Imperial — entregue em [DD/MM/AAAA]
- [x] CLC — Carrossel de Posicionamento — entregue em [DD/MM/AAAA]
- [x] 3 StoryAds — entregues em [DD/MM/AAAA]

**Entregas Mensais:**

| Mês | Status | Entregue em | Publicação iniciada |
|-----|--------|-------------|---------------------|
| Mês 01 | ✅ Entregue | [DD/MM] | ✅ Sim |
| Mês 02 | ✅ Entregue | [DD/MM] | ✅ Sim |
| Mês 03 | 🔨 Em produção | — | — |
| Mês 04 a 12 | ⏳ Aguardando | — | — |

**Instrução de atualização:** atualizar status no dia da entrega. Atualizar "Publicação iniciada" quando o cliente confirmar que começou a publicar.

---

### Bloco 5 — Próximo Passo

> **hormozi-retention:** o cliente nunca deve ficar sem saber o que acontece agora. "Próximo passo" elimina ansiedade e mantém o engajamento.

```
📌 AGORA:
[ex: "Publicar o Reel 01 do Mês 03 — amanhã (01/04), às 19h30"]
[ex: "Aguardando: envio das métricas do Mês 02 para o relatório de resultados"]
[ex: "Em produção: Mês 04 — entrega prevista para 25/04"]
```

**Instrução:** atualizar toda vez que uma ação for concluída ou uma nova etapa começar. O "Agora" deve sempre ser específico — nunca genérico como "publicar conteúdo".

---

## PÁGINA: CONTEÚDO MENSAL — MÊS [N]

> Criar uma subpágina para cada mês entregue. Estrutura idêntica para todos os meses.

### Estrutura da página mensal

```
# Mês [N] — [Mês/Ano]
Tema central: [tema estratégico do mês]
Entregue em: [DD/MM/AAAA]
Score médio do Oráculo: [XX]/100
```

**Calendário editorial:** [link para o PDF no Google Drive]

**Reels — [4 roteiros]:**
- 🎬 [Tema do Reel 01] — Data: [DD/MM] | Duração: [Xs] | [link PDF]
- 🎬 [Tema do Reel 02] — Data: [DD/MM] | Duração: [Xs] | [link PDF]
- 🎬 [Tema do Reel 03] — Data: [DD/MM] | Duração: [Xs] | [link PDF]
- 🎬 [Tema do Reel 04] — Data: [DD/MM] | Duração: [Xs] | [link PDF]

**Carrosseis — [8 textos completos]:**
- 📊 [Tipo] [Tema do Carrossel 01] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 02] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 03] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 04] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 05] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 06] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 07] — Data: [DD/MM] | [link PDF]
- 📊 [Tipo] [Tema do Carrossel 08] — Data: [DD/MM] | [link PDF]

**Stories — [8 sequências]:**
- 📱 [Objetivo] Sequência 01 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 02 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 03 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 04 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 05 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 06 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 07 — Data: [DD/MM] | [link PDF]
- 📱 [Objetivo] Sequência 08 — Data: [DD/MM] | [link PDF]

**Resultados do mês (preencher após o mês):**
- Crescimento de seguidores: +[X] (+[X]%)
- Post que mais alcançou: [nome] — [X] contas
- Post que mais engajou: [nome] — [X] salvamentos
- Leads gerados: [X]
- Observação: [o que o mês ensinou para o próximo]

---

## PÁGINA: MÉTRICAS & RESULTADOS

> **nick-mehta:** a página de métricas é o que justifica a renovação. O cliente vê aqui que o investimento gerou resultado real. Se essa página estiver vazia ou desatualizada — o cliente não tem argumento para renovar.

### Tabela de evolução mensal (atualizar todo mês)

| Mês | Seguidores | Crescimento | Alcance médio | Engajamento | Leads |
|-----|-----------|-------------|---------------|-------------|-------|
| Início | [X] | — | [X] | [X]% | [X] |
| Mês 01 | [X] | +[X]% | [X] | [X]% | [X] |
| Mês 02 | [X] | +[X]% | [X] | [X]% | [X] |
| Mês 03 | [X] | +[X]% | [X] | [X]% | [X] |
| ... | | | | | |
| **Acumulado** | **[X]** | **+[X]%** | **[X]** | **[X]%** | **[X]** |

### Gráfico de progresso (bloco Notion Chart ou tabela visual)

> Instrução: no Notion, criar uma Database com as colunas acima e usar a visualização de Chart para mostrar evolução de seguidores mês a mês. Se o plano do Notion não suportar Chart, usar barra de progresso manual com emojis.

**Exemplo de barra manual:**
```
Jan ████░░░░░░░░  500 seguidores
Fev ██████░░░░░░  600 seguidores (+20%)
Mar ████████░░░░  720 seguidores (+20%)
```

### Metas e projeções (preencher no início do contrato)

| Período | Meta conservadora | Meta upside | Status atual |
|---------|------------------|-------------|-------------|
| 90 dias | [X] seguidores | [X] seguidores | [▲ no prazo / ⚠️ atenção] |
| 180 dias | [X] seguidores | [X] seguidores | — |
| 365 dias | [X] seguidores | [X] seguidores | — |

> Instrução: as metas foram definidas no Relatório de Auditoria (Parte 5). Copie os valores de lá para esta tabela. Não invente metas novas sem consultar o processo.

---

## PÁGINA: POSICIONAMENTO

> Página de referência permanente. Contém o posicionamento base do cliente — não muda a menos que haja uma revisão estratégica formal.

### Conteúdo desta página

**Declaração de Posicionamento (Onliness Statement):**
`[colar de diferenciacao.md — gerado no Módulo 03]`

**Frame de autoridade instalado:**
`[colar de frame-autoridade.md — gerado no Módulo 03]`

**Bio Imperial — Variação em uso:**
`[qual variação está publicada + texto completo]`

**Documentos de posicionamento:**
- [📊 Relatório de Auditoria](link Drive)
- [📄 Bio Imperial (PDF)](link Drive)
- [🎨 CLC — Carrossel de Posicionamento](link Canva ou Drive)
- [📱 StoryAd 01 — Tensão](link Drive)
- [📱 StoryAd 02 — Prova](link Drive)
- [📱 StoryAd 03 — Oferta](link Drive)

---

## PÁGINA: RECURSOS DE APOIO

> **@ux-design-expert Uma:** reduza o atrito de execução. Toda barreira que o cliente enfrenta ao publicar é uma ameaça ao resultado — e consequentemente à renovação.

### Como formatar carrosseis no Canva

1. Acesse o template: [link direto do template Canva]
2. Duplique o template (não edite o original)
3. Copie o texto de cada slide do PDF do carrossel
4. Cole no Canva substituindo o texto de exemplo
5. Baixe como PNG (imagem) ou MP4 (se quiser animar)
6. Publique no Instagram como carrossel (selecione múltiplas imagens)

**Dúvida na formatação?** WhatsApp antes de publicar.

### Como gravar Reels

1. Leia o roteiro completo antes de ligar a câmera
2. Grave no mínimo 3 takes — use o terceiro (a naturalidade vem com repetição)
3. Siga as instruções de: cenário, enquadramento, legenda e outfit do PDF do roteiro
4. Envie o vídeo gravado para o WhatsApp antes de publicar se quiser revisão prévia
5. Não edite o roteiro sem consultar — cada frase foi escrita para instalar um frame específico

### Perguntas Frequentes

**"Posso mudar a data de publicação de um post?"**
Sim — até 2h de variação no horário não impacta. Mais de 2h, avise antes.

**"E se eu esquecer de publicar um dia?"**
Não publique dois posts no mesmo dia para compensar. Avise a Viral Lab — avaliamos juntos o melhor ajuste.

**"Posso adaptar o texto de um carrossel?"**
Consulte antes. Alguns ajustes são saudáveis — outros quebram o frame estratégico da peça.

**"Quando recebo o conteúdo do próximo mês?"**
Sempre até o dia 25 do mês atual. Se houver atraso, você é o primeiro a saber — com 48h de antecedência.

---

## PROTOCOLO DE MANUTENÇÃO DO PAINEL

> **Quem atualiza:** analista Viral Lab responsável pelo cliente
> **hormozi-retention:** painel desatualizado sinaliza abandono. Abandono percebido gera churn antes mesmo do resultado cair.

| Evento | O que atualizar | Prazo |
|--------|----------------|-------|
| Contrato assinado | Criar workspace + cabeçalho + metas | Mesmo dia |
| Briefing recebido | Confirmar dados do cabeçalho | 24h |
| Auditoria entregue | Status de entrega + link no Drive | Dia da entrega |
| Posicionamento entregue | Status + links + página Posicionamento | Dia da entrega |
| Entrega mensal | Página do mês + status + calendário | Dia da entrega |
| Métricas recebidas | Tabela de evolução + "Próximo Passo" | 48h após receber |
| Início de novo mês | Barra de progresso + status da tabela | Dia 1 do mês |

🔴 **VETO CONDITION:** Painel com métricas da tabela desatualizadas há mais de 45 dias = sinal de alerta máximo. Investigar imediatamente: o cliente está publicando? Está enviando métricas? Se não — acionar protocolo de intervenção do `modelo-entrega-comunicacao.md`.

---

## SINAIS DE SAÚDE DO CLIENTE (nick-mehta)

> O painel Notion também é uma ferramenta de diagnóstico de saúde do relacionamento.
> Estes são os sinais que o analista deve monitorar ativamente.

| Sinal | O que significa | Ação |
|-------|----------------|------|
| Cliente abre o Notion com frequência | Engajamento alto — cliente investido | Manter ritmo |
| Cliente não abre há 2 semanas | Risco de desengajamento | Check-in proativo imediato |
| Métricas não enviadas no dia 7 | Cliente não está acompanhando resultados | Acionar mensagem de métricas |
| Cliente não publicou 3+ peças do mês | Conteúdo parado = resultado parado | Ligação ou chamada de vídeo |
| Cliente pergunta quando vence o contrato | Pensando em não renovar | Revisão de valor agendada |
| Cliente indica outro cliente | Sinal máximo de satisfação | Pedir depoimento formal |

---

*Viral Lab — Sistema de Gestão de Conteúdo com IA*
*Documento interno — uso exclusivo da equipe Viral Lab*
