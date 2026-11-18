"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, motionAllowed, EASE } from "./gsap";

const COLS = 5;
const norm = (p: string) => (p.endsWith("/") ? p : p + "/");

/**
 * Cortina entre páginas.
 * 1. Clique num link interno: colunas Noite descem cobrindo a tela (scaleY 0 → 1, uma depois da outra).
 * 2. A rota troca por baixo da cortina (router.push).
 * 3. Na página nova: as colunas recolhem para baixo e o símbolo da marca sai.
 * Não roda no primeiro carregamento, com reduced motion, com Ctrl/Cmd/Shift ou em links externos.
 */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const covered = useRef(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const cols = el.querySelectorAll<HTMLElement>(".pt-col");
    const logo = el.querySelector<HTMLElement>(".pt-logo");

    const onClick = (e: MouseEvent) => {
      if (!motionAllowed() || covered.current) return;
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest("a");
      if (!a || a.target || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (norm(url.pathname) === norm(location.pathname)) return; // mesma página ou âncora

      // Fase de captura + stopPropagation: o <Link> do Next não navega antes da cortina fechar.
      e.preventDefault();
      e.stopPropagation();
      covered.current = true;
      gsap.set(el, { display: "block" });
      gsap.timeline({
        onComplete: () => {
          router.push(url.pathname + url.search + url.hash);
          // Rede lenta ou erro: não deixa a cortina presa na tela.
          fallback.current = window.setTimeout(reveal, 4000);
        },
      })
        .fromTo(cols, { scaleY: 0, transformOrigin: "50% 0%" }, {
          scaleY: 1, duration: 0.6, ease: EASE.curtain, stagger: 0.05,
        })
        .fromTo(logo, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.4, ease: EASE.out }, "-=0.25");
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  const fallback = useRef<number | undefined>(undefined);
  const reveal = () => {
    const el = root.current;
    window.clearTimeout(fallback.current);
    if (!el || !covered.current) return;
    const cols = el.querySelectorAll<HTMLElement>(".pt-col");
    const logo = el.querySelector<HTMLElement>(".pt-logo");
    gsap.timeline({
      delay: 0.15,
      onComplete: () => { gsap.set(el, { display: "none" }); covered.current = false; },
    })
      .to(logo, { opacity: 0, y: -16, rotate: -6, duration: 0.35, ease: "power2.in" })
      .to(cols, { scaleY: 0, transformOrigin: "50% 100%", duration: 0.75, ease: EASE.curtain, stagger: 0.06 }, "-=0.1");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reveal(); }, [pathname]);

  return (
    <div ref={root} className="pt" aria-hidden="true">
      {Array.from({ length: COLS }, (_, i) => (
        <span className="pt-col" key={i} style={{ left: `${(i * 100) / COLS}%`, width: `calc(${100 / COLS}% + 1px)` }} />
      ))}
      <img className="pt-logo" src="/brand/iagrointel-simbolo-negativo.svg" alt="" width={72} height={72} />
    </div>
  );
}
