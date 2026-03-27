# Processo de Validação de Cliente — Viral Lab

> **Regra de ouro:** Você não aceita todo cliente que tem dinheiro.
> Você aceita todo cliente que tem dinheiro E tem condições de crescer E vai indicar outros.
>
> Agentes: Thiago Finch + hormozi-audit + @analyst (Alex)
> Tempo: 30-45 minutos por lead
> Resultado: GO (aceitar) ou NO-GO (recusar com elegância)

---

## POR QUE ESTE PROCESSO EXISTE

Você tem 3.000+ leads com faturamento acima de R$500k/ano.
Isso não significa que todos são clientes certos para a Viral Lab.

Um cliente errado custa:
- Tempo que você poderia usar em um cliente certo
- Desgaste emocional e operacional
- Risco de reputação se o resultado não vier
- Cancelamento antes dos 12 meses

Este processo protege os dois lados: você e o cliente.

---

## CRITÉRIOS DE ENTRADA — Obrigatórios

Antes de acionar qualquer agente, faça esta checagem rápida.
Se qualquer item obrigatório falhar → NO-GO imediato, sem análise adicional.

### ✅ Obrigatórios (todos precisam passar)

| Critério | Como verificar | Mínimo |
|----------|---------------|--------|
| Faturamento anual | Perguntar diretamente ou inferir pelo cargo/negócio | R$500k/ano |
| Presença digital ativa | Verificar o perfil Instagram | Perfil existe e tem posts recentes |
| Produto/serviço claro | Entender o que vende em 1 frase | Sim ou não |
| Disposição para investir | Reação ao ticket R$20k-25k | Não demonstrar choque ou resistência forte |
| Nicho com audiência digital | O avatar do cliente usa Instagram | Sim |

### ⚡ Desejáveis (aumentam o score)

| Critério | Peso |
|----------|------|
| Faturamento acima de R$1M/ano | +20 pontos |
| Já investe em marketing digital | +15 pontos |
| Tem método ou processo com nome próprio | +10 pontos |
| Tem prova social (depoimentos, resultados) | +10 pontos |
| Nicho com alta concorrência digital (mais gaps) | +10 pontos |
| Tem lançamentos planejados | +10 pontos |
| Já testou conteúdo antes e sabe o que não funciona | +5 pontos |

**Score ≥ 50 pontos:** candidato ideal — acionar análise completa.
**Score 20-49:** candidato possível — acionar com cautela.
**Score < 20:** NO-GO educado — pipeline de nutrição.

---

## PASSO 1 — Análise Estratégica do Negócio (15 min)

### 1A. Acione o `/squadCreator/thiago-finch`

Use o seguinte prompt:

```
*viability-check

Lead: [NOME]
Nicho: [NICHO]
Faturamento estimado: [VALOR]
Produto principal: [PRODUTO/SERVIÇO]
Ticket do produto: [VALOR]
Avatar do cliente dele: [QUEM ELE VENDE]
Presença digital atual: [BREVE DESCRIÇÃO DO PERFIL]
Histórico de marketing: [tem equipe / investe em ads / nunca investiu]

Contexto: Estou avaliando se este lead é um cliente ideal para gestão de conteúdo anual no Instagram/digital.
O serviço entrega 20 peças/mês (carrosseis, reels, stories) + auditoria + posicionamento.
Ticket: R$20.000 à vista ou R$25.000 parcelado.

Preciso saber:
1. GO ou NO-GO com justificativa clara
2. Se GO: qual o principal alavancador de crescimento para este perfil?
3. Se GO: qual o risco principal que devo monitorar?
4. Se NO-GO: o que precisaria mudar para virar GO no futuro?
```

**Salve o resultado como:** `validacao-[nome-cliente].md`

---

### 1B. Acione o `/squadCreator/thiago-finch`

Logo após o viability-check, rode o ROI:

```
*roi-estimate

Lead: [NOME]
Nicho: [NICHO]
Ticket médio do produto dele: [VALOR]
Quantos clientes ele fecha por mês hoje: [ESTIMATIVA]
Audiência atual no Instagram: [SEGUIDORES]
Taxa de engajamento estimada: [ALTA / MÉDIA / BAIXA]

Se o conteúdo aumentar a percepção de autoridade e crescer seguidores em 30% em 6 meses:
- Quantos leads novos por mês isso pode gerar?
- Qual o ROI estimado do investimento de R$20k/ano?
- Em quantos meses o cliente paga o investimento com novos clientes?
```

**Critério de aprovação:** ROI estimado ≥ 3x o investimento em 12 meses.

---

### 1C. Acione o `/squadCreator/thiago-finch`

```
*loss-aversion-audit

Contexto: Estou prestes a fechar um contrato anual de R$20-25k com [NOME / NICHO].

Analise os downsides com o modelo 2.5:1 (toda perda pesa 2.5x mais que o ganho equivalente):
- Quais os 3 cenários de falha mais prováveis?
- O que posso fazer agora para prevenir cada um?
- Existe algum red flag que eu deveria investigar antes de fechar?
```

---

## PASSO 2 — Auditoria do Negócio (10 min)

