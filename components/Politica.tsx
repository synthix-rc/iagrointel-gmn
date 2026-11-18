import { Fragment } from "react";
import Reveal from "@/components/motion/Reveal";
import Abertura from "@/components/Abertura";
import { rascunhoAtivo } from "@/components/Rascunho";
import type { Politica as TPolitica, TrechoPolitica } from "@/content/privacidade";

/** Um trecho da minuta: texto, negrito ([CONFIRMAR] Cxx), link (fonte legal, mesma aba, sem seta) ou código. */
function Trechos({ t }: { t: TrechoPolitica[] }) {
  return (
    <>
      {t.map((s, i) => {
        if (typeof s === "string") return <Fragment key={i}>{s}</Fragment>;
        if ("b" in s) return <strong key={i}>{s.b}</strong>;
        if ("a" in s) return <a key={i} href={s.href}>{s.a}</a>;
        return <code key={i}>{s.code}</code>;
      })}
    </>
  );
}

/** Link para a mesma política na outra língua. */
function OutraLingua({ p }: { p: TPolitica }) {
  const o = p.outraLingua;
  return <a className="lnk" href={o.href} hrefLang={o.hrefLang} lang={o.hrefLang}>{o.label}</a>;
}

/**
 * Política de privacidade (P15): minuta do cliente, literal, de content/privacidade.ts. Usada em /privacidade/ e
 * /privacidade/en/. A versão em inglês leva lang="en" no conteúdo (o resto do site é pt-BR).
 * Abertura (faixa de rascunho): avisos de minuta como rótulo, título, link para a outra língua.
 * Corpo: uma seção branca; o parágrafo de abertura e um bloco cl-src-head por seção da política (H2 t-m +
 * parágrafos p-m + tabela .cmp.nt, a mesma das normas, que vira blocos no celular). Sem CSS novo.
 */
export default function Politica({ p }: { p: TPolitica }) {
  return (
    <div lang={p.lang}>
      <Abertura rotulo={p.avisos.join(" · ")} titulo={p.titulo} acoes={<OutraLingua p={p} />} rascunho={rascunhoAtivo} />
      <section className="sec sec-white">
        <div className="g16 cl-src-grid">
          <Reveal className="cl-src-head">
            {p.intro.map((t, i) => <p key={i} className="p-m"><Trechos t={t} /></p>)}
          </Reveal>
          {p.secoes.map((s) => (
            <Reveal key={s.titulo} className="cl-src-head">
              <h2 className="t-m">{s.titulo}</h2>
              {s.blocos.map((b, i) =>
                "p" in b ? (
                  <p key={i} className="p-m"><Trechos t={b.p} /></p>
                ) : (
                  <div key={i}>{/* sem .nt-wrap: ele posiciona na grade g16, e cl-src-head já é uma grade */}
                    <table className="cmp nt">
                      <thead><tr>{b.tabela.cabecalho.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                      <tbody>
                        {b.tabela.linhas.map((l) => (
                          <tr key={l[0]}>
                            <th scope="row" data-col={b.tabela.cabecalho[0]}>{l[0]}</th>
                            {l.slice(1).map((c, k) => <td key={k} data-col={b.tabela.cabecalho[k + 1]}>{c}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              )}
            </Reveal>
          ))}
          <Reveal className="cl-src-head"><p><OutraLingua p={p} /></p></Reveal>
        </div>
      </section>
    </div>
  );
}
