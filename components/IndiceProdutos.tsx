import Link from "next/link";
import SplitHeading from "@/components/motion/SplitHeading";
import HorizontalSection from "@/components/motion/HorizontalSection";
import CamadaPericial from "@/components/CamadaPericial";
import { TextoRico, ValorTexto } from "@/components/Pendente";
import { carimboDe, imagemSentinel, srcSetDe } from "@/components/ImagemSentinel";
import { produto, modeloProduto } from "@/content/produtos";
import { conteudoCredito } from "@/content/produtos-credito";
import { conteudoOutros } from "@/content/produtos-outros";
import { rotulos } from "@/content/site";
import type { Valor } from "@/content/valor";

const n2 = (i: number) => String(i + 1).padStart(2, "0");
const semConteudo = { evidencia: modeloProduto.aDefinir, maturidade: { valor: modeloProduto.aDefinir } as Valor };

const SIZES_CARD = "(min-width: 1024px) 38vw, (min-width: 768px) 50vw, 86vw";

type Grupo = { rotulo: string; slugs: string[] };
type Troca = { versoes: { src: string; largura: number; altura: number }[]; carimbo: string; atribuicao: string };
type Props = {
  titulo: string;
  grupos: Grupo[];
  trocas?: Record<string, Troca>;
};

/**
 * Vitrine horizontal de produtos na home (sobre HorizontalSection, padrão .cl-hs do kit da iAgroSat).
 * - Desktop com movimento: a seção fixa na tela (pin) e os 7 cartões deslizam na horizontal conforme a rolagem,
 *   com parallax horizontal na imagem Sentinel-2 (data-hx), barra de progresso na base e seletor rápido no topo.
 * - Celular: carrossel horizontal com swipe e scroll-snap.
 * - Sem JS ou com reduced motion: grade empilhada.
 */
export default function IndiceProdutos({ titulo, grupos, trocas = {} }: Props) {
  const itens = grupos.flatMap((g) => g.slugs.map((slug) => ({ slug, area: g.rotulo })));
  const total = n2(itens.length - 1);

  const imagemDe = (slug: string) => {
    const t = trocas[slug];
    if (t) return { versoes: t.versoes, srcSet: t.versoes.map((v) => `${v.src} ${v.largura}w`).join(", "), carimbo: t.carimbo, atribuicao: t.atribuicao };
    const i = imagemSentinel(slug);
    return { versoes: i.versoes, srcSet: srcSetDe(i), carimbo: carimboDe(i), atribuicao: i.atribuicao };
  };

  const imagens = itens.map((it) => imagemDe(it.slug));
  const atribuicoes = [...new Set(imagens.map((i) => i.atribuicao).filter(Boolean))];
  const areasRotulo = grupos.map((g) => g.rotulo).join(" · ");

  return (
    <HorizontalSection
      id="hm-ix"
      header="dark"
      className="hm-mos hm-hp"
      head={
        <div className="hm-hp-head">
          <div className="hm-hp-head-esq">
            <span className="lbl">{areasRotulo}</span>
            <SplitHeading as="h2" className="t-xl pl-h2 hm-mos-titulo" text={titulo} by="line" />
          </div>
          <div className="hm-hp-head-dir" aria-hidden="true">
            <div className="hm-hp-nav">
              {itens.map((it, idx) => {
                const p = produto(it.slug);
                return (
                  <button key={it.slug} type="button" className="hm-hp-pill" data-hs-nav={idx} tabIndex={-1} title={p.nome}>
                    <span>{n2(idx)}</span>
                  </button>
                );
              })}
            </div>
            <p className="hm-hp-count"><b data-hs-count>{n2(0)}</b> / {total}</p>
          </div>
        </div>
      }
      foot={<p className="hm-mos-atr hm-hp-atr">{atribuicoes.join(" · ")}</p>}
    >
      {itens.map((it, idx) => {
        const p = produto(it.slug);
        const c = conteudoCredito[it.slug] ?? conteudoOutros[it.slug] ?? semConteudo;
        const img = imagens[idx];
        const [menor] = img.versoes;
        return (
          <article key={it.slug} className="hs-panel hm-hp-card">
            <div className="hm-hp-media" aria-hidden="true">
              <div className="hm-hp-media-in" data-hx="7">
                <img
                  src={menor.src}
                  srcSet={img.srcSet}
                  sizes={SIZES_CARD}
                  alt=""
                  width={menor.largura}
                  height={menor.altura}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <CamadaPericial slug={it.slug} area={it.area} carimbo={img.carimbo} />
            </div>
            <div className="hm-hp-body">
              <div className="hm-hp-top">
                <span className="hm-hp-n">{n2(idx)} <small>/ {total}</small></span>
                <small className="hm-ix-mat">{rotulos.maturidade} · <ValorTexto v={c.maturidade} /></small>
              </div>
              <div className="hm-hp-main">
                <h3 className="hm-hp-nome">
                  {p.href ? <Link href={p.href}>{p.nome}</Link> : p.nome}
                </h3>
                {p.subtitulo && <p className="hm-hp-sub">{p.subtitulo}</p>}
                <p className="hm-hp-ev"><TextoRico t={c.evidencia} /></p>
              </div>
              <div className="hm-hp-foot" aria-hidden="true">
                <span className="hm-hp-seta">→</span>
              </div>
            </div>
          </article>
        );
      })}
    </HorizontalSection>
  );
}
