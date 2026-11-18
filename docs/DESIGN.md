# Sistema visual · iAgroIntel (herdado da iAgroSat)

Este guia descreve o sistema visual do site da **iAgroSat** (empresa mãe), exportado em 13/11/2026 para o site da **iAgroIntel**. A estrutura, a grade, a tipografia, as animações e as transições são as mesmas. Só a paleta muda, e ela fica inteira em `app/tokens.css`.

> Para o Claude Code: leia este arquivo inteiro antes de criar ou mudar qualquer página. Não invente estilo novo se já existe um padrão aqui. Se precisar de um padrão que não existe, siga os princípios da seção 1 e registre o padrão novo na seção 9.

---

## 1. Princípios

1. **Editorial e calmo.** Títulos grandes, em peso leve (400), com espaçamento negativo entre letras. Muito respiro. Nada de sombras pesadas, gradientes chamativos ou cantos muito arredondados.
2. **Grade de 16 colunas.** O conteúdo vai da coluna 2 à 16. Os textos ocupam metade da grade ou menos.
3. **Mono para dados.** Rótulos, números de item (01, 02…), códigos, fontes e escalas usam a JetBrains Mono. Texto corrido usa a Manrope.
4. **Marcador quadrado.** Selos, legendas e listas usam um quadradinho de 6 px, nunca bolinha (exceção: pontos de "ao vivo" que pulsam).
5. **Botões retos.** Cantos vivos. No hover, a cor nova entra da esquerda para a direita e o texto rola para cima. Os botões também são "magnéticos": seguem o mouse de leve.
6. **Alternância de fundo.** As seções alternam Papel, branco e Tinta. Toda seção escura leva `data-header="dark"` para o cabeçalho ficar claro sobre ela.
7. **Movimento com propósito (decisão 44, 16/11/2026).** Movimento só com `transform`, `opacity` e `clip-path`, pelos componentes de `components/motion/` (GSAP e Lenis). A página funciona completa sem JavaScript e com `prefers-reduced-motion`: nesse caso o conteúdo aparece parado e inteiro. JavaScript de interação novo só onde uma decisão registrada liberar (hoje: decisão 44, ideias 3 e 13).
8. **Honestidade.** Exemplos ilustrativos são marcados como tal. Números só com fonte aprovada.

## 2. Arquivos

| Arquivo | O que tem | Pode editar? |
|---|---|---|
| `app/tokens.css` | Cores, fontes, raio. **A paleta da iAgroIntel.** | Sim: é o único lugar de cor |
| `app/base.css` | Fundação: reset, tipografia, botões, movimento, grade, escala de tipos, seções, cabeçalho, rodapé, letreiro, ImageReveal | Com cuidado (vale para o site todo) |
| `app/padroes.css` | Biblioteca de padrões das páginas da iAgroSat (ver seção 8) | Sim: apague o que não usar; crie blocos novos com prefixo próprio |
| `content/site.ts` | Texto global: empresa, menu, rodapé | Sim |
| `content/<area>.ts` | Texto de cada página ou área (ex.: `inicio.ts`) | Sim |
| `components/motion/` | Componentes de movimento (seção 6) | Raramente |
| `components/padroes/` | Componentes interativos reaproveitáveis | Sim |

A ordem de importação em `app/layout.tsx` importa: **tokens → base → padroes**.

**Regra de cor:** nenhum `#hex` ou `rgba(r, g, b, …)` com cor da marca fora de `tokens.css`. Para transparência, use os canais: `rgba(var(--light-rgb), .3)`. Preto e branco neutros (sombras, estrelas) podem ficar como estão.

## 3. Tokens (papel de cada variável)

Os nomes são os mesmos do site da iAgroSat. Por isso o CSS funciona igual com outra paleta.

| Variável | Papel | iAgroIntel | iAgroSat (referência) |
|---|---|---|---|
| `--ink` | Texto principal e fundos escuros | Tinta `#101B2D` | Noite `#17261C` |
| `--main` | Cor da marca: títulos grandes, botão principal, linhas ativas | Documento `#1F4E79` | Campo `#2F8F46` |
| `--main-text` | A cor da marca como texto ou botão em fundo claro (AA) | `#1F4E79` | `#23733A` |
| `--light` | Destaque **sobre fundo escuro**: brilhos, linhas acesas, botão claro | Sinal `#4FA3C7` | Broto `#9BD18B` |
| `--sky` | Texto secundário e grafismo sobre fundo escuro | Céu `#8DB8D8` | (não tem) |
| `--sinal-escuro` | Destaque de evidência **em fundo claro** | `#25728F` (aprovado em 13/11/2026) | (não tem) |
| `--st-ok`, `--st-aviso`, `--st-nao`, `--st-insuf` | Status do veredito em fundo claro (AA); variantes `-escuro` sobre Tinta | ver `tokens.css` (decidido em 13/11/2026) | (não tem) |
| `--paper` | Fundo claro padrão | Papel frio `#F4F6F8` | Papel `#F6F4EE` |
| `--white` | Fundo branco das seções alternadas | `#FFFFFF` | `#FFFFFF` |
| `--muted` | Texto de apoio | `#56636F` (proposta) | `#55655A` |
| `--line` | Fios e bordas | `#D3DAE2` (proposta) | `#DCD8CC` |
| `--text-2` | Texto secundário de parágrafo | `#33404D` (proposta) | `#3A4A3F` |
| `--night-2`, `--deep`, `--space` | Tons de fundo escuro (cartões, painéis, "espaço") | propostas frias | verdes escuros |
| `--sun`, `--clay` | Aviso e nível alto | **a definir (Fase 1)** | Sol e Barro |
| `--focus` | Anel de foco em fundo claro (= `--main-text`): 8,00 sobre Papel frio · 8,61 sobre branco | `#1F4E79` (D2, 15/11/2026) | (não tem; usava `--sun` em tudo) |
| `--focus-dark` | Anel de foco em região escura (= `--sun`): seções `[data-header="dark"]`, cabeçalho escuro (`.hdr.is-dark`), painel do menu (`.hdr.is-open`) e rodapé escuro (`.ftr-box`, `.ftr-bar`): 9,20 sobre Tinta | `#F2B233` (D2, 15/11/2026) | (não tem) |
| `--i-*` | A marca irmã | iAgroSat (endosso) | iAgroIntel |
| `--*-rgb` | Canais para transparência | — | — |

