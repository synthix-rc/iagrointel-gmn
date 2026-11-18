"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

type Opcao = { valor: string; frase: string };

/**
 * Lacuna da frase do "monte sua mensagem": um botão com o texto escolhido que abre uma lista própria
 * (a lista nativa do <select> não aceita o visual do site).
 * Acessível como listbox: setas, Home/End, Enter/Espaço escolhem, Esc fecha; clique fora fecha.
 */
export default function GapSelect({ rotulo, opcoes, valor, onChange }: { rotulo: string; opcoes: Opcao[]; valor: string; onChange: (v: string) => void }) {
  const id = useId();
  const root = useRef<HTMLSpanElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const sel = Math.max(0, opcoes.findIndex((o) => o.valor === valor));
  const [ativo, setAtivo] = useState(sel);

  useEffect(() => {
    if (!open) return;
    setAtivo(sel);
    list.current?.focus();
    const fora = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", fora);
    return () => document.removeEventListener("pointerdown", fora);
  }, [open, sel]);

  useEffect(() => {
    if (open) list.current?.querySelector<HTMLElement>(`[data-i="${ativo}"]`)?.scrollIntoView({ block: "nearest" });
  }, [ativo, open]);

  const escolher = (i: number) => {
    onChange(opcoes[i].valor);
    setOpen(false);
    btn.current?.focus();
  };

  const teclaLista = (e: KeyboardEvent) => {
    const n = opcoes.length;
    if (e.key === "ArrowDown") { e.preventDefault(); setAtivo((a) => (a + 1) % n); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setAtivo((a) => (a - 1 + n) % n); }
    else if (e.key === "Home") { e.preventDefault(); setAtivo(0); }
    else if (e.key === "End") { e.preventDefault(); setAtivo(n - 1); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); escolher(ativo); }
    else if (e.key === "Escape" || e.key === "Tab") { if (e.key === "Escape") e.preventDefault(); setOpen(false); btn.current?.focus(); }
  };

  const teclaBotao = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); setOpen(true); }
  };

  return (
    <span className={`gsel${open ? " is-open" : ""}`} ref={root}>
      <button
        ref={btn}
        type="button"
        className="gsel-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-l`}
        aria-label={`${rotulo}: ${opcoes[sel].frase}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={teclaBotao}
      >
        {opcoes[sel].frase}
        <span className="gsel-caret" aria-hidden="true" />
      </button>
      {open && (
        <ul
          ref={list}
          id={`${id}-l`}
          className="gsel-list"
          role="listbox"
          tabIndex={-1}
          data-lenis-prevent=""
          aria-label={rotulo}
          aria-activedescendant={`${id}-o${ativo}`}
          onKeyDown={teclaLista}
        >
          <li className="gsel-head" aria-hidden="true">{rotulo}</li>
          {opcoes.map((o, i) => (
            <li
              key={o.valor}
              id={`${id}-o${i}`}
              data-i={i}
              role="option"
              aria-selected={i === sel}
              className={`gsel-opt${i === ativo ? " is-active" : ""}`}
              style={{ "--i": i } as React.CSSProperties}
              onPointerEnter={() => setAtivo(i)}
              onClick={() => escolher(i)}
            >
              <span className="gsel-mark" aria-hidden="true" />
              {o.frase}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
}
