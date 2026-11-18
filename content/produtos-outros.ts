// ---------------------------------------------------------------------------
// Conteúdo da página de produto de Exportação (Triagem EUDR). Mesmo formato de produtos-credito.ts.
// Nomes e endereços: content/produtos.ts. Respostas do cliente: docs/CONTEUDO-respostas.md › Triagem EUDR (P7).
// ---------------------------------------------------------------------------
import type { ConteudoProduto } from "./produtos-credito";
import { maturidadePiloto } from "./produtos-credito";

export const conteudoOutros: Record<string, ConteudoProduto> = {
  // Norma: FONTES-regulatorias.md (Regulamento (UE) 2023/1115, CONFERIDO; decisão 9; data de corte 31/12/2020 conferida).
  "triagem-eudr": {
    maturidade: maturidadePiloto, // decisão 25
    // aprovado pelo cliente em 15/11/2026 (P7)
    evidencia: "Cada polígono de fornecedor conferido no satélite antes da declaração de diligência.",
    texto: [
      // Abertura: texto de "Solicitar acesso" em https://iagrointel.com/ferramentas/ (versão completa), literal.
      "Inteligência de exportação + risco de origem EUDR triado por satélite. Disponível para clientes corporativos selecionados.",
      // "Diferença para o Mapa DDS": aprovado pelo cliente em 15/11/2026 (P7). Primeira menção de "DDS" na página: a sigla
      // por extenso logo depois, literal do cliente (CONTEUDO-respostas.md › Segunda rodada).
      "O Mapa DDS, gratuito, é a versão de entrada: um CAR ou um polígono por vez, na tela. A Triagem EUDR é a versão completa, com confirmação na série Sentinel-2 e relatório por polígono. DDS é a declaração de diligência devida, exigida pelo regulamento europeu contra o desmatamento (EUDR).",
    ],
    // Literal do cliente (P7).
    cruza: [
      "O polígono do fornecedor com a perda de cobertura arbórea depois de 31/12/2020, mapeada pela Universidade de Maryland (Hansen/UMD), e com o PRODES e o DETER, do INPE",
      "A confirmação na série Sentinel-2 do próprio polígono, antes de qualquer veredito",
      "Terra indígena, unidade de conservação e embargo, como contexto",
    ],
    // Literal do cliente (P7), mais o item que já existia (PRODUTOS.md).
    entrega: [
      "Relatório por polígono, com mapa e veredito de triagem",
      "GeoJSON no formato europeu",
    ],
    // Literal do cliente (P7).
    naoFaz: [
      "Não substitui a declaração de diligência (DDS) nem a análise de legalidade completa.",
      "Não certifica conformidade com o EUDR.",
    ],
    norma: {
      id: "ue-2023-1115",
      norma: { valor: "Regulamento (UE) 2023/1115" },
      // Literal do cliente (P6), data de corte conferida (FONTES-regulatorias.md).
      muda: "Exige que o exportador prove que a mercadoria não vem de área desmatada depois de 31/12/2020 e que foi produzida de acordo com a lei do país.",
      data: { valor: "30/12/2026 (operadores grandes e médios) · 30/06/2027 (micro e pequenos)" }, // decisão 9, 14/11/2026
      fonte: [{ rotulo: "eur-lex.europa.eu", href: "https://eur-lex.europa.eu/eli/reg/2023/1115/oj", descricao: "Regulamento (UE) 2023/1115" }],
    },
    // Exemplos: os dois PDFs de confirmação de desmatamento (content/exemplos.ts; segunda rodada, 15/11/2026).
  },
};
