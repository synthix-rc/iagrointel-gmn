import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import { TextoRico, ValorTexto } from "@/components/Pendente";
import { produto, modeloProduto } from "@/content/produtos";
import { conteudoCredito } from "@/content/produtos-credito";
import { conteudoOutros } from "@/content/produtos-outros";
import type { Rico, Valor } from "@/content/valor";

const n2 = (i: number) => String(i + 1).padStart(2, "0");
// Produto ainda sem página com conteúdo (ex.: Triagem EUDR).
const semConteudo = { evidencia: modeloProduto.aDefinir, maturidade: { valor: modeloProduto.aDefinir } as Valor };

// titulo opcional: sem título, a lista ocupa a largura toda. Produto sem página (href vazio): nome sem link.
// branco: lista clara em seção branca (quando vem logo depois de uma abertura em Papel).
// texto: parágrafo curto abaixo do título (só na lista clara).
// grupos (só na lista escura): várias listas na mesma seção, cada uma com o nome do grupo em rótulo .lbl acima
// (home: Crédito rural e Exportação, D2 15/11/2026). Com grupos, slugs fica de fora.
type Grupo = { rotulo: string; slugs: string[] };
// empilhada (só na lista clara): título e texto num cl-src-head na largura toda e a lista embaixo, em vez do título
// fixo à esquerda (Cooperativas › GRSAC conforme o porte, D3 15/11/2026).
// acao (só na lista clara): botão no fim da seção, abaixo da lista (Exportação, D3).
type Props = { rotulo?: string; titulo?: string; texto?: string | Rico; slugs?: string[]; grupos?: Grupo[]; escuro?: boolean; branco?: boolean; empilhada?: boolean; acao?: React.ReactNode };

/**
 * Lista de produtos com nome (link), maturidade e H2 de evidência, lidos de content/produtos.ts e
 * content/produtos-credito.ts (sem duplicar texto).
 * escuro: lista escura sb-tec (home, "Da operação à carteira"); com grupos, sb-tec-grupos/sb-tec-grupo (DESIGN.md §9).
 * Claro: lista numerada pd-rec-list (empilhada: cabeçalho cl-src-head em cima, DESIGN.md §9).
 */
export default function ListaProdutos({ rotulo, titulo, texto, slugs = [], grupos, escuro = false, branco = false, empilhada = false, acao }: Props) {
  const lerItens = (lista: string[]) =>
    lista.map((slug) => ({ p: produto(slug), c: conteudoCredito[slug] ?? conteudoOutros[slug] ?? semConteudo }));
  const itens = lerItens(slugs);
  const nome = (p: { href: string; nome: string }) => (p.href ? <Link href={p.href}>{p.nome}</Link> : p.nome);

  if (escuro) {
    const listaEscura = (lista: string[]) => (
      <Reveal as="ul" className="sb-tec-list" stagger={0.1} y={30}>
        {lerItens(lista).map(({ p, c }, i) => (
          <li key={p.slug}>
            <span className="sb-tec-n">{n2(i)}</span>
            <div className="sb-tec-name"><h3>{nome(p)}</h3><small><ValorTexto v={c.maturidade} /></small></div>
            <p><TextoRico t={c.evidencia} /></p>
          </li>
        ))}
      </Reveal>
    );
    return (
      <section className="sb-tec" data-header="dark">
        <div className="g16 sb-tec-in">
          <div className="sb-tec-head">
            {rotulo && <Reveal as="span" className="lbl" y={16}>{rotulo}</Reveal>}
            {titulo && <SplitHeading as="h2" className="t-xl pl-h2" text={titulo} by="line" />}
          </div>
          {grupos ? (
            <div className="sb-tec-grupos">
              {grupos.map((g) => (
                <div key={g.rotulo} className="sb-tec-grupo">
                  <Reveal as="span" className="lbl" y={16}>{g.rotulo}</Reveal>
                  {listaEscura(g.slugs)}
                </div>
              ))}
            </div>
          ) : listaEscura(slugs)}
        </div>
      </section>
    );
  }

  return (
    <section className={`sec ${branco ? "sec-white" : "sec-paper"} pd-rec`}>
      <div className={`g16 ${empilhada ? "cl-src-grid" : "pd-rec-grid"}`}>
        {(rotulo || titulo) && (
          <div className={empilhada ? "cl-src-head" : "pd-rec-head"}>
            {rotulo && <Reveal as="span" className="lbl" y={16}>{rotulo}</Reveal>}
            {titulo && <SplitHeading as="h2" className="t-xl pl-h2" text={titulo} by="line" />}
            {texto && <Reveal as="p" className="p-m" y={16}><TextoRico t={texto} /></Reveal>}
          </div>
        )}
        <Reveal as="ul" className="pd-rec-list" stagger={0.07} y={24}>
          {itens.map(({ p, c }, i) => (
            <li key={p.slug}>
              <span className="pd-rec-n">{n2(i)}</span>
              <span className="pd-rec-t">{nome(p)}</span>
              <span className="pd-rec-x"><TextoRico t={c.evidencia} /></span>
            </li>
          ))}
        </Reveal>
        {acao && <Reveal className="cl-src-head pd-actions">{acao}</Reveal>}
      </div>
    </section>
  );
}
