import { rotulos } from "@/content/site";
import type { Valor } from "@/content/valor";
import { ValorTexto } from "@/components/Pendente";

/**
 * Selo de maturidade do produto (prefixo mat-, padroes.css): quadradinho + "Maturidade" + nível, em mono.
 * O nível é sempre escrito (Pronto ou Piloto, decisão 25; nunca "beta"); nunca só cor.
 * PRODUTOS.md › Maturidade: sempre visível ao lado do nome.
 */
export default function Maturidade({ nivel }: { nivel: Valor }) {
  return (
    <span className="mat">
      <span className="mat-l">{rotulos.maturidade}</span>
      <span className="mat-v"><ValorTexto v={nivel} /></span>
    </span>
  );
}