### Contraste (regra da iAgroIntel, de SISTEMA-visual.md)
- **Sinal e Céu nunca levam informação sozinhos em fundo claro.** Isso vale para texto, linha de gráfico e polígono sem contorno (contraste 2,62 e 1,94). Em fundo claro, use `--main-text` ou `--sinal-escuro`.
- **Sobre Tinta**, Sinal (6,08) e Céu (8,20) servem como texto e destaque. Telas de dado e mapas ficam melhor em fundo escuro.
- O logo negativo vai de preferência sobre Tinta.
- **Números das listas escuras (`sb-tec-n`, D5 15/11/2026):** Papel com opacidade de 48% sobre Tinta = 4,57:1 (AA para texto pequeno). Era 45% (4,21:1). 47% daria 4,45:1, abaixo do mínimo.
- **Anel de foco (D2, 15/11/2026):** contraste mínimo de 3:1 contra o fundo em volta do elemento. A regra fica em `base.css`: `outline: 3px solid var(--anel, var(--focus))`, e as regiões escuras trocam `--anel` para `--focus-dark`. A barra de atalhos do cabeçalho (`.hdr-bar`) tem fundo branco mesmo sobre seção escura e volta ao `--focus`. O Sol (`--sun`) sobre Papel dava 1,73 e sobre branco 1,88: não serve como anel em fundo claro. `main` recebe o foco do "Pular para o conteúdo" (`tabindex="-1"`) sem contorno (`main:focus { outline: none }`).
- Atenção: em `padroes.css`, alguns padrões da iAgroSat usam `--light` em fundo claro como decoração (quadradinhos, sublinhados). Na iAgroIntel, confira cada um. Se o elemento leva informação, troque por `--main-text` ou `--sinal-escuro`.

## 4. Grade e unidade

- `.g16`: grade de 16 colunas com margens laterais. Os filhos usam `grid-column: 2 / 16` para o conteúdo cheio e, por exemplo, `2 / 7` com `8 / 16` para título à esquerda e lista à direita.
- `--u`: unidade fluida (1440 px de tela = 10 px). Espaços e tamanhos usam `calc(N * var(--u))`, quase sempre com piso: `max(14px, calc(1.6 * var(--u)))`.
- **Celular (< 768 px):** `.g16` vira uma coluna com 20 px de margem. Todo filho ocupa a largura toda e as margens de topo zeram.
- **Pontos de quebra:** 768 px (celular) e 1024 px (tablet). Ver `MQ` em `components/motion/gsap.ts`.

## 5. Tipografia

| Classe | Uso |
|---|---|
| `.t-hero` | Título de abertura e chamada final (o maior) |
| `.t-xl` + `.pl-h2` | Título de seção |
| `.p-m` | Parágrafo de apoio grande (lead) |
| `.lbl` | Rótulo acima do título (ex.: "Contato", "Ferramentas") |
| `.pl-selos` | Selos com quadradinho ("Chave grátis · 50 análises…") |
| `.lnk` | Link com sublinhado que se refaz no hover |
| Mono (`var(--f-mono)`) | Números de item, códigos, fontes, escalas, rótulos de quadro |

Fontes: **Manrope** (200–800) e **JetBrains Mono** (100–800), locais em `app/fonts/`. Títulos grandes usam peso 400. O texto corrido usa peso 500.

## 6. Movimento (`components/motion/`)

Vocabulário em `gsap.ts`: curvas (`EASE.out`, `EASE.expo`, `EASE.inOut`, `EASE.curtain`), tempos (`DUR`) e condições (`MQ.motion`, `MQ.desktop`, `MQ.mobile`, `MQ.finePointer`).
`<html class="mo">` é marcado antes da primeira pintura (script em `layout.tsx`). O CSS só esconde o que vai animar quando essa classe existe.

| Componente | O que faz | Quando usar |
|---|---|---|
| `Reveal` | Sobe e aparece ao entrar na tela (com `stagger` para listas). `start="load"` para o topo da página | Quase tudo que não é título |
| `SplitHeading` | Cada palavra (`by="word"`) ou linha (`by="line"`) sobe de dentro de uma máscara | Títulos e leads |
| `ScrubText` | (sem CSS desde a D5, §8) A frase acende palavra a palavra conforme a rolagem | Uma frase forte por página (missão, lema) |
| `Parallax` | (sem CSS desde a D5, §8) Camada que se move mais devagar que a página | Imagens decorativas, satélite |
| `ImageReveal` | A imagem abre do centro como uma janela, com leve parallax. `prioridade`: imagem da primeira tela (`fetchpriority="high"`, sem `loading="lazy"`); `proporcaoDoQuadro`: a proporção vem do CSS do quadro (ex.: `.pv`), não de `width`/`height` (D4, 15/11/2026) | Fotos e prints grandes; imagem Sentinel-2 da abertura (`ImagemSentinel`) |
| `HorizontalSection` | (sem CSS desde a D5, §8) Fixa a seção e corre os painéis na horizontal (no celular, vira carrossel) | Sequências de 4 a 8 itens |
| `Marquee` | Letreiro infinito que inverte o sentido quando a página sobe. **Modo `rolagem` (etapa 1A, 16/11/2026):** a faixa só desliza enquanto a página rola (ScrollTrigger com `scrub` sobre `transform`), nunca sozinha: letreiro automático de mais de 5 s exigiria controle de pausa (WCAG 2.2.2). Ligado só a partir de 768 px; no celular, sem JavaScript e com `prefers-reduced-motion`, a lista fica parada, quebrando linha, sem a cópia (`.mq:not(.is-live)`). A cópia duplicada tem `aria-hidden`. CSS `mq-*` de volta em `base.css` (do kit, "Letreiro") | Fontes de dados (faixa de fontes da home), contato, rodapé |
| `Conferencia` (+ `components/CenaConferencia.tsx`) | **Varredura do satélite sobre a imagem** (abertura da home, 16/11/2026, pedido do Rodrigo; substitui o `Contorno` da 1A, sem perímetro e sem texto sobre a imagem). Desenho no servidor (`CenaConferencia`: SVG com o mesmo quadro da imagem, `preserveAspectRatio="xMidYMid slice"`); o componente de movimento só procura o SVG pelo id e roda a linha do tempo, criada só quando a animação começa (`gsap.delayedCall`). Um feixe vertical em Sinal (linha, brilho e rastro) atravessa a metade direita da cena da esquerda para a direita (`transform`), do ponto onde o campo começa a aparecer até a borda da tela (medidos com `getScreenCTM`); logo atrás dele a grade inteira de células de 8 × 8 acende (Sinal a 80%) e, 0,3 s depois, fica acesa só nas de solo aberto (Sinal a 60%), classificadas pela cor média da própria cena (`content/inicio.ts › campo`: 1.791 abertas de 3.770). **Leve**: as células não são elementos; a grade é um `<pattern>`, a camada "todas" é um retângulo e a camada "abertas" é um único `<path>`, e o movimento só recorta as camadas por `clip-path`. Uma máscara apaga o campo atrás do texto (desktop: rampa à esquerda e no alto, sob o menu; celular: rampa em cima). Uma vez só, 2,5 s (menos de 5 s, WCAG 2.2.2). Sem JavaScript e com reduced motion, o estado final parado (células abertas acesas) | Abertura da home |
| `IndiceAtivo` | **Produto ativo no índice da home** (16/11/2026). A partir de 1024 px, com movimento: um ScrollTrigger por produto (ativo quando o item cruza 55% da tela); troca o nome aceso e a marca (`opacity`, `scaleY`) e revela a imagem do produto no palco por `clip-path` atrás do feixe (`transform`), 0,9 s por troca, só quando a pessoa rola. Ver §9 (`hm-ix-`) | Home, produtos |
| `Triagem` (+ `components/MapaTriagem.tsx`) | **Mapa da triagem comandado pela rolagem** (home, prova, 16/11/2026): alertas acendem (311) e depois só os bloqueios mantidos ficam em Argila (38), com a legenda contando junto. ScrollTrigger com `scrub` (anda e volta com a página; nada roda sozinho, então não entra na regra dos 5 s). Só `opacity` (e `scale` nos 38), mais o número da legenda (como o `CountUp`); montada só quando o mapa chega à tela. Ver §9 (`hm-pv`) | Home, prova |
| `CountUp` | Número que conta ao entrar na tela (formato BR) | Faixas de números |
| `GrowX` / `DrawLine` | (`GrowX` sem CSS desde a D5, §8) Linha que cresce na horizontal ou na vertical (com `scrub`, segue a rolagem) | Riscos, barras, linhas do tempo |
| `ColorShift` | (sem CSS desde a D5, §8) A região escurece ao entrar e clareia ao sair | Transição dramática de seção |
| `Magnetic` | Elemento puxado de leve pelo mouse | Botões (já embutido em `Cta`) |
| `HeaderShell` | Cabeçalho que compacta ao rolar e fica claro sobre `data-header="dark"` | Já no layout |
| `PageTransition` + `app/template.tsx` | Cortina entre páginas | Já no layout |
| `SmoothScroll` | Rolagem suave (Lenis) | Já no layout. Em listas roláveis internas, use `data-lenis-prevent` |

