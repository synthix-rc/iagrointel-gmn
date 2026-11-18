"use client";

// Etapa 1A (16/11/2026): volta a ser usado (faixa de fontes da home), com o CSS mq-* do kit de novo em app/base.css.
// Modo "rolagem": o letreiro anda enquanto a página rola e também reage ao movimento horizontal do mouse (WCAG 2.2.2:
// nunca roda sozinho continuamente).

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MQ } from "./gsap";

type Props = {
  children: ReactNode;
  /** Segundos para uma volta completa. */
  speed?: number;
  /** -1 corre para a direita. */
  direction?: 1 | -1;
  className?: string;
  /** Inverte o sentido quando o usuário rola para cima. */
  followScroll?: boolean;
  /**
   * Ligado à rolagem: a faixa desliza enquanto a página rola (ScrollTrigger com scrub sobre transform) e responde ao
   * deslocamento horizontal do mouse sobre a seção, nunca sozinha. Só a partir de 768 px; no celular, sem JavaScript e
   * com reduced motion, a lista fica parada e quebra linha.
   */
  rolagem?: boolean;
};

/**
 * Letreiro infinito. Com `rolagem`, renderiza três cópias (duas escondidas de leitores de tela) para cobrir telas largas
 * em contra-fluxo sem deixar vão nas pontas. Com reduced motion ou sem JS, as cópias extras somem (.mq:not(.is-live)) e
 * o conteúdo quebra linha parado.
 */
export default function Marquee({ children, speed = 30, direction = 1, className, followScroll = true, rolagem = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>(".mq-track");
    if (!track) return;
    const mm = gsap.matchMedia();
    if (rolagem) {
      mm.add(MQ.desktop, () => {
        el.classList.add("is-live");
        const container = el.closest<HTMLElement>("section") ?? el;
        // Desloca um terço do trilho (uma cópia inteira das 3) enquanto a seção atravessa a tela.
        gsap.fromTo(track, { xPercent: direction === 1 ? -4 : -33.333 }, {
          xPercent: direction === 1 ? -33.333 : -4, ease: "none",
          scrollTrigger: { trigger: container, start: "top bottom", end: "bottom top", scrub: 0.5 },
        });

        // Reação horizontal ao mouse em sentidos opostos (x em px soma-se ao xPercent do scroll sem conflito)
        const moverX = gsap.quickTo(track, "x", { duration: 0.7, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const norm = (e.clientX / window.innerWidth - 0.5) * 2; // -1 a +1
          moverX(norm * -110 * direction);
        };
        const onLeave = () => moverX(0);

        if (window.matchMedia(MQ.finePointer).matches) {
          container.addEventListener("pointermove", onMove, { passive: true });
          container.addEventListener("pointerleave", onLeave);
        }
        return () => {
          container.removeEventListener("pointermove", onMove);
          container.removeEventListener("pointerleave", onLeave);
          gsap.set(track, { clearProps: "x" });
          el.classList.remove("is-live");
        };
      });
      return;
    }
    mm.add(MQ.motion, () => {
      el.classList.add("is-live");
      const tween = gsap.fromTo(track, { xPercent: direction === 1 ? 0 : -50 }, {
        xPercent: direction === 1 ? -50 : 0, duration: speed, ease: "none", repeat: -1,
      });
      let st: ScrollTrigger | undefined;
      if (followScroll) {
        st = ScrollTrigger.create({
          trigger: el, start: "top bottom", end: "bottom top",
          onUpdate: (self) => gsap.to(tween, { timeScale: self.direction, duration: 0.4, overwrite: true }),
        });
      }
      return () => { st?.kill(); el.classList.remove("is-live"); };
    });
  }, { scope: ref });

  return (
    <div ref={ref} className={["mq", className].filter(Boolean).join(" ")}>
      <div className="mq-track">
        <div className="mq-set">{children}</div>
        <div className="mq-set" aria-hidden="true">{children}</div>
        {rolagem && <div className="mq-set" aria-hidden="true">{children}</div>}
      </div>
    </div>
  );
}
