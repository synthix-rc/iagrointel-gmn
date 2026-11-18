import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Abertura from "@/components/Abertura";
import { paginaSobre as P } from "@/content/sobre";

// P10 encerrada (texto do cliente, 15/11/2026): fora do rascunho, sem faixa e sem noindex próprio. Com a indexação
// desligada (decisão 39), o layout dá noindex, nofollow a esta página como a todas.
export const metadata = metaPagina({ titulo: "Sobre", rota: "/sobre/", descricao: descricaoDe(P.texto[0]) });

const n2 = (i: number) => String(i + 1).padStart(2, "0");

/**
 * /sobre/ (P10 encerrada): abertura (dois parágrafos) · Como trabalhamos (lista numerada pd-rec-list) · A empresa.
 * Padrões existentes: Abertura (pd-hero), pd-rec-*, cl-src-*. Sem CSS novo. Fundos: Papel → branco → Papel.
 */
export default function Sobre() {
  return (
    <>
      <Abertura rotulo={P.rotulo} titulo={P.titulo} texto={P.texto[0]} textos={P.texto.slice(1)} rascunho={false} />

      <section className="sec sec-white pd-rec">
        <div className="g16 pd-rec-grid">
          <div className="pd-rec-head">
            <SplitHeading as="h2" className="t-xl pl-h2" text={P.principios.titulo} by="line" />
          </div>
          <Reveal as="ul" className="pd-rec-list" stagger={0.07} y={24}>
            {P.principios.itens.map((t, i) => (
              <li key={i}>
                <span className="pd-rec-n">{n2(i)}</span>
                <span className="pd-rec-t">{t}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="sec sec-paper">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <SplitHeading as="h2" className="t-xl pl-h2" text={P.empresa.titulo} by="line" />
            <Reveal as="p" className="p-m">{P.empresa.texto}</Reveal>
            {/* Link externo na mesma aba e sem seta (decisão 13). */}
            <Reveal><a className="lnk" href={P.empresa.produtor.href}>{P.empresa.produtor.label}</a></Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
