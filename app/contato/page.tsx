import PageStub, { metaStub } from "@/components/PageStub";
import { rascunhos } from "@/content/rascunhos";

// Provisória. Ganha conteúdo na camada 2 (decisão 16; o que falta em docs/PENDENCIAS.md).
const p = rascunhos.contato;
export const metadata = metaStub(p.titulo, p.rota);

export default function Contato() {
  return <PageStub rotulo={p.rotulo} titulo={p.titulo} texto={p.texto} />;
}
