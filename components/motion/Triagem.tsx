"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, useGSAP, MQ } from "./gsap";

const MQ_LARGO = "(prefers-reduced-motion: no-preference) and (min-width: 1024px)";
const MQ_ESTREITO = "(prefers-reduced-motion: no-preference) and (max-width: 1023.98px)";

/**
 * Mapa da triagem (o desenho está em components/MapaTriagem.tsx):
 * 1. Coreografia no scroll em 2 tempos (scrub):
 *    - Tempo 1 (enquanto os 4 números entram): os 311 alertas brutos acendem em Sinal escuro e a legenda conta até 311.
 *    - Fio condutor (.hm-prova-fio): desenha a linha vertical ligando os números ao título "311 → 38 (−88%)".
 *    - Tempo 2 (quando "311 → 38" sobe ao foco): 273 alertas esmaecem para 22% e os 38 bloqueios mantidos saltam em
 *      Argila (escala contida dentro da célula, sem encostar nos vizinhos), contando até 38.
 * 2. Conexão interativa (hover nos 4 cartões de números e na legenda): destaca no mapa o subconjunto correspondente
 *    (todos os 8.430, os 311 alertas, os 273 salvos do falso-positivo ou os 38 bloqueios mantidos).
 * 3. Onda limpa ao passar o mouse sobre o mapa (MQ.finePointer): os quadradinhos sob o cursor sobem e descem sem nunca
 *    se tocarem.
 */
