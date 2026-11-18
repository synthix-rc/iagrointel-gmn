"use client";

// Ponto único de entrada do GSAP: registra os plugins uma vez e define o vocabulário de movimento.
// Para desligar TODO o movimento do site, troque MOTION_ENABLED para false.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export const MOTION_ENABLED = true;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

/** Condições usadas em todo gsap.matchMedia(). */
export const MQ = {
  /** Usuário aceita movimento. */
  motion: "(prefers-reduced-motion: no-preference)",
  /** Movimento + tela larga: pin, horizontal e parallax forte. */
  desktop: "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
  /** Movimento + celular: só entradas leves. */
  mobile: "(prefers-reduced-motion: no-preference) and (max-width: 767.98px)",
  /** Ponteiro de mouse (para efeitos magnéticos). */
  finePointer: "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)",
} as const;

/** Curvas e tempos. Mudar aqui muda o ritmo do site inteiro. */
export const EASE = {
  out: "power3.out",
  expo: "expo.out",
  inOut: "power2.inOut",
  curtain: "expo.inOut",
} as const;

export const DUR = { text: 0.9, block: 1, image: 1.4 } as const;

/**
 * Linha de disparo das entradas: quando o topo do bloco passa de 82% da altura da tela.
 * clamp(): o que já está na tela ao carregar entra na hora, e o que fica no fim da página
 * (que nunca chegaria a 82%) entra quando o scroll acaba.
 */
export const START = "clamp(top 82%)";

export function motionAllowed() {
  if (!MOTION_ENABLED || typeof window === "undefined") return false;
  return window.matchMedia(MQ.motion).matches;
}

export { gsap, ScrollTrigger, useGSAP };
