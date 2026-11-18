"use client";

import { useRef, type ElementType, type ComponentPropsWithoutRef } from "react";
import { gsap, useGSAP, MQ, EASE, DUR, START } from "./gsap";

type Props<T extends ElementType> = {
  as?: T;
  /** Anima os filhos diretos um depois do outro, em vez do bloco inteiro. */
  stagger?: boolean | number;
  /** Seletor CSS dos alvos dentro do bloco (ex.: "tbody tr"). Use para conteúdo abaixo da dobra. */
  targets?: string;
  /** Deslocamento inicial em px (sobe até o lugar). */
  y?: number;
  delay?: number;
  /** Linha de disparo do ScrollTrigger. "load" anima assim que monta (para o que já está na tela). */
  start?: string | "load";
  /**
   * Visível desde o primeiro quadro (o maior texto da abertura = LCP). O CSS não esconde o bloco e a animação
   * só move a posição (transform), sem opacidade. Diferença deliberada em relação à iAgroSat (DESIGN.md §6).
   */
  visivel?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/**
 * Entrada de blocos: sobe e aparece uma vez quando chega na tela.
 * Com reduced motion, o conteúdo já nasce visível (o CSS só esconde quando <html> tem a classe "mo").
 */
export default function Reveal<T extends ElementType = "div">({
  as, stagger = false, targets, y = 36, delay = 0, start = START, visivel = false, children, ...rest
}: Props<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add({ desktop: MQ.desktop, mobile: MQ.mobile }, (ctx) => {
      const { mobile } = ctx.conditions as { mobile: boolean };
      const list = targets
        ? Array.from(el.querySelectorAll(targets))
        : stagger ? Array.from(el.children) : [el];
      const each = typeof stagger === "number" ? stagger : 0.09;
      gsap.fromTo(
        list,
        // Só opacidade (nunca visibility): o que ainda não entrou continua alcançável pelo Tab.
        // visivel: sem opacidade, só a posição (o texto já está na tela desde o primeiro quadro).
        visivel ? { y: mobile ? y * 0.6 : y } : { y: mobile ? y * 0.6 : y, opacity: 0 },
        {
          y: 0, ...(visivel ? {} : { opacity: 1 }), duration: DUR.block, ease: EASE.out, delay,
          stagger: stagger || targets ? each : 0,
          clearProps: "transform",
          scrollTrigger: start === "load" ? undefined : { trigger: el, start, once: true },
        },
      );
    });
  }, { scope: ref });

  return (
    <Tag ref={ref} data-reveal={visivel ? "visivel" : targets ? "targets" : stagger ? "stagger" : ""} {...rest}>
      {children}
    </Tag>
  );
}
