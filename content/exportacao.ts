// ---------------------------------------------------------------------------
// Página /ferramentas/: Ferramentas gratuitas da iAgroIntel (Mapa DDS e Gerador GeoJSON)
// + relação com a Triagem EUDR completa (/exportacao/triagem-eudr/).
// Textos literais aprovados na P6 e P7 (CONTEUDO-respostas.md) e dos cartões de https://iagrointel.com/ferramentas/.
// ---------------------------------------------------------------------------
import type { NavItem } from "./site";

export type FerramentaItem = NavItem & {
  titulo: string;
  descricao: string;
  cta: string;
  escopo: string;
};

export const paginaExportacao = {
  rotulo: "iAgroIntel · acesso aberto",
  titulo: "Ferramentas gratuitas",
  // Literal do cliente (CONTEUDO-respostas.md › Exportação e Segunda rodada).
  problema: "O Regulamento (UE) 2023/1115, conhecido como EUDR, exige que o exportador prove que a mercadoria não vem de área desmatada depois de 31/12/2020 e que foi produzida de acordo com a lei do país.",
  publico: "Exportadores e tradings de soja, café, cacau, carne bovina, madeira, borracha e dendê.",
  imagemAbertura: "triagem-eudr",
  selos: [
    "Gratuito · no navegador",
    "Corte EUDR · 31/12/2020",
    "PRODES pós-2020 + IBAMA",
    "GeoJSON no padrão europeu",
  ],
  ferramentas: {
    rotulo: "01 · Uso imediato",
    titulo: "Duas ferramentas abertas para consulta e validação",
    // Primeira menção de "DDS" na página: sigla por extenso, literal do cliente (CONTEUDO-respostas.md › Segunda rodada, 15/11/2026).
    descricao: "DDS é a declaração de diligência devida, exigida pelo regulamento europeu contra o desmatamento (EUDR).",
    itens: [
      {
        href: "https://iagrointel.com/ferramentas/eudr-dds/",
        label: "Mapa DDS",
        escopo: "CAR ou polígono (GeoJSON / KML) · Sentinel-2",
        titulo: "A DDS no mapa: desmatamento e embargos por CAR",
        descricao: "Digite um CAR, desenhe ou importe um polígono (GeoJSON/KML) — e veja o desmatamento PRODES pós-2020 e os embargos IBAMA sobre imagem de satélite, com parecer de triagem por propriedade. Triagem de risco de origem, não prova de conformidade.",
        cta: "Abrir o Mapa DDS",
      },
      {
        href: "https://iagrointel.com/ferramentas/eudr-geojson/",
        label: "Gerador GeoJSON",
        escopo: "Coordenadas da parcela · Validação no navegador",
        titulo: "Gerador de polígono GeoJSON (EUDR)",
        descricao: "Cole as coordenadas da parcela e gere o GeoJSON no formato exigido pela Declaração de Due Diligence (DDS) da EUDR — com cálculo de área, perímetro e validação. Roda no navegador, sem enviar dados.",
        cta: "Abrir o Gerador GeoJSON",
      },
    ] as FerramentaItem[],
  },
  // Comparação literal da P7 (content/produtos-outros.ts › triagem-eudr.texto[1])
  versaoCompleta: {
    rotulo: "02 · Operação corporativa",
    titulo: "Precisa auditar lotes de fornecedores com série Sentinel-2?",
    texto: "O Mapa DDS, gratuito, é a versão de entrada: um CAR ou um polígono por vez, na tela. A Triagem EUDR é a versão completa, com confirmação na série Sentinel-2 e relatório por polígono.",
  },
};
