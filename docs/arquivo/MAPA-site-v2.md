# Mapa do site — iagrointel.com

Atualizado: 2026-11-13 · **v2, aprovada pela decisão 5 (DECISOES-iagrointel.md), com C1 e C2.** Substitui a v1 (decisão 3). As URLs dos produtos podem mudar conforme a P11 (Perícia × Dossiê).

## O que mudou da v1 para a v2

Fonte da revisão: página de prévia `iagrointel.com/iagrointel-cooperativas-43d07d5fa0bd727b/` ("iAgroIntel Crédito Rural", noindex, rodapé "novembro de 2026"). A prévia já está escrita e vira a base da página Crédito rural. Conteúdo estruturado em `PREVIA-cooperativas.md`.

1. **Crédito rural** passa a seguir a estrutura da prévia: hero com imagem de satélite → indicadores com fonte → normas e datas → produtos → como começar → ressalva.
2. **Nova página `/credito-rural/cooperativas`**, para o segmento que a prévia trata primeiro. Recebe a URL de prévia por redirecionamento 301.
3. **Nova página `/como-comecar`**, com as quatro etapas: conversa → prova técnica sem custo → piloto → contrato. Vira o CTA principal do site.
4. **Nova página `/exemplos`**, com todos os laudos de exemplo da prévia (com nº de páginas), marcados como exemplo. Depende da P07.
5. **Projeto de Carbono ganha página própria** em `/outras-aplicacoes/projeto-de-carbono`, porque já existe material (viabilidade de 150 imóveis, rascunho de PDD). Na Crédito rural, aparece como bloco curto ("a mesma carteira também mostra..."), **não** como sétimo produto núcleo. Ver conflito C1.
6. **O modelo de página de produto ganha** "O que cruza", "Formatos de entrega", "O que não faz" (bloco fixo) e "Exemplos" (vários por produto).
7. **A ressalva final da prévia vira componente global** em todas as páginas de produto: "Nenhum resultado decide crédito...".
8. **Ordem dos produtos** passa a ser a da prévia: Pré-Crédito → PRODES → Acompanhamento → Carteira → GRSAC.

## Páginas

| Página | URL | Objetivo | Seções | CTA |
|---|---|---|---|---|
| Início | `/` | Dizer em uma frase o que a iAgroIntel faz | Frase-síntese · tagline (P03) · prova com ressalva · produtos núcleo · endosso iAgroSat | Como começar |
| **Crédito rural** (página principal) | `/credito-rural` | Mostrar a obrigação regulatória e os produtos | Ver estrutura detalhada abaixo | Ver os produtos · Como começar |
| **Cooperativas de crédito** *(nova)* | `/credito-rural/cooperativas` | Falar com a cooperativa: carteira, porte, prova com as próprias operações | Ver estrutura detalhada abaixo | Como começar |
| Perícia Pré-Crédito | `/credito-rural/pericia-pre-credito` | Página de produto | Modelo de produto | Como começar |
| Laudo PRODES | `/credito-rural/laudo-prodes` | idem | idem | idem |
| Laudo de Acompanhamento | `/credito-rural/laudo-de-acompanhamento` | idem | idem | idem |
| Perícia de Carteira | `/credito-rural/pericia-de-carteira` | idem (cooperativa: carteira; banco: lote) | idem | idem |
| Base Territorial GRSAC | `/credito-rural/base-territorial-grsac` | idem | idem | idem |
| Exportação e EUDR | `/exportacao` | Triagem de fornecedores | Problema · Triagem EUDR · ferramentas gratuitas (DDS no mapa, gerador GeoJSON) | Usar ferramenta / Como começar |
| Triagem EUDR | `/exportacao/triagem-eudr` | Página de produto | Modelo de produto | Como começar |
| Outras aplicações | `/outras-aplicacoes` | Segunda camada, sem destaque | Projeto de Carbono · Inteligência Territorial | Contato |
| **Projeto de Carbono** *(nova)* | `/outras-aplicacoes/projeto-de-carbono` | Página de produto da segunda camada | Modelo de produto | Contato |
| **Como começar** *(nova)* | `/como-comecar` | Converter: mostrar o caminho até o contrato | 4 etapas · o que a instituição envia na prova técnica · prazos · formulário | Pedir a prova técnica |
| **Exemplos de laudo** *(nova)* | `/exemplos` | Biblioteca de saídas de exemplo, por produto | Cards: produto · caso · nº de páginas · PDF · marca "exemplo" | Ver PDF |
| Tecnologia | `/tecnologia` | Apresentar "a tecnologia iAgroSat" | Base reconciliada (fontes públicas, P01) · método · o que cada modelo é e o que não é · imagens Sentinel-2 / atribuição Copernicus (P18) · hash de verificação · origem dos dados (terceiros como fonte, nunca como parceiros) | — |
| Normas | `/normas` | Calendário regulatório | Uma linha por norma, com fonte e data conferidas (FONTES-regulatorias.md) | — |
| Verificar laudo | `/verificar` | Conferência pública por hash | Campo de hash · resultado · explicação | Verificar |
| Sobre | `/sobre` | A iAgroSat, princípios, dados da empresa | — | — |
| Contato | `/contato` | Formulário B2B geral | — | Enviar |
| Privacidade · Termos | `/privacidade`, `/termos` | LGPD | — | — |

