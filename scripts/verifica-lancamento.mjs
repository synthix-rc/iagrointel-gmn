// ---------------------------------------------------------------------------
// Roda antes de todo build (prebuild, package.json). Lançamento = NEXT_PUBLIC_RASCUNHO=false E NEXT_PUBLIC_INDEXAR=true,
// as duas juntas (L1, decisão 39, 15/11/2026). Com só uma delas, o build falha: sem rascunho mas sem indexação é um
// site "pronto" que os buscadores não veem; indexado com rascunho publica páginas marcadas como provisórias.
// ---------------------------------------------------------------------------
const semRascunho = process.env.NEXT_PUBLIC_RASCUNHO === "false";
const indexar = process.env.NEXT_PUBLIC_INDEXAR === "true";

if (semRascunho !== indexar) {
  console.error(
    "\nBuild bloqueado (decisão 39): o lançamento exige as duas chaves juntas.\n" +
    `  NEXT_PUBLIC_RASCUNHO=${process.env.NEXT_PUBLIC_RASCUNHO ?? "(não definida)"} → ${semRascunho ? "sem rascunho" : "com rascunho"}\n` +
    `  NEXT_PUBLIC_INDEXAR=${process.env.NEXT_PUBLIC_INDEXAR ?? "(não definida)"} → ${indexar ? "indexação ligada" : "indexação desligada"}\n` +
    "  Homologação: não defina nenhuma das duas. Lançamento: NEXT_PUBLIC_RASCUNHO=false e NEXT_PUBLIC_INDEXAR=true.\n",
  );
  process.exit(1);
}
console.log(`verifica-lancamento: ok (${indexar ? "lançamento: sem rascunho, indexação ligada" : "homologação: com rascunho, indexação desligada"})`);