### Acione o `/squads/hormozi-squad/hormozi-audit`

```
Faça uma auditoria rápida do negócio do seguinte lead:

Nome: [NOME]
Nicho: [NICHO]
Produto principal: [PRODUTO]
Ticket médio: [VALOR]
Faturamento anual: [ESTIMATIVA]
Tempo de mercado: [ANOS]
Maior problema declarado: [O que ele disse que precisa resolver]

Análise Hormozi:
1. A oferta dele é forte? (valor percebido vs preço)
2. Existe funil de captação funcionando ou ele depende de indicação?
3. Qual é a principal alavanca de crescimento não explorada?
4. Se eu entrar com conteúdo, vou amplificar algo que já funciona ou vou tentar consertar algo quebrado?
5. Recomendação: conteúdo vai funcionar para este negócio? Por quê?
```

---

## PASSO 3 — Pesquisa do Nicho (10 min)

### Acione o `/AIOX/agents/analyst`

```
Pesquise o mercado do seguinte nicho para me ajudar a tomar uma decisão:

Nicho: [NICHO]
Localização do cliente: [CIDADE/ESTADO se relevante]

Preciso saber:
1. Saturação de conteúdo no Instagram neste nicho (alta / média / baixa)
2. Os 3 maiores criadores de conteúdo deste nicho no Brasil (perfis com mais crescimento)
3. Ticket médio de serviços neste nicho (para validar o ROI do cliente)
4. Principal dor/transformação que move a audiência deste nicho
5. Oportunidade de gap: o que ninguém está fazendo bem neste nicho?

Com base nesta pesquisa: há espaço real para crescimento de audiência neste nicho? Sim ou não, com justificativa.
```

---

## PASSO 4 — Decisão Final

### Tabela de Pontuação

| Critério | Peso | Nota (0-10) | Pontos |
|----------|------|-------------|--------|
| Viability Check do Finch | 30% | | |
| ROI estimado ≥ 3x | 25% | | |
| Auditoria Hormozi favorável | 25% | | |
| Oportunidade de nicho (Analyst) | 20% | | |
| **TOTAL PONDERADO** | **100%** | | **/10** |

**Resultado:**
- **≥ 7,5:** GO — Aceitar com entusiasmo
- **5,0 a 7,4:** GO CONDICIONAL — Aceitar com alinhamento explícito de expectativas
- **< 5,0:** NO-GO — Recusar com elegância

---

## SCRIPT DE GO — Como comunicar a aprovação

```
[Nome], depois de analisar seu perfil e negócio, tenho certeza que
podemos crescer juntos.

Seu nicho tem espaço real, você tem autoridade para construir, e
o momento está certo para você ter um sistema de conteúdo que
trabalha enquanto você atende clientes.

Vou te enviar o contrato e o acesso ao seu painel na Viral Lab.
A partir daí começa a construção do seu posicionamento. 🚀
```

---

## SCRIPT DE NO-GO — Como recusar sem fechar a porta

```
[Nome], avaliei seu perfil com cuidado e quero ser honesto com você.

Hoje [motivo específico: ex: "sua oferta ainda precisa de ajuste antes do conteúdo amplificar" / "o momento do seu negócio pede mais estrutura de funil antes de investir em audiência"].

Se você investir agora em conteúdo sem isso resolvido, o resultado vai demorar mais do que você merece esperar — e eu não quero isso para você.

O que recomendo: [ação específica que o lead pode tomar].

Quando isso estiver resolvido, me chama. Vai ser muito mais fácil e rápido. 💪
```

---

## PIPELINE PÓS-NO-GO

Leads que não passaram hoje não são perdidos. São futuros clientes.

| Situação | Ação |
|----------|------|
| Faturamento abaixo do mínimo | Nutrir com conteúdo da Viral Lab por 3-6 meses e reavaliar |
| Oferta do cliente fraca | Indicar hormozi-offers e retomar em 60 dias |
| Resistência ao ticket | Agendar follow-up em 30 dias com novo contexto |
| Nicho sem oportunidade | Arquivar por 6 meses e reavaliar cenário |

**Ferramenta de controle:** Mantenha uma planilha ou Notion com:
- Nome, nicho, data da avaliação, motivo do NO-GO, data de follow-up

---

## CHECKLIST FINAL ANTES DE ASSINAR CONTRATO

- [ ] Viability Check: GO confirmado pelo Finch
- [ ] ROI estimado ≥ 3x calculado
- [ ] Auditoria Hormozi favorável
- [ ] Nicho com oportunidade confirmada pelo Analyst
- [ ] Score ≥ 7,5 na tabela de pontuação
- [ ] Loss aversion audit feito — sem red flags críticos
- [ ] Expectativas alinhadas verbalmente (o cliente entende que resultado real leva tempo)
- [ ] Contrato enviado com SLA e entregáveis definidos

---

> **Lembre-se:** Todo cliente que entra sem passar neste processo é um risco.
> Todo cliente que passa vira fã — e fã indica.
> **A Viral Lab cresce por indicação de clientes que tiveram resultado real.**