## Estrutura de `/credito-rural` (a partir da prévia)

1. **Hero** — rótulo "iAgroIntel · crédito rural" · H1 "Evidência territorial para cada operação de crédito rural" · texto sobre as três normas e a verificação de imóvel, gleba ou carteira, com fonte e data em cada item · CTAs "Ver os produtos" e "Como começar" · imagem Sentinel-2 com a gleba financiada desenhada.
2. **Indicadores** — 4 números com fonte (SICOR/BCB, SICAR) e **data de referência** visível. Sujeito à P01 e à P23.
3. **As normas e as datas** — H2 com a primeira data obrigatória · tabela curta (5.267; 5.268 e 5.303; BCB 586) · link para `/normas`. Nenhuma data entra sem linha em FONTES-regulatorias.md.
4. **O risco de errar para os dois lados** (herdado da v1) — liberar crédito com problema × negar crédito a imóvel regular por alerta não confirmado.
5. **Produtos** — um bloco por produto núcleo, na ordem: Perícia Pré-Crédito · Laudo PRODES · Laudo de Acompanhamento · Perícia de Carteira · Base Territorial GRSAC. Cada bloco: H2 de evidência (frase com número ou fato), o que cruza, entrega, "não faz", 1–3 exemplos → link para a página do produto.
6. **A mesma carteira também mostra carbono** — bloco curto do Projeto de Carbono (excedente de vegetação nativa) → link para a página dele.
7. **Para cooperativas** — chamada para `/credito-rural/cooperativas`.
8. **Como começar** — as 4 etapas em resumo → link para `/como-comecar`.
9. **Ressalva** — componente global.

## Estrutura de `/credito-rural/cooperativas` (nova)

1. **Hero** do segmento — a cooperativa e as normas que mudam a verificação antes e depois da concessão.
2. **Indicador do segmento** — participação das cooperativas no crédito rural (prévia: 22,3% de 2025, 390 cooperativas; P01/P23).
3. **Da operação à carteira** — Perícia Pré-Crédito e Laudo PRODES na operação; Perícia de Carteira no conjunto ("painel da cooperativa").
4. **GRSAC conforme o porte** — Base Territorial GRSAC; a cooperativa completa os dados internos e responde pela divulgação.
5. **A cooperativa que compra das duas marcas** (herdado da v1) — o cooperado produtor conhece a iAgroSat; a cooperativa usa a iAgroIntel.
6. **A prova é feita com as operações da própria cooperativa** — Como começar.
7. **Ressalva**.

Bancos: a v2 não cria `/credito-rural/bancos`. O lote do banco fica dentro da Perícia de Carteira. Se o segmento crescer, a página entra na v2.1.

## Modelo de página de produto (v2)

