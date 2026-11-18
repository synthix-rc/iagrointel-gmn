# Plano de implementação — site iagrointel.com, mapa v2

Atualizado: 2026-11-13 · Base: repositório `synthix-rc/iagrointel`, commit `5e81985` ("Site da iAgroIntel: base herdada da iAgroSat e home"), comparado com MAPA-site.md v2, PREVIA-cooperativas.md, NOMENCLATURA-produtos.md e PENDENCIAS.md. **Nada foi alterado no repositório.**

## 0. Estado atual (fatos conferidos)

| Item | Situação |
|---|---|
| Páginas | Só existe `/` (home). **Nenhuma das rotas do mapa v1 foi criada.** Menu e rodapé apontam para 13 endereços que hoje dão 404. |
| Build | `npm ci` + `npm run build` passam. Saída estática em `out/` (`/`, `/404`). |
| Export | `next.config.mjs`: `output: "export"`, `trailingSlash: true`. Redirecionamento do Next não funciona → precisa de `vercel.json`. |
| Lint | **Não existe script `lint` nem ESLint.** O `next build` só confere tipos. |
| Texto | Regra do CLAUDE.md do repositório: todo o texto em `content/site.ts` (161 linhas). O pedido fala em `content/pt/`: ver decisão D2. |
| `docs/` no GitHub | Só `DESIGN.md` e `SISTEMA-visual.md`. MAPA-site, PENDENCIAS, PREVIA, NOMENCLATURA, FONTES e DECISOES **não estão no repositório remoto**. |
| Cabeçalho | `HeaderShell` não tem submenu: os itens são planos (`NavItem = {href, label}`). |
| PageStub | O CSS (`.stub`, `.stub-lbl`, `.stub-title`) existe em `padroes.css`, mas o componente `components/PageStub.tsx` não está no repositório. |
| Padrões reaproveitáveis | `pd-*` (página de produto: abertura, lista de recursos `pd-rec-list`, passos `pd-steps-list` com variante de 4 itens), `cl-hero`, `nums`/`cl-nums`, `cmp` (tabela), `sb-tec-*` (lista escura), `cl-final`. O JSX de referência (`referencia/paginas/`) fica na pasta do kit, fora do repositório. |
| Prefixos livres conferidos | `rs`, `ex`, `ind`, `nt`, `eta`, `mat`, `pend`, `rasc`, `cr` não existem no CSS. |

### Conflitos encontrados no conteúdo atual (home e `site.ts`)

| Onde | Hoje | Regra / documento | Tratamento proposto |
|---|---|---|---|
| `inicio.tagline` | "O papel declara. **O planeta** lembra." | ORQUESTRADOR: usar "terra", nunca "planeta"; tagline em revisão (P03) | Trocar por "A terra lembra." agora; tagline segue P03 |
| `inicio.produtos` | Ordem v1; EUDR entre os seis | Mapa v2: ordem Pré-Crédito → PRODES → Acompanhamento → Carteira → GRSAC; EUDR é outra linha | Reordenar; EUDR em grupo próprio "Exportação" |
| Laudo PRODES | "17 categorias forenses" | "Forense" proibido no nome; 13 × 17 categorias em aberto (P01) | Texto da prévia (Laudo PRODES) + PENDENTE |
| Perícia Pré-Crédito | "Veredito CONFORME / … / NÃO CONFORME" | Prévia: "não decide crédito"; ressalva de triagem | Texto da prévia |
| Perícia de Carteira, Base GRSAC | "A DEFINIR" | Prévia já tem texto | Texto da prévia |
| `inicio.prova` | "88%", "R$298,7 mi", "classificação forense" | 88% é um dos valores divergentes (P01); formato BR é "R$ 298,7 mi" | Números com PENDENTE; corrigir formato |
| `empresa.descricao` | "130+ fontes públicas", "1,19 bilhão de registros" | Fontes: 11 · 13 · 26 · 130+ em aberto (P01) | PENDENTE até P01 |
| CTAs | "Contato" (menu), "Pedir demonstração" (home) | Mapa v2 (C2): "Como começar" | Trocar após aprovar C2 |
| `rodape.final.texto` | Fala em órgãos públicos e pesquisa | Foco comercial: instituições financeiras | A revisar (identidade verbal) |

