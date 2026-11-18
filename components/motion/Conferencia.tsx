"use client";

import { gsap, useGSAP, MQ, EASE } from "./gsap";

/**
 * Varredura sobre a imagem da abertura (o desenho está em components/CenaConferencia.tsx, renderizado no servidor).
 * 1. Coreografia em 3 atos (< 5 s, WCAG 2.2.2), sincronizada com as 3 linhas do H1:
 *    - Ato 1 ("O papel declara."): a malha bruta (cf-todas-g) aparece suave sobre o território.
 *    - Ato 2 ("O satélite confere."): o feixe atravessa o campo da esquerda para a direita (transform); na linha do feixe,
 *      a malha bruta sobre a mata é apagada e ficam acesas apenas as células de solo aberto (cf-abertas-g).
 *    - Ato 3 ("A instituição decide."): o feixe encerra a varredura e estabiliza o resultado filtrado.
 * 2. Onda limpa nos quadradinhos ao passar o mouse (MQ.finePointer, ativado após a varredura inicial): cada quadradinho
 *    de solo aberto sobe (crista) e desce (vale) no contato com o cursor, respeitando a margem da célula para que os
 *    quadrados nunca se toquem.
 * 3. Parallax de profundidade na saída da abertura (ScrollTrigger scrub, MQ.desktop): descola o plano orbital da imagem
 *    do plano do texto enquanto a página rola para a segunda dobra.
 * Só transform, opacity e clip-path. Sem JavaScript ou com prefers-reduced-motion, nada roda e o CSS mostra o estado
 * final.
 */
