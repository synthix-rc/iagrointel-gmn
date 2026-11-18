"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MQ } from "./gsap";
import { useLenis } from "./SmoothScroll";

type Props = {
  children: ReactNode;
  /** Cabeçalho da seção (eyebrow + título + atalhos). Fica parado enquanto os painéis correm. */
  head?: ReactNode;
  /** Rodapé da seção (ex.: atribuições Copernicus). Fica na base da seção fixada. */
  foot?: ReactNode;
  className?: string;
  id?: string;
  /** Tema da seção para o cabeçalho ("dark" deixa o cabeçalho escuro enquanto ela está embaixo dele). */
  header?: "dark";
};

/**
 * Seção fixada que corre na horizontal enquanto se rola na vertical.
 *
 * Cada filho direto é um painel (use a classe "hs-panel"). Dentro dos painéis:
 * - data-hx="12"   → o elemento desliza em velocidade própria (parallax horizontal, em %).
 * - data-hreveal   → o elemento aparece quando o painel entra.
 * No cabeçalho (`head`), botões com `data-hs-nav="0"` .. `"N"` acendem conforme o painel ativo e rolam até ele ao clicar.
 *
 * Layouts (definidos em CSS, sem depender de JS):
 * - Celular (< 768 px): carrossel com swipe e scroll-snap.
 * - Desktop sem JS ou com reduced motion: painéis empilhados.
 * - Desktop com movimento: o JS liga a classe "is-h" e fixa a seção.
 */
export default function HorizontalSection({ children, head, foot, className, id, header }: Props) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);
  const lenis = useLenis();
  const stRef = useRef<ScrollTrigger | null>(null);

  const irParaPainel = (idx: number, imediato = false) => {
    const st = stRef.current, tr = track.current, el = root.current;
    if (!st || !tr || !el) return;
    const panels = Array.from(tr.querySelectorAll<HTMLElement>(".hs-panel"));
    const panel = panels[idx];
    if (!panel) return;
    el.scrollLeft = 0;
    const distance = Math.max(1, tr.scrollWidth - el.clientWidth);
    const padLeft = panels[0]?.offsetLeft ?? 0;
    const alvoX = Math.max(0, Math.min(distance, panel.offsetLeft - padLeft));
    const p = alvoX / distance;
    const y = st.start + p * (st.end - st.start);
    if (lenis) lenis.scrollTo(y, { immediate: imediato, duration: imediato ? 0 : 0.9 });
    else window.scrollTo({ top: y, behavior: imediato ? "auto" : "smooth" });
  };

  useGSAP(() => {
    const el = root.current, tr = track.current;
    if (!el || !tr) return;
    const mm = gsap.matchMedia();
    mm.add(MQ.desktop, () => {
      el.classList.add("is-h");
      const panels = Array.from(tr.querySelectorAll<HTMLElement>(".hs-panel"));
      const navBtns = Array.from(el.querySelectorAll<HTMLElement>("[data-hs-nav]"));
      const contador = el.querySelector<HTMLElement>("[data-hs-count]");
      const distance = () => Math.max(0, tr.scrollWidth - el.clientWidth);

      const marcarAtivo = (idx: number) => {
        el.dataset.ativo = String(idx);
        navBtns.forEach((b, k) => b.classList.toggle("is-on", k === idx));
        panels.forEach((p, k) => p.classList.toggle("is-on", k === idx));
        if (contador) contador.textContent = String(idx + 1).padStart(2, "0");
      };
      marcarAtivo(0);

      const move = gsap.to(tr, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (!panels.length) return;
            const idx = Math.min(panels.length - 1, Math.max(0, Math.round(self.progress * (panels.length - 1))));
            if (el.dataset.ativo !== String(idx)) marcarAtivo(idx);
          },
        },
      });
      stRef.current = move.scrollTrigger ?? null;

      if (bar.current) {
        gsap.fromTo(bar.current, { scaleX: 0 }, {
          scaleX: 1, ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: () => "+=" + distance(), scrub: true },
        });
      }

      tr.querySelectorAll<HTMLElement>("[data-hx]").forEach((node) => {
        const v = Number(node.dataset.hx) || 10;
        gsap.fromTo(node, { xPercent: v }, {
          xPercent: -v, ease: "none",
          scrollTrigger: {
            trigger: node.closest(".hs-panel") ?? node, containerAnimation: move,
            start: "left right", end: "right left", scrub: true,
          },
        });
      });

      tr.querySelectorAll<HTMLElement>("[data-hreveal]").forEach((node) => {
        gsap.fromTo(node, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: node.closest(".hs-panel") ?? node, containerAnimation: move,
            start: "left 78%", once: true,
          },
        });
      });

      return () => {
        el.classList.remove("is-h");
        delete el.dataset.ativo;
        stRef.current = null;
      };
    });
  }, { scope: root });

  // Teclado: ao focar algo num painel fora da tela, rola até o ponto em que ele aparece.
  const onFocus = (e: React.FocusEvent) => {
    const tr = track.current;
    if (!tr || !stRef.current) return;
    const panel = (e.target as HTMLElement).closest<HTMLElement>(".hs-panel");
    if (!panel) return;
    const panels = Array.from(tr.querySelectorAll<HTMLElement>(".hs-panel"));
    const idx = panels.indexOf(panel);
    if (idx >= 0) irParaPainel(idx, true);
  };

  const onHeadClick = (e: React.MouseEvent) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-hs-nav]");
    if (!btn) return;
    e.preventDefault();
    irParaPainel(Number(btn.dataset.hsNav));
  };

  return (
    <section ref={root} id={id} className={["hs", className].filter(Boolean).join(" ")} data-header={header} onFocus={onFocus}>
      {head && <div className="wrap hs-head" onClick={onHeadClick}>{head}</div>}
      <div ref={track} className="hs-track">{children}</div>
      <div className="hs-progress" aria-hidden="true"><span ref={bar} /></div>
      {foot}
    </section>
  );
}
