"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MQ } from "./gsap";

type Props = { text: string; as?: "p" | "h2"; className?: string; before?: ReactNode };

/**
 * Parágrafo que "acende" palavra a palavra conforme o scroll (opacidade 0,2 → 1, em scrub).
 * Sem movimento, o texto aparece inteiro e com contraste normal.
 */
export default function ScrubText({ text, as: Tag = "p", className, before }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/).filter(Boolean);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      gsap.fromTo(el.querySelectorAll(".stw"), { opacity: 0.18 }, {
        opacity: 1, ease: "none", stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: 0.5 },
      });
    });
  }, { scope: ref });

  return (
    <Tag ref={ref} className={className}>
      {before}
      {words.flatMap((w, i) => [i ? " " : "", <span className="stw" key={i}>{w}</span>])}
    </Tag>
  );
}
