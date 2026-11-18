"use client";

import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP, MQ, EASE, DUR, START } from "./gsap";

type Props = {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  text: string;
  /** Envolve o texto num link (as palavras continuam animadas por dentro). */
  href?: string;
  linkClassName?: string;
  /** Quantas palavras finais ficam em destaque (<em>, verde Campo). */
  em?: number;
  /** "word": palavra a palavra. "line": as palavras de uma mesma linha sobem juntas. */
  by?: "word" | "line";
  /** "load" anima assim que monta (hero). Senão, linha de disparo do ScrollTrigger. */
  start?: string | "load";
  delay?: number;
  /** Intervalo entre palavras ou linhas (padrão: 0,12 s por linha ou 0,045 s por palavra). */
  stagger?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
  /**
   * Visível desde o primeiro quadro (o maior texto da abertura = LCP): as palavras não ficam escondidas na
   * máscara; o título inteiro sobe um pouco, só com transform. Diferença deliberada em relação à iAgroSat (DESIGN.md §6).
   */
  visivel?: boolean;
};

/**
 * Título que entra palavra a palavra (ou linha a linha) de dentro de uma máscara.
 * As palavras já saem quebradas do servidor: o HTML final tem o texto completo e legível (SEO e leitores de tela).
 */
export default function SplitHeading({
  as: Tag = "h2", text, href, linkClassName, em = 0, by = "word", start = START, delay = 0, stagger, className, style, id, visivel = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  // "\n" no texto vira quebra de linha forçada (<br>).
  const words = text.replace(/\n/g, " \n ").split(/[^\S\n]+/).filter(Boolean);
  const cut = words.length - em;

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      if (visivel) {
        // Só posição, o bloco inteiro: o texto continua na tela o tempo todo.
        gsap.fromTo(el, { y: 16 }, {
          y: 0, duration: DUR.block, ease: EASE.out, delay, clearProps: "transform",
          scrollTrigger: start === "load" ? undefined : { trigger: el, start, once: true },
        });
        return;
      }
      const outers = Array.from(el.querySelectorAll<HTMLElement>(".sw"));
      const inners = outers.map((o) => o.firstElementChild as HTMLElement);

      // Modo linha: mede onde cada palavra caiu e dá o mesmo atraso para a linha inteira.
      const tops = outers.map((o) => o.offsetTop);
      const lineOf = tops.map((t) => [...new Set(tops)].indexOf(t));

      // y: 0 zera o deslocamento que o GSAP leria do CSS inicial (.mo .split .swi).
      // Sem clearProps: limpar o transform devolveria a palavra ao estado escondido do CSS.
      gsap.fromTo(
        inners,
        { y: 0, yPercent: 110 },
        {
          yPercent: 0,
          duration: DUR.text,
          ease: EASE.expo,
          delay,
          stagger: by === "line" ? (i) => lineOf[i] * (stagger ?? 0.12) : (stagger ?? 0.045),
          scrollTrigger: start === "load" ? undefined : { trigger: el, start, once: true },
        },
      );
    });
  }, { scope: ref });

  const word = (w: string, i: number) => (
    <span className="sw" key={i}>
      <span className="swi">{w}</span>
    </span>
  );
  const join = (list: string[], offset: number) =>
    list.flatMap((w, i) => {
      if (w === "\n") return [<br key={`br${offset + i}`} />];
      return i === 0 || list[i - 1] === "\n" ? [word(w, offset + i)] : [" ", word(w, offset + i)];
    });

  const content = (
    <>
      {join(words.slice(0, cut), 0)}
      {em > 0 && (
        <>
          {cut > 0 && " "}
          <em>{join(words.slice(cut), cut)}</em>
        </>
      )}
    </>
  );
  const external = href?.startsWith("http");

  return (
    <Tag ref={ref as React.Ref<never>} id={id} className={["split", visivel && "split-visivel", className].filter(Boolean).join(" ")} style={style}>
      {href ? (
        <a className={linkClassName} href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>{content}</a>
      ) : content}
    </Tag>
  );
}
