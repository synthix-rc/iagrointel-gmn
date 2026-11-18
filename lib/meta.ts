// ---------------------------------------------------------------------------
// Metadados por página (E7, 14/11/2026): title, description, canonical e Open Graph.
// Description: o primeiro texto da página (H2 ou abertura) SEM valor pendente e que não seja "A DEFINIR".
// A meta description não mostra a etiqueta Pendente; por isso um texto com número ou data ainda não
// conferidos não vai para ela. Sem candidato, fica a description global (empresa.descricao, que já leva P18
// e é contada por `npm run pendencias`).
// ---------------------------------------------------------------------------
import type { Metadata } from "next";
import { empresa, rodape } from "@/content/site";
import type { Rico } from "@/content/valor";

/** Imagem Open Graph padrão: logo de endosso negativo oficial, como está, sobre Tinta (1200 × 630). */
export const imagemOg = { url: "/brand/og-iagrointel.png", width: 1200, height: 630, alt: rodape.endossoAlt };

type Candidato = string | Rico | undefined;

/** Texto simples de um candidato; null se tiver valor pendente, se for "A DEFINIR" ou se não existir. */
function semPendencia(t: Candidato): string | null {
  if (!t) return null;
  if (typeof t !== "string" && t.some((s) => typeof s !== "string" && s.pendente)) return null;
  const texto = typeof t === "string" ? t : t.map((s) => (typeof s === "string" ? s : s.valor)).join("");
  return texto.trim() === "" || texto.trim() === "A DEFINIR" ? null : texto.trim();
}

/** Primeiro candidato sem pendência, ou undefined (→ description global). */
export function descricaoDe(...candidatos: Candidato[]): string | undefined {
  for (const c of candidatos) {
    const t = semPendencia(c);
    if (t) return t;
  }
  return undefined;
}

/** Metadados de uma página: title (o layout acrescenta " · iAgroIntel"), description, canonical e Open Graph. */
export function metaPagina({ titulo, rota, descricao }: { titulo: string; rota: string; descricao?: string }): Metadata {
  const desc = descricao ?? empresa.descricao.valor;
  return {
    title: titulo,
    description: desc,
    alternates: { canonical: rota },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: empresa.nome,
      title: `${titulo} · ${empresa.nome}`,
      description: desc,
      url: rota,
      images: [imagemOg],
    },
  };
}