**Regras:**
- **Decisão 44 (16/11/2026):** movimento só com `transform`, `opacity` e `clip-path`, pelos componentes de `components/motion/` (GSAP e Lenis). A página funciona completa sem JavaScript e com `prefers-reduced-motion`: nesse caso o conteúdo aparece parado e inteiro. JavaScript de interação novo só onde uma decisão registrada liberar (hoje: decisão 44, ideias 3 e 13). Para revelar, use `clip-path` ou `scale`, nunca `width`/`height` nem `stroke-dashoffset`.
- Fixar seção (pin) só no desktop (`MQ.desktop`). No celular, a versão é sem pin.
- Toda animação com `gsap.matchMedia()` dentro de `useGSAP`, com limpeza no retorno.
- CSS de animação contínua (pulsos, brilhos) dentro de `@media (prefers-reduced-motion: no-preference)`.
- **Teclado (D5, 15/11/2026):** o bloco que recebe foco aparece na hora, mesmo antes da animação de entrada (`:focus-within` com `opacity: 1 !important` em `base.css`, para `Reveal` simples, `stagger` e `targets`). Sem isso, o Tab rolava o link até a borda de baixo, abaixo da linha de disparo, e ele ficava com foco e invisível (cartões de exemplo, tabela de normas, botão no fim da Triagem EUDR).
- **Diferença deliberada em relação ao site da iAgroSat (desempenho, 14/11/2026):** o maior texto da abertura de cada página (o elemento que o Lighthouse aponta como LCP) fica visível desde o primeiro quadro. Ele não é escondido pelo CSS enquanto o JavaScript carrega e a animação dele só move a posição (`transform`), sem opacidade. Uso: `<Reveal visivel>` (data-reveal="visivel") e `<SplitHeading visivel>` (classe `split-visivel`, o título sobe inteiro, sem máscara palavra a palavra). Aplicado ao parágrafo da abertura da home, ao texto da abertura de /credito-rural/, ao H2 de evidência e aos parágrafos de texto da abertura das páginas de produto (`ProdutoPage`, D2 15/11/2026) e ao título, subtítulo e texto de `Abertura` e `PageStub`. As outras animações seguem iguais às da iAgroSat. Medido com Lighthouse (celular, servidor com compressão, 14/11/2026): LCP de 3,5 s para 2,9 s (home e /credito-rural/) e 3,1 s (Laudo PRODES); desempenho de 86–89 para 92–93. O que ainda separa o LCP de 2,5 s não é mais a animação: é o CSS que bloqueia a renderização (`padroes.css` traz padrões da iAgroSat que o site não usa) e a troca da fonte reserva pela Manrope (`display: swap`).
- **D5 (15/11/2026), desempenho.** Lighthouse 12.6.1, celular, 3 rodadas por página (mediana), 20 páginas, Edge sem extensões (as extensões embutidas do Edge somavam até 500 ms de TBT e 17 KiB de "JavaScript antigo" que não são do site; medições anteriores podem ter esse ruído).
  - Feito: saiu o CSS dos componentes sem uso (§8; CSS publicado de 11,1 para 8,9 KiB comprimido) e saíram os polyfills do Next (`next.config.mjs` troca o `polyfill-module` por `lib/polyfill-vazio.js`; browserslist no `package.json`: Chrome/Edge 93, Firefox 92, Safari/iOS 15.4). "JavaScript antigo" de 11,5 KiB para 0. Estilo calculado das 20 páginas em 1440 e 390 px idêntico.
  - Resultado: desempenho de 93–100 antes para 93–100 depois (home 95 → 97); acessibilidade e boas práticas 100 em todas; SEO 100 na home e 69 nas 19 páginas com noindex de rascunho (fora da meta, decisão 18). FCP 0,8–1,8 s; LCP 1,9–3,1 s (home 2,9 → 2,5 s). As diferenças entre antes e depois, fora o JS antigo, ficam dentro da variação entre rodadas.
  - `experimental.inlineCss` testado e **não usado**: o Next põe o CSS duas vezes no HTML (tag `<style>` e dados do React) e de novo no `.txt` de cada navegação interna. O HTML da home vai de 8,5 para 27 KiB comprimido; o bloqueio some, mas o FCP não melhora (1,7 s) e o LCP piora (2,9 → 3,0–3,1 s).
  - Fontes (D5): a JetBrains Mono deixou de ser pré-carregada (`preload: false` em `layout.tsx`); a Manrope continua. Redução das fontes e CSS crítico: não aplicados.
  - O que segura o LCP agora (o H1 em texto: cerca de 2,6 s de atraso de renderização): as duas fontes pré-carregadas (Manrope 53 KiB e JetBrains Mono 70 KiB, variáveis e completas) disputam a banda com o CSS no começo da carga. Próximo passo proposto, não aplicado: tirar o pré-carregamento da mono (não está no LCP) e reduzir as duas fontes aos caracteres do português (latin + latin-1); depois, se ainda for preciso, CSS crítico embutido por um passo pós-build (sem duplicar no RSC).

