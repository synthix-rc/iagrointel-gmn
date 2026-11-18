"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, useGSAP, MQ } from "./gsap";

type Props = {
  children?: ReactNode;
  /** Deslocamento em % da própria altura, de +speed (entrando) a -speed (saindo). Negativo inverte. */
  speed?: number;
  /** Escala inicial que volta a 1 ao longo da passagem (aproximação suave). */
  zoom?: number;
  /** No celular, a intensidade cai para esta fração (0 desliga). */
  mobile?: number;
  className?: string;
  style?: CSSProperties;
  "aria-hidden"?: boolean;
};

/**
 * Camada que se move em velocidade diferente do scroll.
 * Usa só transform (yPercent / scale), com scrub e ease "none".
 */
export default function Parallax({ children, speed = 12, zoom = 0, mobile = 0.5, className, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add({ desktop: MQ.desktop, small: MQ.mobile }, (ctx) => {
      const k = (ctx.conditions as { small: boolean }).small ? mobile : 1;
      if (k === 0) return;
      gsap.fromTo(
        el,
        { yPercent: speed * k, scale: 1 + zoom * k },
        {
          yPercent: -speed * k, scale: 1, ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={["plx", className].filter(Boolean).join(" ")} style={style} {...rest}>
      {children}
    </div>
  );
}
