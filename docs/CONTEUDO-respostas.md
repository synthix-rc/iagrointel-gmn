# Conteúdo das pendências resolvidas — iAgroIntel

Versão 1 · 2026-11-14 · Textos para aplicar no site (camada 2, segunda rodada).
Fontes: respostas do cliente na planilha `docs/fontes/pendencias-respondido-2026-11-14.xlsx` (aba Pendências, coluna "Resposta / decisão", e aba Furos) e decisões do Rodrigo de 14/11/2026 (DECISOES-iagrointel.md, 22 a 35).

**Como ler este documento**
- **Literal do cliente:** o texto vem da resposta do cliente. Pode mudar a pontuação, a ordem das frases e a explicação de sigla na primeira menção. O conteúdo não muda.
- **TEXTO NOVO (aprovado):** escrito pela Synthix e aprovado. No código, leva o comentário `// TEXTO NOVO (aprovado em 14/11/2026, <código>)`.
- **TEXTO NOVO (a aprovar):** escrito pela Synthix e ainda sem aprovação. No código, leva o comentário `// TEXTO NOVO (a aprovar)`, e a página mantém a faixa de rascunho.
- Os números do documento do cliente (P19) e os números oficiais da base (P18) entram **sem a etiqueta Pendente**, sempre com período e fonte junto.

---

## Início (`/`)

### Tagline (P22) · TEXTO NOVO (aprovado)
> O papel declara. O satélite confere. A instituição decide.

### Frase-síntese e descrição global (P18)
- "40 anos de uso do solo": fica, com a fonte **MapBiomas Coleção 10 (1985–2024)** na nota ou no rótulo.
- "1,19 bilhão de registros" → **"1,46 bilhão de registros"**, com a data **"contagem de julho de 2026"**.
- Descrição global (`content/site.ts`, meta description): "130+ fontes públicas" → **"132 fontes oficiais"**; "1,19 bilhão" → **"1,46 bilhão"**. A frase sai da P18.

### Prova "O território, falando" (P18)
- O "−88%" e o "88%" ficam, com a conta visível: **311 → 38 é uma queda de 87,8%, arredondada para 88%**. Sugestão de rótulo do quarto número: "menos falso-positivo de bloqueio (teste interno; 311 → 38)". Sai a etiqueta P18.

---

## Crédito rural (`/credito-rural/`)

- **P1:** sai o bloco 4, "O risco de errar para os dois lados" (e a âncora dele no índice).
- **P18:** "8.393.915 no CAR" sai da P18 (fonte SICAR, já na linha de fontes).
- **P19:** todos os números e períodos do documento do cliente saem da P19, mantendo período e fonte.

---

## Cooperativas (`/credito-rural/cooperativas/`) · P2

### 1 · Abertura · TEXTO NOVO (aprovado pelo cliente)
> Em 2025, 390 cooperativas de crédito contrataram 22,3% do valor do crédito rural do país. A iAgroIntel organiza a evidência territorial de cada operação e da carteira, com fonte e data. A decisão continua com a cooperativa.

Fonte dos números, junto do texto: Sistema de Operações do Crédito Rural (SICOR), do Banco Central, ano de 2025.

### 5 · A cooperativa que compra das duas marcas · TEXTO NOVO (aprovado pelo cliente)
> A mesma cooperativa pode trabalhar com as duas marcas da família. A iAgroSat atende o cooperado na própria fazenda, com monitoramento da lavoura, clima e alertas. A iAgroIntel atende a cooperativa nas decisões sobre a terra dos outros: crédito, carteira e relatórios. O produtor mostra a própria fazenda pela iAgroSat; a cooperativa confere pela iAgroIntel.

Link no fim do bloco: "Conheça a iAgroSat" → https://iagrosat.com (sem seta).

---

## Páginas de produto

### Todas: maturidade (P12, confirmada pelo dono)

| Produto | Maturidade |
|---|---|
| Perícia Pré-Crédito | Pronto |
| Laudo PRODES | Piloto |
| Laudo de Acompanhamento | Piloto |
| Perícia de Carteira | Piloto |
| Base Territorial GRSAC | Piloto |
| Potencial de Carbono da Carteira | Piloto |
| Triagem EUDR | Piloto |

Nunca "beta" nem "beta privado" (decisão do dono).

