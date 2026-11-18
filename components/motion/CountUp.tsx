"use client";

import { useRef } from "react";
import { gsap, useGSAP, MQ } from "./gsap";

/**
 * Número que conta de zero até o valor quando entra na tela (uma vez).
 * Aceita o formato brasileiro do conteúdo: "8,3M", "5.283", "5 dias", "7 anos".
 * O HTML do servidor já traz o valor final (SEO, sem JS, reduced motion).
 */
export default function CountUp({ value, className, prefixo = false }: {
  value: string; className?: string;
  /** Também conta valores com prefixo ("R$ 298,7 mi"). Desligado por padrão: as outras páginas ficam como estão. */
  prefixo?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    const m = value.match(prefixo ? /^(\D*?)([\d.,]+)(.*)$/ : /^()([\d.,]+)(.*)$/);
    if (!el || !m) return;
    const pre = m[1], raw = m[2], suffix = m[3];
    const decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
    const target = Number(raw.replace(/\./g, "").replace(",", "."));
    const fmt = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
    const fmtP = (n: number) => pre + fmt(n);

    const mm = gsap.matchMedia();
    mm.add(MQ.motion, () => {
      const obj = { n: 0 };
      el.textContent = fmtP(0);
      gsap.to(obj, {
        n: target, duration: 1.8, ease: "power2.out",
        onUpdate: () => { el.textContent = fmtP(obj.n); },
        scrollTrigger: { trigger: el, start: "clamp(top 88%)", once: true },
      });
      return () => { el.textContent = value; };
    });
  }, { scope: ref });

  return <span ref={ref} className={className}>{value}</span>;
}