## 1. Mudanças necessárias

### a) Rotas

Todas as rotas precisam ser criadas (as da v1 também não existem). Arquivos em `app/`:

| Rota | Arquivo | Conteúdo na primeira passada |
|---|---|---|
| `/credito-rural/` | `app/credito-rural/page.tsx` | Página completa (prévia) |
| `/credito-rural/cooperativas/` *(nova)* | `app/credito-rural/cooperativas/page.tsx` | Página completa |
| 5 produtos de crédito | `app/credito-rural/[produto]/page.tsx` + `generateStaticParams` | Modelo de produto com a prévia |
| `/exportacao/` | `app/exportacao/page.tsx` | Rascunho (PageStub) |
| `/exportacao/triagem-eudr/` | `app/exportacao/triagem-eudr/page.tsx` | Modelo de produto, texto A DEFINIR |
| `/outras-aplicacoes/` | `app/outras-aplicacoes/page.tsx` | Lista curta: Carbono · Inteligência Territorial |
| `/outras-aplicacoes/projeto-de-carbono/` *(nova)* | `app/outras-aplicacoes/projeto-de-carbono/page.tsx` | Modelo de produto (prévia) |
| `/como-comecar/` *(nova)* | `app/como-comecar/page.tsx` | 4 etapas; formulário fica para a P06 |
| `/exemplos/` *(nova)* | `app/exemplos/page.tsx` | 11 cards sem PDF (P07) |
| `/tecnologia/`, `/normas/`, `/verificar/`, `/sobre/`, `/contato/`, `/privacidade/`, `/termos/` | `app/<rota>/page.tsx` | PageStub com faixa RASCUNHO; `/normas/` recebe a tabela da prévia |

Observação: a rota estática `/credito-rural/cooperativas/` tem prioridade sobre a dinâmica `[produto]`. O `generateStaticParams` gera só os 5 slugs de produto.

### b) Navegação (`content/site.ts`, `Header.tsx`, `Footer.tsx`)

- `nav`: mantém Crédito rural · Exportação · Tecnologia · Normas · Verificar laudo.
- `navCta`: de `{ /contato/, "Contato" }` para `{ /como-comecar/, "Como começar" }`. O `rodape.final.cta` acompanha, porque aponta para `navCta`.
- `menuSecundario` (painel do menu): Cooperativas · Exemplos · Sobre · Outras aplicações · Contato.
- Rodapé (`rodape.colunas`): Soluções (Crédito rural · Cooperativas · Exportação · Outras aplicações) · Plataforma (Tecnologia · Normas · Verificar laudo · Exemplos) · Empresa (Sobre · Contato · Como começar). Legal: Privacidade · Termos. A faixa jurídica já usa IAGROSAT LTDA + CNPJ (está certa).
- Submenu de Crédito rural: o `HeaderShell` não tem submenu (ver D4). Proposta da v2: submenu no painel do menu e índice no topo da própria `/credito-rural/` (âncoras: As normas · produtos · Cooperativas · Como começar). Lista suspensa no desktop fica para depois.

### c) Redirecionamento 301

O projeto usa export estático, então o redirecionamento vai em `vercel.json` na raiz:

```json
{
  "redirects": [
    { "source": "/iagrointel-cooperativas-43d07d5fa0bd727b", "destination": "/credito-rural/cooperativas/", "statusCode": 301 },
    { "source": "/iagrointel-cooperativas-43d07d5fa0bd727b/", "destination": "/credito-rural/cooperativas/", "statusCode": 301 }
  ]
}
```

O redirecionamento só vale quando o domínio iagrointel.com apontar para este projeto na Vercel (P06). Até lá, a prévia continua no site atual.

### d) Modelo de página de produto

Novo `components/ProdutoPage.tsx`, alimentado por um tipo `Produto` em content:

```ts
type Produto = {
  slug: string; nome: string; grupo: "credito" | "exportacao" | "segunda-camada";
  maturidade: string;                       // P09; "A DEFINIR" enquanto não houver
  problema: { h2: string; texto?: string }; // H2 de evidência da prévia
  cruza: string[];                           // O que cruza
  entrega: string[];                         // O que entrega (formatos)
  naoFaz: string[];                          // O que não faz (bloco fixo)
  exemplos: { titulo: string; paginas?: number; pdf?: string }[];
  norma?: { texto: string; fonte?: string }; // FONTES-regulatorias.md; nunca "cumpre"
};
```

