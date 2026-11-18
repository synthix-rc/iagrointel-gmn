// ---------------------------------------------------------------------------
// Crédito rural: texto do documento do cliente (literal; MAPA-site.md › Fontes de conteúdo), com os nomes
// oficiais de docs/PRODUTOS.md. Número ou data sem fonte conferida leva o código da pendência (P18, P19, FONTES).
// ---------------------------------------------------------------------------

import type { Rico, Valor } from "./valor";

export type Indicador = {
  id: "operacoes-300ha" | "valor-operacoes" | "imoveis-15mf" | "cooperativas"; // para outras páginas usarem o mesmo dado
  valor: Valor;
  rotulo: string | Rico; // frase do documento abaixo do número, literal
};

// Documento do cliente, faixa de indicadores (literal). Números do documento valem como informação do cliente, com
// período e fonte (decisão 28; P19 encerrada); 8.393.915 = número oficial da base (decisão 27; P18 encerrada).
export const indicadores: Indicador[] = [
  {
    id: "operacoes-300ha",
    valor: { valor: "7.639" },
    rotulo: "operações acima de 300 hectares contratadas de março a agosto de 2026, já sob a Resolução 5.267",
  },
  {
    id: "valor-operacoes",
    valor: { valor: "R$ 22,6 bi" },
    rotulo: "valor dessas operações, de R$ 332,3 bilhões contratados em 12 meses",
  },
  {
    id: "imoveis-15mf",
    valor: { valor: "141.875" },
    rotulo: "imóveis acima de 15 módulos fiscais, os primeiros da consulta ao PRODES, de 8.393.915 no CAR",
  },
  {
    id: "cooperativas",
    valor: { valor: "22,3%" },
    rotulo: "do valor do crédito rural de 2025 contratado por 390 cooperativas de crédito",
  },
];

// Documento do cliente, linha de fontes abaixo dos indicadores (literal).
export const fontesIndicadores: Rico = [
  "Fontes: Sistema de Operações do Crédito Rural (SICOR), do Banco Central, setembro de 2025 a agosto de 2026 e ano de 2025; Sistema Nacional de Cadastro Ambiental Rural (SICAR).",
];

// id: chave usada pela "Norma relacionada" das páginas de produto (content/produtos-credito.ts).
// Nomes, limites e datas conferidos no texto oficial (decisão 9; docs/FONTES-regulatorias.md, CONFERIDO).
// Texto da tabela: documento do cliente, literal ("Norma", "O que exige", "Quando").
// data: uma linha por prazo (a 2ª linha da tabela tem três).
// fonte: link para o texto oficial (coluna "Fonte"). Mais de um link quando a linha junta duas normas.
// descricao: nome acessível do link (rótulo visível + norma), para links de mesmo rótulo não ficarem iguais.
export type LinkFonte = { rotulo: string; href: string; descricao: string };
export type LinhaNorma = {
  id: "cmn-5267" | "cmn-5268-5303" | "bcb-586" | "ue-2023-1115" | "mcr-secao-9";
  norma: Valor; muda: string | Rico; data: Valor | Valor[]; fonte: Valor | LinkFonte[];
};

const bcb = (tipo: "Resolução CMN" | "Resolução BCB", numero: string): LinkFonte => ({
  rotulo: "bcb.gov.br",
  href: `https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=${encodeURIComponent(tipo)}&numero=${numero}`,
  descricao: `${tipo} ${numero.replace(/(\d)(\d{3})$/, "$1.$2")}`,
});
export const fonteCmn5268 = bcb("Resolução CMN", "5268");
export const fonteCmn5303 = bcb("Resolução CMN", "5303");

export const normas: LinhaNorma[] = [
  {
    id: "cmn-5267",
    norma: { valor: "Resolução 5.267 do Conselho Monetário Nacional (CMN)" },
    muda: "Sensoriamento remoto, isto é, análise de imagens de satélite, nas operações de custeio e investimento com empreendimento acima de 300 hectares, antes e durante a operação.",
    data: { valor: "desde 01/03/2026" },
    fonte: [bcb("Resolução CMN", "5267")],
  },
  {
    id: "cmn-5268-5303",
    norma: { valor: "Resoluções CMN 5.268 e 5.303" },
    muda: "Consulta à lista do Ministério do Meio Ambiente baseada no PRODES, o mapeamento anual de desmatamento do Instituto Nacional de Pesquisas Espaciais (INPE). Módulo fiscal é a unidade de área definida para cada município.",
    data: [
      { valor: "04/01/2027 · acima de 15 módulos fiscais" },
      { valor: "01/07/2027 · de 4 a 15" },
      { valor: "03/01/2028 · até 4" },
    ],
    fonte: [fonteCmn5268, fonteCmn5303],
  },
  {
    id: "bcb-586",
    norma: { valor: "Resolução 586 do Banco Central do Brasil (BCB)" },
    muda: "Relatório de Riscos Sociais, Ambientais e Climáticos (GRSAC), com tabelas de exposição da carteira.",
    data: { valor: "a partir de 01/01/2027, conforme o porte" },
    fonte: [bcb("Resolução BCB", "586")],
  },
];

