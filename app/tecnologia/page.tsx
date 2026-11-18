import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import CountUp from "@/components/motion/CountUp";
import Marquee from "@/components/motion/Marquee";
import { TextoRico } from "@/components/Pendente";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { paginaTecnologia as P } from "@/content/tecnologia";

// Decisão 43 (15/11/2026): conteúdo aprovado, fora do rascunho (sem faixa e sem noindex próprio). Com a indexação
// desligada (decisão 39), o layout dá noindex, nofollow a esta página como a todas.
export const metadata = metaPagina({
  titulo: P.titulo,
  rota: "/tecnologia/",
  descricao: descricaoDe(...P.secoes.flatMap((s) => s.itens)),
});

const SIZES_HERO = "(min-width: 1024px) 44vw, calc(100vw - 40px)";
const n2 = (i: number) => String(i + 1).padStart(2, "0");

/**
 * /tecnologia/: docs/MAPA-site.md v3 › Tecnologia.
 * Estrutura herdada do kit de referência da iAgroSat (monitoramento__uso-do-solo.tsx, monitoramento__clima.tsx e geo-e-api__mcp.tsx):
 * - Abertura escura (.cl-hero .tc-hero, data-header="dark") com grade de coordenadas, selos (.pl-selos .cl-selos),
 *   cena Sentinel-2 com feixe de varredura (.tc-hero-map) e índice de âncoras (.cr-indice).
 * - Ritmo alternado entre seções brancas, Papel e Tinta (ideia 7 de IDEIAS-visuais.md):
 *   1 Imagens Sentinel-2 (cartões .pd-steps-list em 3 colunas) ·
 *   2 Bases oficiais (.pd-rec-grid + faixa corrida .tiles no modo rolagem, ideia 12) ·
 *   3 Formatos de entrada (.pd-rec-grid com selos .pl-selos) ·
 *   4 Processamento (cartões .pd-steps-list em 4 colunas) ·
 *   5 Teste de consistência (seção escura .sb-tec com números grandes .tc-nums e CountUp) ·
 *   6 Classificação dos alertas PRODES (cartões .pd-steps-list nas 4 etapas literais da P8) ·
 *   7 Limites (seção escura .sb-tec .mc-lim, padrão de geo-e-api__mcp.tsx).
 */