Ordem dos blocos (mapa v2): abertura `pd-hero` (nome, selo de maturidade, H2 de evidência, CTA Como começar) → O que cruza (`pd-rec-list`) → O que entrega (`pd-rec-list`) → O que não faz (bloco novo `nf-`, fundo escuro, sempre visível) → Exemplos (`ExemploCard`) → Norma relacionada → Como começar (`Etapas`, resumida) → `Ressalva`.

### e) Componentes novos ou alterados

| Componente | Arquivo | Base visual | Prefixo novo |
|---|---|---|---|
| Ressalva global | `components/Ressalva.tsx` | Fio + texto mono pequeno | `rs-` |
| Marca PENDENTE | `components/Pendente.tsx` | Tarja visível (`--st-aviso`) + `title` com o código da pendência; some com a flag `NEXT_PUBLIC_SHOW_PENDENTE=false` | `pend-` |
| Faixa RASCUNHO PROVISÓRIO | `components/Rascunho.tsx` | Faixa no topo da página; flag para remover | `rasc-` |
| Card de exemplo | `components/ExemploCard.tsx` | Selo "Exemplo" (quadradinho + mono), produto, caso, nº de páginas; link só se `pdf` existir | `ex-` |
| Etapas de Como começar | `components/Etapas.tsx` | Reaproveita `pd-steps-list` (variante de 4) | — |
| Indicadores com fonte | `components/Indicadores.tsx` | Reaproveita `nums` + linha de fonte e data de referência | `ind-` |
| Tabela de normas | `components/NormasTabela.tsx` | Reaproveita `.cmp` | `nt-` (só ajustes) |
| Selo de maturidade | `components/Maturidade.tsx` | Selo quadradinho + mono | `mat-` |
| PageStub | `components/PageStub.tsx` | CSS `.stub` já existe | — |
| Header / content | `Header.tsx` sem mudança de estrutura; só dados em `site.ts` | — | — |

Cada prefixo novo entra na tabela da seção 9 do `docs/DESIGN.md`.

### f) Conteúdo

Origem: `docs/PREVIA-cooperativas.md`. Regras na migração:
- Nomes oficiais (tabela "Ajustes de texto" do mapa): Laudo PRODES, Laudo de Acompanhamento, Perícia de Carteira, Base Territorial GRSAC, Projeto de Carbono.
- Todo número e toda data com `<Pendente codigo="P23">`. Normas e datas com `codigo="FONTES"`. 26 fontes e 8.393.915 com `codigo="P01"`.
- Texto que não existe na prévia nem no mapa: comentário `// TEXTO NOVO (a aprovar)`.
- Exemplos sem PDF até a P07.
- Home: reordenar produtos, trocar "planeta" por "terra", CTA "Como começar", textos dos produtos vindos da prévia.

Estrutura de arquivos de conteúdo: ver D2.

## 2. Arquivos

**Criar**
- `vercel.json`
- `app/credito-rural/page.tsx`, `app/credito-rural/cooperativas/page.tsx`, `app/credito-rural/[produto]/page.tsx`
- `app/exportacao/page.tsx`, `app/exportacao/triagem-eudr/page.tsx`
- `app/outras-aplicacoes/page.tsx`, `app/outras-aplicacoes/projeto-de-carbono/page.tsx`
- `app/como-comecar/page.tsx`, `app/exemplos/page.tsx`
- `app/tecnologia/page.tsx`, `app/normas/page.tsx`, `app/verificar/page.tsx`, `app/sobre/page.tsx`, `app/contato/page.tsx`, `app/privacidade/page.tsx`, `app/termos/page.tsx`
- `components/ProdutoPage.tsx`, `Ressalva.tsx`, `Pendente.tsx`, `Rascunho.tsx`, `ExemploCard.tsx`, `Etapas.tsx`, `Indicadores.tsx`, `NormasTabela.tsx`, `Maturidade.tsx`, `PageStub.tsx`
- `docs/MAPA-site.md`, `docs/PENDENCIAS.md`, `docs/PREVIA-cooperativas.md`, `docs/NOMENCLATURA-produtos.md`, `docs/FONTES-regulatorias.md`, `docs/DECISOES-iagrointel.md`
- Se D2 = dividir: `content/produtos.ts`, `content/credito-rural.ts`, `content/como-comecar.ts`, `content/exemplos.ts`, `content/normas.ts`

