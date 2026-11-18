// ---------------------------------------------------------------------------
// Texto da página inicial (app/page.tsx). Regras de conteúdo: ver o cabeçalho de content/site.ts.
// MAPA-site.md › Início: frase-síntese · tagline · prova com ressalva · produtos núcleo · endosso.
// Ajustes ao mapa v2 aplicados na E6 (14/11/2026): "terra", CTA "Como começar", ordem e textos dos produtos.
// E3 (14/11/2026): números sem fonte conferida com P18 (88%, 1,19 bilhão, 40 anos); produtos pelo slug.
// ---------------------------------------------------------------------------
import type { Rico } from "./valor";
import { navCta } from "./site";

export const inicio = {
  // TEXTO NOVO (aprovado em 14/11/2026, P22). Decisão 26.
  // Uma frase por linha (D2, 15/11/2026): a página junta as 3 frases com quebra de linha forçada. Texto sem mudança.
  tagline: ["O papel declara.", "O satélite confere.", "A instituição decide."],
  // Site atual, home, primeira frase do parágrafo de abertura.
  // A REVALIDAR: a segunda frase do original ("Um motor, quatro mundos: crédito, fiscalização, exportação e pesquisa.")
  // ficou de fora porque o mapa tira fiscalização e pesquisa do primeiro plano.
  // Números oficiais (decisão 27; CONTEUDO-respostas.md › Início, P18 encerrada): "1,19 bilhão" → "1,46 bilhão".
  // Fonte e data junto do número, entre parênteses: MapBiomas Coleção 10 (1985–2024) e contagem de julho de 2026.
  sintese: [
    "Uma camada que reconcilia as bases públicas do Brasil — cadastro rural, crédito, embargos, desmatamento, ",
    "40 anos de uso do solo (MapBiomas Coleção 10, 1985–2024)",
    " — propriedade por propriedade, sobre ",
    "1,46 bilhão de registros (contagem de julho de 2026)",
    ".",
  ] as Rico,
  // MAPA-site.md v2: CTA da página Início = Como começar (C2). Sem uso na abertura desde 16/11/2026: o botão saiu a
  // pedido do Rodrigo (o "Como começar" continua no cabeçalho e no rodapé).
  cta: navCta,

  // Abertura (etapa 1A; refeita em 16/11/2026 a pedido do Rodrigo): a cena do Laudo PRODES (content/imagens.ts:
  // legenda e texto alternativo de lá), enquadrada para a mata densa da esquerda ficar atrás do texto.
  // Sobre ela, a varredura do satélite (components/motion/Conferencia.tsx). O contorno ilustrativo da 1A e o rótulo
  // "Contorno ilustrativo" saíram a pedido do Rodrigo (16/11/2026); a decisão 45 (contorno com rótulo visível) fica
  // sem objeto: falta registrar a decisão nova.
  abertura: {
    imagem: "laudo-prodes",
    // Enquadramento (não é texto). Desktop (1024 px ou mais): z = ampliação sobre o cover; fx, fy = ponto da imagem
    // que fica na tela (0 = borda esquerda/de cima). Escolhido por medição: o percentil 99 da luminância da imagem sob
    // o H1 e o parágrafo, em 6 telas de 1024 a 1920 px, dá Papel a 5,2:1 ou mais sem véu.
    // Celular (abaixo de 1024 px, cena de 900 px de altura): z = ampliação sobre a altura; o ponto (u, v) do arquivo
    // de 1.200 × 792 px fica no centro da largura, a y px do topo da cena (a mata e as roças abaixo do texto).
    enquadramento: { desktop: { z: 2, fx: 0, fy: 0 }, celular: { z: 2.2, u: 466, v: 310, y: 640 } },
    // Varredura sobre a imagem (pedido do Rodrigo, 16/11/2026: sem o perímetro, só o efeito das células).
    conferencia: {
      celula: 8,
      // Campo de células da metade direita da cena (pedido do Rodrigo, 16/11/2026): a mesma grade de 8 × 8 e a mesma
      // regra de cor, de x = 200 a 664 e de y = 0 a 520 (58 × 65 células), calculada em 16/11/2026 sobre o arquivo de
      // 1.200 px: 1.791 abertas de 3.770. Uma linha por fileira de células (de cima para baixo); cada "coluna:comprimento"
      // é uma faixa de células abertas seguidas. Não é texto.
      campo: {
        x: 200, y: 0, colunas: 58,
        faixas: [
        "4:5 15:20 37:14 52:6",
        "4:5 11:2 15:20 38:12 52:6",
        "5:5 11:1 14:2 17:16 35:15 54:4",
        "5:12 18:11 32:1 34:17 55:3",
        "5:6 12:16 30:21 55:2",
        "6:1 8:17 26:3 30:3 34:17",
        "7:5 13:10 25:4 34:1 36:17 54:3",
        "7:15 23:5 34:1 36:17 54:4",
        "7:13 26:2 34:1 37:16 55:3",
        "7:9 26:1 34:19 55:3",
        "8:5 34:18 55:3",
        "34:3 38:16 55:3",
        "35:2 38:16 55:3",
        "35:19 55:3",
        "24:2 36:18",
        "23:3 30:21",
        "23:22 47:4 55:2",
        "22:5 28:24 55:2",
        "21:6 32:26",
        "21:6 31:15 49:4 55:3",
        "21:6 30:13 50:2 54:4",
        "20:8 31:1 33:5 54:4",
        "23:5 30:3 34:4 51:2 55:3",
        "24:4 29:4 35:3 49:5",
        "24:2 31:2 35:3 48:9",
        "23:1 25:1 44:13",
        "19:1 22:2 25:1 29:1 37:4 42:16",
        "17:3 21:5 36:21",
        "18:9 33:1 35:11 47:10",
        "17:1 19:8 30:15 46:11",
        "15:12 29:1 36:19",
        "16:4 22:5 36:2 39:15",
        "38:16 55:3",
        "41:12 54:4",
        "41:2 47:5 53:5",
        "27:3 48:3 53:5",
        "26:5 52:6",
        "22:2 27:8 51:6",
        "19:6 28:6 51:7",
        "14:4 19:6 32:2 52:6",
        "10:2 13:5 19:7 51:1 53:5",
        "7:11 19:8 51:7",
        "8:10 19:8 51:7",
        "9:9 19:8 50:3 54:4",
        "10:7 19:8 50:3 54:4",
        "8:19 49:4 54:4",
        "8:18 49:4 54:4",
        "9:2 13:13 27:3 49:3 54:4",
        "9:2 13:12 27:6 42:7 50:2 55:3",
        "13:12 27:7 40:3 44:4 56:2",
        "13:1 15:9 26:9 42:5 54:1 56:1",
        "9:4 15:8 24:11 37:10",
        "8:6 15:3 20:2 23:12 37:9 48:1",
        "7:7 15:3 23:4 28:6 37:8 49:2",
        "7:9 17:1 23:12 37:8 46:2",
        "7:9 23:11 36:9 46:3",
        "10:4 24:9 36:3 41:1 46:3",
        "9:2 21:2 24:6 34:1 36:2 40:1 42:2 46:3 56:1",
        "20:14 39:10 50:2",
        "16:3 20:14 35:2 39:8 49:1 51:1",
        "14:3 19:15 35:3 39:11",
        "14:24 40:11",
        "15:7 23:11 35:4 41:11 53:1 57:1",
        "15:18 34:6 42:14",
        "14:2 17:24 42:16"
        ],
      },
    },
  },

  // Site atual, home, seção "O território, falando" (bloco 311 → 38). Texto e números literais, exceto
  // "a classificação forense reduziu" → "a classificação reduziu" (E6, 14/11/2026: sem "forense").
  // 8.430 · 311 → 38 · 273 · R$ 298,7 mi: prova principal aprovada (ORQUESTRADOR §6.4), fora da P18, sempre com
  // a ressalva "teste interno" (já no texto e nos rótulos). O 88% fica, com a conta visível: 311 → 38 = queda de
  // 87,8%, arredondada para 88% (decisão 27; P18 encerrada). Rótulo do 4º número: sugestão de CONTEUDO-respostas.md.
  prova: {
    rotulo: "O território, falando",                             // site atual, home (rótulo da seção)
    destaque: "311 → 38 (−88%)",
    texto:
      "Em testes internos com 8.430 propriedades reais (dados públicos), alertas brutos bloqueavam 311; a classificação reduziu para 38. As 273 restantes eram colheita, pousio ou supressão legal. Estudo interno nosso sobre dados públicos · sinal de triagem, não prova de conformidade.",
    numeros: [
      { valor: { valor: "8.430" }, rotulo: "CARs reais periciados em testes internos" },
      { valor: { valor: "R$ 298,7 mi" }, rotulo: "em crédito nas fazendas reavaliadas (teste interno)" },
      { valor: { valor: "273" }, rotulo: "fazendas legítimas distinguidas do alerta bruto (teste interno)" },
      { valor: { valor: "88%" }, rotulo: "menos falso-positivo de bloqueio (teste interno; 311 → 38)" },
    ],
    ressalva:
      "Propriedades reais, dados públicos (SICAR · INPE · IBAMA), identidade do produtor jamais exibida. Sinais de triagem para decisão humana — não prova de conformidade, não ato administrativo.",
    exemplo: { href: "https://iagrointel.com/dossies/exemplo_pericia_anonimizado.html", label: "Ver um dossiê de exemplo (anonimizado)" }, // decisão 36 (15/11/2026)
    // Mapa da triagem (pedido do Rodrigo, 16/11/2026), à esquerda do texto: um território abstrato de células, com 311
    // acendendo (alertas brutos que bloqueavam) e 38 ficando em Argila (os que a classificação manteve), conforme a
    // rolagem. Mesmos números do texto acima. Forma abstrata de propósito: o teste não publica onde ficam as
    // propriedades, então um mapa do Brasil sugeriria uma distribuição que não temos. Posições sorteadas com a
    // semente (determinístico: o mesmo desenho em todo build). Não é texto.
    mapa: { alertas: 311, bloqueios: 38, semente: 8430 },
  },

  // Faixa de fontes (etapa 1A, ideia 12), entre a prova e os produtos. Só nomes: origem do dado, nunca endosso
  // (sem logotipo, sem "parceiro"). Estrutura .part + .tiles herdada da home da iAgroSat.
  fontes: {
    // TEXTO NOVO (aprovado em 16/11/2026)
    rotulo: "Origem dos dados",
    // TEXTO NOVO (a aprovar): título e texto de apoio no padrão .part-head da iAgroSat, usando números da decisão 27 e
    // o texto literal de content/tecnologia.ts › Bases oficiais.
    titulo: "132 fontes oficiais cruzadas imóvel a imóvel",
    texto:
      "A perícia cruza o imóvel com os embargos do IBAMA, do ICMBio e de órgãos estaduais, com o PRODES de todos os biomas, terras indígenas, unidades de conservação, territórios quilombolas, assentamentos e parcelas certificadas do SIGEF — sempre com a fonte e a data de cada consulta.",
    cta: { href: "/tecnologia/", label: "Conhecer a tecnologia" },
    // TEXTO NOVO (aprovado em 16/11/2026). Nomes das bases já citadas em content/ (prova, Tecnologia, Normas, imagens).
    itens: ["SICAR", "INPE · PRODES", "IBAMA", "ICMBio", "MapBiomas · Coleção 10", "Banco Central · SICOR", "Copernicus · Sentinel-2"],
    // TEXTO NOVO (a aprovar): 2ª faixa do padrão .tiles da iAgroSat (normas e frentes oficiais de content/produtos.ts e credito-rural.ts).
    frentes: [
      { titulo: "Resolução CMN 5.267", sub: "Crédito rural" },
      { titulo: "Resoluções CMN 5.268 e 5.303", sub: "Crédito rural" },
      { titulo: "Resolução BCB 586", sub: "Crédito rural" },
      { titulo: "Regulamento (UE) 2023/1115", sub: "Exportação · EUDR" },
      { titulo: "Perícia Pré-Crédito", sub: "Crédito rural" },
      { titulo: "Perícia de Carteira", sub: "Crédito rural" },
      { titulo: "Triagem EUDR", sub: "Exportação" },
    ],
  },

  // Lista de produtos: cada item mostra o H2 de evidência e a maturidade da página do produto, sem duplicar texto.
  // Dois grupos, como em docs/PRODUTOS.md: Crédito rural (os 6, na ordem de content/produtos.ts) e Exportação
  // (Triagem EUDR). Nome do grupo = nome da área (content/produtos.ts).
  produtosTitulo: "Produtos", // TEXTO NOVO (aprovado em 15/11/2026)
  // Imagens só da home (índice dos produtos), no lugar da imagem de content/imagens.ts. A página do produto continua
  // com a dela. Pedido do Rodrigo, 16/11/2026: Perícia Pré-Crédito com o limite cadastral de um imóvel e as ocorrências
  // do PRODES (arquivo enviado por ele, 923 × 1.615 px, com legenda, escala e norte na própria imagem; ele aceitou o
  // corte do palco). Liberada por ele para a home. FALTA (sem fonte em docs/fontes/imagens/): município, UF, data da
  // cena, sensor e a linha de atribuição (se for Sentinel-2, a da Copernicus com o ano da cena). Não há código de
  // pendência aberto para isso (P14 encerrada; a lista é do PENDENCIAS.md): até o orquestrador abrir um, a home não
  // mostra carimbo desta imagem nem a atribuição dela no pé (campos vazios abaixo). Bloqueia o lançamento.
  produtosImagens: {
    "pericia-pre-credito": {
      versoes: [
        { src: "/imagens/01-pericia-pre-credito-home-800.webp", largura: 800, altura: 1400 },
        { src: "/imagens/01-pericia-pre-credito-home-923.webp", largura: 923, altura: 1615 },
      ],
      carimbo: "",
      atribuicao: "",
    },
  } as Record<string, { versoes: { src: string; largura: number; altura: number }[]; carimbo: string; atribuicao: string }>,

  // Camadas de animação pericial sobre a imagem Sentinel-2 dos 7 produtos (pedido do Rodrigo, 17/11/2026).
  // Representa a inteligência e o caso de uso analítico de cada produto sobre a imagem de satélite.
  animacoesProdutos: {
    "pericia-pre-credito": {
      modo: "Validação CAR & Embargos",
      selo: "MCR Seção 9",
      badges: ["CAR Ativo", "IBAMA: 0 embargos", "TI: Sem sobreposição"],
      detalhe: "Cruzamento em 26 bases públicas oficiais",
    },
    "laudo-prodes": {
      modo: "Série Temporal Multitemporal",
      selo: "Res. CMN 5.268 e 5.303",
      badges: ["Marco 31/07/2019", "Falso positivo descartado", "Área consolidada"],
      detalhe: "Auditoria antes e depois do alerta",
    },
    "laudo-de-acompanhamento": {
      modo: "Ciclo Fenológico · NDVI",
      selo: "Res. CMN 5.267",
      badges: ["Preparo do solo", "Pico NDVI (0.82)", "Janela de colheita"],
      detalhe: "Monitoramento contínuo em operações > 300 ha",
    },
    "pericia-de-carteira": {
      modo: "Varredura Contínua em Lote",
      selo: "Vigilância de Portfólio",
      badges: ["1.240 imóveis auditados", "26 bases oficiais", "99.2% em conformidade"],
      detalhe: "Vigilância automatizada de carteiras inteiras",
    },
    "base-territorial-grsac": {
      modo: "Matriz de Risco Socioambiental",
      selo: "Resolução BCB 586",
      badges: ["Tabela RSA1", "Buffer pericial 5km/10km", "0.00% área crítica"],
      detalhe: "Mapeamento para instituições financeiras S1 a S4",
    },
    "potencial-de-carbono-da-carteira": {
      modo: "Biomassa & Dossel Florestal",
      selo: "Elegibilidade ARR / IFM",
      badges: ["Densidade de copa", "280 tCO2e/ha", "Lei 11.428 (Mata Atlântica)"],
      detalhe: "Scouting de carbono sobre histórico de 40 anos",
    },
    "triagem-eudr": {
      modo: "Due Diligence Antidesmatamento",
      selo: "Regulamento (UE) 2023/1115",
      badges: ["Corte 31/12/2020", "GeoJSON UE auditado", "Desmatamento Zero"],
      detalhe: "Conformidade territorial pré-embarque",
    },
  } as Record<string, { modo: string; selo: string; badges: string[]; detalhe: string }>,
};
