"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap, ScrollTrigger, MQ, MOTION_ENABLED } from "./gsap";

const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

declare global {
  interface Window { __moReady?: boolean }
}

/**
 * Scroll suave (Lenis) sincronizado com o ScrollTrigger.
 * - Só liga quando o usuário aceita movimento (prefers-reduced-motion: no-preference).
 * - A cada troca de rota: volta ao topo na hora e recalcula os gatilhos.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    // Avisa o script do <head> que o JS de movimento chegou (senão ele revela o conteúdo sozinho).
    window.__moReady = true;
    if (!MOTION_ENABLED) {
      document.documentElement.classList.remove("mo");
      return;
    }

    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const l = new Lenis({ lerp: 0.1, smoothWheel: true, anchors: true });
      const raf = (time: number) => l.raf(time * 1000);
      l.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      document.documentElement.classList.add("lenis");
      setLenis(l);
      return () => {
        gsap.ticker.remove(raf);
        l.destroy();
        document.documentElement.classList.remove("lenis");
        setLenis(null);
      };
    });

    // Fontes e imagens mudam alturas: recalcula quando terminarem de carregar.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      mm.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    lenis?.scrollTo(0, { immediate: true, force: true });
    // Espera o novo conteúdo pintar antes de medir. Se a URL tem âncora (/#monitoramento), vai até ela.
    const id = requestAnimationFrame(() => requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      const target = location.hash ? document.getElementById(decodeURIComponent(location.hash.slice(1))) : null;
      if (target) {
        if (lenis) lenis.scrollTo(target, { immediate: true, force: true });
        else target.scrollIntoView();
      }
    }));
    return () => cancelAnimationFrame(id);
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
