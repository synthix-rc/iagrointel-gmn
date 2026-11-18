// ---------------------------------------------------------------------------
// Página /sobre/ (P10 encerrada): texto literal do cliente, docs/CONTEUDO-respostas.md › Segunda rodada (15/11/2026).
// Substitui o rascunho da Synthix. A página sai do rascunho (sem faixa e sem noindex próprio; o noindex global da
// decisão 39 continua). A linha do tempo indicada pelo cliente é da iAgroSat e não é usada (decisão 34).
// ---------------------------------------------------------------------------
import { empresa, rodape } from "./site";

export const paginaSobre = {
  rotulo: empresa.nome,
  // TEXTO NOVO (aprovado em 15/11/2026, P10)
  titulo: "Sobre a iAgroIntel",
  // Literal do cliente (segunda rodada, 15/11/2026).
  texto: [
    "A iAgroIntel é a plataforma da iAgroSat para instituições que decidem sobre imóveis rurais de terceiros. Ela atende quem financia, compra, fiscaliza ou pesquisa.",
    "A iAgroSat atende o produtor que cuida da própria terra. As duas usam a mesma tecnologia. A iAgroIntel junta imagens Sentinel-2 e uma base de dados públicos oficiais, conferidos entre si, e organiza a evidência territorial de cada imóvel com fonte e data.",
  ],
  principios: {
    // Literal do cliente (segunda rodada, 15/11/2026).
    titulo: "Como trabalhamos",
    // Literal do cliente (segunda rodada, 15/11/2026).
    itens: [
      "Dizemos o que vimos e até onde vimos.",
      "A resposta vem antes da explicação.",
      "Todo número vem com fonte e contexto.",
      "Cada resultado é uma triagem. Ele indica sinais e não constitui prova. A decisão é da instituição.",
    ],
  },
  empresa: {
    // TEXTO NOVO (aprovado em 15/11/2026, P10)
    titulo: "A empresa",
    // TEXTO NOVO (aprovado em 15/11/2026, P10)
    texto: `${empresa.razaoSocial} · CNPJ ${empresa.cnpj}. A iAgroIntel é uma plataforma iAgroSat.`,
    // "É produtor? Conheça a iAgroSat." (mesmo texto do rodapé, MAPA-site.md), com link para a iAgroSat.
    produtor: { href: empresa.maeUrl, label: rodape.produtor },
  },
};
