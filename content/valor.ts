// ---------------------------------------------------------------------------
// Valor que pode estar pendente de conferência (E2, 14/11/2026).
// Todo número e toda data ainda não conferidos entram com o código da pendência (docs/PENDENCIAS.md, códigos com *).
// O componente <Pendente> mostra o código ao lado do valor.
//
// Códigos aceitos (14/11/2026, segunda rodada da camada 2): os códigos ABERTOS de docs/PENDENCIAS.md v1.2, mais
// FONTES (docs/FONTES-regulatorias.md, normas e datas). P12, P13, P18 e P19 foram encerradas e saíram do site.
// Pendência aberta ou encerrada: atualize esta lista junto com o PENDENCIAS.md. scripts/pendencias.mjs lê esta lista
// e falha com código fora dela (no valor marcado e no comentário de um "A DEFINIR").
// ---------------------------------------------------------------------------

export const codigosPendente = ["P7", "P11", "P15", "P16", "P17", "P20", "P23", "FONTES"] as const; // P10, P14, P32 e P33 encerradas (15/11/2026)
export type CodigoPendente = (typeof codigosPendente)[number];

export type Valor = { valor: string; pendente?: CodigoPendente };

// Texto com trechos marcados: ["Um CAR, ", { valor: "26", pendente: "P32" }, " fontes públicas..."].
// Usado em títulos e frases que têm um número no meio. O componente <TextoRico> mostra cada Valor com a marca.
export type Rico = (string | Valor)[];
