import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Cta from "@/components/Cta";
import ListaProdutos from "@/components/ListaProdutos";
import Etapas from "@/components/Etapas";
import Ressalva from "@/components/Ressalva";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { navCta } from "@/content/site";
import { comoComecar, paginaCredito } from "@/content/credito-rural";
import { paginaCooperativas as P } from "@/content/cooperativas";

export const metadata = metaPagina({
  titulo: P.hero.titulo,
  rota: "/cooperativas/",
  descricao: descricaoDe(P.hero.texto),
});

const SIZES_HERO = "(min-width: 1024px) 44vw, calc(100vw - 40px)";

/**
 * /cooperativas/: página de primeiro nível para Cooperativas de crédito.
 * 1 Abertura escura (.cl-hero .tc-hero) com números oficiais, fonte SICOR e cena Sentinel-2 ·
 * 2 Da operação à carteira · 3 GRSAC conforme o porte · 4 A cooperativa que compra das duas marcas ·
 * 5 Como começar · 6 Ressalva.
 */
export default function Cooperativas() {
  const img = imagemSentinel("credito-rural");
  const [menor] = img.versoes;

  return (
    <>
      <section className="cl-hero tc-hero" data-hero="" data-header="dark">
        <span className="cl-hero-grid" aria-hidden="true" />
        <div className="g16 cl-hero-in">
          <div className="cl-hero-text">
            <Reveal as="span" className="lbl" start="load" y={16}>{P.hero.rotulo}</Reveal>
            <SplitHeading as="h1" className="t-xl cl-title pd-hero-h1" text={P.hero.titulo} by="line" start="load" delay={0.1} visivel />
            <Reveal as="p" className="p-m cl-lead" start="load" delay={0.25} visivel>{P.hero.texto}</Reveal>
            <Reveal as="p" className="tc-hero-leg" start="load" delay={0.34} visivel>{P.hero.fonte}</Reveal>
          </div>
          <figure className="tc-hero-map">
            <Reveal className="tc-hero-img" start="load" delay={0.25} y={32}>
              <img
                src={menor.src}
                srcSet={srcSetDe(img)}
                sizes={SIZES_HERO}
                alt={img.mostra}
                width={menor.largura}
                height={menor.altura}
                loading="lazy"
                decoding="async"
              />
              <span className="tc-hero-scan" aria-hidden="true" />
            </Reveal>
            <figcaption className="tc-hero-leg">{legendaDe(img)}</figcaption>
          </figure>
        </div>
      </section>

      <ListaProdutos titulo={P.operacao.titulo} slugs={P.operacao.produtos} branco />
      <ListaProdutos titulo={P.grsac.titulo} texto={P.grsac.texto} slugs={P.grsac.produtos} empilhada />

      <section className="sec sec-white">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <SplitHeading as="h2" className="t-xl pl-h2" text={P.duasMarcas.titulo} by="line" />
            <Reveal as="p" className="p-m">{P.duasMarcas.texto}</Reveal>
            <Reveal><a className="lnk" href={P.duasMarcas.link.href}>{P.duasMarcas.link.label}</a></Reveal>
          </div>
        </div>
      </section>

      <section className="sec sec-paper">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{paginaCredito.indice.comoComecar}</Reveal>
            <SplitHeading as="h2" className="t-xl pl-h2" text={comoComecar.h2} by="line" />
          </div>
          <Etapas itens={comoComecar.etapas} />
          <Reveal className="cl-src-head pd-actions">
            <Cta href={navCta.href} variant="sq">{navCta.label}</Cta>
          </Reveal>
        </div>
        <Ressalva />
      </section>
    </>
  );
}
