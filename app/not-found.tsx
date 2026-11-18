import type { Metadata } from "next";
import Cta from "@/components/Cta";
import Abertura from "@/components/Abertura";
import { navCta, pagina404 as P } from "@/content/site";
import { indexarAtivo, robotsHomologacao } from "@/lib/indexacao";

// 404 do export estático (out/404.html): cabeçalho e rodapé do site + a abertura simples (padrões existentes).
export const metadata: Metadata = { title: P.titulo, robots: indexarAtivo ? { index: false, follow: true } : robotsHomologacao };

export default function NaoEncontrada() {
  return (
    <Abertura
      rotulo={P.rotulo}
      titulo={P.titulo}
      acoes={<>
        <Cta href={P.voltar.href} variant="sq" className="lg">{P.voltar.label}</Cta>
        <Cta href={navCta.href} variant="sq-ghost" className="lg">{navCta.label}</Cta>
      </>}
      rascunho={false}
    />
  );
}
