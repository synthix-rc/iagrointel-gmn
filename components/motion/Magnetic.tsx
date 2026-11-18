import type { ReactNode } from "react";

/**
 * Envolve um botão de chamada. O efeito magnético (o botão seguia o ponteiro) foi desligado a pedido
 * do cliente em 11/11/2026: os botões não se deslocam mais no hover. A microinteração agora é só interna
 * (preenchimento da esquerda para a direita + texto rolando), em CSS (.btn::before, .btn-sq::before, .btn-roll).
 * O wrapper continua para não mudar o layout de quem já o usa.
 */
export default function Magnetic({ children }: { children: ReactNode; strength?: number }) {
  return <span className="magnetic">{children}</span>;
}
