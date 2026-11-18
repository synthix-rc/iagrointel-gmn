// ---------------------------------------------------------------------------
// Texto do site da iAgroIntel (mesma regra do site da iAgroSat).
// Os componentes só leem de content/: nunca escreva texto de página dentro de um .tsx.
//
// Organização (decisão 18):
// - content/site.ts  → o que é global: empresa, menu, rodapé.
// - content/<area>.ts → um arquivo por página ou área (inicio.ts, e os que vierem: produtos, crédito rural etc.).
//
// Fontes (13/11/2026):
// - Estrutura, menu, rodapé e páginas: docs/MAPA-site.md (v3; decisão 11).
// - Texto: copiado LITERALMENTE das fontes do MAPA-site.md (documento do cliente, site atual), com a origem no comentário.
// - "A DEFINIR" = ainda sem texto aprovado. Não invente fatos, números, clientes ou afirmações de produto.
// - "TEXTO NOVO (a aprovar)" = texto curto que não existe em nenhuma fonte nem no mapa.
// ---------------------------------------------------------------------------

import type { Valor } from "./valor";
import { produtosCredito, triagemEudr } from "./produtos";

export type NavItem = { href: string; label: string };

export const empresa = {
  nome: "iAgroIntel",
  razaoSocial: "IAGROSAT LTDA",        // MAPA-site.md (rodapé). No site atual aparece "iAgroSat LTDA".
  cnpj: "61.579.333/0001-01",          // MAPA-site.md e site atual (rodapé)
  email: "contato@iagrosat.com",       // decidido em 13/11/2026
  url: "https://iagrointel.com",
  // P23 (aberta, bloqueia o lançamento): sem URL. Marcado com o código para entrar em `npm run pendencias`; na tela, o
  // ícone aparece no rodapé sem link e sem etiqueta. Com a URL: troque o valor e tire o `pendente`.
  linkedin: { valor: "", pendente: "P23" } as Valor,
  maeNome: "iAgroSat",
  maeUrl: "https://iagrosat.com",
  logo: "/brand/iagrointel-horizontal-cor.svg",   // logo oficial (dados estruturados da organização)
  // Site atual, <meta name="description"> da home (iagrointel.com/).
  // A REVALIDAR: fala em "crédito, fiscalização, exportação e pesquisa"; o mapa novo põe crédito rural e exportação na frente.
  // Números oficiais (decisão 27; CONTEUDO-respostas.md › Início): "130+ fontes públicas" → "132 fontes oficiais",
  // "1,19 bilhão" → "1,46 bilhão". Saiu da P18 (encerrada).
  descricao: {
    valor:
      "Uma camada que reconcilia 132 fontes oficiais — cadastro, crédito, embargos, desmatamento, 40 anos de uso do solo — propriedade por propriedade, sobre 1,46 bilhão de registros. Para quem concede crédito, fiscaliza, exporta e pesquisa.",
  } as Valor,
};

// Menu principal: Crédito rural (com dropdown no desktop), Exportação (direto para Triagem EUDR), Tecnologia e Ferramentas gratuitas.
// Um único botão de destaque: "Como começar". Normas fica no rodapé.
export const nav: NavItem[] = [
  { href: "/#hm-ix", label: "Crédito rural" },
  { href: triagemEudr.href, label: "Exportação" },
  { href: "/tecnologia/", label: "Tecnologia" },
  { href: "/ferramentas/", label: "Ferramentas gratuitas" },
];
export const navCta = { href: "/como-comecar/", label: "Como começar" };

// "Acessar plataforma ↗" (MAPA-site.md › Cabeçalho; decisões 12 e 13): link de texto, mesma aba, à direita, antes
// do botão. A seta ↗ só existe aqui. No celular, vai para o painel do menu.
export const navPlataforma = {
  href: "https://app.iagrointel.com/auth/login",
  label: "Acessar plataforma",
  seta: "↗",
  ariaLabel: "Acessar plataforma (app.iagrointel.com)",
};

// Submenus no menu principal (dropdown no desktop) e no painel do menu (celular). Nomes de content/produtos.ts.
export const submenu: Record<string, NavItem[]> = {
  "/#hm-ix": [
    ...produtosCredito.map((p) => ({ href: p.href, label: p.nome })),
    { href: "/cooperativas/", label: "Cooperativas" },
    { href: "/exemplos/", label: "Exemplos" },
  ],
};

export type ColunaRodape = { titulo: string; links: NavItem[] };

