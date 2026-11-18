import { ressalva } from "@/content/site";

/**
 * Ressalva global (prefixo rs-, padroes.css). Texto exato do docs/MAPA-site.md, lido de content/site.ts.
 * Vai no fim de toda página de produto e das páginas de Crédito rural (modelo de produto, item 8).
 * Fio em cima + texto em mono pequeno; funciona em fundo claro e em seção escura (data-header="dark").
 */
/** texto: outra ressalva fixa no mesmo formato (ex.: a das Perícias, no topo da página; content/produtos.ts). */
export default function Ressalva({ texto = ressalva }: { texto?: string }) {
  return (
    <div className="g16 rs-wrap">
      <p className="rs" role="note">{texto}</p>
    </div>
  );
}
