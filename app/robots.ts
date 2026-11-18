import type { MetadataRoute } from "next";
import { empresa } from "@/content/site";
import { indexarAtivo } from "@/lib/indexacao";

// Gerado no build (export estático). Indexação desligada (homologação, decisão 39): bloqueia tudo e não aponta o sitemap.
// Ligada: liberado, com sitemap; as páginas em rascunho saem dos buscadores pelo noindex de cada uma.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!indexarAtivo) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", empresa.url).toString(),
  };
}
