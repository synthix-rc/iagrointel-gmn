import Politica from "@/components/Politica";
import { metaRascunho } from "@/components/Rascunho";
import { politicaEn as p, politicaPt } from "@/content/privacidade";

// Minuta do cliente em inglês (P15; decisão 30): única página em inglês da v1. Faixa de rascunho + noindex
// (mesma condição) até o parecer do jurídico. Open Graph em en_US e hreflang para a versão em português.
const base = metaRascunho(p.rotuloPagina, p.rota, p.titulo);
export const metadata = {
  ...base,
  alternates: { ...base.alternates, languages: { "pt-BR": politicaPt.rota } },
  openGraph: { ...base.openGraph, locale: "en_US" },
};

export default function PrivacyEn() {
  return <Politica p={p} />;
}
