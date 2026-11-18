import { rotulos } from "@/content/site";
import type { CodigoPendente, Rico, Valor } from "@/content/valor";

/**
 * Marca de desenvolvimento PENDENTE (prefixo pend-, padroes.css): o valor aparece com a etiqueta "Pendente · P32".
 * (O LinkedIn do rodapé leva P23 no conteúdo, mas não é exibido com etiqueta: components/Footer.tsx.)
 * Códigos aceitos: content/valor.ts › codigosPendente.
 * Não é status de laudo, apesar de usar o âmbar do "com aviso" (DESIGN.md §9).
 * Nunca só cor: a etiqueta tem texto e contorno (--st-aviso em fundo claro, --st-aviso-escuro em seção escura).
 *
 * Não existe flag para esconder a etiqueta (decisão de 14/11/2026): um valor só perde a marca quando o código
 * é removido no conteúdo, depois da conferência. `npm run pendencias` lista tudo o que ainda está marcado, e o
 * build falha se o site for publicado sem rascunho (NEXT_PUBLIC_RASCUNHO=false) com alguma pendência.
 */
export default function Pendente({ codigo, children }: { codigo: CodigoPendente; children: React.ReactNode }) {
  return (
    <span className="pend">
      <span className="pend-v">{children}</span>
      <span className="pend-tag">{`${rotulos.pendente} · ${codigo}`}</span>
    </span>
  );
}

/** Mostra um Valor de content/: com a marca, se tiver código de pendência; sem ela, se não tiver. */
export function ValorTexto({ v, children }: { v: Valor; children?: React.ReactNode }) {
  const conteudo = children ?? v.valor;
  return v.pendente ? <Pendente codigo={v.pendente}>{conteudo}</Pendente> : <>{conteudo}</>;
}

/** Mostra um texto com trechos marcados (content/valor.ts › Rico) ou um texto simples. */
export function TextoRico({ t }: { t: Rico | string }) {
  if (typeof t === "string") return <>{t}</>;
  return <>{t.map((s, i) => (typeof s === "string" ? <span key={i}>{s}</span> : <ValorTexto key={i} v={s} />))}</>;
}
