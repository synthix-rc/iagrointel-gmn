import type { Metadata } from "next";
import localFont from "next/font/local";
// Ordem importa: tokens (cores e fontes) → base (fundação) → padroes (biblioteca de padrões de página).
import "./tokens.css";
import "./base.css";
import "./padroes.css";
import "./camada-pericial.css";
import "./tecnologia.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import PageTransition from "@/components/motion/PageTransition";
import { empresa } from "@/content/site";
import { imagemOg } from "@/lib/meta";
import { indexarAtivo, robotsHomologacao } from "@/lib/indexacao";

const manrope = localFont({ src: "./fonts/manrope.woff2", variable: "--font-manrope", weight: "200 800", display: "swap" });
// Sem pré-carregamento (D5, 15/11/2026): a mono não está no LCP e disputava banda com o CSS e a Manrope no começo da carga.
const mono = localFont({ src: "./fonts/jetbrainsmono.woff2", variable: "--font-mono", weight: "100 800", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(empresa.url),
  // Indexação desligada (homologação, decisão 39): a home e toda página sem robots próprio herdam noindex, nofollow.
  ...(indexarAtivo ? {} : { robots: robotsHomologacao }),
  title: { default: empresa.nome, template: `%s · ${empresa.nome}` },
  description: empresa.descricao.valor,
  alternates: { canonical: "/" },
  // Ícones (P24 encerrada, decisão 35): favicon.svg oficial e os PNG gerados dele sem mudar o desenho
  // (public/brand/: 32, 180, 192 e 512 px). O manifest lista os de 192 e 512 px.
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/icone-192.png", type: "image/png", sizes: "192x192" },
      { url: "/brand/icone-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/brand/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.webmanifest",
  openGraph: { type: "website", locale: "pt_BR", siteName: empresa.nome, title: empresa.nome, description: empresa.descricao.valor, url: "/", images: [imagemOg] },
};

// Dados estruturados (JSON-LD) da organização, com a marca mãe. Tudo de content/site.ts.
const organizacao = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: empresa.nome,
  legalName: empresa.razaoSocial,
  taxID: empresa.cnpj,
  url: empresa.url,
  logo: new URL(empresa.logo, empresa.url).toString(),
  email: empresa.email,
  parentOrganization: { "@type": "Organization", name: empresa.maeNome, url: empresa.maeUrl },
  ...(empresa.linkedin.valor && !empresa.linkedin.pendente ? { sameAs: [empresa.linkedin.valor] } : {}),
};
// "<" escapado: o JSON vai dentro de <script>.
const organizacaoJson = JSON.stringify(organizacao).replace(/</g, "\\u003c");

// Roda antes da primeira pintura: marca <html class="mo"> quando o usuário aceita movimento,
// para o CSS esconder o que vai entrar animado (sem piscar). Se o JS de movimento não chegar
// em 3,5 s, tira a marca e mostra tudo. (Igual ao site da iAgroSat; não remova.)
const motionBoot = `(function(){try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('mo');setTimeout(function(){if(!window.__moReady)d.classList.remove('mo')},3500)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organizacaoJson }} />
      </head>
      <body>
        <a className="skip" href="#conteudo">Pular para o conteúdo</a>
        <SmoothScroll>
          <Header />
          <main id="conteudo" tabIndex={-1}>{children}</main>
          <Footer />
          <PageTransition />
        </SmoothScroll>
      </body>
    </html>
  );
}
