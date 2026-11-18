// ---------------------------------------------------------------------------
// Página /normas/: docs/MAPA-site.md › Normas ("uma linha por norma, com fonte e data conferidas").
// Reúne todas as normas conferidas em docs/FONTES-regulatorias.md (decisão 9):
// - As 3 normas da tabela de Crédito rural (content/credito-rural.ts › normas)
// - A Seção 9 do Manual de Crédito Rural (content/produtos-credito.ts › pericia-pre-credito.norma, P25)
// - O Regulamento (UE) 2023/1115 — EUDR (content/produtos-outros.ts › triagem-eudr.norma, P6 e decisão 9)
// Mais os indicadores oficiais (SICOR/SICAR), os marcos e prazos conferidos e a ligação com cada produto (sem "cumpre" ou "atende").
// ---------------------------------------------------------------------------
import { normas, paginaCredito, type LinhaNorma } from "./credito-rural";
import { conteudoCredito } from "./produtos-credito";
import { conteudoOutros } from "./produtos-outros";

const normaMcr9 = conteudoCredito["pericia-pre-credito"].norma as LinhaNorma;
const normaEudr = conteudoOutros["triagem-eudr"].norma as LinhaNorma;
const laudoProdes = conteudoCredito["laudo-prodes"];

export const paginaNormas = {
  rotulo: "iAgroIntel · normas e prazos",
  titulo: "Normas", // nome da página no mapa
  // Frase de abertura derivada literalmente de content/credito-rural.ts › paginaCredito.hero.texto (decisão 9: sem "três normas")
  // e content/exportacao.ts › paginaExportacao.problema.
  lead: "As novas normas do CMN e do Banco Central alteraram as verificações que a cooperativa e o banco fazem antes e depois de conceder crédito rural — ao lado do regulamento europeu contra o desmatamento na exportação.",
  // Cena Sentinel-2 da abertura (content/imagens.ts › base-territorial-grsac: Nova Xavantina, MT).
  imagemAbertura: "base-territorial-grsac",
  // Selos com os marcos e prazos conferidos em docs/FONTES-regulatorias.md.
  selos: [
    "Marco PRODES · 31/07/2019",
    "Corte EUDR · 31/12/2020",
    "Res. CMN 5.267 · desde 01/03/2026",
    "Res. CMN 5.303 · a partir de 04/01/2027",
  ],
  indice: {
    rotulo: "Nesta página",
    itens: [
      { id: "indicadores", label: "Indicadores" },
      { id: "quadro-normas", label: "Quadro de normas" },
      { id: "marcos-prazos", label: "Marcos e cronograma" },
      { id: "na-operacao", label: "Na operação" },
    ],
  },
  // 1 · Dimensionamento (usa os 4 indicadores e a linha de fontes de content/credito-rural.ts)
  indicadoresSecao: {
    rotulo: "01 · Dimensionamento",
    titulo: "O alcance das normas nos números oficiais",
  },
  // 2 · Quadro completo de normas com coluna Fonte (links oficiais para bcb.gov.br e eur-lex.europa.eu)
  quadroSecao: {
    rotulo: "02 · Crédito rural e exportação",
    titulo: paginaCredito.normasH2, // "A consulta obrigatória ao PRODES volta em 4 de janeiro de 2027" (decisão 9)
    linhas: [normaMcr9, ...normas, normaEudr] as LinhaNorma[],
  },
  // 3 · Marcos retroativos (31/07/2019 e 31/12/2020) e cronograma escalonado 2026–2028
  marcosSecao: {
    rotulo: "03 · Datas de corte e vigência",
    titulo: "Marcos retroativos e cronograma 2026–2028",
    cortesRotulo: "Datas de corte de desmatamento",
    cortes: [
      {
        data: "31/07/2019",
        norma: "Seção 9 do Manual de Crédito Rural · item 17",
        texto: "Supressão de vegetação nativa depois de 31/07/2019 na lista do Ministério do Meio Ambiente baseada no PRODES.",
      },
      {
        data: "31/12/2020",
        norma: "Regulamento (UE) 2023/1115 · EUDR",
        texto: "Exige que o exportador prove que a mercadoria não vem de área desmatada depois de 31/12/2020 e que foi produzida de acordo com a lei do país.",
      },
    ],
    cronograma: [
      {
        data: "01/03/2026",
        norma: "Resolução CMN 5.267",
        texto: "Sensoriamento remoto, isto é, análise de imagens de satélite, nas operações de custeio e investimento com empreendimento acima de 300 hectares, antes e durante a operação.",
      },
      {
        data: "30/12/2026",
        norma: "Regulamento (UE) 2023/1115",
        texto: "Aplicação em 30/12/2026 para operadores grandes e médios e em 30/06/2027 para micro e pequenos.",
      },
      {
        data: "01/01/2027",
        norma: "Resolução BCB 586",
        texto: "Relatório de Riscos Sociais, Ambientais e Climáticos (GRSAC), com tabelas de exposição da carteira, conforme o porte (segmentos S1 a S4).",
      },
      {
        data: "04/01/2027",
        norma: "Resoluções CMN 5.268 e 5.303",
        texto: "Consulta à lista do Ministério do Meio Ambiente baseada no PRODES: 04/01/2027 (acima de 15 módulos fiscais), 01/07/2027 (de 4 a 15) e 03/01/2028 (até 4).",
      },
    ],
  },
  // 4 · Ligação Norma × Produto (frases literais de content/produtos-credito.ts e content/produtos-outros.ts)
  operacaoSecao: {
    rotulo: "04 · Na operação",
    titulo: "Evidência territorial por norma e limites de cada entrega",
    itens: [
      {
        slug: "pericia-pre-credito",
        norma: "Seção 9 do Manual de Crédito Rural (Res. CMN 5.193/2024, 5.268/2025 e 5.303/2026)",
        texto: "Um CAR, 26 fontes públicas, e cada ocorrência com fonte, data e hectares. Análise técnica de triagem, sem valor de perícia judicial.",
      },
      {
        slug: "laudo-prodes",
        norma: "Resoluções CMN 5.268 e 5.303",
        texto: `${laudoProdes.normaOperacao} ${laudoProdes.normaNota}`,
      },
      {
        slug: "laudo-de-acompanhamento",
        norma: "Resolução CMN 5.267 · operações acima de 300 ha",
        texto: "A partir do polígono da gleba financiada, o laudo acompanha a série Sentinel-2 do desembolso à colheita. Ele registra plantio, pico de vegetação e colheita, e compara a área cultivada com a área financiada, com a diferença em hectares. Não substitui a vistoria de campo.",
      },
      {
        slug: "pericia-de-carteira",
        norma: "Resolução CMN 5.267 (acima de 300 ha) · Resoluções CMN 5.268 e 5.303",
        texto: "Cada imóvel da carteira, um a um, nas mesmas 26 fontes públicas da Perícia Pré-Crédito. Não certifica cumprimento integral do Manual de Crédito Rural.",
      },
      {
        slug: "base-territorial-grsac",
        norma: "Resolução BCB 586 · segmentos S1 a S4",
        texto: "A plataforma devolve uma planilha com as tabelas do relatório preenchidas na parte que depende do território. Não é o relatório: a divulgação é da instituição.",
      },
      {
        slug: "triagem-eudr",
        norma: "Regulamento (UE) 2023/1115 · EUDR",
        texto: "Cada polígono de fornecedor conferido no satélite antes da declaração de diligência. Não substitui a declaração de diligência (DDS) nem a análise de legalidade completa.",
      },
    ],
  },
};
