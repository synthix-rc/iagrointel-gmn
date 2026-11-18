import type { Metadata } from "next";
import { metaPagina } from "@/lib/meta";
import { avisoRascunho } from "@/content/rascunhos";
import { indexarAtivo, robotsHomologacao } from "@/lib/indexacao";

/**
 * Rascunho: UMA condição controla a faixa visível e o noindex (aprovado em 14/11/2026).
 * - Página ainda sem conteúdo aprovado: usa <Rascunho /> e metaRascunho(). As duas leem rascunhoAtivo.
 * - Quando a página ganha conteúdo, sai das duas chamadas ao mesmo tempo (o PageStub já faz as duas).
 * - Para desligar em todas as páginas de uma vez: NEXT_PUBLIC_RASCUNHO=false no build, que tira a faixa e o noindex juntos.
 *   Desde a L1 (decisão 39) isso só vale no lançamento, junto com NEXT_PUBLIC_INDEXAR=true (scripts/verifica-lancamento.mjs);
 *   com a indexação desligada (lib/indexacao.ts), toda página fica com noindex, nofollow.
 */
export const rascunhoAtivo = process.env.NEXT_PUBLIC_RASCUNHO !== "false";

/**
 * Metadados de uma página em rascunho (lib/meta.ts: title, description, canonical, Open Graph) e, enquanto
 * em rascunho, fora dos buscadores. descricao: use descricaoDe(...) com o H2 ou o texto de abertura da página.
 */
export function metaRascunho(titulo: string, rota: string, descricao?: string): Metadata {
  const base = metaPagina({ titulo, rota, descricao });
  // Indexação desligada (homologação, decisão 39): noindex, nofollow em toda página, rascunho ou não.
  if (!indexarAtivo) return { ...base, robots: robotsHomologacao };
  return rascunhoAtivo ? { ...base, robots: { index: false, follow: true } } : base;
}

/** Faixa "rascunho provisório" no topo da página (prefixo rasc-, padroes.css). */
export default function Rascunho() {
  if (!rascunhoAtivo) return null;
  return (
    <div className="g16 rasc-wrap">
      <p className="rasc" role="note">{avisoRascunho}</p>
    </div>
  );
}
