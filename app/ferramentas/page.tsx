import Link from "next/link";
import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Cta from "@/components/Cta";
import Maturidade from "@/components/Maturidade";
import Ressalva from "@/components/Ressalva";
import { TextoRico } from "@/components/Pendente";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { navCta } from "@/content/site";
import { triagemEudr } from "@/content/produtos";
import { conteudoOutros } from "@/content/produtos-outros";
import { paginaExportacao as P } from "@/content/exportacao";

export const metadata = metaPagina({
  titulo: P.titulo,
  rota: "/ferramentas/",
  descricao: descricaoDe(P.problema, P.ferramentas.descricao),
});

const SIZES_HERO = "(min-width: 1024px) 44vw, calc(100vw - 40px)";
const n2 = (i: number) => String(i + 1).padStart(2, "0");

/**
 * /ferramentas/: Ferramentas gratuitas da iAgroIntel (Mapa DDS e Gerador GeoJSON) com links diretos para as aplicações
 * externas (decisão 7) e chamada para a versão corporativa completa (Triagem EUDR).
 */
export default function Ferramentas() {
  const img = imagemSentinel(P.imagemAbertura);
  const [menor] = img.versoes;
  const cEudr = conteudoOutros[triagemEudr.slug];

  return (
    <>
      {/* 0 · Abertura escura com cena Sentinel-2 da região cafeeira */}
      <section className="cl-hero tc-hero" data-hero="" data-header="dark">
        <span className="cl-hero-grid" aria-hidden="true" />
        <div className="g16 cl-hero-in">
          <div className="cl-hero-text">
            <Reveal as="span" className="lbl" start="load" y={16}>{P.rotulo}</Reveal>
            <SplitHeading as="h1" className="t-xl cl-title pd-hero-h1" text={P.titulo} by="line" start="load" delay={0.1} visivel />
            <Reveal as="p" className="p-m cl-lead" start="load" delay={0.25} visivel>{P.problema}</Reveal>
            <Reveal as="p" className="p-m cl-lead" start="load" delay={0.32} visivel>{P.publico}</Reveal>
            <Reveal as="ul" className="pl-selos cl-selos" stagger={0.08} y={12} start="load" delay={0.42}>
              {P.selos.map((s) => <li key={s}>{s}</li>)}
            </Reveal>
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

      {/* 1 · As duas ferramentas gratuitas (cartões lado a lado com link direto para as páginas externas) */}
      <section className="sec sec-white cl-src" aria-labelledby="fr-h-lista">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{P.ferramentas.rotulo}</Reveal>
            <SplitHeading id="fr-h-lista" as="h2" className="t-xl pl-h2" text={P.ferramentas.titulo} by="line" />
            <Reveal as="p" className="p-m">{P.ferramentas.descricao}</Reveal>
          </div>
          <Reveal as="ol" className="fr-grid" stagger={0.12} y={28}>
            {P.ferramentas.itens.map((f, i) => (
              <li key={f.href} className="fr-card">
                <div className="fr-card-top">
                  <span className="pd-step-n" aria-hidden="true">{n2(i)}</span>
                  <span className="fr-escopo">{f.escopo}</span>
                </div>
                <div className="fr-card-body">
                  <h3 className="fr-card-t"><a href={f.href}>{f.titulo}</a></h3>
                  <p className="fr-card-x">{f.descricao}</p>
                </div>
                <div className="fr-card-foot">
                  <Cta href={f.href} variant="sq">{f.cta}</Cta>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 2 · Versão corporativa completa (Triagem EUDR) + Ressalva global */}
      <section className="sb-tec" data-header="dark" aria-labelledby="fr-h-eudr">
        <div className="g16 sb-tec-in">
          <div className="sb-tec-head">
            <Reveal as="span" className="lbl" y={16}>{P.versaoCompleta.rotulo}</Reveal>
            <SplitHeading id="fr-h-eudr" as="h2" className="t-xl pl-h2" text={P.versaoCompleta.titulo} by="line" />
            <Reveal as="p" className="p-m tc-nums-texto">{P.versaoCompleta.texto}</Reveal>
          </div>
          <Reveal as="ul" className="sb-tec-list" y={24}>
            <li>
              <span className="sb-tec-n" aria-hidden="true">01</span>
              <div className="sb-tec-name">
                <h3><Link href={triagemEudr.href}>{triagemEudr.nome}</Link></h3>
                <Maturidade nivel={cEudr.maturidade} />
              </div>
              <p><TextoRico t={cEudr.evidencia} /></p>
            </li>
          </Reveal>
          <Reveal className="fr-eudr-actions" y={16}>
            <Cta href={triagemEudr.href} variant="sq-light">{triagemEudr.nome}</Cta>
            <Cta href={navCta.href} variant="sq-ghost">{navCta.label}</Cta>
          </Reveal>
        </div>
        <Ressalva />
      </section>
    </>
  );
}