export default function Tecnologia() {
  const [sSentinel, sBases, sFormatos, sProc, sConsistencia, sProdes, sLimites] = P.secoes;
  const img = imagemSentinel(P.imagemAbertura);
  const [menor] = img.versoes;

  return (
    <>
      {/* 0 · Abertura escura com cena Sentinel-2 e índice de âncoras */}
      <section className="cl-hero tc-hero" data-hero="" data-header="dark">
        <span className="cl-hero-grid" aria-hidden="true" />
        <div className="g16 cl-hero-in">
          <div className="cl-hero-text">
            <Reveal as="span" className="lbl" start="load" y={16}>{P.rotulo}</Reveal>
            <SplitHeading as="h1" className="t-xl cl-title pd-hero-h1" text={P.titulo} by="line" start="load" delay={0.1} visivel />
            <Reveal as="p" className="p-m cl-lead" start="load" delay={0.25} visivel>{P.lead}</Reveal>
            <Reveal as="ul" className="pl-selos cl-selos" stagger={0.08} y={12} start="load" delay={0.4}>
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
        <nav className="g16 cr-indice-wrap" aria-label={P.indiceRotulo}>
          <Reveal className="cr-indice" start="load" delay={0.5} y={12}>
            <span className="cr-indice-t">{P.indiceRotulo}</span>
            <ul>
              {P.secoes.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.titulo}</a></li>
              ))}
            </ul>
          </Reveal>
        </nav>
      </section>

      {/* 1 · Imagens Sentinel-2: 3 cartões numerados (.pd-steps-list) */}
      <section id={sSentinel.id} className="sec sec-white cl-src cr-ancora" aria-labelledby="tc-h-sentinel">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{sSentinel.rotulo}</Reveal>
            <SplitHeading id="tc-h-sentinel" as="h2" className="t-xl pl-h2" text={sSentinel.titulo} by="line" />
          </div>
          <Reveal as="ol" className="pd-steps-list tc-steps" stagger={0.1} y={28}>
            {sSentinel.itens.map((t, k) => (
              <li key={k}>
                <span className="pd-step-n" aria-hidden="true">{n2(k)}</span>
                <p><TextoRico t={t} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 2 · Bases oficiais: .pd-rec-grid + faixa corrida .tiles (padrão da iAgroSat) */}
      <section id={sBases.id} className="sec sec-paper part cr-ancora" aria-labelledby="tc-h-bases">
        <div className="g16 pd-rec-grid">
          <div className="pd-rec-head">
            <Reveal as="span" className="lbl" y={16}>{sBases.rotulo}</Reveal>
            <SplitHeading id="tc-h-bases" as="h2" className="t-xl pl-h2" text={sBases.titulo} by="line" />
          </div>
          <Reveal as="ol" className="pd-rec-list" stagger={0.07} y={24}>
            {sBases.itens.map((t, k) => (
              <li key={k}>
                <span className="pd-rec-n" aria-hidden="true">{n2(k)}</span>
                <span className="pd-rec-x"><TextoRico t={t} /></span>
              </li>
            ))}
          </Reveal>
        </div>
        <Marquee className="tiles" speed={45}>
          {P.basesTiles.map((b) => <span className="tile" key={b}>{b}</span>)}
        </Marquee>
      </section>

      {/* 3 · Formatos de entrada: título e selos à esquerda (.pd-rec-head) + lista numerada à direita (.pd-rec-list) */}
      <section id={sFormatos.id} className="sec sec-white cr-ancora" aria-labelledby="tc-h-formatos">
        <div className="g16 pd-rec-grid">
          <div className="pd-rec-head">
            <Reveal as="span" className="lbl" y={16}>{sFormatos.rotulo}</Reveal>
            <SplitHeading id="tc-h-formatos" as="h2" className="t-xl pl-h2" text={sFormatos.titulo} by="line" />
            <Reveal as="ul" className="pl-selos" stagger={0.06} y={10}>
              {P.formatosSelos.map((f) => <li key={f}>{f}</li>)}
            </Reveal>
          </div>
          <Reveal as="ol" className="pd-rec-list" stagger={0.07} y={24}>
            {sFormatos.itens.map((t, k) => (
              <li key={k}>
                <span className="pd-rec-n" aria-hidden="true">{n2(k)}</span>
                <span className="pd-rec-x"><TextoRico t={t} /></span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 4 · Processamento: 4 cartões numerados (.pd-steps-list variante de 4 colunas) */}
      <section id={sProc.id} className="sec sec-paper cl-src cr-ancora" aria-labelledby="tc-h-proc">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{sProc.rotulo}</Reveal>
            <SplitHeading id="tc-h-proc" as="h2" className="t-xl pl-h2" text={sProc.titulo} by="line" />
          </div>
          <Reveal as="ol" className="pd-steps-list tc-steps" stagger={0.1} y={28}>
            {sProc.itens.map((t, k) => (
              <li key={k}>
                <span className="pd-step-n" aria-hidden="true">{n2(k)}</span>
                <p><TextoRico t={t} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5 · Teste de consistência: seção escura (.sb-tec) com números grandes (.tc-nums + CountUp) */}
      <section id={sConsistencia.id} className="sb-tec cr-ancora" data-header="dark" aria-labelledby="tc-h-consistencia">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{sConsistencia.rotulo}</Reveal>
            <SplitHeading id="tc-h-consistencia" as="h2" className="t-xl pl-h2" text={sConsistencia.titulo} by="line" />
          </div>
          <Reveal as="dl" className="tc-nums" stagger={0.1}>
            {P.consistenciaNumeros.map((n) => (
              <div key={n.rotulo}>
                <dd><CountUp value={n.valor} /></dd>
                <dt>{n.rotulo}</dt>
              </div>
            ))}
          </Reveal>
          {sConsistencia.itens.map((t, k) => (
            <Reveal key={k} as="p" className="p-m tc-nums-texto"><TextoRico t={t} /></Reveal>
          ))}
        </div>
      </section>

      {/* 6 · Classificação dos alertas PRODES: 4 etapas numeradas (.pd-steps-list variante de 4 colunas) */}
      <section id={sProdes.id} className="sec sec-white cl-src cr-ancora" aria-labelledby="tc-h-prodes">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{sProdes.rotulo}</Reveal>
            <SplitHeading id="tc-h-prodes" as="h2" className="t-xl pl-h2" text={sProdes.titulo} by="line" />
          </div>
          <Reveal as="ol" className="pd-steps-list tc-steps" stagger={0.1} y={28}>
            {sProdes.itens.map((t, k) => (
              <li key={k}>
                <span className="pd-step-n" aria-hidden="true">{n2(k)}</span>
                <p><TextoRico t={t} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 7 · Limites: seção escura (.sb-tec .mc-lim, padrão de geo-e-api__mcp.tsx) */}
      <section id={sLimites.id} className="sb-tec mc-lim cr-ancora" data-header="dark" aria-labelledby="tc-h-limites">
        <div className="g16 sb-tec-in">
          <div className="sb-tec-head">
            <Reveal as="span" className="lbl" y={16}>{sLimites.rotulo}</Reveal>
            <SplitHeading id="tc-h-limites" as="h2" className="t-xl pl-h2" text={sLimites.titulo} by="line" />
          </div>
          <Reveal as="ol" className="mc-lim-list" stagger={0.08} y={24}>
            {sLimites.itens.map((t, k) => (
              <li key={k}>
                <span className="sb-tec-n" aria-hidden="true">{n2(k)}</span>
                <p><TextoRico t={t} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
