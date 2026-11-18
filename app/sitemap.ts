import type { MetadataRoute } from "next";
import { empresa } from "@/content/site";
import { rotas } from "@/lib/rotas";
import { rascunhoAtivo } from "@/components/Rascunho";
import { indexarAtivo } from "@/lib/indexacao";

// Gerado no build (export estático). Só páginas SEM noindex: as em rascunho entram quando
// NEXT_PUBLIC_RASCUNHO=false ou quando saírem do rascunho em lib/rotas.ts.
// scripts/verifica-sitemap.mjs (postbuild) confere o resultado contra o HTML gerado.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Indexação desligada (decisão 39): todas as páginas têm noindex, então o sitemap fica vazio.
  if (!indexarAtivo) return [];
  return rotas
    .filter((r) => !(r.rascunho && rascunhoAtivo))
    .map((r) => ({ url: new URL(r.rota, empresa.url).toString() }));
}