## 7. Cabeçalho e rodapé

- **Cabeçalho:** no topo mostra o menu completo; ao rolar, compacta (símbolo + botão de menu com barra de atalhos). No celular, o menu abre como painel em tela cheia. Com o painel aberto, `main` e o rodapé ficam `inert` e o Tab circula só entre o botão de menu e os links do painel; Esc fecha e devolve o foco ao botão (D2, 15/11/2026). A primeira seção da página leva `data-hero=""`. Seções escuras levam `data-header="dark"`.
- **Rodapé:** caixa escura com a chamada final e o endosso ("uma plataforma iAgroSat"), colunas de links, contato e a faixa legal.
- Os dois leem de `content/site.ts` (`nav`, `navCta`, `menuSecundario`, `empresa`, `rodape`).

## 8. Biblioteca de padrões (`app/padroes.css`)

Cada padrão foi feito para uma página da iAgroSat. O código de cada página está em `referencia/paginas/` (na pasta do kit) e os componentes em `referencia/componentes/`. Para reaproveitar: copie a estrutura JSX da página de referência, use as mesmas classes e troque o texto pelo arquivo da página em `content/`.

**Kit da iAgroSat (16/11/2026):** fica em `C:\PROJETOS\design-system-iagro\referencia` (`css/`, `paginas/`, `componentes/`), só para leitura. Do kit vem estrutura, nunca cor: não copie tokens da iAgroSat nem o bloco `:root` (os blocos de CSS usam variáveis, e `app/tokens.css` já tem os valores da iAgroIntel). Três cuidados em todo bloco que vier do kit:
1. `--light` em fundo claro: se leva informação, troque por `--sinal-escuro` ou `--main-text`;
2. variáveis `--i-*` são a marca irmã (aqui, o verde da iAgroSat): só no endosso;
3. `--sun` e `--clay` são reservadas a status de laudo e anel de foco: não usar como enfeite.

**Limpeza da D5 (15/11/2026):** saiu também o CSS dos componentes que nenhuma página usa: ColorShift (`cshift`), HorizontalSection (`hs-*`), Marquee (`mq-*`), ScrubText (`stw`, `lead-xl`), Parallax (`plx`, `media-frame`, `strip`), GrowX (`gx`), CopyButton (`cp-btn`), GapSelect (`gsel-*`), RecursosAbas (`ra-*`) e `.mo .phone .msg`, sobra da E8 (13 KB; CSS publicado de 51,7 para 39,8 KB, já com o browserslist novo). Cada classe foi procurada em `app/`, `components/`, `content/` e `lib/`, e o estilo calculado das 20 páginas em 1440 e 390 px ficou idêntico (0 diferenças). Os `.tsx` desses componentes ficam, com um aviso no topo: para usar, copie antes o bloco de CSS do kit (`referencia/css/`) e registre aqui.

**Limpeza da E8 (14/11/2026):** os blocos de `padroes.css` que nenhuma página ou componente usa saíram (163 KB → 32 KB). Cada classe removida foi procurada em `app/`, `components/`, `lib/` e `content/` (0 ocorrências em strings), e o HTML e o estilo calculado das páginas principais em 1440 e 390 px ficaram idênticos. Para usar de novo um padrão que saiu, copie o bloco de `referencia/css/padroes.css` (na pasta do kit) junto com o JSX de referência.

