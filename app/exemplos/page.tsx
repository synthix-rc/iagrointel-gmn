import { metaPagina } from "@/lib/meta";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Abertura from "@/components/Abertura";
import { ExemploLista, ExemploTabela } from "@/components/ExemploCard";
import { empresa } from "@/content/site";
import { todosProdutos } from "@/content/produtos";
import { exemplos, tabelasExemplo, paginaExemplos as P } from "@/content/exemplos";

// Decisão 43 (15/11/2026): conteúdo aprovado, fora do rascunho (sem faixa e sem noindex próprio). Com a indexação
// desligada (decisão 39), o layout dá noindex, nofollow a esta página como a todas.
export const metadata = metaPagina({ titulo: P.titulo, rota: "/exemplos/" });

/**
 * /exemplos/ (E5): os exemplos do documento do cliente agrupados por produto, na ordem de content/produtos.ts.
 * Cada grupo: nome do produto (link para a página dele) + cards com selo "Exemplo" e link para o arquivo
 * em public/exemplos/ (P13 e P32 encerradas).
 * Fundos alternados branco/Papel depois da abertura.
 */
export default function Exemplos() {
  const grupos = todosProdutos
    .map((p) => ({ p, itens: exemplos.filter((e) => e.produto === p.slug) }))
    .filter((g) => g.itens.length > 0);
  return (
    <>
      <Abertura rotulo={empresa.nome} titulo={P.titulo} rascunho={false} />
      {grupos.map(({ p, itens }, i) => (
        <section key={p.slug} id={p.slug} className={`sec ${i % 2 ? "sec-paper" : "sec-white"}`}>
          <div className="g16 cl-src-grid">
            <div className="cl-src-head">
              <SplitHeading as="h2" className="t-xl pl-h2" text={p.nome} by="line" />
              <Reveal><Link className="lnk" href={p.href}>{p.nome}<span aria-hidden="true">→</span></Link></Reveal>
            </div>
            <ExemploLista itens={itens} />
            {tabelasExemplo.filter((t) => t.produto === p.slug).map((t) => <ExemploTabela key={t.produto} t={t} />)}
          </div>
        </section>
      ))}
    </>
  );
}
