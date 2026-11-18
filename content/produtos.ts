// ---------------------------------------------------------------------------
// Produtos da iAgroIntel: nomes oficiais e endereços de primeiro nível. ÚNICO lugar com o nome e a rota de cada produto.
// Os outros arquivos (menu, exemplos, home, conteúdo das páginas) apontam para o produto pelo slug, nunca pelo nome:
// um nome ou endereço que mude muda só aqui.
// ---------------------------------------------------------------------------

export type ProdutoBase = { slug: string; nome: string; href: string; subtitulo?: string; ressalvaTopo?: string };

// PRODUTOS.md, regra de nome 4 e MAPA-site.md › "Ressalva fixa da Perícia Pré-Crédito e da Perícia de Carteira".
const ressalvaPericia = "Análise técnica de triagem, sem valor de perícia judicial.";

// Crédito rural: 6 produtos em rotas diretas de primeiro nível (app/[produto]/page.tsx).
export const produtosCredito: ProdutoBase[] = [
  { slug: "pericia-pre-credito", nome: "Perícia Pré-Crédito", href: "/pericia-pre-credito/", ressalvaTopo: ressalvaPericia },
  { slug: "laudo-prodes", nome: "Laudo PRODES", href: "/laudo-prodes/" },
  { slug: "laudo-de-acompanhamento", nome: "Laudo de Acompanhamento", href: "/laudo-de-acompanhamento/", subtitulo: "Operações acima de 300 ha · Resolução CMN 5.267" },
  { slug: "pericia-de-carteira", nome: "Perícia de Carteira", href: "/pericia-de-carteira/", ressalvaTopo: ressalvaPericia },
  { slug: "base-territorial-grsac", nome: "Base Territorial GRSAC", href: "/base-territorial-grsac/" },
  { slug: "potencial-de-carbono-da-carteira", nome: "Potencial de Carbono da Carteira", href: "/potencial-de-carbono-da-carteira/" },
];

// Exportação: rota direta de primeiro nível (/triagem-eudr/).
export const triagemEudr: ProdutoBase = { slug: "triagem-eudr", nome: "Triagem EUDR", href: "/triagem-eudr/" };

export const todosProdutos: ProdutoBase[] = [...produtosCredito, triagemEudr];
export type SlugProduto = string;

/** Produto pelo slug. Falha no build se o slug não existir (evita link quebrado). */
export function produto(slug: SlugProduto): ProdutoBase {
  const p = todosProdutos.find((x) => x.slug === slug);
  if (!p) throw new Error(`content/produtos.ts: produto "${slug}" não existe`);
  return p;
}

// Áreas de negócio (rótulos de agrupamento na home e nas páginas de produto).
export const areaCredito = { nome: "Crédito rural", href: "/#hm-ix" };
export const areaExportacao = { nome: "Exportação", href: "/#hm-ix" };

// Títulos das seções do modelo de página de produto: docs/MAPA-site.md › "Modelo de página de produto".
export const modeloProduto = {
  cruza: "O que cruza",
  entrega: "O que entrega",
  naoFaz: "O que não faz",
  exemplos: "Exemplos",
  norma: "Norma relacionada",
  normas: "Normas relacionadas",
  comoComecar: "Como começar",
  todosExemplos: "Ver todos os exemplos",
  aDefinir: "A DEFINIR",
  imagemAFornecer: "Imagem Sentinel-2 · a fornecer",
};
