"use client";

// D5 (15/11/2026): nenhuma página usa este componente e o CSS dele saiu de app/base.css / app/padroes.css.
// Para usar, copie antes o bloco de CSS do kit da iAgroSat (referencia/css/) e registre em docs/DESIGN.md.

import { useRef, useState } from "react";
import { ScrollTrigger, useGSAP, MQ, gsap } from "@/components/motion/gsap";

type Item = { titulo: string; texto: string; img?: { src: string; alt: string; w: number; h: number } };

/**
 * Recursos com print (ex.: as quatro abas do plugin QGIS).
 * Desktop com movimento: lista à esquerda e um quadro fixo à direita; o print troca conforme o item que está no meio da tela,
 * e o item ativo acende.
 * Celular, ou sem movimento: cada print aparece logo abaixo do seu texto.
 */
export default function RecursosAbas({ itens }: { itens: Item[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(0);

  useGSAP(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add(`${MQ.motion} and (min-width: 1024px)`, () => {
      el.classList.add("ra-js");
      const lis = gsap.utils.toArray<HTMLElement>(".ra-item", el);
      const sts = lis.map((li, i) =>
        ScrollTrigger.create({ trigger: li, start: "top 55%", end: "bottom 55%", onToggle: (s) => { if (s.isActive) setAtivo(i); } }),
      );
      return () => { sts.forEach((s) => s.kill()); el.classList.remove("ra-js"); };
    });
  }, { scope: root });

  return (
    <div className="ra" ref={root}>
      <ol className="ra-list">
        {itens.map((it, i) => (
          <li key={it.titulo} className={`ra-item${i === ativo ? " is-on" : ""}`}>
            <span className="ra-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div className="ra-body">
              <h3 className="ra-t">{it.titulo}</h3>
              <p className="ra-x">{it.texto}</p>
            </div>
            {it.img && (
              <figure className="ra-inline">
                <img src={it.img.src} alt={it.img.alt} width={it.img.w} height={it.img.h} loading="lazy" />
              </figure>
            )}
          </li>
        ))}
      </ol>
      <div className="ra-stage" aria-hidden="true">
        <div className="ra-frame">
          {itens.map((it, i) => it.img && (
            <img key={it.img.src} className={i === ativo ? "is-on" : ""} src={it.img.src} alt="" width={it.img.w} height={it.img.h} loading="lazy" />
          ))}
          <span className="ra-tag">Aba {itens[ativo].titulo}</span>
        </div>
        <div className="ra-dots">
          {itens.map((it, i) => <i key={it.titulo} className={i === ativo ? "is-on" : ""} />)}
        </div>
      </div>
    </div>
  );
}
