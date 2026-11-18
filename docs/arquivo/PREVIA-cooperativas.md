# Prévia "iAgroIntel Crédito Rural" — conteúdo de origem

Origem: `https://iagrointel.com/iagrointel-cooperativas-43d07d5fa0bd727b/` · lida em 2026-11-13 · página noindex, nofollow · rodapé original "iAgroSat LTDA · iAgroIntel · novembro de 2026".

**Como usar este arquivo:** é a matéria-prima de `/credito-rural`, `/credito-rural/cooperativas`, das páginas de produto, de `/como-comecar` e de `/exemplos` (ver `MAPA-site.md`). Ao migrar o texto:
- troque os nomes de produto pelos oficiais (tabela "Ajustes de texto" no MAPA-site.md);
- todo número e toda data entram com o componente `PENDENTE` até a conferência (P01, P23, FONTES-regulatorias.md);
- os exemplos de laudo entram como cards sem PDF até a P07 (anonimização).

Públicos: cooperativas de crédito, bancos e analistas de crédito rural.

---

## 1. Hero

- Rótulo: iAgroIntel · crédito rural
- H1: Evidência territorial para cada operação de crédito rural
- Texto: três normas mudaram o que cooperativas e bancos precisam verificar antes e depois da concessão. A iAgroIntel faz essas verificações para um imóvel, uma gleba ou uma carteira, com fonte e data em cada item.
- CTAs: "Ver os produtos" (âncora para produtos) · "Como começar"
- Imagem: Sentinel-2 de imóvel em Mato Grosso com a gleba financiada desenhada.

Menu de âncoras da prévia: As normas · Perícia · PRODES · Acima de 300 ha · Carteira · GRSAC · Carbono · Como começar.

## 2. Indicadores (PENDENTE — P23)

| Indicador | Valor na prévia | Fonte citada |
|---|---|---|
| Operações acima de 300 ha contratadas sob a Res. 5.267 (mar–ago/2026) | 7.639 | SICOR (BCB) |
| Valor dessas operações | R$ 22,6 bi, de R$ 332,3 bi contratados em 12 meses | SICOR (BCB) |
| Imóveis acima de 15 módulos fiscais (primeiros da consulta ao PRODES) | 141.875, de 8.393.915 no CAR | SICAR |
| Participação das cooperativas no crédito rural de 2025 | 22,3%, por 390 cooperativas de crédito | SICOR (BCB) |

## 3. As normas e as datas (PENDENTE — FONTES-regulatorias.md)

- H2: A primeira consulta obrigatória ao PRODES é em 4 de janeiro de 2027

| Norma | O que muda | Data |
|---|---|---|
| Resolução CMN 5.267 | Sensoriamento remoto em operações acima de 300 ha | desde 01/03/2026 |
| Resoluções CMN 5.268 e 5.303 | Consulta à lista do MMA baseada no PRODES, com prazos por módulos fiscais | 04/01/2027 · 01/07/2027 · 03/01/2028 |
| Resolução BCB 586 | Relatório GRSAC, conforme o porte | a partir de 01/01/2027 |

## 4. Produtos

### 4.1 Perícia Pré-Crédito (nome oficial, sujeito à P11)
- H2: Um CAR, 26 fontes públicas, e cada ocorrência com fonte, data e hectares *(26 = PENDENTE, P01)*
- O que cruza: CAR (ou polígono da gleba) × embargos, PRODES, terras indígenas, unidades de conservação, quilombos, assentamentos, SIGEF, valor da terra.
- Entrega: PDF, JSON, imagem Sentinel-2, distinção entre embargo vigente e levantado, hash de verificação.
- Não faz: não decide crédito; não é perícia judicial; não usa dado pessoal.
- Exemplos: imóvel sem ocorrência (12 p.) · gleba financiada em MT (21 p.) · sobreposição com terra indígena (12 p.). Imagem: imóvel no Pará.

### 4.2 Laudo PRODES (na prévia: "Consulta PRODES" — nome aposentado)
- H2: O alerta do PRODES vira um laudo: o que a imagem confirma e o que não confirma
- O que cruza: perímetro × PRODES de todos os biomas; desmatamento posterior a 31/07/2019 analisado com séries Sentinel-2.
- Comportamento: informa quando as imagens não permitem confirmar, e o item fica para o analista.
- Não faz: não substitui a consulta à lista oficial do MMA.
- Exemplo: imóvel no Pará (4 p.), com figuras antes/depois de cada polígono.