### Perícia Pré-Crédito · norma relacionada (P25) · TEXTO NOVO (aprovado)
- **Norma:** Seção 9 do Manual de Crédito Rural (MCR): Resoluções CMN 5.193/2024, 5.268/2025 e 5.303/2026 (já aprovado, decisão 9).
- **O que exige:**
> A Seção 9 do Manual de Crédito Rural (MCR), do Banco Central, reúne os impedimentos sociais, ambientais e climáticos ao crédito rural. Entre eles: imóvel com embargo ambiental, imóvel em unidade de conservação e supressão de vegetação nativa depois de 31/07/2019 na lista do Ministério do Meio Ambiente baseada no PRODES.
- **Quando:**
> Em vigor. A consulta à lista do Ministério do Meio Ambiente segue o calendário da Resolução CMN 5.303: 04/01/2027 (acima de 15 módulos fiscais), 01/07/2027 (de 4 a 15) e 03/01/2028 (até 4).
- "26 fontes públicas" sai da P18 (confirmado pelo cliente na P4).
- Sem "cumpre", "atende" ou "em conformidade com".

### Laudo PRODES
- "31 de julho de 2019" sai da marca FONTES (marco conferido, ver FONTES-regulatorias.md).

### Laudo de Acompanhamento · P3

**O que cruza** · TEXTO NOVO (aprovado pelo cliente)
- O polígono da gleba financiada com a série de imagens Sentinel-2, do desembolso à colheita: plantio, pico e colheita
- A área cultivada com a área financiada

**O que não faz** · literal do cliente (fonte: texto revisado de Monitoramento de Lavoura)
- Não substitui a vistoria de campo.
- Não mede produtividade.
- Uma queda do NDVI, o índice de vegetação medido pelo satélite, mostra onde olhar, mas não a causa: praga, doença, falta de água, colheita ou falha de plantio.
- Em período chuvoso, a última imagem limpa pode ter semanas.
- A resolução é de 10 m: talhão pequeno tem poucos pixels.

As marcas P13 desta página ("306 hectares", "março de 2026") saem: o PDF de exemplo confirma 306,5 ha financiados e contratação em março de 2026.

### Perícia de Carteira · P4

**O que cruza** · literal do cliente
> Cada imóvel da carteira, um a um, nas mesmas 26 fontes públicas da Perícia Pré-Crédito.

**Normas relacionadas** · TEXTO NOVO (aprovado)

| Norma | O que exige | Quando |
|---|---|---|
| Resolução CMN 5.267 | Sensoriamento remoto nas operações de custeio e investimento com empreendimento acima de 300 hectares. Na carteira, vale só para essas operações. | Contratos desde 01/03/2026 |
| Resoluções CMN 5.268 e 5.303 | Consulta à lista do Ministério do Meio Ambiente baseada no PRODES, o mapeamento anual de desmatamento do Instituto Nacional de Pesquisas Espaciais (INPE). | 04/01/2027 · acima de 15 módulos fiscais<br>01/07/2027 · de 4 a 15<br>03/01/2028 · até 4 |

Reaproveitar as entradas `cmn-5267` e `cmn-5268-5303` da tabela de normas de `content/credito-rural.ts`, acrescentando só a frase "Na carteira, vale só para essas operações." Sem "cumpre", "atende" ou "em conformidade com".

### Base Territorial GRSAC · P5

**O que cruza** · aprovado pelo cliente (linhas da tabela RSA1 da Resolução BCB 586)
- Unidade de conservação, de proteção integral e de uso sustentável
- Terra indígena declarada ou homologada
- Área embargada pelo IBAMA ou pelo ICMBio
- Supressão registrada pelo PRODES

Frase de entrada, antes da lista:
> A instituição envia, para cada operação, o CAR, o valor de exposição, o setor e a natureza da contraparte.

### Potencial de Carbono da Carteira · P31 e P17

**O que cruza** · aprovado pelo Rodrigo (do documento do cliente)
- A carteira de CARs com a vegetação nativa acima da reserva legal e da área de preservação permanente (APP)
- A possibilidade legal de conversão
- O estoque de carbono, pelo mapa de biomassa da ESA

**Frase da Mata Atlântica (P17)** · texto provisório do cliente, até o parecer do jurídico
- Troca "a lei impede a rota de desmatamento evitado" por:
> a Lei 11.428/2006 restringe a supressão da Mata Atlântica, o que limita a rota de desmatamento evitado
- Sai a marca FONTES (lei conferida). A P17 continua aberta no PENDENCIAS.md, sem marca no site.