1. **Problema** — H2 de evidência, no padrão da prévia (ex.: "Um CAR, 26 fontes públicas, e cada ocorrência com fonte, data e hectares").
2. **O que cruza** — bases e método, em uma lista curta.
3. **O que entrega** — formatos (PDF, JSON, planilha, imagem Sentinel-2, hash de verificação).
4. **O que não faz** — bloco fixo, sempre visível (ex.: não decide crédito; não é perícia judicial; não usa dado pessoal).
5. **Exemplos** — 1 a 3 laudos de exemplo com nº de páginas, identificados como exemplo (P07) → `/exemplos`.
6. **Norma relacionada** — com fonte (FONTES-regulatorias.md); nunca "cumpre a norma X".
7. **Maturidade** (P09).
8. **Como começar** + **ressalva global**.

**Ressalva global (componente):** "Nenhum resultado decide crédito. A iAgroIntel organiza evidência com fonte e data, e a decisão cabe à instituição. Os resultados são triagem: indicam sinais e não constituem prova."

## Navegação

- **Menu:** Crédito rural · Exportação · Tecnologia · Normas · Verificar laudo · **Como começar** (botão)
  - Mudança da v1: "Contato" sai do menu e vai para o rodapé; o botão passa a ser "Como começar", que tem formulário.
  - Submenu de Crédito rural: Cooperativas · os 5 produtos · Exemplos.
- **Rodapé:** Sobre · Exemplos · Outras aplicações · Contato · Privacidade · Termos · "É produtor? Conheça a iAgroSat." · IAGROSAT LTDA · CNPJ 61.579.333/0001-01 · endosso "uma plataforma iAgroSat"
  - O rodapé da prévia ("iAgroSat LTDA · iAgroIntel · novembro de 2026") é substituído pelo rodapé jurídico aprovado.

## Redirecionamentos

| De | Para | Motivo |
|---|---|---|
| `/iagrointel-cooperativas-43d07d5fa0bd727b/` | `/credito-rural/cooperativas` (301) | A prévia pode ter sido enviada a cooperativas; o link não pode quebrar no lançamento |

## Ajustes de texto ao migrar a prévia

A prévia usa nomes fora da nomenclatura oficial (NOMENCLATURA-produtos.md). Na migração:

| Na prévia | Nome oficial | Regra |
|---|---|---|
| Consulta PRODES | **Laudo PRODES** | "Consulta PRODES" é nome aposentado |
| Laudo acima de 300 ha (Resolução 5.267) | **Laudo de Acompanhamento** | Nome sem número de norma; a norma vai na seção "Norma relacionada" |
| Carteira da cooperativa e lote do banco | **Perícia de Carteira** *(P11)* | Um nome por produto; os dois públicos aparecem no texto |
| Base do relatório GRSAC | **Base Territorial GRSAC** | Decisão 2 |
| Carbono na carteira | **Projeto de Carbono** | Nome oficial da segunda camada |
| "Perícia Pré-Crédito" | mantém, sujeito à P11 | — |

Os números e datas da prévia entram marcados PENDENTE até a conferência (P01, P23 e FONTES-regulatorias.md).

## Conflitos com a v1 (resolvidos pela decisão 5: recomendações aprovadas)

- **C1. Carbono na Crédito rural.** A decisão 3 deixa o carbono "sem destaque" em Outras aplicações. A prévia o trata como produto 7 da página de crédito. **Recomendação:** página própria em Outras aplicações + bloco curto na Crédito rural, fora da lista de produtos núcleo. O foco em obrigação regulatória se mantém e o material não se perde.
- **C2. CTA principal.** A v1 usava "Pedir demonstração"; a prévia usa "Como começar", com prova técnica sem custo. **Recomendação:** adotar "Como começar" em todo o site, se a oferta de prova sem custo e o piloto (até 50 imóveis em 60 dias) estiverem confirmados (P24).

## Fora do mapa

Linhas fora do agro (linha de transmissão, cooperativas de energia, empresa por CNPJ, perfil de município). A recomendação vigente é tratá-las como projetos sob medida (P04).

## Em aberto

- Idiomas da v1 e estrutura de URL por idioma (P05).
- Destino dos formulários de Contato e Como começar (P06).
- Laudos de exemplo da prévia: anonimização de casos reais (CARs reais, imóveis no Pará, MT, Jataí-GO) (P07).
- Números da prévia com data de referência (P01, P23).
- Confirmação comercial da prova técnica sem custo e do piloto (P24).
