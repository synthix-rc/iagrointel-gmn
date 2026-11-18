# Nomenclatura oficial dos produtos — iAgroIntel

Atualizado: 2026-11-13 · Fase 0 · Decisões 1 e 2 em DECISOES-iagrointel.md

## Lógica

| Tipo de peça | Quando usar | O que entrega |
|---|---|---|
| **Perícia** *(ou Dossiê, ver P11)* | Análise completa de um imóvel ou de uma carteira | Dossiê com evidências organizadas |
| **Laudo** | Resposta a uma pergunta específica | Laudo com classificação ou comparação |
| **Base** | Dado estruturado para alimentar um relatório | Tabelas e arquivos |
| **Triagem** | Filtro antes de uma declaração | Sinal de triagem e arquivo no formato exigido |

Regras: o nome não leva "iAgroSat", número de norma, "Forense" nem "Certificado". Um nome por produto. A maturidade aparece sempre ao lado do nome.

## Produtos núcleo

| Nome oficial | Entrega | Público | Nomes a aposentar | Maturidade |
|---|---|---|---|---|
| **Perícia Pré-Crédito** *(P11)* | Dossiê do imóvel: embargos, PRODES, sobreposições, valor da terra; PDF, JSON e hash | Bancos, cooperativas de crédito | "iAgroSat Perícia CMN"; outros a levantar | PENDENTE |
| **Perícia de Carteira** *(P11)* | Fila, revisão, relatório por imóvel, resumo da carteira; conformidade em lote item a item do MCR | Bancos, cooperativas de crédito | "Carteira da cooperativa e lote do banco"; a levantar | PENDENTE |
| **Laudo PRODES** | Alerta PRODES classificado (desmatamento × colheita, pousio, manejo legal) | Bancos, cooperativas de crédito | "PRODES Forense", "Consulta PRODES", "Dossiê PRODES" | PENDENTE |
| **Laudo de Acompanhamento** | Série Sentinel-2 da gleba: área cultivada × área financiada | Bancos, cooperativas de crédito | "Laudo acima de 300 ha (Resolução 5.267)", "Monitoramento CMN 5.267"; a levantar | PENDENTE |
| **Base Territorial GRSAC** | Parte territorial das tabelas do relatório GRSAC | Bancos, cooperativas de crédito | "Base GRSAC", "Base do relatório GRSAC" | PENDENTE |
| **Triagem EUDR** | Triagem por polígono antes da declaração de due diligence; GeoJSON no formato europeu | Tradings, exportadores, bancos com carteira exportadora | "EUDR · Triagem de origem UE"; a levantar | PENDENTE |

## Segunda camada

| Nome oficial | Nomes a aposentar | Maturidade |
|---|---|---|
| **Projeto de Carbono** | "Carbono na carteira" | PENDENTE |
| **Inteligência Territorial** | a levantar | PENDENTE |

## P11 — "Perícia" ou "Dossiê" (em aberto)

**Recomendação: Dossiê Pré-Crédito e Dossiê de Carteira.**

1. **O nome promete o que o produto entrega.** "Perícia" promete a conclusão de um especialista. O produto entrega evidência organizada, e a decisão continua com a instituição. "Dossiê" diz exatamente isso, sem depender de ressalva.
2. **"Perícia" tem sentido jurídico e profissional no Brasil.** No uso comum de bancos e advogados, a palavra remete a perícia judicial, perito nomeado e, em engenharia e agronomia, profissional com registro em conselho. A regra 9 do projeto diz que o laudo não tem valor de perícia judicial. Um nome que precisa de ressalva permanente trabalha contra a própria marca. (PREMISSA: exigências de conselho profissional para usar "perícia" num serviço comercial devem ser confirmadas com o jurídico da iAgroSat.)
3. **Quem compra tende a ser o jurídico ou o compliance do banco.** É o leitor mais sensível a uma palavra que soe como laudo com fé técnica.
4. **Fica coerente com a ressalva-assinatura.** "Sinal de triagem, não prova de conformidade" convive bem com "dossiê" e mal com "perícia".

**Custo:**
- Perde o nome usado hoje nas conversas de venda ("Perícia CMN").
- "Perícia" soa mais robusto para um comprador de banco.
- "Dossiê PRODES" é um dos nomes antigos do Laudo PRODES. A palavra "dossiê" passa a ser exclusiva dos produtos de análise completa, o que exige cuidado na transição.

**Transição sugerida:** no site, só o nome novo. Nos materiais comerciais, por 3 a 6 meses: "Dossiê Pré-Crédito (antes: Perícia CMN)".

**Se a decisão for manter "Perícia":** usar a ressalva fixa "análise técnica de triagem, sem valor de perícia judicial" no topo de cada página de produto e na capa de cada dossiê.

## A fazer

- Levantar todos os nomes em uso hoje (site PT/EN/DE, propostas, decks, app) e completar a coluna "a aposentar".
- Preencher a maturidade de cada produto (Rodrigo informa durante a construção do site).
- Nomes em EN e DE (Identidade verbal, depois de fechada a P11).
