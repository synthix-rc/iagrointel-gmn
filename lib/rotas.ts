// ---------------------------------------------------------------------------
// Rotas do site (E7, 14/11/2026). Fonte do sitemap.xml (app/sitemap.ts).
// rascunho: a página usa metaRascunho() (faixa + noindex enquanto NEXT_PUBLIC_RASCUNHO não for "false").
// Ao aprovar uma página, troque rascunho para false AQUI e tire o metaRascunho/Rascunho da página.
// O script scripts/verifica-sitemap.mjs (postbuild) confere o resultado: nenhuma página com noindex no
// sitemap e nenhuma página indexável fora dele. Se esta lista e as páginas divergirem, o build falha.
// ---------------------------------------------------------------------------
import { produtosCredito } from "@/content/produtos";

// Decisão 43 (15/11/2026): só Contato, Privacidade, Privacy (EN) e Termos continuam em rascunho.

export type Rota = { rota: string; rascunho: boolean };

export const rotas: Rota[] = [
  { rota: "/", rascunho: false },
  { rota: "/cooperativas/", rascunho: false },
  ...produtosCredito.map((p) => ({ rota: p.href, rascunho: false })),
  { rota: "/triagem-eudr/", rascunho: false },
  { rota: "/ferramentas/", rascunho: false },
  { rota: "/como-comecar/", rascunho: false },
  { rota: "/exemplos/", rascunho: false },
  { rota: "/normas/", rascunho: false },
  { rota: "/tecnologia/", rascunho: false },
  // /verificar/ saiu do site (decisão 23; P11 aberta).
  { rota: "/sobre/", rascunho: false },
  { rota: "/contato/", rascunho: true },
  { rota: "/privacidade/", rascunho: true },
  { rota: "/privacidade/en/", rascunho: true },
  { rota: "/termos/", rascunho: true },
];
