// ---------------------------------------------------------------------------
// Biblioteca de exemplos de laudo: documento do cliente, exemplos (literal), com os arquivos do cliente em
// public/exemplos/ (CONTEUDO-respostas.md › Exemplos; P13 encerrada, decisão 32). Produto pelo slug.
// Todos levam o selo "Exemplo". O link abre o arquivo na mesma aba, sem seta.
// ---------------------------------------------------------------------------

import type { Valor } from "./valor";

// produto = slug de content/produtos.ts (o nome vem de lá: muda num lugar só).
// caso: título do exemplo no documento, literal (nome antigo do produto trocado pelo oficial).
// detalhe: a linha abaixo do título no documento ("12 páginas · 22 ha"), literal.
// arquivo: caminho em public/exemplos/. Sem arquivo = listado sem link.
export type Exemplo = { produto: string; caso: Valor; detalhe?: Valor; arquivo?: string };

const v = (valor: string): Valor => ({ valor });
const arq = (nome: string) => `/exemplos/${nome}`;

// Documento do cliente, "Exemplos reais" de cada produto, na ordem da tabela de CONTEUDO-respostas.md.
export const exemplos: Exemplo[] = [
  { produto: "pericia-pre-credito", caso: v("Imóvel sem ocorrência"), detalhe: v("12 páginas · 22 ha"), arquivo: arq("pericia-sem-restricao-22ha.pdf") },
  { produto: "pericia-pre-credito", caso: v("Perícia com a gleba financiada, Mato Grosso"), detalhe: v("21 páginas · 853 ha"), arquivo: arq("pericia-gleba-financiada-mt-853ha.pdf") },
  { produto: "pericia-pre-credito", caso: v("Imóvel com sobreposição de terra indígena"), detalhe: v("12 páginas · 3,07 ha sobre terra indígena"), arquivo: arq("pericia-sobreposicao-terra-indigena-187ha.pdf") },
  // Casos novos (decisão 32): títulos do docs/fontes/exemplos-LEIA.md do cliente; área do próprio PDF (184,6 ha e 11.144,7 ha).
  { produto: "pericia-pre-credito", caso: v("Perícia de imóvel de café, Minas Gerais"), detalhe: v("12 páginas · 184 ha"), arquivo: arq("pericia-cafe-mg-184ha.pdf") },
  { produto: "pericia-pre-credito", caso: v("Perícia de imóvel de pecuária na Amazônia (Pará)"), detalhe: v("12 páginas · 11.145 ha"), arquivo: arq("pericia-pecuaria-amazonia-11mil-ha.pdf") },
  // P32 encerrada (segunda rodada, 15/11/2026): laudo novo, com o marco do crédito rural. Caso e detalhe literais.
  { produto: "laudo-prodes", caso: v("Laudo PRODES, imóvel no Pará"), detalhe: v("5 páginas · 2.876 ha · marco do crédito rural, 31/07/2019"), arquivo: arq("laudo-prodes-marco-2019-pa-2876ha.pdf") },
  // Documento: "Laudo após a concessão, ..." (descrição do Produto 3 → Laudo de Acompanhamento).
  { produto: "laudo-de-acompanhamento", caso: v("Laudo de Acompanhamento, milho 2026, Jataí (GO)"), detalhe: v("7 páginas · 306 ha financiados"), arquivo: arq("acompanhamento-milho-2026-jatai-go-306ha.pdf") },
  { produto: "laudo-de-acompanhamento", caso: v("Laudo de Acompanhamento, soja 2025/26, Jataí (GO)"), detalhe: v("7 páginas · 348 ha financiados"), arquivo: arq("acompanhamento-soja-2025-26-jatai-go-348ha.pdf") },
  { produto: "pericia-de-carteira", caso: v("Resumo de carteira, 200 imóveis"), detalhe: v("10 páginas"), arquivo: arq("carteira-200-imoveis-resumo.pdf") },
  { produto: "pericia-de-carteira", caso: v("Painel da carteira da cooperativa"), detalhe: v("4 páginas"), arquivo: arq("cooperativa-painel-carteira.pdf") },
  { produto: "base-territorial-grsac", caso: v("Tabelas do GRSAC, carteira de teste de 200 imóveis"), detalhe: v("planilha · CARs reais, valores de exposição fictícios"), arquivo: arq("grsac-tabelas-carteira-teste-200-imoveis.xlsx") },
  { produto: "potencial-de-carbono-da-carteira", caso: v("Viabilidade da carteira, 150 imóveis do Cerrado"), detalhe: v("24 páginas"), arquivo: arq("carbono-viabilidade-carteira-150-imoveis-cerrado.pdf") },
  { produto: "potencial-de-carbono-da-carteira", caso: v("Rascunho de PDD no modelo Verra"), detalhe: v("28 páginas"), arquivo: arq("carbono-pdd-rascunho-vcs.pdf") },
  // Triagem EUDR (P32 encerrada, segunda rodada, 15/11/2026): os dois PDFs de confirmação de desmatamento, com a data de
  // corte do EUDR. Caso e detalhe literais. Em /exemplos/ entram no grupo da Triagem EUDR (ordem de content/produtos.ts).
  { produto: "triagem-eudr", caso: v("Confirmação de desmatamento por imóvel, Pará"), detalhe: v("4 páginas · 2.876 ha · data de corte do EUDR, 31/12/2020"), arquivo: arq("prodes-confirmacao-sentinel-pa-2876ha.pdf") },
  { produto: "triagem-eudr", caso: v("Confirmação de desmatamento por imóvel, Acre"), detalhe: v("16 páginas · data de corte do EUDR, 31/12/2020"), arquivo: arq("prodes-confirmacao-sentinel-ac.pdf") },
];

// Tabelas de exemplo (aprovado na camada 2): dados de exemplo do documento do cliente mostrados como tabela, com o
// selo "Exemplo". Base Territorial GRSAC: contagem de imóveis por linha da tabela RSA1 na carteira de teste
// (rótulos literais do documento; números conferidos com a planilha do cliente, P13 encerrada).
export type TabelaExemplo = { produto: string; cabecalho: [string, string]; linhas: [string, Valor][] };

export const tabelasExemplo: TabelaExemplo[] = [
  {
    produto: "base-territorial-grsac",
    cabecalho: ["RSA1 · linha", "Imóveis"],
    linhas: [
      ["3 · Sobreposição a unidade de conservação", v("25")],
      ["3.1 · Proteção integral", v("8")],
      ["3.2 · Uso sustentável", v("20")],
      ["4 · Terra indígena declarada ou homologada", v("0")],
      ["7 · Área embargada pelo IBAMA ou ICMBio", v("42")],
      ["8.1 · Supressão registrada pelo PRODES", v("71")],
    ],
  },
];

// Página /exemplos/ (E5, 14/11/2026): os exemplos agrupados por produto, na ordem de content/produtos.ts.
export const paginaExemplos = { titulo: "Exemplos de laudo" }; // nome da página no mapa