// Rodapé (mesma estrutura em 4 colunas do site da iAgroSat: Empresa · Crédito rural · Exportação · Ferramentas gratuitas)
export const rodape = {
  // Site atual, home, seção "Fale com a equipe".
  final: {
    titulo: "O seu território já tem memória. Comece a usá-la.",
    texto:
      "Atendemos bancos, cooperativas de crédito, tradings, exportadores, órgãos públicos e pesquisa. Conte o seu caso — carteira, fornecedores ou território — e retornamos com os próximos passos.",
    cta: navCta,
  },
  produtor: "É produtor? Conheça a iAgroSat.",                  // MAPA-site.md
  endossoAlt: "iAgroIntel, uma plataforma iAgroSat",            // texto do próprio logo de endosso
  emailRotulo: "E-mail",
  linkedinRotulo: "iAgroIntel no LinkedIn",                     // TEXTO NOVO (aprovado em 15/11/2026): com URL
  linkedinEmBreve: "LinkedIn da iAgroIntel, em breve",          // CONTEUDO-respostas.md › Rodapé (P23): sem URL, sem link
  colunas: [
    {
      titulo: "Empresa",
      links: [
        { href: "/sobre/", label: "Sobre" },
        { href: "/tecnologia/", label: "Tecnologia" },
        { href: "/normas/", label: "Normas" },
        { href: "/exemplos/", label: "Exemplos" },
        { href: "/como-comecar/", label: "Como começar" },
        { href: "/contato/", label: "Contato" },
      ],
    },
    {
      titulo: "Crédito rural",
      links: [
        ...produtosCredito.map((p) => ({ href: p.href, label: p.nome })),
        { href: "/cooperativas/", label: "Cooperativas" },
      ],
    },
    {
      titulo: "Exportação",
      links: [
        { href: triagemEudr.href, label: triagemEudr.nome },
      ],
    },
    {
      titulo: "Ferramentas gratuitas",
      links: [
        { href: "/ferramentas/", label: "Ferramentas gratuitas" },
        { href: "https://iagrointel.com/ferramentas/eudr-dds/", label: "Mapa DDS" },
        { href: "https://iagrointel.com/ferramentas/eudr-geojson/", label: "Gerador GeoJSON" },
      ],
    },
  ] as ColunaRodape[],
  legal: [
    { href: "/privacidade/", label: "Privacidade" },
    { href: "/termos/", label: "Termos" },
  ] as NavItem[],
  linksRotulo: "Rodapé",                                        // nome acessível da navegação do rodapé (já existia)
};

// ---------------------------------------------------------------------------
// Componentes globais
// ---------------------------------------------------------------------------

// Ressalva global: aviso final do documento do cliente, literal (aprovado na camada 2, 14/11/2026; substitui o
// texto anterior do MAPA-site.md).
export const ressalva =
  "Nenhuma saída decide crédito. A iAgroIntel organiza a evidência territorial com fonte e data; a decisão e a responsabilidade continuam com a instituição. Os resultados são uma triagem. Indicam sinais e não constituem prova.";

// Rótulos curtos dos componentes.
export const rotulos = {
  pendente: "Pendente",                 // PENDENCIAS.md e documento do cliente ("PENDENTE"); escrito sem caixa-alta
  exemplo: "Exemplo",                   // documento do cliente, exemplos: selo "Exemplo"
  verPdf: "Ver PDF",                    // MAPA-site.md (CTA de /exemplos)
  verPlanilha: "Ver planilha",          // TEXTO NOVO (aprovado em 15/11/2026): link do exemplo em planilha (GRSAC)
  fonte: "Fonte",                       // aprovado em 14/11/2026
  referencia: "Referência",             // aprovado em 14/11/2026 ("data de referência", MAPA-site.md)
  maturidade: "Maturidade",             // MAPA-site.md (modelo de produto, item 7)
  normasCabecalho: ["Norma", "O que exige", "Quando"] as const, // documento do cliente (cabeçalho da tabela de normas, literal)
  // 4ª coluna da tabela em /normas/: usa o rótulo "Fonte" (aprovado em 14/11/2026).
};

// Página 404 (app/not-found.tsx, E7, 14/11/2026).
export const pagina404 = {
  rotulo: "Erro 404",                                   // aprovado em 14/11/2026
  titulo: "Página não encontrada",                      // aprovado em 14/11/2026
  voltar: { href: "/", label: "Voltar ao início" },     // aprovado em 14/11/2026
};
