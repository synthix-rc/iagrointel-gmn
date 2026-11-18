import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Cta from "@/components/Cta";
import Rascunho from "@/components/Rascunho";
import Maturidade from "@/components/Maturidade";
import CamadaPericial from "@/components/CamadaPericial";
import { TextoRico } from "@/components/Pendente";
import { ExemploLista, ExemploTabela } from "@/components/ExemploCard";
import NormasTabela from "@/components/NormasTabela";
import Etapas from "@/components/Etapas";
import Ressalva from "@/components/Ressalva";
import { imagemSentinel, legendaDe, srcSetDe } from "@/components/ImagemSentinel";
import { navCta } from "@/content/site";
import { modeloProduto as M, todosProdutos, type ProdutoBase } from "@/content/produtos";
import type { ConteudoProduto } from "@/content/produtos-credito";
import { comoComecar, norma } from "@/content/credito-rural";
import { exemplos, tabelasExemplo } from "@/content/exemplos";

const SIZES_HERO = "(min-width: 1024px) 44vw, calc(100vw - 40px)";
const n2 = (i: number) => String(i + 1).padStart(2, "0");

type Props = {
  p: ProdutoBase;                       // nome e endereço: só de content/produtos.ts
  c: ConteudoProduto;                   // conteúdo: content/produtos-credito.ts ou produtos-outros.ts
  idx: number;                          // posição do produto na área (rótulo "Crédito rural · 01")
  area: { nome: string; href: string }; // área de negócio
  rascunho: boolean;                    // faixa de rascunho
  cta?: { href: string; label: string }; // botão da página (padrão: Como começar)
  etapas?: boolean;                     // mostra as etapas de Como começar (padrão: sim)
};

/**
 * Modelo da página de produto de 1º nível (6 produtos de Crédito rural e Triagem EUDR):
 * - 0 · Abertura escura em 100svh (.cl-hero .tc-hero, data-header="dark"):
 *   À esquerda: área + Maturidade, H1 (.t-xl para nunca vazar sob a imagem), subtítulo e a frase-síntese (c.evidencia).
 *   Sem botão duplicado na abertura (o botão "Como começar" já fica fixo no cabeçalho).
 *   À direita: cena Sentinel-2 com a camada de animação pericial (<CamadaPericial />) e legenda Copernicus.
 *   Na base da 1ª dobra: índice de âncoras (.cr-indice).
 * - 1 · O que cruza (.pd-rec-grid em fundo branco, abrindo com os parágrafos explicativos de c.texto).
 * - 2 · O que entrega (cartões numerados .pd-steps-list em Papel).
 * - 3 · O que não faz (seção escura .sb-tec .mc-lim, data-header="dark").
 * - 4 · Exemplos (.ex-lista e .ex-tabela em Papel).
 * - 5 · Norma relacionada (NormasTabela comFonte em branco).
 * - 6 · Como começar + navegação direta entre os 7 produtos + Ressalva global.
 */
