import Link from "next/link";
import { nav, navCta, navPlataforma, submenu, empresa } from "@/content/site";
import { produtosCredito } from "@/content/produtos";
import HeaderShell from "@/components/motion/HeaderShell";
import Magnetic from "@/components/motion/Magnetic";

const isExternal = (href: string) => href.startsWith("http");
const n2 = (i: number) => String(i + 1).padStart(2, "0");
const slugsProdutos = new Set(produtosCredito.map((p) => p.href));

/** "Acessar plataforma ↗": link de texto na mesma aba (MAPA-site.md › Cabeçalho). A seta só existe aqui. */
function LinkPlataforma({ className }: { className?: string }) {
  return (
    <a className={className} href={navPlataforma.href} aria-label={navPlataforma.ariaLabel}>
      {navPlataforma.label} <span aria-hidden="true">{navPlataforma.seta}</span>
    </a>
  );
}

function NavLink({ href, label, className, children }: { href: string; label: string; className?: string; children?: React.ReactNode }) {
  return isExternal(href)
    ? <a className={className} href={href} target="_blank" rel="noopener">{children ?? label}</a>
    : <Link className={className} href={href}>{children ?? label}</Link>;
}

/**
 * Cabeçalho:
 * - No desktop (>= 992 px): menu principal com submenu suspenso (dropdown no hover e foco) em Crédito rural;
 *   ao rolar a página (.is-compact), recolhe-se em uma barra flutuante centralizada mantendo todos os links e o
 *   dropdown acessíveis, sem botão sanduíche.
 * - Abaixo de 992 px (celular e tablet): símbolo/logo + botão sanduíche que abre o painel em tela cheia (.hdr-panel).
 */
export default function Header() {
  const panel = (
    <div className="hdr-panel-in">
      <nav aria-label="Menu completo" className="hdr-panel-nav">
        <ul className="hdr-panel-list">
          {nav.map((i, k) => (
            <li key={i.href + i.label} style={{ "--i": k } as React.CSSProperties}>
              <NavLink href={i.href} label={i.label} />
              {submenu[i.href] && (
                <ul className="hdr-panel-subnav">
                  {submenu[i.href].map((s) => <li key={s.href}><NavLink href={s.href} label={s.label} /></li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Depois do menu: Acessar plataforma ↗ e Como começar (MAPA-site.md › Painel do menu). */}
        <ul className="hdr-panel-sub">
          <li style={{ "--i": nav.length } as React.CSSProperties}><LinkPlataforma /></li>
          <li style={{ "--i": nav.length + 1 } as React.CSSProperties}><NavLink href={navCta.href} label={navCta.label} /></li>
        </ul>
      </nav>
      <div className="hdr-panel-meta">
        <span>{empresa.email}</span>
      </div>
    </div>
  );

  return (
    <HeaderShell panel={panel}>
      <Link href="/" className="hdr-logo" aria-label={`${empresa.nome}, página inicial`}>
        <img className="lg lg-full lg-cor" src="/brand/iagrointel-horizontal-cor.svg" alt="" width={185} height={43} />
        <img className="lg lg-full lg-neg" src="/brand/iagrointel-horizontal-negativo.svg" alt="" width={185} height={43} />
        <img className="lg lg-sym lg-cor" src="/brand/iagrointel-simbolo-cor.svg" alt="" width={35} height={35} />
        <img className="lg lg-sym lg-neg" src="/brand/iagrointel-simbolo-negativo.svg" alt="" width={35} height={35} />
      </Link>
      <nav className="hdr-nav" aria-label="Principal">
        {nav.map((i) => {
          const sub = submenu[i.href];
          if (!sub) return <NavLink key={i.label} href={i.href} label={i.label} className="hdr-link" />;
          const principais = sub.filter((s) => slugsProdutos.has(s.href));
          const extras = sub.filter((s) => !slugsProdutos.has(s.href));
          return (
            <div key={i.label} className="hdr-item has-sub">
              <NavLink href={i.href} label={i.label} className="hdr-link hdr-sub-trig">
                {i.label}
                <span className="hdr-chev" aria-hidden="true" />
              </NavLink>
              <div className="hdr-drop">
                <div className="hdr-drop-in">
                  <ul className="hdr-drop-list">
                    {principais.map((s, idx) => (
                      <li key={s.href}>
                        <NavLink href={s.href} label={s.label} className="hdr-drop-link">
                          <span className="hdr-drop-n" aria-hidden="true">{n2(idx)}</span>
                          <span className="hdr-drop-t">{s.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  {extras.length > 0 && (
                    <div className="hdr-drop-foot">
                      {extras.map((s) => (
                        <NavLink key={s.href} href={s.href} label={s.label} className="hdr-drop-extra">
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* À direita, antes do botão. No celular, vai para o painel. */}
        <LinkPlataforma className="hdr-link" />
      </nav>
      <Magnetic>
        <a className="hdr-cta btn-sq btn-roll" href={navCta.href}>
          <span data-t={navCta.label}>{navCta.label}</span>
        </a>
      </Magnetic>
    </HeaderShell>
  );
}