| Prefixo | Padrão | Página de referência | Situação (E8) |
|---|---|---|---|
| `cl-hero`, `cl-hero-grid` | Abertura escura com grade fina e brilho; texto à esquerda, painel à direita | `monitoramento__clima.tsx` | **Fica** (`cl-hero*`, `cl-lead`, `cl-title`; `cl-src-grid`/`cl-src-head` como cabeçalho de seção). Painel `cd-*` saiu |
| `cl-nums` | Faixa de números grandes que contam, com fio em cima | Clima, Sobre | Saiu (o site usa `.nums` + `ind-`) |
| `cl-dif-*` + `GrowX` | "Comum × nosso": frase riscada ao rolar contra frase que acende | Clima, Uso do solo | Saiu |
| `cl-pub-*` | Linhas com barra que cresce conforme o tamanho | Clima | Saiu |
| `cl-plan*` | Cartões de "como contratar" | Clima | Saiu |
| `cl-final` | Chamada final escura (título gigante + apoio + botão) | Várias | Saiu |
| `cl-hs`, `hs-*` | Seção horizontal com painéis (HorizontalSection) | Clima | `cl-hs` saiu; `hs-*` fica (está em `base.css`) |
| `sb-tec-*` | Lista escura: título fixo à esquerda, linhas à direita | Sobre, MCP | **Fica** |
| `sb-pri-*` | Princípios numerados | Sobre | Saiu |
| `sb-hero`, `sb-orbit` | Abertura clara com objeto flutuando e órbita tracejada | Sobre | Saiu |
| `st-*` (SatTimeline) | Linha do tempo no espaço: satélite fixo, marcos que acendem | Sobre | Saiu |
| `ct-hero`, `ct-signal` | Abertura no espaço com satélite, feixe e ponto pulsando | Contato | Saiu |
| `ct-card*` | Cartões que se enchem de cor de baixo para cima, com "Copiar" | Contato | Saiu (só `cp-btn` fica, do `CopyButton`) |
| `cm-*`, `gsel-*` (ContatoMensagem, GapSelect) | Frase com lacunas, lista de escolha própria e prévia em balão | Contato | `cm-*` saiu; `gsel-*` fica enquanto `components/padroes/GapSelect.tsx` existir |
| `ct-mq*`, `ct-dl` | Letreiro gigante e dados da empresa | Contato | Saiu |
| `mc-*`, `mt-*` (McpTerminal) | Janela de assistente que digita, chama a ferramenta e responde | MCP | Saiu |
| `mk-*` (McpCatalog) | Catálogo em abas com linhas que entram em sequência | MCP | Saiu |
| `mc-ask-*` | Perguntas em balão para copiar | MCP | Saiu |
| `mc-cars-*` | Cartões de código para copiar | MCP | Saiu |
| `ra-*` (RecursosAbas) | Lista + print fixo que troca com a rolagem | Plugin QGIS | Fica enquanto `components/padroes/RecursosAbas.tsx` existir |
| `pd-*`, `pv-*` (ProductPage) | Página de produto: abertura, recursos, passos, "Veja também" | Geo e API | **Fica** o que o modelo de produto usa (`pd-hero*`, `pd-rec-*`, `pd-steps-list`, `pd-step-n`, `pd-visual`, `.pv`). Saíram `pd-gallery`, `pd-notes`, `pd-rec-abas`, `pd-steps-title`, `pv-*` |
| `gs-*`, `gv-*` (ProductScroller) | Índice fixo + um produto por tela | `geo-e-api.tsx` | Saiu |
| `us-*`, `uc-*` (UsoComparador) | Antes/depois com varredura (imagem → mapa) e legenda que acende | Uso do solo | Saiu |
| `pc-*`, `cmp-*`, `cap-*` | Planos em degrau, tabela comparativa, capacidades | Planos | `pc-*` e `cap-*` saíram; de `cmp` ficam `.cmp` e `.cmp-g` (base da tabela de normas `nt-`) |
| `hh-*` (HomeHero, HeroScan) | Hero da home em tela cheia com análise animada sobre a imagem | `home.tsx` | Saiu (com `scan-*`, `sp-*`, `tg-*`, `nb-*`, `intro-*`, `mon-*`, `mi-*` e `gq-*`; o `gq-sec`, último que restava, saiu na camada 1 com o bloco curto do carbono) |
| `ftr-*` | Rodapé | (base.css) | Fica (`base.css`) |
| (sem prefixo) | Padrões antigos das páginas da iAgroSat: `hero`, `band-dark`, `phone`/`msg`, `caps`, `plans`, `howto`, `cards`, `notice`, `blocks`, `limits`, `principles`, `contacts`, `prose`, `tag-*` | v1 da iAgroSat | Saíram. As regras de elemento (`table`, `th`, `td`) ficam: valem para o site todo |

Prefixos reservados, que **não podem ser repetidos** num padrão novo (inclusive os que saíram na E8, porque o código de referência da iAgroSat ainda os usa e pode voltar): `cl`, `sb`, `st`, `ct`, `cm`, `gsel`, `mc`, `mt`, `mk`, `ra`, `pd`, `pv`, `gs`, `gv`, `us`, `uc`, `pc`, `cmp`, `cap`, `hh`, `hdr`, `ftr`, `mq`, `ir`, `cp`, `hm`, `rasc`, `pend`, `rs`, `mat`, `ex`, `ind`, `nt`, `ph`, `cr`, `sen`, `cf` (iAgroIntel), `st-` em tokens (`--st-*`, status). Já houve um bug por colisão de prefixo (`gs`). Antes de criar um prefixo, procure-o no CSS.

## 9. Padrões criados na iAgroIntel

*(registre aqui cada padrão novo: prefixo, o que faz, página)*