export default function ProdutoPage({ p, c, idx, area, rascunho, cta = navCta, etapas = true }: Props) {
  const exs = exemplos.filter((e) => e.produto === p.slug);
  const semNorma = c.norma === "nao-se-aplica";
  const refs = c.norma === null || c.norma === "nao-se-aplica" ? [] : Array.isArray(c.norma) ? c.norma : [c.norma];
  const linhasNorma = refs.map((r) => (typeof r === "string" ? norma(r) : r));
  const cruza = c.cruza ?? [M.aDefinir];
  const entrega = c.entrega ?? [M.aDefinir];
  const naoFaz = c.naoFaz ?? [M.aDefinir];
  const img = imagemSentinel(p.slug);
  const [menor] = img.versoes;

  const secoesIndice = [
    { id: "cruza", label: M.cruza },
    { id: "entrega", label: M.entrega },
    { id: "nao-faz", label: M.naoFaz },
    { id: "exemplos", label: M.exemplos },
    ...(!semNorma ? [{ id: "norma", label: linhasNorma.length > 1 ? M.normas : M.norma }] : []),
    ...(etapas ? [{ id: "como-comecar", label: M.comoComecar }] : []),
  ];

  return (
    <>
      {/* 0 · Abertura escura de 1º nível (100svh no desktop) */}
      <section className="cl-hero tc-hero pd-hero-dark" data-hero="" data-header="dark">
        <span className="cl-hero-grid" aria-hidden="true" />
        {rascunho && <Rascunho />}
        <div className="g16 cl-hero-in">
          <div className="cl-hero-text">
            <Reveal className="pd-hero-meta" start="load" y={14}>
              <span className="lbl">{`${area.nome} · ${n2(idx)}`}</span>
              <Maturidade nivel={c.maturidade} />
            </Reveal>
            <SplitHeading as="h1" className="t-xl cl-title pd-hero-h1" text={p.nome} by="line" start="load" delay={0.08} visivel />
            {p.subtitulo && <Reveal as="p" className="pd-hero-sub" start="load" y={12} delay={0.16}>{p.subtitulo}</Reveal>}
            <Reveal as="p" className="p-m cl-lead pd-hero-ev" start="load" delay={0.22} visivel>
              <TextoRico t={c.evidencia} />
            </Reveal>
            {p.ressalvaTopo && (
              <Reveal as="p" className="pd-hero-ressalva" start="load" delay={0.28}>
                {p.ressalvaTopo}
              </Reveal>
            )}
          </div>
          <figure className="tc-hero-map">
            <Reveal className="tc-hero-img pd-hero-palco" start="load" delay={0.2} y={24}>
              <img
                src={menor.src}
                srcSet={srcSetDe(img)}
                sizes={SIZES_HERO}
                alt={img.mostra}
                width={menor.largura}
                height={menor.altura}
                loading="lazy"
                decoding="async"
              />
              <CamadaPericial slug={p.slug} area={area.nome} />
            </Reveal>
            <figcaption className="tc-hero-leg">{legendaDe(img)}</figcaption>
          </figure>
        </div>
        <nav className="g16 cr-indice-wrap" aria-label="Nesta página">
          <Reveal className="cr-indice" start="load" delay={0.36} y={10}>
            <span className="cr-indice-t">Nesta página</span>
            <ul>
              {secoesIndice.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
              ))}
            </ul>
          </Reveal>
        </nav>
      </section>

      {/* 1 · O que cruza (.pd-rec-grid em branco, com os parágrafos explicativos de c.texto na abertura da seção) */}
      <section id="cruza" className="sec sec-white pd-rec cr-ancora" aria-labelledby="pd-h-cruza">
        <div className="g16 pd-rec-grid">
          <div className="pd-rec-head">
            <Reveal as="span" className="lbl" y={16}>{`01 · ${p.nome}`}</Reveal>
            <SplitHeading id="pd-h-cruza" as="h2" className="t-xl pl-h2" text={M.cruza} by="line" />
            {c.cruzaIntro && <Reveal as="p" className="p-m">{c.cruzaIntro}</Reveal>}
          </div>
          <div className="pd-rec-col">
            {c.texto && c.texto.length > 0 && (
              <div className="pd-rec-prosa">
                {c.texto.map((t, i) => (
                  <Reveal key={i} as="p" className="p-m"><TextoRico t={t} /></Reveal>
                ))}
              </div>
            )}
            <Reveal as="ol" className="pd-rec-list" stagger={0.07} y={24}>
              {cruza.map((it, i) => (
                <li key={i}>
                  <span className="pd-rec-n" aria-hidden="true">{n2(i)}</span>
                  <span className="pd-rec-t"><TextoRico t={it} /></span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 · O que entrega (cartões numerados .pd-steps-list em Papel) */}
      <section id="entrega" className="sec sec-paper cl-src cr-ancora" aria-labelledby="pd-h-entrega">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{`02 · ${p.nome}`}</Reveal>
            <SplitHeading id="pd-h-entrega" as="h2" className="t-xl pl-h2" text={M.entrega} by="line" />
          </div>
          <Reveal as="ol" className="pd-steps-list tc-steps" stagger={0.1} y={28}>
            {entrega.map((it, i) => (
              <li key={i}>
                <span className="pd-step-n" aria-hidden="true">{n2(i)}</span>
                <p><TextoRico t={it} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 3 · O que não faz: seção escura (.sb-tec .mc-lim, sempre visível) */}
      <section id="nao-faz" className="sb-tec mc-lim cr-ancora" data-header="dark" aria-labelledby="pd-h-naofaz">
        <div className="g16 sb-tec-in">
          <div className="sb-tec-head">
            <Reveal as="span" className="lbl" y={16}>{`03 · ${p.nome}`}</Reveal>
            <SplitHeading id="pd-h-naofaz" as="h2" className="t-xl pl-h2" text={M.naoFaz} by="line" />
          </div>
          <Reveal as="ol" className="mc-lim-list" stagger={0.08} y={24}>
            {naoFaz.map((it, i) => (
              <li key={i}>
                <span className="sb-tec-n" aria-hidden="true">{n2(i)}</span>
                <p><TextoRico t={it} /></p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 4 · Exemplos do produto */}
      <section id="exemplos" className="sec sec-paper cr-ancora" aria-labelledby="pd-h-exemplos">
        <div className="g16 cl-src-grid">
          <div className="cl-src-head">
            <Reveal as="span" className="lbl" y={16}>{`04 · ${p.nome}`}</Reveal>
            <SplitHeading id="pd-h-exemplos" as="h2" className="t-xl pl-h2" text={M.exemplos} by="line" />
            <Reveal><Link className="lnk" href="/exemplos/">{M.todosExemplos}<span aria-hidden="true">→</span></Link></Reveal>
          </div>
          {exs.length > 0 ? <ExemploLista itens={exs} /> : <p className="cl-src-head p-m">{c.semExemplos ?? M.aDefinir}</p>}
          {tabelasExemplo.filter((t) => t.produto === p.slug).map((t) => <ExemploTabela key={t.produto} t={t} />)}
        </div>
      </section>

      {/* 5 · Norma relacionada: só qual norma trata do assunto (nunca "cumpre", "atende", "em conformidade") */}
      {!semNorma && (
        <section id="norma" className="sec sec-white cr-ancora" aria-labelledby="pd-h-norma">
          <div className="g16 cl-src-grid">
            <div className="cl-src-head">
              <Reveal as="span" className="lbl" y={16}>{`05 · ${p.nome}`}</Reveal>
              <SplitHeading id="pd-h-norma" as="h2" className="t-xl pl-h2" text={linhasNorma.length > 1 ? M.normas : M.norma} by="line" />
            </div>
            {linhasNorma.length > 0 ? <NormasTabela linhas={linhasNorma} comFonte /> : <p className="cl-src-head p-m">{M.aDefinir}</p>}
            {c.normaNota && <Reveal className="cl-src-head"><p className="p-m"><TextoRico t={c.normaNota} /></p></Reveal>}
            {c.normaOperacao && <Reveal className="cl-src-head"><p className="p-m">{c.normaOperacao}</p></Reveal>}
          </div>
        </section>
      )}

      {/* 6 · Como começar + navegação rápida para os demais produtos + Ressalva */}
      <section id="como-comecar" className="sec sec-paper cr-ancora">
        <div className="g16 cl-src-grid">
          {etapas && (
            <div className="cl-src-head">
              <Reveal as="span" className="lbl" y={16}>{M.comoComecar}</Reveal>
              <SplitHeading as="h2" className="t-xl pl-h2" text={comoComecar.h2} by="line" />
            </div>
          )}
          {etapas && <Etapas itens={comoComecar.etapas} />}
          <Reveal className="cl-src-head pd-actions">
            <Cta href={cta.href} variant="sq">{cta.label}</Cta>
            {!etapas && <Cta href="/ferramentas/" variant="sq-ghost">Ferramentas gratuitas</Cta>}
          </Reveal>
        </div>
        <nav className="g16 cr-indice-wrap" aria-label="Todos os produtos">
          <div className="cr-indice">
            <span className="cr-indice-t">Produtos</span>
            <ul>
              {todosProdutos.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href} aria-current={item.slug === p.slug ? "page" : undefined}>
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <Ressalva />
      </section>
    </>
  );
}
