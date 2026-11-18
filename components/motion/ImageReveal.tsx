"use client";

import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP, MQ, EASE } from "./gsap";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  /** Intensidade do parallax interno (em % da altura). */
  speed?: number;
  /** Imagem da abertura (primeira tela): carrega já, com fetchpriority="high". Fora dela: loading="lazy". */
  prioridade?: boolean;
  /** A proporção vem do CSS do quadro (ex.: .pv na abertura), não de width/height. */
  proporcaoDoQuadro?: boolean;
  /** Versões em outras larguras ("a.webp 1600w, b.webp 2400w") e a largura em que a imagem aparece (sizes). */
  srcSet?: string;
  sizes?: string;
};

/**
 * Imagem que abre do centro para fora ao entrar na tela.
 * A moldura cresce de 55% para 100% a partir do centro e a foto de dentro faz o movimento inverso
 * (fica do mesmo tamanho na tela, com um leve zoom de 1,2 para 1): parece uma janela se abrindo,
 * como um recorte "inset" — mas só com transform e opacity.
 * Depois, a foto corre devagar dentro da moldura (parallax).
 */
export default function ImageReveal({ src, alt, width, height, className, style, speed = 8, prioridade = false, proporcaoDoQuadro = false, srcSet, sizes }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    // .ir (moldura fixa, serve de gatilho) > .ir-win (janela que cresce) > .ir-in (compensa) > img (parallax)
    const win = el.querySelector<HTMLElement>(".ir-win");
    const inner = el.querySelector<HTMLElement>(".ir-in");
    const img = el.querySelector<HTMLElement>("img");
    if (!win || !inner || !img) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const FROM = 0.55;
      const p = { v: 0 };
      const render = () => {
        const outer = FROM + (1 - FROM) * p.v;            // moldura: 0,55 → 1
        const zoom = 1.2 - 0.2 * p.v;                      // foto: 1,2 → 1
        gsap.set(win, { scale: outer, opacity: Math.min(1, p.v * 4) });
        gsap.set(inner, { scale: zoom / outer });          // compensa a moldura: a foto não "encolhe" junto
      };
      render();
      gsap.to(p, {
        v: 1, duration: 1.4, ease: EASE.expo, onUpdate: render,
        onComplete: () => gsap.set([win, inner], { clearProps: "transform,opacity" }),
        scrollTrigger: { trigger: el, start: "clamp(top 85%)", once: true },
      });
      gsap.fromTo(img, { yPercent: -speed }, {
        yPercent: speed, ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
      });
      return () => gsap.set([win, inner], { clearProps: "transform,opacity" });
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={["ir", className].filter(Boolean).join(" ")} style={{ ...(proporcaoDoQuadro ? {} : { aspectRatio: `${width} / ${height}` }), ...style }}>
      <div className="ir-win">
        <div className="ir-in">
          {prioridade
            ? <img src={src} srcSet={srcSet} sizes={sizes} alt={alt} width={width} height={height} fetchPriority="high" />
            : <img src={src} srcSet={srcSet} sizes={sizes} alt={alt} width={width} height={height} loading="lazy" />}
        </div>
      </div>
    </div>
  );
}