| Prefixo | Padrão | Página |
|---|---|---|
| `hm-` | Posicionamento da seção de prova da home (texto, faixa `nums` de 4 números, ressalva + link do dossiê de exemplo) | `app/page.tsx` (13/11/2026) |
| `hm-hero`, `hm-cena`, `hm-cena-quadro`, `hm-veu`, `hm-leg`, `hm-zona`, `hm-rolar` | **Abertura da home com imagem** (etapa 1A, 16/11/2026, ideia 1, fecha a P34; **refeita no mesmo dia a pedido do Rodrigo**). Sem o botão "Como começar" (fica no cabeçalho e no rodapé). Imagem do **Laudo PRODES** (`content/imagens.ts › laudo-prodes`, alt = `mostra`, legenda `legendaDe`), `loading="lazy"`, sem `fetchpriority`. **Enquadramento** (`hm-cena-quadro`, valores em `content/inicio.ts`): no desktop, o quadro tem `z` vezes a cena e é deslocado até o ponto (`fx`, `fy`), com a imagem em cover centrada; z = 2, fx = 0, fy = 0 põe a mata densa da esquerda (com o rio) atrás do texto, escolhido por medição (percentil 99 da luminância sob o H1 e o parágrafo em 6 telas). No celular (cena de 900 px presa à base), o quadro tem a proporção exata do arquivo e é posicionado em px pelo ponto (u, v); cobre a abertura inteira (com uma faixa sem imagem, a imagem virava o LCP do Lighthouse, 6,1 s). `sizes`: `200vw` no desktop; no celular, `700px` de propósito (arquivo de 1.200 px em densidade até ~1,7). **Véu neutro** (preto com transparência, não Tinta, para não tingir a imagem de azul): sombra concentrada atrás do bloco de texto (elipse), faixa no topo (menu) e na base (legenda); no celular, vertical. Contraste no pior ponto, 1024 a 1920 px e 390/768: H1 ≥ 4,86, parágrafo ≥ 5,00, legenda ≥ 5,17, menu ≥ 6,98, anel de foco em Sol ≥ 3,30. **Animação** `Conferencia` (§6, prefixo `cf-`): só a varredura e as células; o contorno ilustrativo e o rótulo "Contorno ilustrativo" saíram a pedido do Rodrigo (a decisão 45, contorno com rótulo visível, fica sem objeto: falta registrar). **Traço de rolagem** (`hm-rolar`, a partir de 1024 px): linha fina no centro da base; um brilho em Sinal desce três vezes (4,8 s, menos de 5 s: dispensa controle de pausa, WCAG 2.2.2) e some; só CSS; parado com reduced motion. **Legenda** na metade esquerda da base (colunas 2 a 8), para deixar o centro livre. Abaixo de 1024 px: texto em cima, faixa fixa de 450 px para a animação (`hm-zona`), legenda na base | `app/page.tsx`, `components/CenaConferencia.tsx`, `components/motion/Conferencia.tsx` |
| `cf-` | Peças da varredura `Conferencia` (16/11/2026): `cf` (SVG), `cf-campo` (grupo mascarado: `cf-m-d` no desktop, `cf-m-c` abaixo de 1024 px), `cf-todas-g`/`cf-todas` (grade inteira, Sinal a 80%, só durante a passagem), `cf-abertas-g`/`cf-abertas` (células de solo aberto, Sinal a 60% no estado final), `cf-varre` e `cf-varre-l` (feixe em Sinal com brilho e rastro). Com `.mo`, as peças da entrada começam escondidas | `components/CenaConferencia.tsx` |
| `hm-prova-col`, `hm-prova-ind`, `hm-prova-311`, `hm-pv`, `hm-pv-svg`, `hm-pv-fundo`, `hm-pv-a`, `hm-pv-b`, `hm-pv-leg` | **Prova com o mapa da triagem** (home, 16/11/2026, pedido do Rodrigo). À esquerda (colunas 2 a 8), um território abstrato de células de 8 × 8 (forma orgânica sorteada com semente, `components/MapaTriagem.tsx`; não é o Brasil, porque o teste não publica onde ficam as propriedades), preso por `sticky` enquanto o texto passa à direita (colunas 9 a 16, em três blocos: rótulo e os quatro números em 2 × 2 com `CountUp` (`hm-prova-ind`); "311 → 38" e o texto (`hm-prova-311`, 30svh abaixo); ressalva e dossiê logo abaixo dele). A animação acompanha o bloco do "311 → 38" (de quando o topo dele passa de 80% da tela até 28%), para o mapa virar junto com a frase. Conforme a rolagem (`components/motion/Triagem.tsx`, ScrollTrigger com `scrub`, anda e volta com a página): os 311 alertas acendem em Sinal escuro um a um em ordem sorteada (só `opacity`: escala em 311 elementos SVG obrigava o GSAP a medir cada um, TBT de 1.046 ms) e a legenda conta até 311; depois apagam para 22% e os 38 bloqueios aparecem em Argila (`opacity` e `scale`), com a legenda contando até 38. A linha do tempo só é montada quando o mapa encosta na base da tela (nada no carregamento; Lighthouse celular 95, TBT 60 ms). Abaixo de 1024 px, o mapa vem antes do texto, sem sticky, e a linha do tempo acompanha a passagem dele pela tela. Mapa e legenda são `aria-hidden` (o texto diz o mesmo). Sem JavaScript e com reduced motion, o estado final parado. `CountUp` ganhou a opção `prefixo` (conta "R$ 298,7 mi"), ligada só aqui | `app/page.tsx`, `components/MapaTriagem.tsx`, `components/motion/Triagem.tsx` |
| `hm-fontes*` | **Faixa de fontes (etapa 1A, ideia 12)** entre a prova e os produtos: fio em cima e embaixo, fundo Papel frio, rótulo "Origem dos dados" em mono à esquerda e os nomes em mono com quadradinho de 6 px em `--sinal-escuro`. Só nomes, sem logotipo e sem "parceiro" (origem do dado, nunca endosso). `Marquee` no modo `rolagem` (§6); no celular, sem JS e com reduced motion, a lista fica parada e quebra linha. A partir de 1024 px, esmaecimento curto na borda esquerda do letreiro (`.hm-fontes-mq::before`, de `--paper` para transparente, sem pegar clique), para os itens não serem cortados a seco ao lado do rótulo (1B) | `app/page.tsx` |
| `hm-mos`, `hm-mos-in`, `hm-mos-titulo`, `hm-mos-atr`, `hm-ix-*` | **Produtos da home em índice** (16/11/2026, pedido do Rodrigo; substitui o mosaico da etapa 1B, `hm-mos-*` de peças, que saiu). Seção escura (`data-header="dark"`, `hm-mos`). A partir de 1024 px: à esquerda (`hm-ix-lista`), os produtos em lista, com o nome do grupo acima de cada grupo (Crédito rural, Exportação): número, nome com link (cobre o item), maturidade em selo (`hm-ix-mat`, Sinal sobre Tinta), evidência e carimbo da cena; à direita, o palco preso (`hm-ix-palco`, sticky) com as imagens Sentinel-2 empilhadas. O produto que passa pelo meio da tela fica ativo: nome aceso e marca em Sinal (`hm-ix-marca`); nos outros, só o nome esmaece a 45% (texto grande, ~3,9:1; evidência, selo e carimbo ficam sempre acesos). O palco troca para a imagem do produto ativo com o feixe da abertura (`hm-ix-feixe`, linha em Sinal com brilho) e uma grade de células (`hm-ix-grade`) passando junto, por `clip-path`; descendo, da esquerda para a direita, subindo, ao contrário (`IndiceAtivo`, §6). Abaixo de 1024 px: sem palco, cada produto com a própria imagem (`hm-ix-fig`, 3:2) acima do texto. Sem JS e com reduced motion: tudo aceso e o palco com a imagem do primeiro produto. Cada imagem só baixa onde aparece (palco no desktop, item no celular). Atribuições Copernicus no pé (`hm-mos-atr`) | `components/IndiceProdutos.tsx`, `components/motion/IndiceAtivo.tsx` |
| `ftr-endosso` | Logo de endosso no rodapé (mínimo de 200 px de largura) | `components/Footer.tsx` |
| `rasc-` | Faixa "rascunho provisório" das páginas sem conteúdo aprovado (some com `NEXT_PUBLIC_RASCUNHO=false`). Desde a L3 (decisão 43), só em Contato, Privacidade, Privacy (EN) e Termos | `components/Rascunho.tsx`, `components/PageStub.tsx` (E1, 14/11/2026; a página provisória usa `.stub`, `.stub-lbl`, `.stub-title` e, desde a camada 2, `.stub-texto` com o "A DEFINIR") |
| `pend-` | **Marca de desenvolvimento, não status de laudo.** Etiqueta "Pendente · P32" ao lado de número ou data ainda não conferidos (códigos aceitos em `content/valor.ts › codigosPendente`: P32 e FONTES desde 14/11/2026). Usa o mesmo âmbar do status "com aviso" (`--st-aviso`), mas não diz nada sobre o imóvel nem sobre o laudo: diz que o número do site ainda não foi conferido. Não há flag para escondê-la: o valor só perde a etiqueta quando o código `pendente` é removido no conteúdo. `npm run pendencias` lista tudo; o build falha com `NEXT_PUBLIC_RASCUNHO=false` se ainda houver pendência | `components/Pendente.tsx`, `scripts/pendencias.mjs` (E2, 14/11/2026) |
| `rs-` | Ressalva global (texto exato do MAPA-site.md): fio + mono pequeno, também sobre seção escura. No topo da abertura (Perícias, `.pd-hero > .rs-wrap:first-child`) fica sem o espaço de cima: o respiro é o da seção (L3, decisão 43, quando a faixa de rascunho saiu) | `components/Ressalva.tsx` |
| `mat-` | Selo de maturidade: quadradinho + "Maturidade" + nível escrito (P12) | `components/Maturidade.tsx` |
| `ex-` | Card de laudo de exemplo: selo "Exemplo" com contorno, produto, caso, nº de páginas; link "Ver PDF" ou "Ver planilha" para o arquivo em `public/exemplos/`, mesma aba e sem seta (P13 encerrada; o Laudo PRODES fica sem link até a P32). `ex-lista` = grade de 3/2/1 colunas; `ex-tabela` = card na largura toda com uma tabela de exemplo (`.cmp.nt`), ex. a contagem RSA1 da Base Territorial GRSAC (camada 2) | `components/ExemploCard.tsx` |
| `ind-` | Indicadores: faixa `nums` com a frase do documento do cliente + `ind-fontes`, a linha "Fontes: ..." embaixo (camada 2). `.pd-hero-text .ind-fontes`: a mesma linha dentro da abertura (`Abertura`, prop `fonte`; Cooperativas) | `components/Indicadores.tsx`, `components/Abertura.tsx` |
| (sem prefixo) | Política de privacidade (PT e EN): `Abertura` + uma seção branca com um `cl-src-head` por seção da minuta (`t-m`, `p-m`, tabela `.cmp.nt` sem `.nt-wrap`, que só posiciona na grade `g16`) | `components/Politica.tsx` (camada 2, 14/11/2026) |
| `nt-` | Tabela de normas sobre `.cmp`: cabeçalho sem fixação, linhas sempre visíveis; no celular cada linha vira bloco com o nome da coluna | `components/NormasTabela.tsx` |
| (sem prefixo) | Etapas de Como começar: reaproveita `pd-steps-list` (variante de 4); `pd-step-x` = texto da etapa abaixo do título (camada 2) | `components/Etapas.tsx` |
| `ph-` | Espaço reservado de imagem no tamanho final: quadro `.pv` (escuro) com contorno tracejado e aviso escrito ("Imagem Sentinel-2 · a fornecer") | `components/ProdutoPage.tsx` (E3, 14/11/2026) |
| `sb-tec-name a`, `sb-tec-name:last-child` | Ajustes da lista escura: título como link (herda a cor) e título na largura toda quando a linha não tem parágrafo | home e `ProdutoPage` (E3) |
| `sb-tec-grupos`, `sb-tec-grupo` | Lista escura com grupos: título fixo à esquerda e, à direita, várias listas `sb-tec-list`, cada uma com o nome do grupo num `.lbl` acima (`ListaProdutos`, prop `grupos`). **Sem uso desde a etapa 1B (16/11/2026):** a home passou ao mosaico (`hm-mos-*`); o modo e o CSS ficam | home: Crédito rural e Exportação numa seção só (D2, 15/11/2026) |
| `pd-hero-larga` | `Abertura` sem imagem: a coluna do texto vai da 2 à 12 a partir de 1024 px (`.pd-hero-text.pd-hero-larga`); os parágrafos seguem com 52ch (`.pd-text`) | Cooperativas, Exportação, Exemplos, Tecnologia, Normas, Como começar, Sobre, Privacidade (D3, 15/11/2026) |
| (sem prefixo) `.cl-src-grid > .pd-rec-list` | Lista numerada embaixo de um `cl-src-head` (cabeçalho em cima, lista na largura toda): `ListaProdutos`, opção `empilhada` | Cooperativas › GRSAC conforme o porte (D3, 15/11/2026) |
| (sem prefixo) | Tecnologia: cada seção com título fixo à esquerda (`pd-rec-head`) e as frases numeradas à direita (`pd-rec-list` em `<ol>`, texto em `.pd-rec-x`). Crédito rural: a chamada para Cooperativas é uma linha `cr-indice` (fio, rótulo mono, link, âncora `#cooperativas`) no fim da seção do último produto. Exportação: sem seção de Como começar; o botão fica no fim da seção da Triagem EUDR (`ListaProdutos`, opção `acao`: `.pd-rec-grid > .pd-actions`, abaixo da lista). As etapas de `comoComecar` (content/credito-rural.ts) valem só para crédito rural: a Triagem EUDR usa `ProdutoPage` com `etapas={false}` | `app/tecnologia/page.tsx`, `app/credito-rural/page.tsx`, `app/exportacao/page.tsx` (D3, 15/11/2026) |
| `cr-` | Página /credito-rural/: `cr-indice` (índice de âncoras no fim da abertura), `cr-prod` (bloco de produto: evidência + O que cruza/entrega/não faz + exemplos), `cr-ancora` (parada abaixo do cabeçalho) | `app/credito-rural/page.tsx` (E4, 14/11/2026) |
| `hdr-panel-subnav` | Submenu de Crédito rural no painel do menu (D4) | `components/Header.tsx` (E4) |
| `sen-` | Imagem Sentinel-2 da abertura (P14 encerrada, L2 15/11/2026: 8 imagens do cliente, quatro larguras, `srcset` 800w/1200w/1600w/2400w e `sizes` pela coluna `.pd-visual`; em 390 px o navegador escolhe a de 800 px com densidade 2 e a de 1.200 px com densidade 3; em 1440 px, a de 800 px com densidade 1 e a de 1.200 px com densidade 2). **Proporção natural, sem corte (aprovada em 15/11/2026):** o quadro `.pv` segue a proporção do próprio arquivo (cerca de 1,52:1, por `width`/`height`), não o quadrado do espaço reservado, porque o texto alternativo do cliente descreve o quadro inteiro. **Carregamento:** `loading="lazy"` em todas as larguras (no celular, `fetchpriority="high"` levava o LCP da Perícia Pré-Crédito de 2,7 s para 3,8 s; no desktop, o pré-carregamento só para telas largas não ganhou LCP). Legenda de região na Triagem EUDR, campo `regiao`. `ImageReveal` no quadro `.pv` da `pd-visual` + `sen-leg`, legenda em mono numa linha (município (UF) · data da cena DD/MM/AAAA · sensor · "Contém dados Copernicus Sentinel modificados [ano], processados pela iAgroSat", ano da data da cena). Dados em `content/imagens.ts` (um registro por página, campos do .txt do cliente; WebP em `public/imagens/`). Sem `versoes`: o espaço reservado `ph-`, sem legenda. Com `versoes`, o build falha se faltar campo | `components/ImagemSentinel.tsx`: Crédito rural e as 7 páginas de produto (D4, 15/11/2026) |
| (sem prefixo) | Movimento dos blocos que estavam parados (M6): cartões de exemplo entram um depois do outro (`ExemploLista` = `Reveal` com `stagger`); tabela de normas com as linhas entrando uma a uma (`NormasTabela` = `Reveal targets="tbody tr"`; `.mo .nt-wrap[data-reveal="targets"] tbody tr` esconde só essas linhas); tabela RSA1 (`ExemploTabela`) entra como bloco, com as linhas já visíveis. H2 da prova da home ("311 → 38") e das normas em Crédito rural com `SplitHeading by="line"`. **Paradas de propósito:** a faixa de rascunho (`rasc-`) e a ressalva (`rs-`) | `components/ExemploCard.tsx`, `components/NormasTabela.tsx`, `app/page.tsx`, `app/credito-rural/page.tsx` (D4, 15/11/2026) |
| (exceção) | **Privacidade (B4):** os H2 das seções da política não têm animação própria (nem `SplitHeading`): é texto legal, que entra junto com o bloco da seção (`Reveal` no `cl-src-head`). As tabelas da política ficam com as linhas visíveis (sem `targets`) | `components/Politica.tsx` (D4, 15/11/2026) |
| (sem prefixo) | Exportação: ressalva global no fim da página, dentro da última seção (Ferramentas gratuitas), como nas outras páginas de segmento (decisão 38) | `app/exportacao/page.tsx` (D4, 15/11/2026) |
| (sem prefixo) | `Abertura` (pd-hero sem imagem: rótulo, H1, H2, texto, botões) e `ListaProdutos` (nome, maturidade e evidência de cada produto; escura `sb-tec` ou clara `pd-rec-list`). Em seção branca, os cartões de etapa ficam em Papel (`.sec-white .pd-steps-list li`) | `components/Abertura.tsx`, `components/ListaProdutos.tsx` (E5, 14/11/2026) |
| (sem prefixo) | `ListaProdutos` sem título: a lista `pd-rec-list` ocupa a largura toda (`.pd-rec-grid > .pd-rec-list:only-child`); opção `branco` para vir depois de uma abertura em Papel. `ProdutoPage` aceita outro botão (`cta`), sem etapas (`etapas={false}`) e observação da prévia | `/exportacao/`, `/outras-aplicacoes/`, Projeto de Carbono (E6, 14/11/2026) |