export type Etapa = { titulo: string; texto?: string; pendente?: Valor["pendente"] };

// Documento do cliente, "Como começar" (literal). Oferta das etapas 2 e 3 aprovada como está (decisão 10).
// Etapa 4: os 6 produtos com os nomes oficiais, na ordem de PRODUTOS.md (aprovado na camada 2; o documento lista
// "Perícia, consulta PRODES, laudos acima de 300 ha, tabelas do GRSAC e carbono").
export const comoComecar = {
  h2: "A prova é feita com as operações da própria instituição",
  etapas: [
    { titulo: "Conversa", texto: "A instituição conta como verifica hoje: quem faz, quanto tempo leva, onde trava." },
    { titulo: "Prova técnica sem custo", texto: "A instituição escolhe operações de uma safra encerrada. A plataforma roda com a informação de cada data, e o resultado é comparado com o que aconteceu." },
    { titulo: "Piloto", texto: "Até 50 imóveis em 60 dias, com responsável na instituição e revisão humana de cada entrega." },
    { titulo: "Contrato", texto: "Perícia Pré-Crédito, Laudo PRODES, Laudo de Acompanhamento, Perícia de Carteira, Base Territorial GRSAC e Potencial de Carbono da Carteira, conforme a necessidade." },
  ] as Etapa[],
};

/** Linha da tabela de normas pelo id (para a "Norma relacionada" das páginas de produto). */
export function norma(id: LinhaNorma["id"]): LinhaNorma {
  const n = normas.find((x) => x.id === id);
  if (!n) throw new Error(`content/credito-rural.ts: norma "${id}" não existe`);
  return n;
}

// ---------------------------------------------------------------------------
// Página /credito-rural/: docs/MAPA-site.md v3 › "Crédito rural", 8 seções.
// Texto do documento do cliente, literal, com os nomes oficiais (nomes dos produtos vêm de content/produtos.ts).
// ---------------------------------------------------------------------------
export const paginaCredito = {
  // 1 · Abertura (documento do cliente). Abertura sem a contagem "Três normas" (decisão 9, 14/11/2026).
  hero: {
    rotulo: "iAgroIntel · crédito rural",
    h1: "Evidência territorial para cada operação de crédito rural",
    // Documento: "Três normas alteraram as verificações...". Decisão 9: sem "três normas", com "As novas normas do
    // CMN e do Banco Central". O resto da frase, literal.
    texto: "As novas normas do CMN e do Banco Central alteraram as verificações que a cooperativa e o banco fazem antes e depois de conceder crédito rural. A iAgroIntel executa essas verificações para um imóvel, uma gleba ou uma carteira inteira. Cada item verificado traz a fonte e a data.",
    ctaProdutos: { href: "#produtos", label: "Ver os produtos" },
  },

  // Índice de âncoras (MAPA-site.md › Crédito rural; decisão 15), com os nomes oficiais.
  // Os 6 produtos entram pelo nome de content/produtos.ts; "Cooperativas" = item do submenu.
  indice: {
    rotulo: "Nesta página", // aprovado em 14/11/2026: rótulo do índice (na tela e para leitores de tela)
    normas: "As normas",
    cooperativas: "Cooperativas",
    comoComecar: "Como começar",
  },

  // 3 · As normas e as datas (documento do cliente). A tabela usa `normas` (acima).
  normasH2: "A consulta obrigatória ao PRODES volta em 4 de janeiro de 2027", // decisão 9, 14/11/2026
  normasLink: { href: "/normas/", label: "Normas" }, // nome da página no mapa

  // O bloco "O risco de errar para os dois lados" saiu (decisão 24; P1 encerrada). Não tinha âncora no índice.

  // 4 · Produtos: rótulo da seção = item do menu do site atual (mesmo da home). Rótulo do bloco
  // "Produtos · 01 · <nome>" aprovado em 14/11/2026.
  produtosRotulo: "Produtos",

  // 5 · Para cooperativas: chamada para /cooperativas/ (rota direta de primeiro nível).
  cooperativas: { rotulo: "Cooperativas", titulo: "Cooperativas de crédito", href: "/cooperativas/" },

  // 6 · Como começar: usa `comoComecar` (acima). Link para a página.
  comoComecarHref: "/como-comecar/",
};

/** Indicador pelo id (ex.: o indicador do segmento na página de cooperativas). */
export function indicador(id: Indicador["id"]): Indicador {
  const i = indicadores.find((x) => x.id === id);
  if (!i) throw new Error(`content/credito-rural.ts: indicador "${id}" não existe`);
  return i;
}
