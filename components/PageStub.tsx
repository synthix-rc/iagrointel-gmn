import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Rascunho, { metaRascunho } from "@/components/Rascunho";

type Props = {
  /** Rótulo pequeno acima do título (ex.: o nome da seção do menu). */
  rotulo: string;
  /** Título da página. Vem de content/, nunca escrito aqui. */
  titulo: string;
  /** Corpo da página enquanto nenhuma fonte o traz ("A DEFINIR"; código em content/rascunhos.ts). */
  texto: string;
};

/** Metadados da página provisória: os mesmos da faixa de rascunho (noindex e faixa saem juntos). */
export const metaStub = metaRascunho;

/**
 * Página interna ainda sem conteúdo aprovado (estilos .stub, .stub-lbl, .stub-title, .stub-texto em app/padroes.css).
 * Mantém a rota viva (o menu e o rodapé não caem em 404) até a camada que preenche a página (decisão 16).
 * Leva a faixa de rascunho (components/Rascunho.tsx).
 * Sem data-hero: o cabeçalho fica sobre fundo claro e o <main> ganha o recuo do cabeçalho (base.css).
 */
export default function PageStub({ rotulo, titulo, texto }: Props) {
  return (
    <section className="sec sec-paper stub">
      <Rascunho />
      <div className="g16">
        <Reveal as="span" className="lbl stub-lbl" y={16} start="load">{rotulo}</Reveal>
        <SplitHeading as="h1" className="t-xl stub-title" text={titulo} by="line" start="load" delay={0.1} visivel />
        <Reveal as="p" className="p-m stub-texto" y={12} start="load" delay={0.2}>{texto}</Reveal>
      </div>
    </section>
  );
}
