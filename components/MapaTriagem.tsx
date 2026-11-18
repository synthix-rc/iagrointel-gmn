import TriagemMovimento from "@/components/motion/Triagem";

type Props = {
  /** Alertas brutos (células que acendem) e bloqueios mantidos (as que ficam em Argila), de content/inicio.ts. */
  alertas: number;
  bloqueios: number;
  /** Semente do sorteio das posições (o mesmo desenho em todo build). */
  semente: number;
  /** Id do bloco que comanda a rolagem no desktop (a seção da prova inteira). */
  gatilho: string;
};

/** Gerador pseudoaleatório pequeno e determinístico (mulberry32). */
function sorteio(semente: number) {
  let a = semente >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const N = 50, C = 8, G = 1.6; // células por lado, lado da célula e vão entre elas (viewBox de 400 × 400)

/**
 * Mapa da triagem (home, seção da prova): um território abstrato de células (forma orgânica, não é o Brasil nem um
 * lugar real). Conforme a rolagem, os alertas brutos acendem em Sinal escuro, um a um em ordem sorteada; depois a
 * maioria apaga e os bloqueios mantidos ficam em Argila. A legenda embaixo conta junto (só números; o sentido está no
 * título da seção, "311 → 38"). O SVG e a legenda são decorativos (aria-hidden): o texto ao lado diz o mesmo.
 * Sem JavaScript ou com prefers-reduced-motion: o estado final, parado (alertas apagados ao fundo, bloqueios em
 * Argila, legenda com os dois números). Animação em components/motion/Triagem.tsx.
 */
export default function MapaTriagem({ alertas, bloqueios, semente, gatilho }: Props) {
  const r = sorteio(semente);
  // Contorno do território: raio que varia com o ângulo (soma de senoides com fases sorteadas).
  const f = [r() * 6.28, r() * 6.28, r() * 6.28];
  const raio = (t: number) => 168 * (0.8 + 0.1 * Math.sin(3 * t + f[0]) + 0.06 * Math.sin(5 * t + f[1]) + 0.04 * Math.sin(9 * t + f[2]));
  const dentro: [number, number][] = [];
  for (let j = 0; j < N; j++)
    for (let i = 0; i < N; i++) {
      const dx = i * C + C / 2 - 200, dy = j * C + C / 2 - 200;
      if (Math.hypot(dx, dy) < raio(Math.atan2(dy, dx))) dentro.push([i * C, j * C]);
    }
  // Sorteio: embaralha as células do território; as primeiras são os alertas, e destas as primeiras são os bloqueios.
  const ordem = dentro.map((p) => ({ p, k: r() })).sort((a, b) => a.k - b.k).map((o) => o.p);
  const acesas = ordem.slice(0, alertas);
  const mantidas = acesas.slice(0, bloqueios);
  const L = C - G;
  // viewBox justo na forma (o mapa ocupa a coluna inteira, sem margem vazia)
  const vx = Math.min(...dentro.map((p) => p[0])), vy = Math.min(...dentro.map((p) => p[1]));
  const vw = Math.max(...dentro.map((p) => p[0])) + C - vx, vh = Math.max(...dentro.map((p) => p[1])) + C - vy;
  const quad = ([x, y]: [number, number]) => `M${x + G / 2} ${y + G / 2}h${L}v${L}h-${L}z`;

  const id = "hm-pv-mapa";
  return (
    <figure className="hm-pv" id={id} aria-hidden="true">
      <svg className="hm-pv-svg" viewBox={`${vx} ${vy} ${vw} ${vh}`} data-c={C} data-l={L} focusable="false">
        <path className="hm-pv-fundo" d={dentro.map(quad).join("")} />
        <g className="hm-pv-onda" />
        <g className="hm-pv-a">
          {acesas.map(([x, y], idx) => (
            <rect key={`${x},${y}`} x={x + G / 2} y={y + G / 2} width={L} height={L} data-salvo={idx >= bloqueios ? "1" : undefined} />
          ))}
        </g>
        <g className="hm-pv-b">{mantidas.map(([x, y]) => <rect key={`${x},${y}`} x={x + G / 2} y={y + G / 2} width={L} height={L} />)}</g>
      </svg>
      <figcaption className="hm-pv-leg">
        <span className="hm-pv-leg-a" data-foco="alertas"><i /><b data-n={alertas}>{alertas}</b></span>
        <span className="hm-pv-leg-b" data-foco="bloqueios"><i /><b data-n={bloqueios}>{bloqueios}</b></span>
      </figcaption>
      <TriagemMovimento alvo={id} gatilho={gatilho} />
    </figure>
  );
}
