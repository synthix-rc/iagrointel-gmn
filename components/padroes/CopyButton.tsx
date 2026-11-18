"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useState } from "react";

/** Botão "Copiar" com confirmação ("Copiado"). Some se o navegador não tiver a API de área de transferência. */
export default function CopyButton({ texto, className }: { texto: string; className?: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      className={["cp-btn", ok ? "is-ok" : "", className].filter(Boolean).join(" ")}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texto);
          setOk(true);
          window.setTimeout(() => setOk(false), 1800);
        } catch { /* sem permissão: o texto continua selecionável no cartão */ }
      }}
      aria-label={`Copiar ${texto}`}
    >
      <span aria-hidden="true">{ok ? "Copiado" : "Copiar"}</span>
    </button>
  );
}
