import ConferenciaMovimento from "@/components/motion/Conferencia";

type Props = {
  /** Lado da célula da grade ("pixel"), no sistema do arquivo (largura × altura do viewBox). */
  celula: number;
  /** Campo de células: canto de cima, à esquerda, número de colunas e faixas abertas por fileira ("coluna:comprimento"). */
  campo: { x: number; y: number; colunas: number; faixas: string[] };
  largura: number;
  altura: number;
  /** Segundos até a animação começar (o título entra antes). */
  delay?: number;
};

/**
 * Rampas das máscaras do campo, no sistema do arquivo (1.200 × 792): no desktop (enquadramento z = 2, fx = fy = 0), o
 * centro da tela fica perto de x = 300 a 340 e o fim do H1 perto de x = 350; a faixa do menu vai até y ≈ 40. No celular,
 * o texto termina perto de y = 210 a 235 (content/inicio.ts › enquadramento.celular).
 */
const MASCARA = { desktopX: [288, 368], desktopY: [12, 60], celularY: [220, 252] };

/**
 * "O satélite confere", sobre a imagem da abertura da home. Um feixe de varredura em Sinal atravessa a metade direita
 * da cena, da esquerda para a direita (transform); logo atrás dele a grade inteira de células acende e, um instante
 * depois, fica acesa só nas células de solo aberto (classificação pela cor média da própria cena, content/inicio.ts).
 * Uma vez só, sem laço, em menos de 5 s (WCAG 2.2.2). Sem JavaScript ou com prefers-reduced-motion: o estado final,
 * parado (células abertas acesas); o CSS só esconde as peças da entrada quando <html> tem a classe "mo".
 * Leve de propósito: as ~3.800 células não são elementos. A grade é um <pattern> de 8 × 8; a camada "todas" é um
 * retângulo pintado com ele, e a camada "abertas" é um único <path> com as faixas abertas, pintado com o mesmo padrão.
 * O movimento só recorta essas camadas (clip-path) e move o feixe.
 * Uma máscara (cf-m-d no desktop, cf-m-c no celular, trocada pelo CSS) apaga o campo atrás do texto: no desktop, à
 * esquerda e no alto (menu); no celular, em cima.
 * Desenho no servidor (HTML estático); a animação fica em components/motion/Conferencia.tsx, que procura este SVG pelo
 * id. O SVG cobre o mesmo quadro da imagem com preserveAspectRatio="xMidYMid slice" (= object-fit: cover centrado).
 */
export default function CenaConferencia({ celula: C, campo, largura, altura, delay = 1 }: Props) {
  // Campo: as faixas abertas viram retângulos de um só path.
  const W = campo.colunas * C, H = campo.faixas.length * C;
  const faixas = campo.faixas.flatMap((f, r) => (f ? f.split(" ") : []).map((p) => {
    const [c, n] = p.split(":").map(Number);
    return `M${campo.x + c * C} ${campo.y + r * C}h${n * C}v${C}h-${n * C}z`;
  })).join("");
  const caixa = { x: campo.x, y: campo.y, width: W, height: H };
  const RASTRO = 46, HALO = 7; // largura do rastro atrás do feixe e do brilho em volta da linha

  const id = "cf-abertura";
  return (
    <>
    <svg id={id} className="cf" data-x0={campo.x} data-x1={campo.x + W} data-y0={campo.y} data-y1={campo.y + H} data-c={C} data-dx0={MASCARA.desktopX[0]} viewBox={`0 0 ${largura} ${altura}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="cf-grade" width={C} height={C} patternUnits="userSpaceOnUse">
          <rect x={0.6} y={0.6} width={C - 1.2} height={C - 1.2} style={{ fill: "var(--light)" }} />
        </pattern>
        {/* feixe: rastro que se apaga para trás (esquerda) e brilho simétrico em volta da linha */}
        <linearGradient id="cf-rastro" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: "var(--light)", stopOpacity: 0 }} />
          <stop offset="1" style={{ stopColor: "var(--light)", stopOpacity: 0.5 }} />
        </linearGradient>
        <linearGradient id="cf-halo" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: "var(--light)", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "var(--light)", stopOpacity: 0.85 }} />
          <stop offset="1" style={{ stopColor: "var(--light)", stopOpacity: 0 }} />
        </linearGradient>
        {/* Máscaras (branco mostra, preto apaga; cores neutras de máscara, não de marca). Desktop: rampa da esquerda
            (atrás do texto) e faixa preta no alto (menu). Celular: rampa de cima (atrás do texto). */}
        <linearGradient id="cf-m-dx" gradientUnits="userSpaceOnUse" x1={MASCARA.desktopX[0]} x2={MASCARA.desktopX[1]} y1={0} y2={0}>
          <stop offset="0" stopColor="#fff" stopOpacity={0} /><stop offset="1" stopColor="#fff" stopOpacity={1} />
        </linearGradient>
        <linearGradient id="cf-m-dy" gradientUnits="userSpaceOnUse" x1={0} x2={0} y1={MASCARA.desktopY[0]} y2={MASCARA.desktopY[1]}>
          <stop offset="0" stopColor="#000" stopOpacity={1} /><stop offset="1" stopColor="#000" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="cf-m-cy" gradientUnits="userSpaceOnUse" x1={0} x2={0} y1={MASCARA.celularY[0]} y2={MASCARA.celularY[1]}>
          <stop offset="0" stopColor="#fff" stopOpacity={0} /><stop offset="1" stopColor="#fff" stopOpacity={1} />
        </linearGradient>
        <mask id="cf-m-d" maskUnits="userSpaceOnUse" {...caixa}>
          <rect {...caixa} fill="url(#cf-m-dx)" />
          <rect {...caixa} fill="url(#cf-m-dy)" />
        </mask>
        <mask id="cf-m-c" maskUnits="userSpaceOnUse" {...caixa}>
          <rect {...caixa} fill="url(#cf-m-cy)" />
        </mask>
      </defs>
      <g className="cf-campo">
        <g className="cf-todas-g"><rect className="cf-todas" {...caixa} fill="url(#cf-grade)" /></g>
        {/* o retângulo vazio dá ao grupo a caixa do campo inteiro (o recorte em % da animação conta sobre ela) */}
        <g className="cf-abertas-g"><rect {...caixa} fill="none" /><path className="cf-abertas" d={faixas} fill="url(#cf-grade)" /></g>
        {/* Camada de onda no mouse (após a abertura, finePointer): os quadrados sob o cursor aumentam e ondulam */}
        <g className="cf-onda" />
        {/* feixe com a linha em x = 0 (o movimento leva até a posição) */}
        <g className="cf-varre">
          <rect x={-RASTRO} y={campo.y} width={RASTRO} height={H} fill="url(#cf-rastro)" />
          <rect x={-HALO} y={campo.y} width={2 * HALO} height={H} fill="url(#cf-halo)" opacity={0.6} />
          <rect className="cf-varre-l" x={-0.7} y={campo.y} width={1.4} height={H} />
        </g>
      </g>
    </svg>
    <ConferenciaMovimento alvo={id} delay={delay} />
    </>
  );
}
