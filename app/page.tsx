import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import CountUp from "@/components/motion/CountUp";
import CenaConferencia from "@/components/CenaConferencia";
import Marquee from "@/components/motion/Marquee";
import Cta from "@/components/Cta";
import { TextoRico } from "@/components/Pendente";
import IndiceProdutos from "@/components/IndiceProdutos";
import MapaTriagem from "@/components/MapaTriagem";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { areaCredito, areaExportacao, produtosCredito, triagemEudr } from "@/content/produtos";
import { inicio as I } from "@/content/inicio";

/** Tamanho do arquivo em que o perímetro e as células foram marcados (content/inicio.ts › abertura.conferencia). */
const QUADRO = { largura: 1200, altura: 792 };
/** Altura fixa da cena abaixo de 1024 px (padroes.css › .hm-cena). */
const CENA_CELULAR = 900;

/**
 * Página inicial (MAPA-site.md › Início): tagline + frase-síntese · prova com ressalva · faixa de fontes · produtos
 * em mosaico (Crédito rural e Exportação). O endosso iAgroSat e a chamada final ficam no rodapé (Footer.tsx), em todas as páginas.
 * Etapa 1A (16/11/2026, ideias 1 e 12, decisões 44 e 45; fecha a P34):
 * - Abertura escura (cl-hero) com a imagem Sentinel-2 de Crédito rural atrás do texto (hm-cena: imagem, véu em Tinta,
 *   contorno ilustrativo) e a legenda da cena na base (hm-leg, mesma função da legenda das páginas de produto).
 *   O texto (H1, parágrafo, botão) não mudou e continua visível desde o primeiro quadro.
 * - Faixa de fontes (hm-fontes) entre a prova e os produtos: Marquee no modo "rolagem" (só anda enquanto a página rola).
 * Produtos (16/11/2026, pedido do Rodrigo; no lugar do mosaico da etapa 1B): índice com palco preso (IndiceProdutos,
 * hm-ix-), seção escura; o produto ativo troca a imagem Sentinel-2 do palco com o feixe da abertura.
 * Outro padrão reaproveitado: faixa de números (nums). Ver docs/DESIGN.md §9 (hm-).
 */
