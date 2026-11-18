import Politica from "@/components/Politica";
import { metaRascunho } from "@/components/Rascunho";
import { politicaPt as p, politicaEn } from "@/content/privacidade";

// Minuta do cliente (P15): faixa de rascunho + noindex (mesma condição) até o parecer do jurídico.
// Link para a versão em inglês também nos metadados (hreflang).
const base = metaRascunho(p.rotuloPagina, p.rota, p.titulo);
export const metadata = { ...base, alternates: { ...base.alternates, languages: { en: politicaEn.rota } } };

export default function Privacidade() {
  return <Politica p={p} />;
}
