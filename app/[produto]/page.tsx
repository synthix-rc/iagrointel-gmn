import { descricaoDe, metaPagina } from "@/lib/meta";
import { notFound } from "next/navigation";
import ProdutoPage from "@/components/ProdutoPage";
import { todosProdutos, produtosCredito, triagemEudr, areaCredito, areaExportacao } from "@/content/produtos";
import { conteudoCredito } from "@/content/produtos-credito";
import { conteudoOutros } from "@/content/produtos-outros";

// Os 7 produtos em rotas diretas de primeiro nível (/<slug>/): 6 produtos de Crédito rural + Triagem EUDR.
export const dynamicParams = false;
export function generateStaticParams() {
  return todosProdutos.map((p) => ({ produto: p.slug }));
}

type Params = { params: Promise<{ produto: string }> };

export async function generateMetadata({ params }: Params) {
  const slug = (await params).produto;
  const p = todosProdutos.find((x) => x.slug === slug);
  if (!p) return {};
  const c = conteudoCredito[slug] ?? conteudoOutros[slug];
  return metaPagina({ titulo: p.nome, rota: p.href, descricao: descricaoDe(c?.evidencia, ...(c?.texto ?? [])) });
}

export default async function ProdutoRota({ params }: Params) {
  const slug = (await params).produto;
  const isEudr = slug === triagemEudr.slug;
  const idx = isEudr ? 0 : produtosCredito.findIndex((p) => p.slug === slug);
  if (!isEudr && idx < 0) notFound();
  const p = isEudr ? triagemEudr : produtosCredito[idx];
  const c = conteudoCredito[slug] ?? conteudoOutros[slug];
  if (!c) throw new Error(`Falta o conteúdo de "${slug}"`);
  return (
    <ProdutoPage
      p={p}
      c={c}
      idx={idx}
      area={isEudr ? areaExportacao : areaCredito}
      rascunho={false}
      etapas={!isEudr}
    />
  );
}
