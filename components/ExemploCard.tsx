import { rotulos } from "@/content/site";
import type { Exemplo, TabelaExemplo } from "@/content/exemplos";
import { ValorTexto } from "@/components/Pendente";
import { produto } from "@/content/produtos";
import Reveal from "@/components/motion/Reveal";

/**
 * Card de laudo de exemplo (prefixo ex-, padroes.css).
 * Selo "Exemplo" sempre visível (quadradinho + texto, nunca só cor), produto, caso e detalhe (páginas, área).
 * Link para o arquivo (public/exemplos/) quando houver: PDFs abrem em nova aba (_blank), sem seta. "Ver PDF" ou "Ver planilha".
 */
export default function ExemploCard({ e }: { e: Exemplo }) {
  const isPdf = Boolean(e.arquivo?.endsWith(".pdf"));
  const rotuloLink = isPdf ? rotulos.verPdf : rotulos.verPlanilha;
  return (
    <article className="ex">
      <div className="ex-top">
        <span className="ex-selo">{rotulos.exemplo}</span>
        <span className="ex-produto">{produto(e.produto).nome}</span>
      </div>
      <h3 className="ex-caso"><ValorTexto v={e.caso} /></h3>
      {(e.detalhe || e.arquivo) && (
        <div className="ex-pe">
          {e.detalhe && <span className="ex-pag"><ValorTexto v={e.detalhe} /></span>}
          {e.arquivo && (
            <a
              className="lnk"
              href={e.arquivo}
              aria-label={`${rotuloLink}: ${e.caso.valor}`}
              {...(isPdf ? { target: "_blank", rel: "noopener" } : {})}
            >
              {rotuloLink}
            </a>
          )}
        </div>
      )}
    </article>
  );
}

/**
 * Tabela de exemplo (ex. a contagem RSA1 da Base Territorial GRSAC): o mesmo card .ex, na largura toda (ex-tabela),
 * com o selo "Exemplo" e a tabela de duas colunas sobre .cmp/.nt (mesma tabela das normas). Filha direta de .g16.
 * Entra como bloco (Reveal), com as linhas já visíveis dentro do card (M6, D4).
 */
export function ExemploTabela({ t }: { t: TabelaExemplo }) {
  return (
    <Reveal as="article" className="ex ex-tabela">
      <div className="ex-top">
        <span className="ex-selo">{rotulos.exemplo}</span>
        <span className="ex-produto">{produto(t.produto).nome}</span>
      </div>
      <table className="cmp nt">
        <thead><tr><th scope="col">{t.cabecalho[0]}</th><th scope="col">{t.cabecalho[1]}</th></tr></thead>
        <tbody>
          {t.linhas.map(([rotulo, v]) => (
            <tr key={rotulo}>
              <th scope="row" data-col={t.cabecalho[0]}>{rotulo}</th>
              <td data-col={t.cabecalho[1]} className="nt-data"><ValorTexto v={v} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}

/** Grade de cards de exemplo (3 colunas no desktop, 1 no celular). Filha direta de .g16. Os cards entram um depois do outro (M6, D4). */
export function ExemploLista({ itens }: { itens: Exemplo[] }) {
  return (
    <Reveal className="ex-lista" stagger={0.08} y={24}>
      {itens.map((e) => <ExemploCard key={`${e.produto}-${e.caso.valor}`} e={e} />)}
    </Reveal>
  );
}