export default function Inicio() {
  const cena = imagemSentinel(I.abertura.imagem);
  const [menor] = cena.versoes;
  const { desktop: D, celular: C } = I.abertura.enquadramento;
  // Enquadramento (padroes.css › hm-cena-quadro): o quadro tem z vezes o tamanho da cena e é deslocado até o ponto (fx, fy).
  // Celular: a cena tem 900 px de altura (padroes.css); o quadro tem a proporção exata do arquivo, com s px por unidade,
  // e o ponto (u, v) do arquivo vai para o centro da largura, a y px do topo da cena.
  const s = (C.z * CENA_CELULAR) / QUADRO.altura;
  const enquadramento = {
    "--z": D.z, "--fx": D.fx, "--fy": D.fy,
    "--cw": `${Math.round(QUADRO.largura * s)}px`, "--ch": `${Math.round(QUADRO.altura * s)}px`,
    "--cl": `${Math.round(-C.u * s)}px`, "--ct": `${Math.round(C.y - C.v * s)}px`,
  } as React.CSSProperties;
  // Largura em que a imagem aparece: z vezes a tela no desktop. No celular, o quadro tem cerca de 3.000 px de largura,
  // mas só 390 px aparecem; pedir a largura real levava o navegador ao arquivo de 2.400 px (374 KB), que virava o LCP
  // (6,1 s no Lighthouse). Ali o sizes pede de propósito menos: 700 px, que dá o arquivo de 1.200 px em densidade até ~1,7
  // e o de 2.400 px em densidade 3.
  const sizes = `(min-width: 1024px) ${Math.round(D.z * 100)}vw, 700px`;
  return (
    <>
      {/* 1 · Abertura: tagline e frase-síntese sobre a imagem do Laudo PRODES, com a animação das três frases */}
      <section className="cl-hero hm-hero" data-hero="" data-header="dark">
        <div className="g16 cl-hero-in">
          <div className="cl-hero-text">
            <SplitHeading as="h1" className="t-hero cl-title" text={I.tagline.join("\n")} by="line" stagger={0.75} start="load" delay={0.1} />
            <Reveal as="p" className="p-m cl-lead" start="load" delay={0.35} visivel><TextoRico t={I.sintese} /></Reveal>
          </div>
        </div>
        {/* Imagem atrás do texto (no HTML depois dele: o leitor de tela ouve o título antes do texto alternativo).
            loading="lazy", sem fetchpriority: medido na etapa 1A (Lighthouse celular, mediana de 3), lazy deu LCP 2,7 s e
            sem lazy 3,0 s; nos dois casos o LCP é o parágrafo da abertura. */}
        <div className="hm-cena" style={enquadramento}>
          <div className="hm-cena-quadro">
            <img className="hm-cena-img" src={menor.src} srcSet={srcSetDe(cena)} sizes={sizes} alt={cena.mostra}
              width={menor.largura} height={menor.altura} loading="lazy" decoding="async" />
            <CenaConferencia {...I.abertura.conferencia} largura={QUADRO.largura} altura={QUADRO.altura} delay={0.2} />
          </div>
          <span className="hm-veu" aria-hidden="true" />
        </div>
        {/* Traço de rolagem (a partir de 1024 px): linha no centro da base com um brilho que desce três vezes e para. */}
        <span className="hm-rolar" aria-hidden="true"><i /></span>
        {/* Abaixo de 1024 px: espaço da animação entre o texto e a legenda (hm-zona). */}
        <span className="hm-zona" aria-hidden="true" />
        <div className="g16 hm-leg-wrap">
          <p className="hm-leg">{legendaDe(cena)}</p>
        </div>
      </section>

      {/* 2 · Prova com ressalva. À esquerda, o mapa da triagem (preso enquanto o texto passa, no desktop); à direita, os
          quatro números (contador), o "311 → 38" com o texto e a ressalva com o dossiê de exemplo. */}
      <section className="sec sec-white">
        <div className="g16 hm-prova" id="hm-prova">
          <MapaTriagem {...I.prova.mapa} gatilho="hm-prova-col" />
          <div className="hm-prova-col" id="hm-prova-col">
            {/* 1 · rótulo e os quatro números; 2 · fio condutor + "311 → 38" e o texto;
                3 · ressalva e dossiê de exemplo, logo abaixo */}
            <div className="hm-prova-ind">
              <Reveal as="span" className="lbl" y={16}>{I.prova.rotulo}</Reveal>
              <Reveal as="dl" className="nums hm-nums" stagger={0.1}>
                {I.prova.numeros.map((n, i) => (
                  <div key={n.rotulo} className="hm-num-card" data-foco={["todos", "alertas", "salvos", "bloqueios"][i]}>
                    <dd><CountUp value={n.valor.valor} prefixo /></dd>
                    <dt>{n.rotulo}</dt>
                  </div>
                ))}
              </Reveal>
            </div>
            <span className="hm-prova-fio" aria-hidden="true"><i /></span>
            <div className="cl-src-head hm-prova-311" id="hm-prova-311">
              <SplitHeading as="h2" className="t-xl pl-h2" text={I.prova.destaque} by="line" />
              <Reveal as="p" className="p-m hm-prova-texto"><TextoRico t={I.prova.texto} /></Reveal>
            </div>
            <Reveal className="hm-ressalva">
              <p>{I.prova.ressalva}</p>
              <a className="lnk" href={I.prova.exemplo.href} target="_blank" rel="noopener">{I.prova.exemplo.label}</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 · Faixa de fontes e frentes: mesmo padrão .part + .tiles da iAgroSat (empresa mãe) */}
      <section className="sec sec-paper part hm-fontes" aria-labelledby="hm-fontes-titulo">
        <div className="g16 part-head">
          <Reveal as="span" className="lbl" y={16}>{I.fontes.rotulo}</Reveal>
          <SplitHeading id="hm-fontes-titulo" className="t-xl" text={I.fontes.titulo} by="line" />
          <Reveal as="p" className="p-m">{I.fontes.texto}</Reveal>
          <Reveal><Cta href={I.fontes.cta.href} variant="sq-ghost">{I.fontes.cta.label}</Cta></Reveal>
        </div>
        <Marquee className="tiles" speed={45}>
          {I.fontes.itens.map((f) => <span className="tile" key={f}>{f}</span>)}
        </Marquee>
        <Marquee className="tiles" speed={45} direction={-1}>
          {I.fontes.frentes.map((f) => (
            <span className="tile" key={f.titulo}><strong>{f.titulo}</strong><small>{f.sub}</small></span>
          ))}
        </Marquee>
      </section>

      {/* 4 · Produtos: vitrine horizontal (HorizontalSection), dois grupos (docs/PRODUTOS.md): Crédito rural (os 6)
          e Exportação (Triagem EUDR) */}
      <IndiceProdutos
        titulo={I.produtosTitulo}
        grupos={[
          { rotulo: areaCredito.nome, slugs: produtosCredito.map((p) => p.slug) },
          { rotulo: areaExportacao.nome, slugs: [triagemEudr.slug] },
        ]}
      />
    </>
  );
}