## 10. Regras de conteúdo (as mesmas da iAgroSat)

- Todo o texto fica em `content/` (`site.ts` para o global; um arquivo por página ou área). Nenhum texto de página fica dentro de componente.
- Marca: **iAgroIntel** e **iAgroSat**, sempre assim. Nunca use caixa-alta via CSS em nome de marca (`text-transform: none`).
- Números no formato brasileiro: 8,39 mi · 50.000 ha · 0,05° · 1:5.000.000.
- Não inventar texto, número, cliente ou afirmação de produto. Texto novo é marcado "a aprovar" em comentário.
- Datas absolutas nos comentários (13/11/2026, não "ontem").

## 11. Como verificar

**Variáveis de build (L1, decisão 39, 15/11/2026).** As duas valem no momento do build (são `NEXT_PUBLIC_*`):

| Variável | Padrão (não definida) | Lançamento |
|---|---|---|
| `NEXT_PUBLIC_INDEXAR` | Desligada: todas as páginas, home inclusive, com `noindex, nofollow`; `robots.txt` com `Disallow: /` e sem a linha do sitemap; `sitemap.xml` vazio (`lib/indexacao.ts`) | `true`: noindex só nas páginas em rascunho; `robots.txt` liberado, com sitemap |
| `NEXT_PUBLIC_RASCUNHO` | Faixa de rascunho e noindex nas páginas sem conteúdo aprovado (`components/Rascunho.tsx`) | `false`: tira a faixa e o noindex; o build falha se ainda houver pendência ou "A DEFINIR" (`npm run pendencias`) |

