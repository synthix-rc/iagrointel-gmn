"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MQ } from "./gsap";

type Props = {
  children: ReactNode;
  className?: string;
  /** false: não volta para Papel ao sair (use quando a região emenda no rodapé, que já é Noite). */
  exit?: boolean;
};

/**
 * Fundo que muda de Papel para Noite enquanto esta região passa pela tela, e volta ao sair.
 *
 * Não anima background-color: uma camada fixa Noite (atrás do conteúdo) ganha opacidade em scrub.
 * Sem JS ou com reduced motion, a região já nasce com fundo Noite (classe .cshift em CSS).
 * O conteúdo de dentro deve usar cores para fundo escuro.
 */
export default function ColorShift({ children, className, exit = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current, bg = layer.current;
    if (!el || !bg) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      el.classList.add("is-live");
      gsap.set(bg, { opacity: 0 });
      // Faixas curtas: o meio-termo cinza dura pouco scroll.
      gsap.timeline({ scrollTrigger: { trigger: el, start: "top 62%", end: "top 38%", scrub: true } })
        .to(bg, { opacity: 1, ease: "none" });
      if (exit) {
        gsap.timeline({ scrollTrigger: { trigger: el, start: "bottom 62%", end: "bottom 38%", scrub: true } })
          .fromTo(bg, { opacity: 1 }, { opacity: 0, ease: "none", immediateRender: false });
      }
      return () => el.classList.remove("is-live");
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={["cshift", className].filter(Boolean).join(" ")} data-header="dark">
      <div ref={layer} className="cshift-layer" aria-hidden="true" />
      {children}
    </div>
  );
}
