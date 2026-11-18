import Link from "next/link";
import Magnetic from "@/components/motion/Magnetic";

type Props = {
  href: string;
  children: string;
  /** primary/ghost/light: botões arredondados das páginas internas. sq*: botões retos da home e do rodapé. */
  variant?: "primary" | "ghost" | "light" | "sq" | "sq-ghost" | "sq-ghost-light" | "sq-light" | "sq-paper";
  external?: boolean;
  /** Link externo que abre na mesma aba (ex.: download direto de arquivo). */
  sameTab?: boolean;
  className?: string;
};

/**
 * Botão de chamada com microinteração:
 * - puxado de leve pelo ponteiro (Magnetic, só em mouse);
 * - no hover, o texto rola para cima e uma cópia entra por baixo (CSS, .btn-roll).
 */
export default function Cta({ href, children, variant = "primary", external, sameTab, className }: Props) {
  const base = variant.startsWith("sq") ? `btn-sq ${variant === "sq" ? "" : variant}` : `btn btn-${variant}`;
  const cls = [base, "btn-roll", className].filter(Boolean).join(" ");
  const inner = <span data-t={children}>{children}</span>;
  const ext = external ?? href.startsWith("http");
  return (
    <Magnetic>
      {sameTab ? (
        <a className={cls} href={href}>{inner}</a>
      ) : ext ? (
        <a className={cls} href={href} target="_blank" rel="noopener">{inner}</a>
      ) : (
        <Link className={cls} href={href}>{inner}</Link>
      )}
    </Magnetic>
  );
}
