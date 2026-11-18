import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Rascunho from "@/components/Rascunho";
import { TextoRico } from "@/components/Pendente";
import type { Rico } from "@/content/valor";

type Props = {
  rotulo: string;
  titulo: string;               // H1 (nome da página)
  subtitulo?: string | Rico;    // H2 logo abaixo (ex.: frase do documento do cliente)
  texto?: string | Rico;        // parágrafo
  textos?: (string | Rico)[];   // parágrafos seguintes (ex.: público da Exportação, Sobre)
  fonte?: string | Rico;        // linha de fonte dos números do texto (mono pequeno, .ind-fontes)
  acoes?: React.ReactNode;      // botões
  rascunho: boolean;            // faixa de rascunho (o noindex vem do metaRascunho da rota, mesma condição)
};

/**
 * Abertura simples das páginas internas sem imagem (pd-hero, Papel): rótulo, H1, H2 opcional, texto e botões.
 * Usada em /credito-rural/cooperativas/, /como-comecar/, /exemplos/ e /normas/ (E5). Sem CSS novo: a linha de
 * fonte reaproveita .ind-fontes (Indicadores).
 * Título, subtítulo e texto visíveis desde o primeiro quadro (visivel): o maior deles é o LCP (E7).
 * Sem imagem ao lado, a coluna do texto vai até a 12 em telas de 1024 px ou mais (pd-hero-larga, D3 15/11/2026); os
 * parágrafos seguem com a largura de leitura de .pd-text (52ch).
 */
export default function Abertura({ rotulo, titulo, subtitulo, texto, textos, fonte, acoes, rascunho }: Props) {
  return (
    <section className="sec sec-paper pd-hero">
      {rascunho && <Rascunho />}
      <div className="g16 pd-hero-grid">
        <div className="pd-hero-text pd-hero-larga">
          <Reveal as="span" className="lbl" start="load" y={16}>{rotulo}</Reveal>
          <SplitHeading as="h1" className="t-xl pl-h2 pd-title" text={titulo} by="line" start="load" delay={0.1} visivel />
          {subtitulo && <Reveal as="h2" className="t-m pd-text" start="load" delay={0.25} visivel><TextoRico t={subtitulo} /></Reveal>}
          {texto && <Reveal as="p" className="p-m pd-text" start="load" delay={0.35} visivel><TextoRico t={texto} /></Reveal>}
          {textos?.map((t, i) => (
            <Reveal key={i} as="p" className="p-m pd-text" start="load" delay={0.4 + i * 0.05} visivel><TextoRico t={t} /></Reveal>
          ))}
          {fonte && <Reveal as="p" className="ind-fontes" start="load" delay={0.4} visivel><TextoRico t={fonte} /></Reveal>}
          {acoes && <Reveal className="pd-actions" start="load" delay={0.45}>{acoes}</Reveal>}
        </div>
      </div>
    </section>
  );
}
