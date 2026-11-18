import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Cta from "@/components/Cta";
import Abertura from "@/components/Abertura";
import Etapas from "@/components/Etapas";
import { empresa } from "@/content/site";
import { comoComecar } from "@/content/credito-rural";
import { paginaComoComecar as P } from "@/content/como-comecar";

// Decisão 43 (15/11/2026): conteúdo aprovado, fora do rascunho (sem faixa e sem noindex próprio). Com a indexação
// desligada (decisão 39), o layout dá noindex, nofollow a esta página como a todas.
export const metadata = metaPagina({ titulo: P.titulo, rota: "/como-comecar/", descricao: descricaoDe(comoComecar.h2) });

/**
 * /como-comecar/ (E5): docs/MAPA-site.md › Como começar.
 * Abertura (H1 + H2 do documento do cliente) · 4 etapas · o que a instituição envia na prova técnica · pedido.
 * O bloco Prazos saiu (P9). Formulário: ainda não (P20); no lugar, link de e-mail para empresa.email.
 */
export default function ComoComecar() {
  const pedido = <Cta href={`mailto:${empresa.email}`} variant="sq" className="lg" sameTab>{P.pedido}</Cta>;
  return (
    <>
      <Abertura rotulo={empresa.nome} titulo={P.titulo} subtitulo={comoComecar.h2} acoes={pedido} rascunho={false} />

      <section className="sec sec-white">
        <div className="g16 cl-src-grid">
          <Etapas itens={comoComecar.etapas} />
        </div>
      </section>

      <section className="sec sec-paper">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <SplitHeading as="h2" className="t-xl pl-h2" text={P.envia.titulo} by="line" />
            <Reveal as="p" className="p-m">{P.envia.texto}</Reveal>
          </div>
          <Reveal className="cl-src-head pd-actions">{pedido}</Reveal>
        </div>
      </section>
    </>
  );
}
