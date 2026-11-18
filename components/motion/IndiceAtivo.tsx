"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, useGSAP, EASE } from "./gsap";

const MQ_LARGO = "(prefers-reduced-motion: no-preference) and (min-width: 1024px)";

/**
 * Índice dos produtos da home (o desenho está em components/IndiceProdutos.tsx). A partir de 1024 px, com movimento:
 * o produto que passa pelo meio da tela fica ativo (nome aceso e a marca à esquerda; nos outros, só o nome esmaece) e o palco troca
 * para a imagem dele com o feixe de varredura da abertura: a imagem nova é revelada por clip-path atrás de uma linha em
 * Sinal que atravessa o palco (transform), com a grade de células passando junto. Descendo, o feixe vai da esquerda
 * para a direita; subindo, da direita para a esquerda. Cada troca dura 0,9 s e só acontece quando a pessoa rola.
 * Só transform, opacity e clip-path (o z-index só empilha a imagem nova por cima). Sem JavaScript, com reduced motion
 * ou abaixo de 1024 px, nada roda e o CSS mostra tudo aceso.
 */
export default function IndiceAtivo({ alvo }: { alvo: string }) {
  useGSAP(() => {
    const el = document.getElementById(alvo);
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(MQ_LARGO, () => {
      const itens = Array.from(el.querySelectorAll<HTMLElement>(".hm-ix-item"));
      // esmaece só o nome (texto grande: 45% de Papel sobre Tinta dá ~3,9:1, acima de 3:1); o resto fica sempre aceso
      const nomes = itens.map((i) => i.querySelector<HTMLElement>(".hm-ix-nome"));
      const marcas = itens.map((i) => i.querySelector<HTMLElement>(".hm-ix-marca"));
      const cenas = Array.from(el.querySelectorAll<HTMLElement>(".hm-ix-cena-img"));
      const palco = el.querySelector<HTMLElement>(".hm-ix-palco");
      const feixe = el.querySelector<HTMLElement>(".hm-ix-feixe"), grade = el.querySelector<HTMLElement>(".hm-ix-grade");
      if (!palco || !feixe || !grade || !cenas.length) return;
      let atual = 0, topo = 2;
      gsap.set(nomes, { opacity: 0.45 });
      gsap.set(nomes[0], { opacity: 1 });
      gsap.set(marcas, { scaleY: 0, transformOrigin: "50% 0%" });
      gsap.set(marcas[0], { scaleY: 1 });
      gsap.set(cenas, { zIndex: 1 });
      gsap.set(cenas[0], { zIndex: 2 });

      const ativar = (k: number) => {
        if (k === atual || !cenas[k]) return;
        const desce = k > atual;
        gsap.to(nomes[atual], { opacity: 0.45, duration: 0.4, overwrite: true });
        gsap.to(marcas[atual], { scaleY: 0, duration: 0.3, overwrite: true });
        gsap.to(nomes[k], { opacity: 1, duration: 0.4, overwrite: true });
        gsap.to(marcas[k], { scaleY: 1, duration: 0.5, ease: EASE.out, overwrite: true });
        atual = k;
        // imagem nova por cima, revelada atrás do feixe
        const W = palco.clientWidth, D = 0.9;
        const fechado = desce ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)";
        topo += 1;
        gsap.set(cenas[k], { zIndex: topo });
        gsap.fromTo(cenas[k], { clipPath: fechado }, { clipPath: "inset(0% 0% 0% 0%)", duration: D, ease: EASE.inOut, overwrite: true });
        gsap.fromTo(grade, { clipPath: fechado, opacity: 0.7 }, { clipPath: "inset(0% 0% 0% 0%)", duration: D, ease: EASE.inOut, overwrite: true });
        gsap.to(grade, { opacity: 0, duration: 0.5, delay: D * 0.75 });
        gsap.fromTo(feixe, { x: desce ? 0 : W, opacity: 1 }, { x: desce ? W : 0, duration: D, ease: EASE.inOut, overwrite: true });
        gsap.to(feixe, { opacity: 0, duration: 0.25, delay: D - 0.05 });
      };
      itens.forEach((it, k) => {
        ScrollTrigger.create({ trigger: it, start: "top 55%", end: "bottom 55%", onToggle: (s) => { if (s.isActive) ativar(k); } });
      });
    });
  }, []);

  return null;
}