**Alterar**
- `content/site.ts` (nav, navCta, menuSecundario, rodapé, home)
- `app/page.tsx` (ordem e grupos de produtos; link de cada produto)
- `app/padroes.css` (blocos `rs-`, `pend-`, `rasc-`, `ex-`, `ind-`, `nt-`, `mat-`, `nf-`, `cr-`)
- `docs/DESIGN.md` (seção 9: prefixos novos)
- `package.json` (script `typecheck`; `lint` se D3 = ESLint)
- `CLAUDE.md` do repositório (regra de conteúdo, se D2 = dividir)

**Remover**
- Nada obrigatório. Opcional: blocos de `padroes.css` da iAgroSat sem uso (`.intel-hero`, produtor, planos, monitoramento). Fica para uma limpeza separada.

## 3. Execução em etapas

Cada etapa termina com `npm run build` e `npm run typecheck` (e `npm run lint` se D3 = ESLint) sem erro, conferência em 1440 px e 390 px, e aprovação antes da próxima. Commit só quando o Rodrigo pedir.

| Etapa | Escopo | Saída verificável |
|---|---|---|
| **E0 · Preparação** | Copiar os 6 documentos para `docs/`; script `typecheck` (e ESLint, se D3); `PageStub.tsx`; aplicar D2 na estrutura de `content/` | Build e typecheck passam; home igual |
| **E1 · Rotas e navegação** | Todas as rotas da tabela 1a como PageStub com faixa RASCUNHO; `nav`, `navCta`, `menuSecundario`, rodapé; `vercel.json` | `out/` com todas as rotas; nenhum link do menu ou do rodapé em 404 |
| **E2 · Componentes** | Pendente, Ressalva, Rascunho, Maturidade, ExemploCard, Etapas, Indicadores, NormasTabela; prefixos no DESIGN.md | Página interna `/credito-rural/` temporária mostrando cada componente |
| **E3 · Modelo de produto** | `ProdutoPage` + `[produto]` com os 5 produtos de crédito, conteúdo da prévia, nomes oficiais e PENDENTE | 5 páginas completas |
| **E4 · Crédito rural** | `/credito-rural/` com as 9 seções do mapa | Página completa; âncoras funcionando |
| **E5 · Cooperativas, Como começar, Exemplos, Normas** | `/credito-rural/cooperativas/`, `/como-comecar/`, `/exemplos/`, tabela em `/normas/` | 4 páginas |
| **E6 · Segunda camada e home** | `/outras-aplicacoes/`, `/outras-aplicacoes/projeto-de-carbono/`, Triagem EUDR no modelo; home (ordem, grupos, "terra", CTA, textos da prévia) | Home coerente com o mapa v2 |

## 4. Decisões antes da E0

- **D1. Local × GitHub.** O GitHub tem 1 commit e só a home. Se a pasta local tem mudanças não enviadas, elas precisam ir para o GitHub (ou o trabalho segue no VS Code) antes de qualquer etapa, para não haver duas versões.
- **D2. Onde fica o texto.** Opção A: tudo em `content/site.ts` (regra atual; o arquivo passa de 1.000 linhas). Opção B (recomendada): `content/site.ts` para o que é global + um arquivo por área (`produtos.ts`, `credito-rural.ts`, `como-comecar.ts`, `exemplos.ts`, `normas.ts`), com a regra do CLAUDE.md ajustada para "todo o texto fica em `content/`". Facilita a tradução (P05) sem criar `content/pt/` agora.
- **D3. Lint.** Opção A (recomendada): só `typecheck` (`tsc --noEmit`) agora. Opção B: instalar ESLint (`eslint-config-next`) e corrigir o que aparecer, numa etapa à parte.
- **D4. Submenu de Crédito rural.** Opção A (recomendada): no painel do menu + índice na página. Opção B: lista suspensa no desktop (mexe no `HeaderShell` e nas animações do cabeçalho).
- **D5. Conflitos C1 e C2 do mapa (P25).** C2 muda o botão do menu já na E1.