---

## Exportação (`/exportacao/`) · P6

**Abertura, com o problema** · literal do cliente
> O Regulamento (UE) 2023/1115, conhecido como EUDR, exige que o exportador prove que a mercadoria não vem de área desmatada depois de 31/12/2020 e que foi produzida de acordo com a lei do país.

**Público** · literal do cliente
> Exportadores e tradings de soja, café, cacau, carne bovina, madeira, borracha e dendê.

As datas de aplicação do EUDR já estão conferidas (decisão 9). A data de corte de 31/12/2020 está conferida no texto do regulamento (FONTES-regulatorias.md).

---

## Triagem EUDR (`/exportacao/triagem-eudr/`) · P7

**H2 de evidência** · TEXTO NOVO (a aprovar)
> Cada polígono de fornecedor conferido no satélite antes da declaração de diligência.

**O que cruza** · literal do cliente
- O polígono do fornecedor com a perda de cobertura arbórea depois de 31/12/2020, mapeada pela Universidade de Maryland (Hansen/UMD), e com o PRODES e o DETER, do INPE
- A confirmação na série Sentinel-2 do próprio polígono, antes de qualquer veredito
- Terra indígena, unidade de conservação e embargo, como contexto

**O que entrega** · literal do cliente, mais o item que já existe
- Relatório por polígono, com mapa e veredito de triagem
- GeoJSON no formato europeu

**O que não faz** · literal do cliente
- Não substitui a declaração de diligência (DDS) nem a análise de legalidade completa.
- Não certifica conformidade com o EUDR.

**Diferença para o Mapa DDS** · TEXTO NOVO (a aprovar)
> O Mapa DDS, gratuito, é a versão de entrada: um CAR ou um polígono por vez, na tela. A Triagem EUDR é a versão completa, com confirmação na série Sentinel-2 e relatório por polígono.

**Norma: o que muda** · literal do cliente (P6)
> Exige que o exportador prove que a mercadoria não vem de área desmatada depois de 31/12/2020 e que foi produzida de acordo com a lei do país.

**Exemplos:** ainda nenhum (ver P32).

---

## Tecnologia (`/tecnologia/`) · P8

**Método de classificação dos alertas PRODES** · literal do cliente
> O PRODES, do INPE, é tratado como sinal. Cada polígono do PRODES depois do marco é conferido na série Sentinel-2 do próprio polígono antes de entrar no laudo: a nuvem é medida sobre o polígono, e a cena só é usada com pelo menos 70% dos pixels livres. Sem confirmação, o polígono aparece como "a confirmar", nunca como desmatamento. As duplicatas da base do PRODES são removidas antes da soma. As imagens vêm do catálogo público Earth Search, da Element 84.

- "31 de julho de 2019" sai da marca FONTES.
- Números da prova (200 CARs, 4.704 verificações) saem da P19.

---

## Como começar (`/como-comecar/`) · P9 (encerrada)

**O que a instituição envia na prova técnica** · aprovado pelo cliente
> Operações de uma safra encerrada, escolhidas pela instituição: a lista de CARs e, se houver, o polígono da gleba financiada (KML, KMZ, shapefile, GeoJSON ou WKT).

**Prazos:** o bloco sai da página. A oferta de prazo que vale é a do documento do cliente (piloto de até 50 imóveis em 60 dias, decisão 10), que já está nas etapas.

---

## Exemplos (`/exemplos/`) · P13 (encerrada)

Arquivos em `public/exemplos/`, conferidos em 14/11/2026: nenhum CPF e nenhum e-mail; o único CNPJ é o da IAGROSAT LTDA. Os dois laudos de Jataí foram recomprimidos (de cerca de 8 MB para cerca de 1 MB cada), sem perda visível.