export default function Triagem({ alvo, gatilho }: { alvo: string; gatilho: string }) {
  useGSAP(() => {
    const el = document.getElementById(alvo);
    const sec = document.getElementById(gatilho);
    if (!el || !sec) return;
    const secaoProva = el.closest<HTMLElement>("#hm-prova") ?? sec;
    const q = (s: string) => Array.from(el.querySelectorAll<SVGElement | HTMLElement>(s));
    const fio = secaoProva.querySelector<HTMLElement>(".hm-prova-fio i");
    const nA = el.querySelector<HTMLElement>(".hm-pv-leg-a b"), nB = el.querySelector<HTMLElement>(".hm-pv-leg-b b");
    const totA = Number(nA?.dataset.n), totB = Number(nB?.dataset.n);
    const conta = (b: HTMLElement | null, alvoN: number) => {
      const o = { n: 0 };
      return { o, n: alvoN, upd: () => { if (b) b.textContent = Math.round(o.n).toLocaleString("pt-BR"); } };
    };

    const montar = (scrollTrigger: ScrollTrigger.Vars) => {
      const a = conta(nA, totA), b = conta(nB, totB);
      a.upd(); b.upd();
      if (fio) gsap.set(fio, { scaleY: 0, transformOrigin: "50% 0%" });
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { ...scrollTrigger, scrub: 0.6 } });
      // Tempo 1: os 311 alertas brutos acendem assim que a seção entra (junto com os 4 números)
      tl.fromTo(q(".hm-pv-a rect"), { opacity: 0 }, { opacity: 1, duration: 0.34, stagger: { amount: 0.32, from: "random" } }, 0)
        .fromTo(q(".hm-pv-leg-a"), { opacity: 0.35 }, { opacity: 1, duration: 0.06 }, 0)
        .to(a.o, { n: a.n, duration: 0.38, onUpdate: a.upd }, 0);
      // Fio condutor entre os números e o "311 → 38"
      if (fio) tl.to(fio, { scaleY: 1, duration: 0.24 }, 0.32);
      // Tempo 2: filtro "311 → 38" (273 esmaecem, 38 saltam em Argila sem encostar nos vizinhos)
      tl.to(q(".hm-pv-a rect"), { opacity: 0.22, duration: 0.22 }, 0.52)
        .fromTo(q(".hm-pv-b rect"), { opacity: 0, scale: 1.15, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.08, stagger: { amount: 0.18, from: "random" } }, 0.55)
        .fromTo(q(".hm-pv-leg-b"), { opacity: 0.35 }, { opacity: 1, duration: 0.06 }, 0.55)
        .to(b.o, { n: b.n, duration: 0.26, onUpdate: b.upd }, 0.55)
        .to({}, { duration: 0.14 }, 0.86);
      return () => {
        if (nA) nA.textContent = String(totA);
        if (nB) nB.textContent = String(totB);
        if (fio) gsap.set(fio, { clearProps: "all" });
      };
    };

    const quandoPerto = (contexto: gsap.Context, st: () => ScrollTrigger.Vars) => {
      ScrollTrigger.create({ trigger: el, start: "top bottom", once: true, onEnter: () => contexto.add(() => montar(st())) });
    };
    const mm = gsap.matchMedia();
    // Desktop: acompanha a coluna inteira (#hm-prova-col), acendendo os 311 nos números e filtrando para 38 no título
    mm.add(MQ_LARGO, (contexto) => quandoPerto(contexto, () => ({ trigger: sec, start: "top 78%", end: "bottom 62%" })));
    mm.add(MQ_ESTREITO, (contexto) => quandoPerto(contexto, () => ({ trigger: el, start: "top 80%", end: "bottom 35%" })));

    // Interações de mouse (hover nos números/legenda + onda nos quadradinhos do mapa)
    mm.add(MQ.finePointer, () => {
      const gatilhosFoco = Array.from(secaoProva.querySelectorAll<HTMLElement>("[data-foco]"));
      const limpezas: (() => void)[] = [];

      gatilhosFoco.forEach((item) => {
        const foco = item.dataset.foco;
        if (!foco) return;
        const entrar = () => { el.dataset.foco = foco; };
        const sair = () => { if (el.dataset.foco === foco) delete el.dataset.foco; };
        item.addEventListener("pointerenter", entrar);
        item.addEventListener("pointerleave", sair);
        limpezas.push(() => {
          item.removeEventListener("pointerenter", entrar);
          item.removeEventListener("pointerleave", sair);
        });
      });

      // Onda limpa nos quadradinhos do mapa ao passar o mouse
      const svg = el.querySelector<SVGSVGElement>(".hm-pv-svg");
      const gOnda = el.querySelector<SVGGElement>(".hm-pv-onda");
      const pathFundo = el.querySelector<SVGPathElement>(".hm-pv-fundo");
      if (svg && gOnda && pathFundo) {
        const C = Number(svg.dataset.c) || 8;
        const L = Number(svg.dataset.l) || 6.4;

        type Cel = { cx: number; cy: number; nivel: number; vel: number; alvo: number; el: SVGRectElement; temp: boolean };
        const mapaCels = new Map<number, Cel>();
        const fundoSet = new Set<number>();
        const ativas = new Set<Cel>();
        const pool: SVGRectElement[] = [];
        let rodando = false;
        let antX: number | null = null, antY: number | null = null;

        // Mapeia todas as células do território a partir do path de fundo
        const dAttr = pathFundo.getAttribute("d") ?? "";
        for (const m of dAttr.matchAll(/M(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)/g)) {
          const c = Math.round(Number(m[1]) / C);
          const r = Math.round(Number(m[2]) / C);
          fundoSet.add(r * 1000 + c);
        }

        // Registra os rects de alerta e bloqueio (os de bloqueio têm prioridade visual)
        const registrarRects = (seletor: string) => {
          svg.querySelectorAll<SVGRectElement>(seletor).forEach((rect) => {
            const x = Number(rect.getAttribute("x")), y = Number(rect.getAttribute("y"));
            const c = Math.round(x / C), r = Math.round(y / C);
            const cx = c * C + C / 2, cy = r * C + C / 2;
            rect.style.transformOrigin = `${cx}px ${cy}px`;
            mapaCels.set(r * 1000 + c, { cx, cy, nivel: 0, vel: 0, alvo: 0, el: rect, temp: false });
          });
        };
        registrarRects(".hm-pv-a rect");
        registrarRects(".hm-pv-b rect");

        const pegarTemp = (cx: number, cy: number) => {
          const r = pool.pop() ?? document.createElementNS("http://www.w3.org/2000/svg", "rect");
          r.setAttribute("class", "hm-pv-onda-q");
          r.setAttribute("x", String(cx - L / 2));
          r.setAttribute("y", String(cy - L / 2));
          r.setAttribute("width", String(L));
          r.setAttribute("height", String(L));
          r.style.transformOrigin = `${cx}px ${cy}px`;
          gOnda.appendChild(r);
          return r;
        };

        const excitar = (sx: number, sy: number, raio: number) => {
          const cMin = Math.floor((sx - raio) / C), cMax = Math.ceil((sx + raio) / C);
          const rMin = Math.floor((sy - raio) / C), rMax = Math.ceil((sy + raio) / C);
          for (let r = rMin; r <= rMax; r++) {
            const cy = r * C + C / 2;
            for (let c = cMin; c <= cMax; c++) {
              const chave = r * 1000 + c;
              if (!fundoSet.has(chave)) continue;
              const cx = c * C + C / 2;
              const dist = Math.hypot(cx - sx, cy - sy);
              if (dist >= raio) continue;
              const t = Math.cos((dist / raio) * (Math.PI / 2));
              const imp = t * t;
              let cel = mapaCels.get(chave);
              if (!cel) {
                cel = { cx, cy, nivel: 0, vel: 0, alvo: 0, el: pegarTemp(cx, cy), temp: true };
                mapaCels.set(chave, cel);
              }
              if (imp > cel.alvo) cel.alvo = imp;
              cel.vel = Math.max(cel.vel, imp * 0.22);
              ativas.add(cel);
            }
          }
          if (ativas.size > 0 && !rodando) {
            rodando = true;
            gsap.ticker.add(passo);
          }
        };

        const passo = () => {
          for (const cel of ativas) {
            cel.vel += (cel.alvo - cel.nivel) * 0.26;
            cel.vel *= 0.80;
            cel.nivel += cel.vel;
            cel.alvo *= 0.78;

            if (Math.abs(cel.nivel) < 0.008 && cel.alvo < 0.008 && Math.abs(cel.vel) < 0.004) {
              cel.nivel = 0; cel.vel = 0; cel.alvo = 0;
              cel.el.style.transform = "";
              if (cel.temp) {
                cel.el.remove();
                pool.push(cel.el);
                mapaCels.delete(Math.floor(cel.cy / C) * 1000 + Math.floor(cel.cx / C));
              }
              ativas.delete(cel);
              continue;
            }

            const n = cel.nivel;
            const esc = n >= 0 ? 1 + n * 0.14 : Math.max(0.78, 1 + n * 0.28);
            const dy = -n * 0.45;
            cel.el.style.transform = `translate3d(0, ${dy.toFixed(2)}px, 0) scale(${esc.toFixed(3)})`;
            if (cel.temp) cel.el.style.opacity = Math.min(0.45, Math.max(0, n * 0.45)).toFixed(3);
          }
          if (ativas.size === 0) {
            rodando = false;
            gsap.ticker.remove(passo);
          }
        };

        const onMove = (e: PointerEvent) => {
          const ctm = svg.getScreenCTM();
          if (!ctm) return;
          const sx = (e.clientX - ctm.e) / ctm.a, sy = (e.clientY - ctm.f) / ctm.d;
          const RAIO = 26;
          if (antX !== null && antY !== null) {
            const dist = Math.hypot(sx - antX, sy - antY);
            const passos = Math.min(6, Math.max(1, Math.ceil(dist / 8)));
            for (let i = 1; i <= passos; i++) {
              const t = i / passos;
              excitar(antX + (sx - antX) * t, antY + (sy - antY) * t, RAIO);
            }
          } else {
            excitar(sx, sy, RAIO);
          }
          antX = sx; antY = sy;
        };

        const onLeave = () => { antX = null; antY = null; };

        svg.addEventListener("pointermove", onMove, { passive: true });
        svg.addEventListener("pointerleave", onLeave);
        limpezas.push(() => {
          if (rodando) gsap.ticker.remove(passo);
          svg.removeEventListener("pointermove", onMove);
          svg.removeEventListener("pointerleave", onLeave);
        });
      }

      return () => {
        delete el.dataset.foco;
        limpezas.forEach((fn) => fn());
      };
    });
  }, []);

  return null;
}
