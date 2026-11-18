import { rotulos } from "@/content/site";
import type { LinhaNorma } from "@/content/credito-rural";
import { Fragment } from "react";
import { TextoRico, ValorTexto } from "@/components/Pendente";
import Reveal from "@/components/motion/Reveal";

/**
 * Tabela curta de normas e datas (prefixo nt-, padroes.css). Reaproveita a tabela comparativa .cmp
 * (tipografia, fios, espaçamentos); nt- só ajusta: cabeçalho sem fundo nem fixação, linhas sempre visíveis
 * e, no celular, cada linha vira um bloco com o nome da coluna escrito antes do valor.
 * Dado não conferido em FONTES-regulatorias.md leva o código FONTES (content/valor.ts).
 */

/** Coluna Fonte: links para o texto oficial (rótulo visível = domínio; nome acessível = domínio + norma). */
function Fonte({ f }: { f: LinhaNorma["fonte"] }) {
  if (!Array.isArray(f)) return <ValorTexto v={f} />;
  return (
    <>
      {f.map((l, i) => (
        <Fragment key={l.href}>
          {i > 0 && " · "}
          <a href={l.href} target="_blank" rel="noopener" aria-label={`${l.rotulo}: ${l.descricao}`}>{l.rotulo}</a>
        </Fragment>
      ))}
    </>
  );
}
/** comFonte: acrescenta a coluna "Fonte" (página /normas/). */
export default function NormasTabela({ linhas, comFonte = false }: { linhas: LinhaNorma[]; comFonte?: boolean }) {
  const [cNorma, cMuda, cData] = rotulos.normasCabecalho;
  const cFonte = rotulos.fonte;
  return (
    // As linhas entram uma depois da outra (Reveal targets, como a tabela .cmp da iAgroSat; M6, D4).
    <Reveal className="nt-wrap" targets="tbody tr" stagger={0.06} y={20}>
      <table className="cmp nt">
        <thead>
          <tr>
            <th scope="col" className="nt-c-norma">{cNorma}</th>
            <th scope="col">{cMuda}</th>
            <th scope="col" className="nt-c-data">{cData}</th>
            {comFonte && <th scope="col" className="nt-c-fonte">{cFonte}</th>}
          </tr>
        </thead>
        <tbody>
          {linhas.map((l) => (
            <tr key={l.id}>
              <th scope="row" data-col={cNorma}><ValorTexto v={l.norma} /></th>
              <td data-col={cMuda}><TextoRico t={l.muda} /></td>
              <td data-col={cData} className="nt-data">
                {Array.isArray(l.data)
                  ? l.data.map((d, i) => <Fragment key={i}>{i > 0 && <br />}<ValorTexto v={d} /></Fragment>)
                  : <ValorTexto v={l.data} />}
              </td>
              {comFonte && <td data-col={cFonte}><Fonte f={l.fonte} /></td>}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