| Produto | Caso (título) | Detalhe | Arquivo |
|---|---|---|---|
| Perícia Pré-Crédito | Imóvel sem ocorrência | 12 páginas · 22 ha | `pericia-sem-restricao-22ha.pdf` |
| Perícia Pré-Crédito | Perícia com a gleba financiada, Mato Grosso | 21 páginas · 853 ha | `pericia-gleba-financiada-mt-853ha.pdf` |
| Perícia Pré-Crédito | Imóvel com sobreposição de terra indígena | 12 páginas · 3,07 ha sobre terra indígena | `pericia-sobreposicao-terra-indigena-187ha.pdf` |
| Perícia Pré-Crédito | **Novo:** Perícia de imóvel de café, Minas Gerais | 12 páginas · 184 ha | `pericia-cafe-mg-184ha.pdf` |
| Perícia Pré-Crédito | **Novo:** Perícia de imóvel de pecuária na Amazônia (Pará) | 12 páginas · 11.145 ha | `pericia-pecuaria-amazonia-11mil-ha.pdf` |
| Laudo PRODES | Laudo PRODES, imóvel no Pará | 4 páginas · 2.876 ha · dois polígonos depois do marco | **sem link até a P32** (`prodes-confirmacao-sentinel-pa-2876ha.pdf`) |
| Laudo de Acompanhamento | Laudo de Acompanhamento, milho 2026, Jataí (GO) | 7 páginas · 306 ha financiados | `acompanhamento-milho-2026-jatai-go-306ha.pdf` |
| Laudo de Acompanhamento | Laudo de Acompanhamento, soja 2025/26, Jataí (GO) | 7 páginas · 348 ha financiados | `acompanhamento-soja-2025-26-jatai-go-348ha.pdf` |
| Perícia de Carteira | Resumo de carteira, 200 imóveis | 10 páginas | `carteira-200-imoveis-resumo.pdf` |
| Perícia de Carteira | Painel da carteira da cooperativa | 4 páginas | `cooperativa-painel-carteira.pdf` |
| Base Territorial GRSAC | Tabelas do GRSAC, carteira de teste de 200 imóveis | planilha · CARs reais, valores de exposição fictícios | `grsac-tabelas-carteira-teste-200-imoveis.xlsx` |
| Potencial de Carbono da Carteira | Viabilidade da carteira, 150 imóveis do Cerrado | 13 páginas | `carbono-viabilidade-carteira-150-imoveis-cerrado.pdf` |
| Potencial de Carbono da Carteira | Rascunho de PDD no modelo Verra | 28 páginas | `carbono-pdd-rascunho-vcs.pdf` |

- `prodes-confirmacao-sentinel-ac.pdf` (Acre) fica no repositório, fora da página, até a P32.
- Os títulos dos dois casos novos vêm do `docs/fontes/exemplos-LEIA.md` do cliente; a área vem do próprio PDF (184,6 ha e 11.144,7 ha).
- Tabela RSA1 de exemplo (25 · 8 · 20 · 0 · 42 · 71): conferida com a planilha do cliente; sai a P13.
- Todas as marcas P13 e P19 desta página saem.

---

## Sobre (`/sobre/`) · P10 · TEXTO NOVO (a aprovar)

Fonte: ORQUESTRADOR.md, seções 2.1 a 2.4 (o texto da linha do tempo indicado pelo cliente é da iAgroSat e não é usado).

> **Sobre a iAgroIntel**
>
> A iAgroIntel é a plataforma da iAgroSat para instituições que decidem sobre a terra dos outros: quem financia, compra, fiscaliza ou pesquisa.
>
> A iAgroSat atende quem cuida da própria terra. A iAgroIntel usa a mesma tecnologia, com imagens Sentinel-2 e uma base reconciliada de dados públicos, para organizar a evidência territorial de cada imóvel, com fonte e data.
>
> **Como trabalhamos**
> - Dizemos o que vimos, e até onde vimos.
> - A resposta vem antes da explicação.
> - Todo número vem com fonte e contexto.
> - Cada resultado é uma triagem: indica sinais e não constitui prova. A decisão é da instituição.
>
> **A empresa**
> IAGROSAT LTDA · CNPJ 61.579.333/0001-01. A iAgroIntel é uma plataforma iAgroSat.
>
> É produtor? Conheça a iAgroSat.

---

## Privacidade (`/privacidade/`) · P15

- Texto: a minuta do cliente, em português e em inglês, **literal**. Arquivos para baixar e guardar em `docs/fontes/`:
  - https://iagrointel.com/privacidade-iagrosat-82f4bce0e1bdf7c0/POLITICA_PRIVACIDADE.md
  - https://iagrointel.com/privacidade-iagrosat-82f4bce0e1bdf7c0/POLITICA_PRIVACIDADE_EN.md
- Rotas: `/privacidade/` (português) e `/privacidade/en/` (inglês), com link de uma para a outra. O resto do site fica só em português (P21).
- As duas páginas mantêm a faixa de rascunho e o noindex até o parecer do jurídico (a minuta ainda tem 18 itens marcados para confirmar, C01 a C18).

