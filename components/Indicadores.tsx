import type { Indicador } from "@/content/credito-rural";
import type { Rico } from "@/content/valor";
import Pendente, { TextoRico } from "@/components/Pendente";
import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";

/**
 * Indicadores com fonte e data de referência (prefixo ind-, padroes.css; MAPA-site.md › Crédito rural, item 2).
 * Reaproveita a faixa de números .nums (fio em cima, 4 colunas, 2 no celular): número + a frase do documento.
 * Embaixo da faixa, a linha "Fontes: ..." do documento do cliente, literal (fonte e período de todos os números).
 * .nums empilha ao contrário (column-reverse): no HTML a ordem é número → rótulo; na tela, rótulo → número.
 */
export default function Indicadores({ itens, fontes }: { itens: Indicador[]; fontes: Rico }) {
  return (
    <>
    <Reveal as="dl" className="nums ind" stagger={0.1}>
      {itens.map((it) => (
        <div key={it.id}>
          <dd>
            {it.valor.pendente
              ? <Pendente codigo={it.valor.pendente}><CountUp value={it.valor.valor} /></Pendente>
              : <CountUp value={it.valor.valor} />}
          </dd>
          <dt><TextoRico t={it.rotulo} /></dt>
        </div>
      ))}
    </Reveal>
    <Reveal as="p" className="ind-fontes"><TextoRico t={fontes} /></Reveal>
    </>
  );
}
