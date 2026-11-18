// ---------------------------------------------------------------------------
// Roda depois de todo build (postbuild, package.json). Confere out/sitemap.xml contra o HTML gerado:
// 1. nenhuma página do sitemap tem noindex;
// 2. toda página indexável (sem noindex) está no sitemap (exceto 404).
// Se falhar, o build falha: lib/rotas.ts e as páginas divergiram (E7, 14/11/2026).
// Indexação desligada (NEXT_PUBLIC_INDEXAR diferente de "true", decisão 39): confere o contrário. Sitemap vazio,
// toda página com noindex e nofollow, robots.txt com "Disallow: /" e sem a linha do sitemap.
// ---------------------------------------------------------------------------
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(raiz, "out");
const mapa = join(out, "sitemap.xml");
if (!existsSync(mapa)) { console.error("verifica-sitemap: out/sitemap.xml não existe"); process.exit(1); }

const indexar = process.env.NEXT_PUBLIC_INDEXAR === "true";
const robotsTxt = existsSync(join(out, "robots.txt")) ? readFileSync(join(out, "robots.txt"), "utf8") : "";
const noSitemap = new Set([...readFileSync(mapa, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname));

const paginas = [];
const listar = (dir) => readdirSync(dir).forEach((n) => {
  const p = join(dir, n);
  if (statSync(p).isDirectory()) { if (n !== "_next") listar(p); }
  else if (n === "index.html") paginas.push(p);
});
listar(out);

const erros = [];
if (!indexar) {
  if (noSitemap.size) erros.push(`indexação desligada, mas o sitemap tem ${noSitemap.size} página(s)`);
  if (!/^Disallow: \/\s*$/m.test(robotsTxt)) erros.push('indexação desligada, mas o robots.txt não tem "Disallow: /"');
  if (/^Sitemap:/mi.test(robotsTxt)) erros.push("indexação desligada, mas o robots.txt aponta o sitemap");
  for (const arq of paginas) {
    // Todas as metas robots da página juntas (a 404 tem a do Next, "noindex", e a nossa; os buscadores somam as duas).
    const meta = [...readFileSync(arq, "utf8").matchAll(/<meta name="robots" content="([^"]*)"/g)].map((m) => m[1]).join(", ");
    if (!/noindex/.test(meta) || !/nofollow/.test(meta)) erros.push(`indexação desligada, mas sem noindex, nofollow: ${relative(out, arq)} (${meta || "sem meta robots"})`);
  }
  if (erros.length) { console.error("\nverifica-sitemap (homologação):\n- " + erros.join("\n- ")); process.exit(1); }
  console.log(`verifica-sitemap: ok (homologação: ${paginas.length} páginas com noindex, nofollow; robots.txt bloqueia tudo; sitemap vazio)`);
  process.exit(0);
}
if (/^Disallow: \/\s*$/m.test(robotsTxt) || !/^Sitemap:/mi.test(robotsTxt)) erros.push("indexação ligada, mas o robots.txt bloqueia tudo ou não aponta o sitemap");
for (const arq of paginas) {
  const rota = "/" + relative(out, dirname(arq)).replaceAll("\\", "/");
  const r = rota === "/" ? "/" : `${rota}/`.replace("//", "/");
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(readFileSync(arq, "utf8"));
  if (noindex && noSitemap.has(r)) erros.push(`no sitemap, mas com noindex: ${r}`);
  if (!noindex && !noSitemap.has(r)) erros.push(`indexável, mas fora do sitemap: ${r}`);
}
for (const r of noSitemap) if (!paginas.some((a) => ("/" + relative(out, dirname(a)).replaceAll("\\", "/") + "/").replace("//", "/") === r)) erros.push(`no sitemap, mas a página não existe: ${r}`);

if (erros.length) {
  console.error("\nverifica-sitemap: sitemap e páginas divergem (ajuste lib/rotas.ts):\n- " + erros.join("\n- "));
  process.exit(1);
}
console.log(`verifica-sitemap: ok (${noSitemap.size} no sitemap, ${paginas.length - noSitemap.size} em rascunho/noindex)`);