---

## Verificar laudo · P11 (aberta)

A página sai do site: menu, painel do menu, rota `/verificar/`, sitemap e qualquer link interno. A pendência continua aberta, com a resposta do cliente guardada no PENDENCIAS.md.

---

## Rodapé · P23

O botão do LinkedIn fica, sem endereço por enquanto: aparece sem link (sem `href`, com o rótulo acessível "LinkedIn da iAgroIntel, em breve"). A P23 continua aberta e bloqueia o lançamento.

---

## Ícones · P24 (encerrada)

Gerar a partir do `public/brand/favicon.svg` oficial, sem mudar o desenho: PNG 32 px, `apple-touch-icon` 180 px, 192 px e 512 px, e o `manifest.webmanifest`. Registrar os arquivos em `app/layout.tsx`.

---

## Regras da casa vindas da aba Furos (valem para todo o site)

| Furo | Regra |
|---|---|
| F5 | O site não mede acesso nem usa cookies. Se algum dia medir, entra aviso de consentimento antes |
| F6 | Número de embargo, se aparecer: só 115.863 CARs com embargo em vigor (outubro de 2026, 11 órgãos) |
| F7 | Nunca "dados licenciados" nem "base vendável" |
| F8 | "Triagem: sinal, não prova" em toda página de produto (já está na ressalva global) |
| F9 | Nenhum preço no site |
| F10 | Datas de referência só com mês e ano ("julho de 2026"). Prazos e marcos de norma e datas de acesso de fonte ficam com o dia |
| F12 | O site final é indexável: a faixa de rascunho e o noindex saem juntos (decisão 18) |

---

# Segunda rodada · 2026-11-15

Fontes: documento do cliente https://iagrointel.com/respostas-site-43cf99efd2dc667f/ (seções s1 a s5), `docs/fontes/exemplos-LEIA.md` (versão de 15/11/2026) e `docs/fontes/imagens/` (LEIA.md e um .txt por imagem). Decisões 40 a 42.

## Triagem EUDR · P7 (parte respondida)

- H2 de evidência: aprovado como está. Tira o comentário "a aprovar" e põe `// aprovado pelo cliente em 15/11/2026 (P7)`.
- "Diferença para o Mapa DDS": aprovado como está.
- **Sigla DDS por extenso na primeira menção da página** · literal do cliente:
> DDS é a declaração de diligência devida, exigida pelo regulamento europeu contra o desmatamento (EUDR).

  Onde: na primeira vez que "DDS" aparece na página da Triagem EUDR (hoje, o parágrafo "Diferença para o Mapa DDS"), como frase logo depois. Na página Exportação, a primeira menção é o cartão do Mapa DDS: o título do cartão é literal da página de ferramentas e não muda; a frase entra na descrição da seção Ferramentas gratuitas.
- Continua aberto na P7: como começa um exportador e para onde vai o botão de chamada.

## Sobre · P10 (encerrada) · literal do cliente

Substitui o rascunho da Synthix. A página perde a faixa de rascunho e o noindex próprio (o noindex global da decisão 39 continua).

> A iAgroIntel é a plataforma da iAgroSat para instituições que decidem sobre imóveis rurais de terceiros. Ela atende quem financia, compra, fiscaliza ou pesquisa.
>
> A iAgroSat atende o produtor que cuida da própria terra. As duas usam a mesma tecnologia. A iAgroIntel junta imagens Sentinel-2 e uma base de dados públicos oficiais, conferidos entre si, e organiza a evidência territorial de cada imóvel com fonte e data.
>
> **Como trabalhamos**
> - Dizemos o que vimos e até onde vimos.
> - A resposta vem antes da explicação.
> - Todo número vem com fonte e contexto.
> - Cada resultado é uma triagem. Ele indica sinais e não constitui prova. A decisão é da instituição.

O bloco "A empresa" (IAGROSAT LTDA · CNPJ) e o link "É produtor? Conheça a iAgroSat." ficam como estão.

## Laudo PRODES · P32 (encerrada)

**Exemplo:** passa a ser `laudo-prodes-marco-2019-pa-2876ha.pdf`.

| Caso (título) | Detalhe |
|---|---|
| Laudo PRODES, imóvel no Pará | 5 páginas · 2.876 ha · marco do crédito rural, 31/07/2019 |

Sai a etiqueta P32.