### 4.3 Laudo de Acompanhamento (na prévia: "Laudo acima de 300 ha (Resolução 5.267)")
- H2: Acima de 300 hectares, o satélite acompanha a gleba do plantio à colheita
- O que faz: acompanha a gleba do desembolso à colheita e compara área cultivada com área financiada.
- Norma relacionada: Res. CMN 5.267 (nunca "cumpre a 5.267").
- Exemplos: milho safrinha em Jataí (GO), 306 ha (7 p.) · soja 2025/26 em Jataí, 348 ha (7 p.). Imagens em cor natural e NDVI.

### 4.4 Perícia de Carteira (na prévia: "Carteira da cooperativa e lote do banco")
- H2: 200 imóveis num lote, 4.704 verificações independentes, nenhuma divergência *(PENDENTE, P23)*
- Recebe a lista de CARs e devolve a matriz por imóvel, o resumo da carteira e a fila de revisão. *(Texto revisado pelo Rodrigo em 14/11/2026. Original da prévia: "Entrada: lista de CARs. Saída: matriz por imóvel, resumo da carteira, fila de revisão.")*
- Entrega: planilha e JSON, PDF de resumo, fila de revisão.
- Não faz: não certifica o Manual de Crédito Rural; não cruza dados de outras instituições.
- Exemplos: resumo de carteira de 200 imóveis (10 p.) · painel da cooperativa (4 p.).

### 4.5 Base Territorial GRSAC (na prévia: "Base do relatório GRSAC")
- H2: As tabelas do GRSAC saem da mesma carteira
- O que faz: preenche as partes das tabelas que dependem do território; a instituição completa os dados internos e responde pela divulgação.
- Entrega: tabela RSA1, tabela CRFR1 Agro, tabela CRFR2, aba de lacunas.
- Não faz: não é o relatório; não preenche linhas que exigem CPF ou CNPJ.
- Exemplo: planilha de teste com 200 CARs reais e valores fictícios; contagem da RSA1 (ex.: 25 imóveis com sobreposição a UC, 42 com área embargada).

### 4.6 Projeto de Carbono — segunda camada (na prévia: "Carbono na carteira", produto 7)
- No mapa v2: página própria em `/outras-aplicacoes/projeto-de-carbono` + bloco curto em `/credito-rural` (conflito C1).
- H2: 139 de 150 imóveis do Cerrado têm vegetação nativa acima do mínimo legal: 62.730 hectares *(PENDENTE, P23)*
- O que faz: mede excedente de vegetação nativa, verifica conversão legal, estima estoque de carbono (mapa da ESA) e indica rota no padrão VCS, com rascunho de PDD.
- Entrega: triagem com viabilidade, estoque por imóvel e estrato, rascunho de PDD.
- Não faz: estoque não é crédito emitido; não garante receita; PDD final exige especialista credenciado.
- Observação do estudo: na Mata Atlântica, a lei impede a rota de desmatamento evitado.
- Exemplos: viabilidade de 150 imóveis (13 p.) · rascunho de PDD (28 p.).

## 5. Como começar

- H2: A prova é feita com as operações da própria instituição
- Etapas (oferta a confirmar — P24):
  1. Conversa inicial
  2. Prova técnica sem custo, com operações de safra encerrada
  3. Piloto de até 50 imóveis em 60 dias
  4. Contrato conforme a necessidade

## 6. Aviso final (vira a ressalva global)

Nenhum resultado decide crédito. A iAgroIntel organiza evidência com fonte e data, e a decisão cabe à instituição. Os resultados são triagem: indicam sinais e não constituem prova.

## 7. Biblioteca de exemplos (para `/exemplos`)

| Produto | Exemplo | Páginas |
|---|---|---|
| Perícia Pré-Crédito | Imóvel sem ocorrência | 12 |
| Perícia Pré-Crédito | Gleba financiada em MT | 21 |
| Perícia Pré-Crédito | Sobreposição com terra indígena | 12 |
| Laudo PRODES | Imóvel no Pará | 4 |
| Laudo de Acompanhamento | Milho safrinha, Jataí (GO), 306 ha | 7 |
| Laudo de Acompanhamento | Soja 2025/26, Jataí (GO), 348 ha | 7 |
| Perícia de Carteira | Resumo de carteira, 200 imóveis | 10 |
| Perícia de Carteira | Painel da cooperativa | 4 |
| Base Territorial GRSAC | Planilha de teste, 200 CARs | — |
| Projeto de Carbono | Viabilidade, 150 imóveis | 13 |
| Projeto de Carbono | Rascunho de PDD | 28 |

Todos os exemplos levam o selo "Exemplo". PDFs só depois da P07.
