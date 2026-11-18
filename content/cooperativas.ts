// ---------------------------------------------------------------------------
// Página /credito-rural/cooperativas/ (E5, 14/11/2026): docs/MAPA-site.md › "Estrutura de
// /credito-rural/cooperativas" (v3.2), 6 seções. Nomes de seção = os do mapa. Produtos, etapas
// e ressalva vêm dos arquivos de origem (sem duplicar). Abertura e "duas marcas": CONTEUDO-respostas.md (P2 encerrada).
// ---------------------------------------------------------------------------
import { empresa, rotulos } from "./site";

export const paginaCooperativas = {
  // 1 · Abertura do segmento. Título = nome da página no mapa.
  hero: {
    rotulo: "Crédito rural",
    titulo: "Cooperativas de crédito",
    // TEXTO NOVO (aprovado em 14/11/2026, P2): aprovado pelo cliente.
    texto: "Em 2025, 390 cooperativas de crédito contrataram 22,3% do valor do crédito rural do país. A iAgroIntel organiza a evidência territorial de cada operação e da carteira, com fonte e data. A decisão continua com a cooperativa.",
    // Fonte dos números, junto do texto (CONTEUDO-respostas.md › Cooperativas).
    fonte: `${rotulos.fonte}: Sistema de Operações do Crédito Rural (SICOR), do Banco Central, ano de 2025.`,
  },

  // A seção de indicador saiu (decisão 37, 15/11/2026): os números e a fonte ficam só na abertura.

  // 2 · Da operação à carteira (mapa): Perícia Pré-Crédito e Laudo PRODES na operação; Perícia de Carteira no conjunto.
  operacao: { titulo: "Da operação à carteira", produtos: ["pericia-pre-credito", "laudo-prodes", "pericia-de-carteira"] },

  // 3 · GRSAC conforme o porte (mapa): Base Territorial GRSAC.
  // Texto aprovado na decisão 9 (14/11/2026): diz quem está sujeito, sem sugerir que toda cooperativa divulga o relatório.
  grsac: {
    titulo: "GRSAC conforme o porte",
    texto: "A Resolução BCB 586 vale para as instituições dos segmentos S1 a S4, a partir de 1º de janeiro de 2027, de forma gradual por segmento.",
    produtos: ["base-territorial-grsac"],
  },

  // 4 · A cooperativa que compra das duas marcas (mapa).
  duasMarcas: {
    titulo: "A cooperativa que compra das duas marcas",
    // TEXTO NOVO (aprovado em 14/11/2026, P2): aprovado pelo cliente.
    texto: "A mesma cooperativa pode trabalhar com as duas marcas da família. A iAgroSat atende o cooperado na própria fazenda, com monitoramento da lavoura, clima e alertas. A iAgroIntel atende a cooperativa nas decisões sobre a terra dos outros: crédito, carteira e relatórios. O produtor mostra a própria fazenda pela iAgroSat; a cooperativa confere pela iAgroIntel.",
    // Link no fim do bloco, sem seta (CONTEUDO-respostas.md).
    link: { href: empresa.maeUrl, label: "Conheça a iAgroSat" },
  },

  // 5 · Como começar: reaproveita `comoComecar` de content/credito-rural.ts. 6 · Ressalva global.
};
