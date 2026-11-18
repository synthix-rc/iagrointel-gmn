// ---------------------------------------------------------------------------
// Páginas provisórias (14/11/2026).
// Mantêm cada rota do mapa viva até a etapa que preenche a página. Títulos = nomes das páginas no
// docs/MAPA-site.md (coluna "Página"); rótulo = a área do menu a que a página pertence.
// Cada entrada sai daqui quando a página ganha conteúdo próprio (camada 2, decisão 16).
// Saíram na segunda rodada (14/11/2026): Verificar laudo (fora do site, decisão 23), Sobre (content/sobre.ts) e
// Privacidade (content/privacidade.ts).
// ---------------------------------------------------------------------------

// texto: o corpo da página enquanto nenhuma fonte o traz ("A DEFINIR"), com o código de PENDENCIAS.md no comentário.
export type Rascunho = { rotulo: string; titulo: string; rota: string; texto: string };

// Aviso da faixa de rascunho (aprovado em 14/11/2026).
export const avisoRascunho = "Rascunho provisório · página ainda sem conteúdo aprovado";

export const rascunhos = {
  contato: { rotulo: "iAgroIntel", titulo: "Contato", rota: "/contato/", texto: "A DEFINIR" }, // P20
  termos: { rotulo: "iAgroIntel", titulo: "Termos", rota: "/termos/", texto: "A DEFINIR" }, // P16
} satisfies Record<string, Rascunho>;
