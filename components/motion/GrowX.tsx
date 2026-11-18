"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useRef } from "react";
import { gsap, useGSAP, MQ, START } from "./gsap";

/**
 * Traço/barra que cresce da esquerda para a direita (scaleX 0 → 1).
 * scrub: acompanha a rolagem (ex.: risco sobre uma frase). Sem scrub: entra uma vez quando chega na tela.
 * Com reduced motion, já nasce inteira. Largura, altura e cor vêm do CSS (className).
 */
export default function GrowX({ className, scrub = false, delay = 0 }: { className?: string; scrub?: boolean; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      gsap.fromTo(el, { scaleX: 0 }, {
        scaleX: 1, transformOrigin: "0% 50%",
        ...(scrub
          ? { ease: "none", scrollTrigger: { trigger: el, start: "top 78%", end: "top 42%", scrub: 0.5 } }
          : { ease: "expo.out", duration: 1.4, delay, scrollTrigger: { trigger: el, start: START, once: true } }),
      });
    });
  }, { scope: ref });

  return <span ref={ref} className={["gx", className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