- As duas mudam juntas: com só uma delas, o build falha (`scripts/verifica-lancamento.mjs`, no `prebuild`). Homologação = nenhuma definida.
- `scripts/verifica-sitemap.mjs` (`postbuild`) confere o resultado nos dois modos: na homologação, toda página com `noindex, nofollow`, sitemap vazio e `robots.txt` bloqueando tudo; no lançamento, sitemap e noindex batendo.
- `vercel.json`: header `X-Robots-Tag: noindex` em todas as rotas quando o host termina em `.vercel.app` (condição `has` de tipo `host`). Vale sempre, também depois do lançamento: só o domínio próprio é indexado.
- **Como ligar no lançamento:** na Vercel, em Settings › Environment Variables do projeto, crie `NEXT_PUBLIC_INDEXAR=true` e `NEXT_PUBLIC_RASCUNHO=false` no ambiente Production e faça um novo deploy (as variáveis entram no build).

1. `npm run build` sem erro. O site é estático e vai para `out/`.
2. Ver no navegador em 1440 px e em 390 px, com e sem `prefers-reduced-motion`.
3. Seções escuras com `data-header="dark"`: o cabeçalho fica claro sobre elas.

## 12. Ainda a definir (Fase 1 do design system da iAgroIntel)

- ~~Cores de status~~: decididas em 13/11/2026 (`--st-*` em `tokens.css`). Falta o componente selo de status, sempre com rótulo ou forma, nunca só cor.
- ~~Sinal escuro `#25728F`~~: aprovado em 13/11/2026. Falta validar os neutros frios e os tons escuros.
- Componentes próprios: selo de status, bloco de hash e verificação, carimbo, citação de fonte, ressalva, selo de maturidade, tabela documental.
- Logos que faltam (vertical, favicon, ícones, endosso negativo e mono).
- ~~O brilho da abertura (`cl-hero::after`)~~: passou para `--light-rgb` em 13/11/2026.
- Endosso negativo: falta. Enquanto isso, o endosso em cor fica só na parte clara do rodapé (`.ftr-endosso`).
