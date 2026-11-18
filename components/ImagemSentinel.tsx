import Reveal from "@/components/motion/Reveal";
import ImageReveal from "@/components/motion/ImageReveal";
import { modeloProduto as M } from "@/content/produtos";
import { imagensSentinel, type ImagemSentinel as TImagem } from "@/content/imagens";

/** Data AAAA-MM-DD → DD/MM/AAAA. */
const dataBR = (d: string) => d.split("-").reverse().join("/");

/**
 * Largura em que a imagem aparece (sizes), pela coluna .pd-visual de padroes.css: colunas 10 a 16 da grade a partir de
 * 1024 px (cerca de 34vw), colunas 2 a 12 entre 768 e 1023 px (cerca de 60vw) e a largura toda menos as margens no celular.
 */
const SIZES = "(min-width: 1024px) 34vw, (min-width: 768px) 60vw, calc(100vw - 40px)";

/** Com versões, todos os campos são obrigatórios e a atribuição tem o ano da cena: o build falha em vez de publicar sem fonte. */
function conferir(chave: string, i: TImagem) {
  const faltam: string[] = (["municipio", "uf", "data", "sensor", "bandas", "mostra", "atribuicao"] as const).filter((k) => !i[k]);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(i.data)) faltam.push("data (AAAA-MM-DD)");
  if (!i.atribuicao.includes(`modificados ${i.data.slice(0, 4)},`)) faltam.push("atribuicao com o ano da data da cena");
  for (const v of i.versoes) {
    if (!/^\/imagens\/.+\.webp$/.test(v.src) || !(v.largura > 0) || !(v.altura > 0)) faltam.push(`versão ${v.src} (/imagens/*.webp, largura e altura)`);
  }
  if (faltam.length) throw new Error(`content/imagens.ts › "${chave}": faltam ou estão fora do formato: ${[...new Set(faltam)].join(", ")}`);
}

/** srcset com todas as versões ("a-800.webp 800w, …"). */
export const srcSetDe = (i: TImagem) => i.versoes.map((v) => `${v.src} ${v.largura}w`).join(", ");

/** Carimbo curto da cena: município (UF) ou a região · data da cena (mosaico de produtos da home, etapa 1B). */
export const carimboDe = (i: TImagem) => [i.regiao ?? `${i.municipio} (${i.uf})`, dataBR(i.data)].join(" · ");

/** Legenda da cena numa linha: município (UF) ou a região · data da cena · sensor · atribuição Copernicus. */
export const legendaDe = (i: TImagem) => [i.regiao ?? `${i.municipio} (${i.uf})`, dataBR(i.data), i.sensor, i.atribuicao].join(" · ");

/**
 * Registro conferido de content/imagens.ts (o build falha se faltar campo). Usado fora da abertura das páginas de
 * produto, ex.: a abertura da home (app/page.tsx, etapa 1A).
 */
export function imagemSentinel(chave: string): TImagem {
  const i = imagensSentinel[chave];
  if (!i || i.versoes.length === 0) throw new Error(`content/imagens.ts › "${chave}": sem versões`);
  conferir(chave, i);
  return i;
}

/**
 * Imagem Sentinel-2 da abertura (pd-visual), P14 encerrada (decisão 42). Lê content/imagens.ts pela chave da página.
 * Sem versões: o espaço reservado (.pv.ph, "Imagem Sentinel-2 · a fornecer"), sem legenda.
 * Com versões: ImageReveal no quadro .pv, na proporção da própria imagem (sem corte: o texto alternativo descreve
 * o quadro inteiro), com srcset das quatro larguras e sizes da coluna. Legenda numa linha em mono (sen-leg):
 * município (UF) ou a região · data da cena · sensor · atribuição Copernicus (linha exata do .txt).
 * Carregamento: loading="lazy" em todas as larguras (L2, 15/11/2026). No celular, a prioridade alta disputava banda com o
 * CSS e as fontes (LCP da Perícia Pré-Crédito de 2,7 s para 3,8 s). No desktop, o pré-carregamento só para telas largas
 * não ganhou LCP (0,6 a 0,7 s nas duas versões) e baixava também a imagem de /credito-rural/ pela pré-busca do link.
 */
export default function ImagemSentinel({ chave }: { chave: string }) {
  const i = imagensSentinel[chave];

  if (!i || i.versoes.length === 0) {
    return (
      <Reveal className="pd-visual" start="load" delay={0.2} y={40}>
        <figure className="pv ph" role="img" aria-label={M.imagemAFornecer}>
          <span className="ph-t" aria-hidden="true">{M.imagemAFornecer}</span>
        </figure>
      </Reveal>
    );
  }

  conferir(chave, i);
  const [menor] = i.versoes;
  const srcSet = srcSetDe(i);

  return (
    <div className="pd-visual">
      <figure className="sen">
        <ImageReveal
          className="pv"
          src={menor.src}
          srcSet={srcSet}
          sizes={SIZES}
          alt={i.mostra}
          width={menor.largura}
          height={menor.altura}
        />
        <figcaption className="sen-leg">{legendaDe(i)}</figcaption>
      </figure>
    </div>
  );
}