export default function Conferencia({ alvo, delay = 0.2 }: { alvo: string; delay?: number }) {
  useGSAP(() => {
    const el = document.getElementById(alvo) as unknown as SVGSVGElement | null;
    if (!el) return;
    const hero = el.closest<HTMLElement>(".hm-hero");
    const mm = gsap.matchMedia();

    mm.add(MQ.motion, (contexto) => {
      // A linha do tempo só é criada quando a animação começa (gsap.delayedCall), numa tarefa separada, fora da
      // hidratação; as peças já nascem escondidas pelo CSS (.mo).
      gsap.delayedCall(delay, () => contexto.add(() => montar(contexto)));
    });

    mm.add(MQ.desktop, () => {
      if (!hero) return;
      const quadro = hero.querySelector<HTMLElement>(".hm-cena-quadro");
      const texto = hero.querySelector<HTMLElement>(".cl-hero-text");
      const tlScroll = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
      });
      if (quadro) tlScroll.to(quadro, { yPercent: 10, scale: 1.04 }, 0);
      if (texto) tlScroll.to(texto, { yPercent: -14 }, 0);
    });

    function montar(contexto: gsap.Context) {
      if (!el) return;
      const q = (s: string) => Array.from(el.querySelectorAll<SVGElement>(s));
      const x0 = Number(el.dataset.x0), x1 = Number(el.dataset.x1);
      const dx0 = Number(el.dataset.dx0);
      const celular = window.matchMedia("(max-width: 1023.98px)").matches;
      const m = el.getScreenCTM();
      const naTela = (px: number) => (m ? (px - m.e) / m.a : px);
      const s0 = Math.max(x0, naTela(0), celular ? -Infinity : dx0) - 10;
      const s1 = Math.min(x1, naTela(document.documentElement.clientWidth)) + 10;
      const ATO2 = 0.65; // início da 2ª linha ("O satélite confere.") relativo ao delay
      const VARRE = 2.0;
      const ATRASO = 0.26;
      const pc = (x: number) => Math.min(100, Math.max(0, ((x - x0) / (x1 - x0)) * 100)); // % da largura do campo
      const recorte = (esq: number, dir: number) => `inset(-1% ${100 - pc(dir)}% -1% ${pc(esq)}%)`;
      const linear = { duration: VARRE, ease: "none" };

      const tl = gsap.timeline({
        onComplete: () => {
          if (!celular && window.matchMedia(MQ.finePointer).matches) {
            contexto.add(() => ativarOnda());
          }
        },
      });

      // Ato 1 ("O papel declara."): malha bruta declarada surge uniforme sobre todo o território
      tl.set(q(".cf-todas"), { clipPath: recorte(x0, x1), opacity: 0.28 }, 0)
        .set(q(".cf-todas-g"), { clipPath: recorte(s0, s0), opacity: 1 }, 0)
        .set(q(".cf-abertas-g"), { clipPath: recorte(x0, s0), opacity: 1 }, 0)
        .to(q(".cf-todas-g"), { clipPath: recorte(s0, s1), duration: 0.55, ease: EASE.out }, 0.05)
        // Ato 2 ("O satélite confere."): na linha exata do feixe, a malha bruta na mata é apagada (s0 → s1) e ficam
        // acesas apenas as células conferidas de solo aberto (cf-abertas-g)
        .set(q(".cf-varre"), { x: s0, opacity: 1 }, ATO2)
        .to(q(".cf-varre"), { x: s1, ...linear }, ATO2)
        .to(q(".cf-varre"), { opacity: 0, duration: 0.3 }, ATO2 + VARRE - 0.05)
        .to(q(".cf-todas-g"), { clipPath: recorte(s1, s1), ...linear }, ATO2)
        .to(q(".cf-abertas-g"), { clipPath: recorte(x0, s1), ...linear }, ATO2)
        // Ato 3 ("A instituição decide."): estabiliza o resultado filtrado
        .set(q(".cf-todas-g"), { opacity: 0 }, ATO2 + VARRE + ATRASO)
        .set(q(".cf-abertas-g"), { clipPath: "none" }, ATO2 + VARRE + ATRASO);
    }

    function ativarOnda() {
      if (!el || !hero) return;
      const gOnda = el.querySelector<SVGGElement>(".cf-onda");
      const pathAbertas = el.querySelector<SVGPathElement>(".cf-abertas");
      if (!gOnda || !pathAbertas) return;

      const x0 = Number(el.dataset.x0), y0 = Number(el.dataset.y0);
      const x1 = Number(el.dataset.x1), y1 = Number(el.dataset.y1);
      const C = Number(el.dataset.c) || 8;
      const cols = Math.round((x1 - x0) / C), rows = Math.round((y1 - y0) / C);
      const M = 0.8, L = C - M * 2; // 6,4 × 6,4 numa célula de 8 × 8: fresta limpa de 1,6 entre quadrados

      type Celula = { c: number; r: number; cx: number; cy: number; nivel: number; vel: number; alvo: number; el: SVGRectElement };
      const grade = new Map<number, Celula>();
      const ativas = new Set<Celula>();
      const ondasClick: { x: number; y: number; r: number }[] = [];
      let rodando = false;
      let antX: number | null = null, antY: number | null = null;

      // Substitui o path estático pelos quadradinhos individuais de solo aberto, posicionados com centro no (0, 0) e
      // transformados pelo centro exato de cada célula. Assim não existe duplicata por baixo e um quadrado nunca encosta no outro.
      const frag = document.createDocumentFragment();
      const dAttr = pathAbertas.getAttribute("d") ?? "";
      for (const m of dAttr.matchAll(/M(\d+(?:\.\d+)?) (\d+(?:\.\d+)?)h(\d+(?:\.\d+)?)/g)) {
        const cIni = Math.round((Number(m[1]) - x0) / C);
        const r = Math.round((Number(m[2]) - y0) / C);
        const n = Math.round(Number(m[3]) / C);
        for (let k = 0; k < n; k++) {
          const c = cIni + k;
          const chave = r * 1000 + c;
          if (grade.has(chave)) continue;
          const cx = x0 + c * C + C / 2;
          const cy = y0 + r * C + C / 2;
          const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          rect.setAttribute("class", "cf-onda-q");
          rect.setAttribute("x", String(-L / 2));
          rect.setAttribute("y", String(-L / 2));
          rect.setAttribute("width", String(L));
          rect.setAttribute("height", String(L));
          rect.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
          frag.appendChild(rect);
          grade.set(chave, { c, r, cx, cy, nivel: 0, vel: 0, alvo: 0, el: rect });
        }
      }
      gOnda.appendChild(frag);
      pathAbertas.style.opacity = "0";

      const excitarPonto = (sx: number, sy: number, raio: number, forca: number) => {
        const cMin = Math.max(0, Math.floor((sx - raio - x0) / C));
        const cMax = Math.min(cols - 1, Math.ceil((sx + raio - x0) / C));
        const rMin = Math.max(0, Math.floor((sy - raio - y0) / C));
        const rMax = Math.min(rows - 1, Math.ceil((sy + raio - y0) / C));

        for (let r = rMin; r <= rMax; r++) {
          const cy = y0 + r * C + C / 2;
          const dy = cy - sy;
          for (let c = cMin; c <= cMax; c++) {
            const cel = grade.get(r * 1000 + c);
            if (!cel) continue;
            const dist = Math.hypot(cel.cx - sx, dy);
            if (dist >= raio) continue;

            const t = Math.cos((dist / raio) * (Math.PI / 2));
            const impulso = t * t * forca;
            if (impulso > cel.alvo) cel.alvo = impulso;
            cel.vel = Math.max(cel.vel, impulso * 0.22);
            ativas.add(cel);
          }
        }
        if (ativas.size > 0) ligarTicker();
      };

      const passo = () => {
        // Anel de onda ao clicar
        for (let i = ondasClick.length - 1; i >= 0; i--) {
          const o = ondasClick[i];
          o.r += 3.6;
          const R_MAX = 120, BANDA = 14;
          if (o.r > R_MAX) {
            ondasClick.splice(i, 1);
            continue;
          }
          const forcaAnel = (1 - o.r / R_MAX) * 0.95;
          const cMin = Math.max(0, Math.floor((o.x - o.r - BANDA - x0) / C));
          const cMax = Math.min(cols - 1, Math.ceil((o.x + o.r + BANDA - x0) / C));
          const rMin = Math.max(0, Math.floor((o.y - o.r - BANDA - y0) / C));
          const rMax = Math.min(rows - 1, Math.ceil((o.y + o.r + BANDA - y0) / C));
          for (let r = rMin; r <= rMax; r++) {
            for (let c = cMin; c <= cMax; c++) {
              const cel = grade.get(r * 1000 + c);
              if (!cel) continue;
              const dAnel = Math.abs(Math.hypot(cel.cx - o.x, cel.cy - o.y) - o.r);
              if (dAnel >= BANDA) continue;
              const imp = Math.cos((dAnel / BANDA) * (Math.PI / 2)) * forcaAnel;
              if (imp > cel.alvo) cel.alvo = imp;
              ativas.add(cel);
            }
          }
        }

        // Mola subamortecida: cada quadradinho sobe na crista (escala até 1,14x e leve elevação) e desce no vale
        // (escala até ~0,82x) antes de parar em 1,0x, mantendo sempre a fresta livre para nunca encostar nos vizinhos.
        for (const cel of ativas) {
          cel.vel += (cel.alvo - cel.nivel) * 0.26;
          cel.vel *= 0.80;
          cel.nivel += cel.vel;
          cel.alvo *= 0.78;

          if (Math.abs(cel.nivel) < 0.006 && cel.alvo < 0.006 && Math.abs(cel.vel) < 0.004) {
            cel.nivel = 0; cel.vel = 0; cel.alvo = 0;
            cel.el.style.transform = `translate3d(${cel.cx}px, ${cel.cy}px, 0)`;
            cel.el.style.opacity = "";
            ativas.delete(cel);
            continue;
          }

          const n = cel.nivel;
          const esc = n >= 0 ? 1 + n * 0.14 : Math.max(0.76, 1 + n * 0.32);
          const dy = -n * 0.45;
          const op = Math.min(0.98, Math.max(0.38, 0.6 + n * 0.36));
          cel.el.style.transform = `translate3d(${cel.cx}px, ${(cel.cy + dy).toFixed(2)}px, 0) scale(${esc.toFixed(3)})`;
          cel.el.style.opacity = op.toFixed(3);
        }

        if (ativas.size === 0 && ondasClick.length === 0) {
          rodando = false;
          gsap.ticker.remove(passo);
        }
      };

      const ligarTicker = () => {
        if (!rodando) {
          rodando = true;
          gsap.ticker.add(passo);
        }
      };

      const paraSvg = (e: PointerEvent) => {
        const ctm = el.getScreenCTM();
        if (!ctm) return null;
        return { x: (e.clientX - ctm.e) / ctm.a, y: (e.clientY - ctm.f) / ctm.d };
      };

      const onMove = (e: PointerEvent) => {
        const p = paraSvg(e);
        if (!p || p.x < x0 - 24 || p.x > x1 + 24 || p.y < y0 - 24 || p.y > y1 + 24) {
          antX = null; antY = null;
          return;
        }
        const RAIO = 28; // ~3,5 células: onda limpa, sem espalhar demais
        if (antX !== null && antY !== null) {
          const dist = Math.hypot(p.x - antX, p.y - antY);
          const passos = Math.min(8, Math.max(1, Math.ceil(dist / 8)));
          for (let i = 1; i <= passos; i++) {
            const t = i / passos;
            excitarPonto(antX + (p.x - antX) * t, antY + (p.y - antY) * t, RAIO, 1);
          }
        } else {
          excitarPonto(p.x, p.y, RAIO, 1);
        }
        antX = p.x; antY = p.y;
      };

      const onLeave = () => { antX = null; antY = null; };

      const onDown = (e: PointerEvent) => {
        if ((e.target as HTMLElement | null)?.closest("a, button")) return;
        const p = paraSvg(e);
        if (!p || p.x < x0 || p.x > x1) return;
        ondasClick.push({ x: p.x, y: p.y, r: 4 });
        ligarTicker();
      };

      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);
      hero.addEventListener("pointerdown", onDown);
      return () => {
        if (rodando) gsap.ticker.remove(passo);
        pathAbertas.style.opacity = "";
        gOnda.replaceChildren();
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        hero.removeEventListener("pointerdown", onDown);
      };
    }
  }, []);

  return null;
}
