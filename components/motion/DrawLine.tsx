"use client";

import { useRef } from "react";
import { gsap, useGSAP, MQ } from "./gsap";

/**
 * Linha vertical verde que se desenha de cima para baixo conforme o scroll (scaleY em scrub).
 * Com reduced motion, aparece inteira. A altura vem do CSS (classe passada em className).
 */
export default function DrawLine({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      gsap.fromTo(el, { scaleY: 0 }, {
        scaleY: 1, ease: "none", transformOrigin: "50% 0%",
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 55%", scrub: 0.5 },
      });
    });
  }, { scope: ref });

  return <span ref={ref} className={["gline", className].filter(Boolean).join(" ")} aria-hidden="true" />;
}