**Na operação** · TEXTO NOVO (aprovado em 15/11/2026, P32). Parágrafo no fim da seção Norma relacionada, depois da tabela. Escrito pela Synthix a partir da frase obrigatória do cliente (s3), ajustada às regras do site (decisão 41):
> Sem desmatamento depois de 31/07/2019, o laudo entrega à instituição a evidência polígono a polígono, com imagem, fonte e data, para a verificação do item 17 da Seção 9 do Manual de Crédito Rural. Com desmatamento, o laudo mostra onde e em que janela de tempo ele aconteceu, e o crédito com recursos controlados ou direcionados passa a depender de documento do órgão ambiental que comprove a regularidade da supressão, como a autorização de supressão de vegetação (ASV) ou o termo de compromisso ambiental.

## Triagem EUDR · exemplos (P32)

Os dois PDFs de confirmação de desmatamento passam para a Triagem EUDR. Isso preenche o "A DEFINIR" de Exemplos (sai a marca P32).

| Caso (título) | Detalhe | Arquivo |
|---|---|---|
| Confirmação de desmatamento por imóvel, Pará | 4 páginas · 2.876 ha · data de corte do EUDR, 31/12/2020 | `prodes-confirmacao-sentinel-pa-2876ha.pdf` |
| Confirmação de desmatamento por imóvel, Acre | 16 páginas · data de corte do EUDR, 31/12/2020 | `prodes-confirmacao-sentinel-ac.pdf` |

Na página /exemplos/, os dois entram no grupo da Triagem EUDR.

## Exemplos corrigidos · P33 (encerrada)

Arquivos substituídos em `public/exemplos/` com os mesmos nomes (sem "beta privado", sem códigos internos, nome "Laudo de Acompanhamento"). Os dois de Jataí foram recomprimidos de novo (cerca de 1 MB cada).
- `carbono-viabilidade-carteira-150-imoveis-cerrado.pdf`: o detalhe passa de "13 páginas" para **"24 páginas"**.
- Os outros três mantêm o número de páginas.

## Imagens Sentinel-2 · P14 (encerrada)

Arquivos em `public/imagens/`, convertidos dos JPG do cliente para WebP (qualidade 80), duas larguras cada:

| Página | Arquivos | Tamanho (px) |
|---|---|---|
| Perícia Pré-Crédito | `01-pericia-pre-credito-2400.webp` · `-1600.webp` | 2400 × 1574 · 1600 × 1049 |
| Laudo PRODES | `02-laudo-prodes-2400.webp` · `-1600.webp` | 2400 × 1565 · 1600 × 1043 |
| Perícia de Carteira | `03-pericia-carteira-2400.webp` · `-1600.webp` | 2400 × 1575 · 1600 × 1050 |
| Laudo de Acompanhamento | `04-laudo-acompanhamento-2400.webp` · `-1600.webp` | 2400 × 1564 · 1600 × 1043 |
| Potencial de Carbono da Carteira | `05-potencial-carbono-2400.webp` · `-1600.webp` | 2400 × 1581 · 1600 × 1054 |
| Base Territorial GRSAC | `06-base-territorial-grsac-2400.webp` · `-1600.webp` | 2400 × 1570 · 1600 × 1047 |
| Triagem EUDR | `07-triagem-eudr-2400.webp` · `-1600.webp` | 2400 × 1593 · 1600 × 1062 |
| Crédito rural | `08-credito-rural-2400.webp` · `-1600.webp` | 2400 × 1583 · 1600 × 1055 |

Dados de cada imagem: o .txt de mesmo nome em `docs/fontes/imagens/` (literal do cliente).
- **Município e UF da legenda:** o que ocupa a maior parte do quadro (o primeiro da linha "local").
- **Data:** "data da cena". **Sensor:** a linha "sensor" (ex.: "Sentinel-2B (MSI, nível L2A)"). **Bandas:** a linha "composição" até "10 m".
- **Texto alternativo:** a linha "o que se vê".
- **Atribuição:** a linha exata do .txt ("Contém dados Copernicus Sentinel modificados 2024, processados pela iAgroSat"; 2025 no Laudo de Acompanhamento).
- **Exceção da Triagem EUDR** (pedido do cliente, s4): a legenda descreve a região, não cada talhão:
> Região cafeeira de Patrocínio (MG), culturas perenes ao lado de matas de galeria.

A home não tem imagem nesta rodada (P34 continua aberta).
