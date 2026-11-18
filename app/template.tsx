"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, useGSAP, MQ } from "@/components/motion/gsap";

// O template remonta a cada troca de rota. No primeiro carregamento não anima (o conteúdo já está lá).
let lastPath: string | null = null;

export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const isNav = lastPath !== null && lastPath !== pathname;
    lastPath = pathname;
    if (!isNav || !ref.current) return;
    const mm = gsap.matchMedia();
    // Só opacidade: um transform aqui quebraria os elementos fixados (pin) da página nova.
    mm.add(MQ.motion, () => {
      gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.3, ease: "power1.out", clearProps: "opacity" });
    });
  }, { dependencies: [pathname] });

  return <div ref={ref} className="page">{children}</div>;
}
