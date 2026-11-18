// ---------------------------------------------------------------------------
// npm run pendencias: lista o que ainda falta no conteúdo do site, em duas partes:
// 1. todo valor marcado com código de pendência (arquivo, valor, código), que aparece com a etiqueta "Pendente";
// 2. todo trecho "A DEFINIR" (texto que nenhuma fonte traz), com a página e o código de docs/PENDENCIAS.md.
//    O código vem do comentário na mesma linha do conteúdo (ex.: `cruza: null, // P3`); sem código: "sem código".
//    Contam como "A DEFINIR": o texto "A DEFINIR" e os blocos de produto vazios (cruza, entrega, naoFaz e
//    norma = null), que a página mostra como "A DEFINIR".
// Com --md (é o que `npm run pendencias` usa), grava docs/PENDENCIAS-site.md com tudo agrupado por página.
// Roda também antes de todo build (prebuild, package.json) com --check: se o site for gerado sem rascunho
// (NEXT_PUBLIC_RASCUNHO=false) e ainda houver pendência ou "A DEFINIR", o build FALHA e mostra a lista.
// Um valor só sai da lista quando o código `pendente` é removido no conteúdo (decisão de 14/11/2026).
// Códigos aceitos: content/valor.ts › codigosPendente (os abertos de docs/PENDENCIAS.md + FONTES); outro código, no
// valor ou no comentário de um "A DEFINIR", faz o comando falhar.
//
// Como encontra: carrega de verdade cada arquivo de content/ (TypeScript do projeto, sem rodar o Next) e
// percorre tudo o que é exportado. Assim pega também valores montados por funções (ex.: d("...") em exemplos.ts).
// E procura <Pendente codigo="..."> escrito direto em app/ e components/ (não deveria existir: o código fica
// no conteúdo).
// ---------------------------------------------------------------------------
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");
const gerarMd = process.argv.includes("--md");
const semRascunho = process.env.NEXT_PUBLIC_RASCUNHO === "false";
const A_DEFINIR = "A DEFINIR";
// Blocos da página de produto que, vazios (null), aparecem como "A DEFINIR".
const BLOCOS_PRODUTO = new Set(["cruza", "entrega", "naoFaz", "norma"]);
// Constantes de rótulo, não trechos de página.
const IGNORAR = new Set(["modeloProduto.aDefinir"]);

const listar = (dir, ext) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? listar(p, ext) : ext.some((e) => p.endsWith(e)) ? [p] : [];
  });

