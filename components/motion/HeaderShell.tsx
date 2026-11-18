"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "./gsap";
import { useLenis } from "./SmoothScroll";

/**
 * Comportamento do cabeçalho fixo:
 * - No topo da página: logo completo + menu inteiro. Depois de rolar: só o símbolo, o botão de menu e a chamada.
 * - Fica claro (texto Papel, logo negativo) sobre regiões com data-header="dark" — inclusive o hero da home.
 * - O botão de menu abre um painel em tela cheia (Esc fecha; o foco volta para o botão; enquanto aberto, o Tab fica no painel).
 */
export default function HeaderShell({ children, panel, bar }: { children: React.ReactNode; panel: React.ReactNode; bar?: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);

  // Fecha o painel e o submenu suspenso ao trocar de página.
  useEffect(() => {
    setOpen(false);
    ref.current?.classList.add("is-drop-closed");
    (document.activeElement as HTMLElement)?.blur?.();
  }, [pathname]);

  // Painel aberto: trava o scroll, Esc fecha, foco vai para o primeiro link.
  // Foco preso (D2, 15/11/2026): main e rodapé ficam inert, e o Tab circula só entre o botão de menu e os links do
  // painel (Shift+Tab no sentido inverso). Ao fechar, o inert sai.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.toggle("is-open", open);
    const fora = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    fora.forEach((f) => { f.inert = open; });
    if (!open) { lenis?.start(); document.documentElement.style.overflow = ""; return; }
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    el.querySelector<HTMLElement>(".hdr-panel a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); return; }
      if (e.key !== "Tab") return;
      const itens = [toggle.current, ...el.querySelectorAll<HTMLElement>(".hdr-panel a[href], .hdr-panel button")]
        .filter((x): x is HTMLElement => !!x);
      if (!itens.length) return;
      e.preventDefault();
      const i = itens.indexOf(document.activeElement as HTMLElement);
      const n = itens.length;
      const prox = i === -1 ? (e.shiftKey ? n - 1 : 0) : (i + (e.shiftKey ? -1 : 1) + n) % n;
      itens[prox].focus();
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); fora.forEach((f) => { f.inert = false; }); };
  }, [open, lenis]);

  // Estados de scroll: compacto e escuro.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const active = new Set<Element>();
    const triggers: ScrollTrigger[] = [];
    const line = () => el.querySelector<HTMLElement>(".hdr-row")!.offsetHeight / 2;

    const id = requestAnimationFrame(() => {
      // Fundo do cabeçalho entra assim que a rolagem passa de 24 px, para a página rolar por trás dele.
      const setCompact = (y: number) => el.classList.toggle("is-compact", y > 24);
      triggers.push(ScrollTrigger.create({ start: 0, end: "max", onUpdate: (self) => setCompact(self.scroll()) }));
      setCompact(window.scrollY);
      document.querySelectorAll('[data-header="dark"]').forEach((region) => {
        triggers.push(ScrollTrigger.create({
          trigger: region,
          start: () => `top top+=${line()}`,
          end: () => `bottom top+=${line()}`,
          onToggle: (self) => {
            if (self.isActive) active.add(region); else active.delete(region);
            el.classList.toggle("is-dark", active.size > 0);
          },
        }));
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(id);
      triggers.forEach((t) => t.kill());
      el.classList.remove("is-dark", "is-compact");
    };
  }, [pathname]);

  return (
    <header ref={ref} className="hdr">
      <div
        className="hdr-row"
        onPointerLeave={() => ref.current?.classList.remove("is-drop-closed")}
        onPointerOver={(e) => {
          if ((e.target as HTMLElement).closest(".hdr-sub-trig")) {
            ref.current?.classList.remove("is-drop-closed");
          }
        }}
        onFocus={(e) => {
          if ((e.target as HTMLElement).closest(".hdr-sub-trig")) {
            ref.current?.classList.remove("is-drop-closed");
          }
        }}
        onClick={(e) => {
          const a = (e.target as HTMLElement).closest("a");
          if (!a) return;
          ref.current?.classList.add("is-drop-closed");
          a.blur();
          (document.activeElement as HTMLElement)?.blur?.();
          const url = new URL(a.href, location.href);
          const target = url.hash && url.pathname === location.pathname ? document.getElementById(url.hash.slice(1)) : null;
          if (!target) return;
          e.preventDefault();
          history.pushState(null, "", url.hash);
          if (lenis) lenis.scrollTo(target); else target.scrollIntoView();
        }}
      >
        {children}
        {/* Botão de menu para celular e tablet (< 992 px). No desktop o menu vira barra flutuante sem sanduíche. */}
        <div className="hdr-mini">
          <button
            ref={toggle}
            type="button"
            className="hdr-toggle"
            aria-expanded={open}
            aria-controls="menu-painel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
          {bar}
        </div>
      </div>
      {/* Clicar num link do painel fecha o painel. Âncora da própria página (ex.: /#clima): fecha primeiro,
          destrava o scroll e só então rola até a seção (com o scroll travado a rolagem não acontece). */}
      <div
        id="menu-painel"
        className="hdr-panel"
        hidden={!open}
        onClick={(e) => {
          const a = (e.target as HTMLElement).closest("a");
          if (!a) return;
          const url = new URL(a.href, location.href);
          const target = url.hash && url.pathname === location.pathname ? document.getElementById(url.hash.slice(1)) : null;
          setOpen(false);
          if (!target) return;
          e.preventDefault();
          history.pushState(null, "", url.hash);
          requestAnimationFrame(() => requestAnimationFrame(() => {
            if (lenis) lenis.scrollTo(target); else target.scrollIntoView();
          }));
        }}
      >
        {panel}
      </div>
    </header>
  );
}
