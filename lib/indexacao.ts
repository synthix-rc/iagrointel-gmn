// ---------------------------------------------------------------------------
// Indexação (L1, decisão 39, 15/11/2026). Chave NEXT_PUBLIC_INDEXAR, desligada por padrão: só "true" liga.
// - Desligada (homologação): todas as páginas, home inclusive, com robots "noindex, nofollow"; robots.txt com
//   "Disallow: /" e sem a linha do sitemap; sitemap.xml vazio.
// - Ligada (lançamento): noindex só nas páginas em rascunho (components/Rascunho.tsx); robots.txt liberado, com sitemap.
// O build de lançamento exige NEXT_PUBLIC_INDEXAR=true junto com NEXT_PUBLIC_RASCUNHO=false
// (scripts/verifica-lancamento.mjs). O .vercel.app tem sempre X-Robots-Tag: noindex (vercel.json).
// ---------------------------------------------------------------------------

export const indexarAtivo = process.env.NEXT_PUBLIC_INDEXAR === "true";

/** robots de toda página enquanto a indexação estiver desligada. */
export const robotsHomologacao = { index: false, follow: false } as const;
