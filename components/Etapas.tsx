import type { Etapa } from "@/content/credito-rural";
import Pendente from "@/components/Pendente";
import Reveal from "@/components/motion/Reveal";

const n2 = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Etapas de Como começar. Reaproveita os passos da página de produto da iAgroSat (pd-steps-list,
 * que já tem a variante de 4 itens: 4 colunas no desktop, 2 no tablet, 1 no celular). Sem CSS novo.
 * Etapa com valor a confirmar leva a marca Pendente (código em content/).
 */
export default function Etapas({ itens }: { itens: Etapa[] }) {
  return (
    <Reveal as="ol" className="pd-steps-list" stagger={0.1} y={24}>
      {itens.map((e, i) => (
        <li key={e.titulo}>
          <span className="pd-step-n" aria-hidden="true">{n2(i)}</span>
          <div>
            <p><strong>{e.pendente ? <Pendente codigo={e.pendente}>{e.titulo}</Pendente> : e.titulo}</strong></p>
            {e.texto && <p className="pd-step-x">{e.texto}</p>}
          </div>
        </li>
      ))}
    </Reveal>
  );
}
