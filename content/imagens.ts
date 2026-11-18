// ---------------------------------------------------------------------------
// Imagens Sentinel-2 da abertura (P14 encerrada, decisão 42): uma por página, em Crédito rural e nos 7 produtos.
// Dados: o .txt de mesmo nome em docs/fontes/imagens/ (literal do cliente), pelas regras de docs/CONTEUDO-respostas.md ›
// Segunda rodada › Imagens Sentinel-2:
// - município e UF: o que ocupa a maior parte do quadro (o primeiro da linha "local");
// - data: "data da cena" (AAAA-MM-DD aqui; a legenda mostra DD/MM/AAAA);
// - sensor: a linha "sensor"; bandas: a linha "composição" até "10 m" (registrada; não vai na legenda);
// - mostra: a linha "o que se vê" (texto alternativo);
// - atribuicao: a linha exata do .txt (o ano tem de ser o da data da cena; o build confere);
// - regiao: só na Triagem EUDR (pedido do cliente): a legenda descreve a região no lugar do município.
// Arquivos: WebP em public/imagens/, quatro larguras (800, 1.200, 1.600 e 2.400 px), com a altura de cada arquivo.
// Sem `versoes`, a página mostra o espaço reservado (ph-), sem legenda. Com versões, o build falha se faltar campo.
// ---------------------------------------------------------------------------

export type VersaoImagem = { src: string; largura: number; altura: number };

export type ImagemSentinel = {
  versoes: VersaoImagem[];  // da menor para a maior; a menor é o src padrão
  municipio: string;
  uf: string;
  data: string;             // data da cena, AAAA-MM-DD
  sensor: string;
  bandas: string;
  mostra: string;           // texto alternativo
  atribuicao: string;       // linha exata do .txt
  regiao?: string;          // legenda de região no lugar de "município (UF)" (Triagem EUDR)
};

const ATR_2024 = "Contém dados Copernicus Sentinel modificados 2024, processados pela iAgroSat";
const BANDAS = "cor verdadeira, B4 (vermelho) / B3 (verde) / B2 (azul), 10 m";
// Alturas de cada arquivo, na ordem das larguras 800, 1.200, 1.600 e 2.400 px.
const LARGURAS = [800, 1200, 1600, 2400];
const versoes = (nome: string, alturas: [number, number, number, number]): VersaoImagem[] =>
  LARGURAS.map((largura, k) => ({ src: `/imagens/${nome}-${largura}.webp`, largura, altura: alturas[k] }));

// Chave: "credito-rural" (abertura de /credito-rural/) ou o slug do produto (content/produtos.ts).
export const imagensSentinel: Record<string, ImagemSentinel> = {
  // 01_pericia_pre_credito.txt (Chapadão do Sul, 80,7 % do quadro)
  "pericia-pre-credito": {
    versoes: versoes("01-pericia-pre-credito", [525, 787, 1049, 1574]),
    municipio: "Chapadão do Sul", uf: "MS", data: "2024-07-28", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Talhões de grãos na entressafra com limites nítidos, entremeados por blocos e faixas de vegetação nativa do Cerrado e matas ao longo dos córregos.",
    atribuicao: ATR_2024,
  },
  // 02_laudo_prodes.txt (Novo Progresso, 100 %)
  "laudo-prodes": {
    versoes: versoes("02-laudo-prodes", [522, 782, 1043, 1565]),
    municipio: "Novo Progresso", uf: "PA", data: "2024-07-24", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Mosaico de floresta amazônica contínua e áreas abertas em blocos retangulares ao longo de uma rodovia, com um rio meandrante à esquerda.",
    atribuicao: ATR_2024,
  },
  // 04_laudo_acompanhamento.txt (Montividiu, 100 %; cena de 2025)
  "laudo-de-acompanhamento": {
    versoes: versoes("04-laudo-acompanhamento", [521, 782, 1043, 1564]),
    municipio: "Montividiu", uf: "GO", data: "2025-05-24", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Lavouras de segunda safra com dossel verde em maio, separadas por matas ao longo dos córregos, com pivôs e parte de uma área urbana no canto inferior.",
    atribuicao: "Contém dados Copernicus Sentinel modificados 2025, processados pela iAgroSat",
  },
  // 03_pericia_carteira.txt (São Desidério, 100 %)
  "pericia-de-carteira": {
    versoes: versoes("03-pericia-carteira", [525, 788, 1050, 1575]),
    municipio: "São Desidério", uf: "BA", data: "2024-08-21", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Vista regional do chapadão com muitas propriedades lado a lado, talhões de grãos, pivôs centrais, uma pequena área urbana e o vale de um rio com vegetação nativa.",
    atribuicao: ATR_2024,
  },
  // 06_base_territorial_grsac.txt (Nova Xavantina, 94,5 %)
  "base-territorial-grsac": {
    versoes: versoes("06-base-territorial-grsac", [523, 785, 1047, 1570]),
    municipio: "Nova Xavantina", uf: "MT", data: "2024-05-19", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Rio das Mortes atravessando o quadro entre a cidade, lavouras em blocos e faixas de floresta e cerrado ao longo dos cursos d'água.",
    atribuicao: ATR_2024,
  },
  // 05_potencial_carbono.txt (Marliéria, 80,6 %)
  "potencial-de-carbono-da-carteira": {
    versoes: versoes("05-potencial-carbono", [527, 790, 1054, 1581]),
    municipio: "Marliéria", uf: "MG", data: "2024-09-04", sensor: "Sentinel-2B (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Grande maciço de Mata Atlântica com lagoas, limitado à direita pelo rio Doce e por pastagens e plantios vizinhos.",
    atribuicao: ATR_2024,
  },
  // 07_triagem_eudr.txt (Patrocínio, 100 %). Legenda de região, pedida pelo cliente (s4): sem afirmar que cada talhão é café.
  "triagem-eudr": {
    versoes: versoes("07-triagem-eudr", [531, 796, 1062, 1593]),
    municipio: "Patrocínio", uf: "MG", data: "2024-08-16", sensor: "Sentinel-2A (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Talhões de culturas perenes plantadas em linhas e pivôs, numa região cafeeira, ao lado de matas de galeria e de vegetação nativa nas encostas.",
    atribuicao: ATR_2024,
    regiao: "Região cafeeira de Patrocínio (MG), culturas perenes ao lado de matas de galeria", // sem o ponto final (15/11/2026)
  },
  // 08_credito_rural.txt (Não-Me-Toque, 97,1 %)
  "credito-rural": {
    versoes: versoes("08-credito-rural", [528, 792, 1055, 1583]),
    municipio: "Não-Me-Toque", uf: "RS", data: "2024-09-28", sensor: "Sentinel-2A (MSI, nível L2A)", bandas: BANDAS,
    mostra: "Pequena cidade cercada por lavouras de inverno em diferentes estágios, solo preparado e capões de mata, num mosaico de propriedades.",
    atribuicao: ATR_2024,
  },
};