// 1 · content/: transpila e avalia cada módulo (os imports entre arquivos de content/ são resolvidos aqui).
const cache = new Map();
function carregar(arquivo) {
  if (cache.has(arquivo)) return cache.get(arquivo).exports;
  const fonte = readFileSync(arquivo, "utf8");
  const { outputText } = ts.transpileModule(fonte, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  cache.set(arquivo, mod);
  const req = (id) => {
    if (!id.startsWith(".") && !id.startsWith("@/")) throw new Error(`${relative(raiz, arquivo)}: import fora de content/ (${id})`);
    const base = id.startsWith("@/") ? join(raiz, id.slice(2)) : resolve(dirname(arquivo), id);
    return carregar(base.endsWith(".ts") ? base : `${base}.ts`);
  };
  new Function("require", "module", "exports", outputText)(req, mod, mod.exports);
  return mod.exports;
}

// Página de cada trecho, pelo export de origem (MAPA-site.md v3). Produto: a página do produto.
const { produto } = carregar(join(raiz, "content", "produtos.ts"));
const { rascunhos } = carregar(join(raiz, "content", "rascunhos.ts"));
const { exemplos } = carregar(join(raiz, "content", "exemplos.ts"));
// Códigos aceitos (content/valor.ts › codigosPendente: hoje P32 e FONTES). Código fora da lista = erro, em todo
// modo (inclusive no build de rascunho): é código de pendência encerrada que ficou no conteúdo, ou erro de digitação.
const { codigosPendente } = carregar(join(raiz, "content", "valor.ts"));
const CODIGOS = new Set(codigosPendente);
const PAGINAS = {
  paginaCredito: "/credito-rural/",
  indicadores: "/credito-rural/ e /credito-rural/cooperativas/",
  fontesIndicadores: "/credito-rural/ e /credito-rural/cooperativas/",
  normas: "/credito-rural/, /normas/ e páginas de produto",
  comoComecar: "/credito-rural/, /como-comecar/ e páginas de produto",
  paginaCooperativas: "/credito-rural/cooperativas/",
  paginaComoComecar: "/como-comecar/",
  paginaExportacao: "/exportacao/",
  paginaTecnologia: "/tecnologia/",
  paginaNormas: "/normas/",
  paginaExemplos: "/exemplos/",
  paginaSobre: "/sobre/",
  politicaPt: "/privacidade/",
  politicaEn: "/privacidade/en/",
  inicio: "/",
  empresa: "todas (descrição global e rodapé)",
};
function paginaDe(caminho) {
  const [exp, chave] = caminho.split(/[.[\]]+/);
  if (exp === "conteudoCredito" || exp === "conteudoOutros") return produto(chave).href;
  if (exp === "rascunhos") return rascunhos[chave].rota;
  if (exp === "exemplos") return `/exemplos/ e ${produto(exemplos[Number(chave)].produto).href}`;
  return PAGINAS[exp] ?? `(${exp})`;
}

const achados = [];   // valores com código de pendência
const aDefinir = [];  // trechos "A DEFINIR"
const cursor = new Map();   // valores pendentes: posição da última busca, por arquivo
const cursorAD = new Map(); // "A DEFINIR": idem
const linhaDoIndice = (fonte, i) => fonte.slice(0, i).split("\n").length;
const codigoDaLinha = (fonte, linha) => {
  const texto = fonte.split("\n")[linha - 1] ?? "";
  const m = texto.match(/\/\/.*?\b(P\d+)\b/);
  return m ? m[1] : "sem código";
};

// 1ª passada: quantas vezes cada objeto aparece nos exports do arquivo. Objeto usado mais de uma vez
// (ex.: `const maturidade` comum a vários produtos) é "compartilhado": a linha é a da declaração.
function contarUsos(v, usos, subindo = new Set()) {
  if (!v || typeof v !== "object" || subindo.has(v)) return;
  usos.set(v, (usos.get(v) ?? 0) + 1);
  subindo.add(v);
  for (const filho of Object.values(v)) contarUsos(filho, usos, subindo);
  subindo.delete(v);
}

// Trecho "A DEFINIR" sem código de pendência no próprio valor: acha a linha (a partir do último achado do
// arquivo, os valores são percorridos na ordem do código) e lê o código no comentário dessa linha.
function registrarADefinir(arquivo, fonte, caminho, alvo, rotulo) {
  // Ignora ocorrências dentro de comentário (o trecho da linha antes do alvo tem "//") e em linha de valor que já
  // leva código próprio (`pendente:`, ex.: a `const maturidade` compartilhada), contada na outra lista.
  const emComentario = (j) => {
    const inicio = fonte.lastIndexOf("\n", j) + 1;
    const fim = fonte.indexOf("\n", j);
    return fonte.slice(inicio, j).includes("//") || fonte.slice(inicio, fim < 0 ? undefined : fim).includes("pendente:");
  };
  const buscar = (de) => {
    let j = fonte.indexOf(alvo, de);
    while (j >= 0 && emComentario(j)) j = fonte.indexOf(alvo, j + alvo.length);
    return j;
  };
  let i = buscar(cursorAD.get(arquivo) ?? 0);
  if (i < 0) i = buscar(0);
  if (i >= 0) cursorAD.set(arquivo, i + alvo.length);
  const linha = i >= 0 ? linhaDoIndice(fonte, i) : null;
  aDefinir.push({
    arquivo: relative(raiz, arquivo).replaceAll("\\", "/"), linha, caminho, texto: rotulo,
    codigo: linha ? codigoDaLinha(fonte, linha) : "sem código", pagina: paginaDe(caminho),
  });
}

// 2ª passada. `subindo` = objetos do caminho atual (só evita volta infinita). Um mesmo objeto usado em vários
// lugares aparece uma vez por uso, porque cada uso é uma página.
function percorrer(v, caminho, arquivo, fonte, subindo, usos, linhaDe) {
  if (!v || typeof v !== "object" || subindo.has(v)) return;
  subindo.add(v);
  // Só códigos válidos (content/valor.ts: P + número, ou FONTES). Evita, p. ex., rotulos.pendente = "Pendente".
  const temCodigo = typeof v.pendente === "string" && /^(P\d+|FONTES)$/.test(v.pendente);
  if (temCodigo) {
    const valor = v.valor ?? v.titulo ?? JSON.stringify(v);
    // Linha: procura o valor ENTRE ASPAS (para não cair em comentário).
    // - Objeto de uso único: a partir do último achado no arquivo (os valores são percorridos na ordem do código).
    // - Objeto compartilhado: a 1ª ocorrência do arquivo (a declaração, no topo), sem mexer no cursor; e a
    //   mesma linha em todos os usos.
    const aspas = JSON.stringify(valor);
    const compartilhado = (usos.get(v) ?? 0) > 1;
    let linha = linhaDe.get(v);
    if (linha === undefined) {
      const buscar = (alvo) => {
        let j = compartilhado ? -1 : fonte.indexOf(alvo, cursor.get(arquivo) ?? 0);
        if (j < 0) j = fonte.indexOf(alvo);
        return j;
      };
      // Primeiro `valor: "..."` (não cai em comentário), depois o texto entre aspas (ex.: titulo das etapas).
      let i = buscar(`valor: ${aspas}`);
      if (i < 0) i = buscar(aspas);
      if (i >= 0 && !compartilhado) cursor.set(arquivo, i + aspas.length);
      linha = i >= 0 ? linhaDoIndice(fonte, i) : null; // sem linha = valor montado por função (ex.: d("..."))
      linhaDe.set(v, linha);
    }
    const arq = relative(raiz, arquivo).replaceAll("\\", "/");
    // Valor vazio (ex.: URL do LinkedIn ainda inexistente, P23) aparece como "(vazio)" na lista.
    achados.push({ arquivo: arq, linha, caminho, valor: String(valor) || "(vazio)", codigo: v.pendente, pagina: paginaDe(caminho) });
    // Valor "A DEFINIR" com código (ex.: maturidade, P12): também é um trecho a definir, com o próprio código.
    if (v.valor === A_DEFINIR) aDefinir.push({ arquivo: arq, linha, caminho, texto: A_DEFINIR, codigo: v.pendente, pagina: paginaDe(caminho) });
  } else if (v.valor === A_DEFINIR) {
    // Valor "A DEFINIR" sem código no próprio valor (ex.: data da norma da Perícia Pré-Crédito).
    registrarADefinir(arquivo, fonte, caminho, `"${A_DEFINIR}"`, A_DEFINIR);
  }
  for (const [k, filho] of Object.entries(v)) {
    const sub = Array.isArray(v) ? `${caminho}[${k}]` : `${caminho}.${k}`;
    if (filho === A_DEFINIR && k !== "valor" && !IGNORAR.has(sub)) registrarADefinir(arquivo, fonte, sub, `"${A_DEFINIR}"`, A_DEFINIR);
    else if (filho === null && BLOCOS_PRODUTO.has(k)) registrarADefinir(arquivo, fonte, sub, `${k}: null`, `${A_DEFINIR} (${k})`);
    else percorrer(filho, sub, arquivo, fonte, subindo, usos, linhaDe);
  }
  subindo.delete(v);
}

for (const arquivo of listar(join(raiz, "content"), [".ts"])) {
  const exp = carregar(arquivo);
  const fonte = readFileSync(arquivo, "utf8");
  const usos = new Map();
  for (const v of Object.values(exp)) contarUsos(v, usos);
  const linhaDe = new Map();
  for (const [nome, v] of Object.entries(exp)) {
    if (v === A_DEFINIR) registrarADefinir(arquivo, fonte, nome, `"${A_DEFINIR}"`, A_DEFINIR);
    else percorrer(v, nome, arquivo, fonte, new Set(), usos, linhaDe);
  }
}

// 2 · app/ e components/: código de pendência escrito direto no JSX.
for (const arquivo of listar(join(raiz, "app"), [".tsx", ".ts"]).concat(listar(join(raiz, "components"), [".tsx", ".ts"]))) {
  const fonte = readFileSync(arquivo, "utf8");
  for (const m of fonte.matchAll(/codigo=["']([^"']+)["']/g)) {
    achados.push({ arquivo: relative(raiz, arquivo).replaceAll("\\", "/"), linha: linhaDoIndice(fonte, m.index), caminho: "(JSX)", valor: "(direto no componente)", codigo: m[1], pagina: "(componente)" });
  }
}

// Códigos fora da lista aceita (no valor marcado ou no comentário de um "A DEFINIR", inclusive "sem código"):
// o comando e o build falham sempre.
const invalidos = [...achados, ...aDefinir.map((a) => ({ ...a, valor: `${a.texto} (${a.pagina})` }))].filter((a) => !CODIGOS.has(a.codigo));
if (invalidos.length) {
  console.error(`\npendencias: código fora de content/valor.ts › codigosPendente (${[...CODIGOS].join(", ")}):`);
  console.error(invalidos.map((a) => `- ${a.arquivo}${a.linha ? `:${a.linha}` : ""}\t${a.codigo}\t${a.valor}`).join("\n"));
  process.exit(1);
}

// Saída
const contar = (lista) => {
  const por = lista.reduce((acc, a) => ((acc[a.codigo] = (acc[a.codigo] ?? 0) + 1), acc), {});
  const ordem = (c) => (c === "FONTES" ? 1e6 : c === "sem código" ? 1e7 : Number(c.slice(1)));
  return Object.entries(por).sort(([a], [b]) => ordem(a) - ordem(b)).map(([c, n]) => `${c}: ${n}`).join(" · ");
};
const onde = (a) => `${a.arquivo}${a.linha ? `:${a.linha}` : ""}`;
const cabecalho = `${achados.length} valores com pendência (${contar(achados)})`;
const cabecalhoAD = `${aDefinir.length} trechos "A DEFINIR" (${contar(aDefinir)})`;
const linhas = achados.map((a) => `${onde(a)}\t${a.codigo}\t${a.valor}\t(${a.caminho})`);
const linhasAD = aDefinir.map((a) => `${onde(a)}\t${a.codigo}\t${a.pagina}\t${a.texto}\t(${a.caminho})`);

if (check && !semRascunho) process.exit(0); // build de rascunho: pendências são esperadas e ficam marcadas na página

if (check) {
  if (achados.length === 0 && aDefinir.length === 0) process.exit(0);
  console.error(`\nBuild bloqueado: NEXT_PUBLIC_RASCUNHO=false, mas ainda há ${cabecalho} e ${cabecalhoAD}.`);
  console.error("Confira cada valor, remova o código `pendente` e substitua cada \"A DEFINIR\" antes de publicar.\n");
  console.error(["arquivo\tcódigo\tvalor\t(onde)", ...linhas].join("\n"));
  console.error(["\narquivo\tcódigo\tpágina\ttrecho\t(onde)", ...linhasAD].join("\n"));
  process.exit(1);
}

console.log(cabecalho + "\n");
console.log(["arquivo\tcódigo\tvalor\t(onde)", ...linhas].join("\n"));
console.log("\n" + cabecalhoAD + "\n");
console.log(["arquivo\tcódigo\tpágina\ttrecho\t(onde)", ...linhasAD].join("\n"));

// docs/PENDENCIAS-site.md: as duas listas agrupadas por página.
if (gerarMd) {
  const md = (t) => String(t).replaceAll("|", "\\|");
  const porPagina = new Map();
  const juntar = (pagina, linha) => porPagina.set(pagina, [...(porPagina.get(pagina) ?? []), linha]);
  for (const a of aDefinir) juntar(a.pagina, `| A DEFINIR | ${a.codigo} | ${md(a.texto)} | \`${onde(a)}\` |`);
  for (const a of achados) juntar(a.pagina, `| Valor pendente | ${a.codigo} | ${md(a.valor)} | \`${onde(a)}\` |`);
  const ordemPagina = (p) => (p.startsWith("/") ? p : `~${p}`);
  const secoes = [...porPagina.entries()]
    .sort(([a], [b]) => ordemPagina(a).localeCompare(ordemPagina(b), "pt-BR"))
    .map(([pagina, ls]) => `## ${pagina}\n\n| Tipo | Código | Trecho | Onde |\n|---|---|---|---|\n${ls.join("\n")}`);
  const texto = [
    "# Pendências no site, por página",
    "",
    "Gerado por `npm run pendencias` (scripts/pendencias.mjs). Não edite à mão: rode o comando de novo.",
    "Códigos: docs/PENDENCIAS.md. \"A DEFINIR\" = texto que nenhuma fonte traz; \"Valor pendente\" = número ou data",
    "que aparece no site com a etiqueta Pendente. Trecho usado em várias páginas aparece na página indicada.",
    "",
    `- ${cabecalho}`,
    `- ${cabecalhoAD}`,
    "",
    ...secoes.flatMap((s) => [s, ""]),
  ].join("\n");
  writeFileSync(join(raiz, "docs", "PENDENCIAS-site.md"), texto, "utf8");
  console.log("\ndocs/PENDENCIAS-site.md atualizado.");
}
