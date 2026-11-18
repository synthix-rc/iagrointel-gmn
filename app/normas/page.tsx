import Link from "next/link";
import { descricaoDe, metaPagina } from "@/lib/meta";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Indicadores from "@/components/Indicadores";
import NormasTabela from "@/components/NormasTabela";
import Ressalva from "@/components/Ressalva";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { indicadores, fontesIndicadores } from "@/content/credito-rural";
import { produto } from "@/content/produtos";
import { paginaNormas as P } from "@/content/normas";

// Decisão 43 (15/11/2026): conteúdo aprovado, fora do rascunho (sem faixa e sem noindex próprio). Com a indexação
// desligada (decisão 39), o layout dá noindex, nofollow a esta página como a todas.
export const metadata = metaPagina({
  titulo: P.titulo,
  rota: "/normas/",
  descricao: descricaoDe(P.lead),
});

const SIZES_HERO = "(min-width: 1024px) 44vw, calc(100vw - 40px)";
const n2 = (i: number) => String(i + 1).padStart(2, "0");

/**
 * /normas/: docs/MAPA-site.md › Normas.
 * Estrutura no padrão iAgroSat (monitoramento__uso-do-solo.tsx, sobre.tsx e /credito-rural/):
 * - 0 · Abertura escura (.cl-hero .tc-hero, data-header="dark") com grade de coordenadas, selos de marcos e prazos,
 *   cena Sentinel-2 com feixe de varredura (.tc-hero-map) e índice de âncoras (.cr-indice).
 * - 1 · Dimensionamento (Indicadores oficiais SICOR/SICAR com CountUp).
 * - 2 · Quadro de normas e fontes oficiais (NormasTabela comFonte: Seção 9 do MCR, Res. CMN 5.267, 5.268 e 5.303,
 *   Res. BCB 586 e Regulamento (UE) 2023/1115 — EUDR).
 * - 3 · Marcos retroativos (31/07/2019 e 31/12/2020) e cronograma 2026–2028 (.nm-cortes + .pd-steps-list).
 * - 4 · Na operação (.sb-tec escuro, data-header="dark"): qual produto organiza a evidência de cada norma e o que não substitui + Ressalva global.
 */
export default function Normas() {
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
        <nav className="g16 cr-indice-wrap" aria-label={P.indice.rotulo}>
          <Reveal className="cr-indice" start="load" delay={0.5} y={12}>
            <span className="cr-indice-t">{P.indice.rotulo}</span>
            <ul>
              {P.indice.itens.map((it) => (
                <li key={it.id}><a href={`#${it.id}`}>{it.label}</a></li>
              ))}
            </ul>
          </Reveal>
        </nav>
      </section>

      {/* 1 · Indicadores oficiais (SICOR/Banco Central e SICAR) */}
      <section id="indicadores" className="sec sec-white cl-src cr-ancora" aria-labelledby="nm-h-ind">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{P.indicadoresSecao.rotulo}</Reveal>
            <SplitHeading id="nm-h-ind" as="h2" className="t-xl pl-h2" text={P.indicadoresSecao.titulo} by="line" />
          </div>
          <Indicadores itens={indicadores} fontes={fontesIndicadores} />
        </div>
      </section>

      {/* 2 · Quadro completo de normas com coluna Fonte (links oficiais) */}
      <section id="quadro-normas" className="sec sec-paper cl-src cr-ancora" aria-labelledby="nm-h-quadro">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{P.quadroSecao.rotulo}</Reveal>
            <SplitHeading id="nm-h-quadro" as="h2" className="t-xl pl-h2" text={P.quadroSecao.titulo} by="line" />
          </div>
          <NormasTabela linhas={P.quadroSecao.linhas} comFonte />
        </div>
      </section>

      {/* 3 · Marcos retroativos (2019 e 2020) e cronograma 2026–2028 */}
      <section id="marcos-prazos" className="sec sec-white cl-src cr-ancora" aria-labelledby="nm-h-marcos">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{P.marcosSecao.rotulo}</Reveal>
            <SplitHeading id="nm-h-marcos" as="h2" className="t-xl pl-h2" text={P.marcosSecao.titulo} by="line" />
          </div>
          <Reveal as="dl" className="nm-cortes" stagger={0.1}>
            {P.marcosSecao.cortes.map((c) => (
              <div key={c.data} className="nm-corte">
                <dd className="nm-corte-data">{c.data}</dd>
                <dt className="nm-corte-norma">{c.norma}</dt>
                <p className="nm-corte-txt">{c.texto}</p>
              </div>
            ))}
          </Reveal>
          <Reveal as="ol" className="pd-steps-list tc-steps" stagger={0.1} y={28}>
            {P.marcosSecao.cronograma.map((c, k) => (
              <li key={c.data}>
                <span className="pd-step-n" aria-hidden="true">{n2(k)}</span>
                <div className="nm-step-body">
                  <span className="nm-step-meta">{c.data} · {c.norma}</span>
                  <p>{c.texto}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 4 · Na operação: Norma × Produto da iAgroIntel (.sb-tec escuro) + Ressalva global */}
      <section id="na-operacao" className="sb-tec cr-ancora" data-header="dark" aria-labelledby="nm-h-operacao">
        <div className="g16 sb-tec-in">
          <div className="sb-tec-head">
            <Reveal as="span" className="lbl" y={16}>{P.operacaoSecao.rotulo}</Reveal>
            <SplitHeading id="nm-h-operacao" as="h2" className="t-xl pl-h2" text={P.operacaoSecao.titulo} by="line" />
          </div>
          <Reveal as="ol" className="sb-tec-list" stagger={0.08} y={24}>
            {P.operacaoSecao.itens.map((it, k) => {
              const p = produto(it.slug);
              return (
                <li key={it.slug}>
                  <span className="sb-tec-n" aria-hidden="true">{n2(k)}</span>
                  <div className="sb-tec-name">
                    <h3><Link href={p.href}>{p.nome}</Link></h3>
                    <small>{it.norma}</small>
                  </div>
                  <p>{it.texto}</p>
                </li>
              );
            })}
          </Reveal>
        </div>
        <Ressalva />
      </section>
    </>
  );
}
