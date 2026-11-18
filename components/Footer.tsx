import Link from "next/link";
import { empresa, rodape } from "@/content/site";
import Cta from "@/components/Cta";
import Reveal from "@/components/motion/Reveal";

const IconeLinkedin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) =>
  href.startsWith("http") ? <a href={href}>{children}</a> : <Link href={href}>{children}</Link>;

/**
 * Rodapé (mesma estrutura do site da iAgroSat): caixa escura com a chamada final + 4 colunas de links (.ftr-cols) +
 * contato (.ftr-contact) + links legais (.ftr-legal).
 */
export default function Footer() {
  const linkedin = empresa.linkedin.pendente ? "" : empresa.linkedin.valor;
  return (
    <footer className="ftr">
      <div className="ftr-band">
        <div className="g16 ftr-grid">
          <Reveal className="ftr-box">
            <img className="ftr-endosso" src="/brand/iagrointel-endosso-horizontal-negativo.svg" alt={rodape.endossoAlt} width={429} height={156} />
            <p className="ftr-box-title">{rodape.final.titulo}</p>
            <p className="ftr-box-text">{rodape.final.texto}</p>
            <div className="ftr-box-ctas">
              <Cta href={rodape.final.cta.href} variant="sq">{rodape.final.cta.label}</Cta>
            </div>
            <a className="ftr-box-link" href={empresa.maeUrl} target="_blank" rel="noopener">{rodape.produtor}</a>
          </Reveal>

          <div className="ftr-main">
            <nav className="ftr-cols" aria-label={rodape.linksRotulo}>
              {rodape.colunas.map((c) => (
                <div key={c.titulo}>
                  <span className="ftr-col-title">{c.titulo}</span>
                  <ul>
                    {c.links.map((l) => (
                      <li key={l.label}><A href={l.href}>{l.label}</A></li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="ftr-contact">
              <div>
                <span className="ftr-label">{rodape.emailRotulo}</span>
                <a className="ftr-big" href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </div>
              {linkedin ? (
                <a className="ftr-social" href={linkedin} target="_blank" rel="noopener" aria-label={rodape.linkedinRotulo}>
                  <IconeLinkedin />
                </a>
              ) : (
                <span className="ftr-social" role="img" aria-label={rodape.linkedinEmBreve}>
                  <IconeLinkedin />
                </span>
              )}
            </div>
            <div className="ftr-legal">
              {rodape.legal.map((l) => <A key={l.label} href={l.href}>{l.label}</A>)}
            </div>
          </div>
        </div>
      </div>
      <div className="ftr-bar">
        <div className="g16">
          <span>© 2026 {empresa.razaoSocial} · CNPJ {empresa.cnpj}</span>
        </div>
      </div>
    </footer>
  );
}
