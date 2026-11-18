# Ideias visuais — iagrointel.com (camada 3, segunda fase)

Versão 2 · 2026-11-16 · Plano aprovado (decisões 44 a 47) · A partir da análise do site da iAgroSat (https://iagrosat.vercel.app/, home e /monitoramento/lavoura/). Objetivo do Rodrigo: o site da iAgroIntel está "sem graça"; deixá-lo mais vivo de navegar, **página por página**, sem perder o tom sóbrio, documental e auditável.

## O que a iAgroSat faz (referência)

- **Abertura da home:** imagem de satélite em tela cheia, um talhão contornado em destaque, título por cima.
- **Antes e depois:** a mesma imagem dividida em cor verdadeira e NDVI; na página interna, a divisória fica no meio da imagem.
- **Movimento no scroll:** títulos que sobem linha a linha; parágrafo que acende palavra por palavra; ilustração de satélite que atravessa a tela; fio verde ligando seções; duas faixas de selos correndo em sentidos opostos.
- **Seções em tela cheia:** mapa de uso do solo com cartão por cima; seção "Como funciona" fixa na tela enquanto as 3 etapas trocam.
- **Ritmo:** fundos alternam escuro, creme e branco; cartões em xadrez; celular de mentira com alertas; números grandes.
- **Páginas internas:** abertura escura com grade sutil e imagem ao lado; título fixo à esquerda enquanto a lista corre à direita.
- **Rodapé:** cartão escuro de chamada que invade o rodapé; colunas de links por área; contatos.

## Ideias para a iAgroIntel

**Imagem como protagonista**
1. **Abertura da home com imagem e polígono:** a imagem de Crédito rural em tela cheia; o contorno de um imóvel se desenha sobre ela ao abrir ("o satélite confere"). Resolve a P34.
2. **Camadas que entram no scroll (páginas de produto):** sobre a imagem Sentinel-2 aparecem, uma por vez, CAR, PRODES, embargo e o selo de status ("▲ com aviso"). O "O que cruza" mostrado, não só escrito.
3. **Antes e depois no Laudo PRODES:** 2019 × atual, com divisória arrastável. O PDF novo do Laudo PRODES já traz antes e depois por polígono.
4. **Faixa de imagem em largura cheia com cartão por cima** (Crédito rural ou Exportação, com a imagem de Patrocínio).
5. **Mosaico de "talhões" na home:** as 7 imagens dos produtos num grid irregular, como as parcelas do símbolo; cada uma leva ao produto; ao passar o mouse, amplia e mostra o nome.

**Aberturas das páginas internas**
6. **Abertura escura com grade de coordenadas:** papel milimetrado, latitude e longitude em mono nas bordas; legenda como carimbo de cena (local, data, sensor).
7. **Alternar fundos escuro e claro** ao longo das páginas de produto (hoje quase tudo é claro).

**Movimento no scroll**
8. **Tagline acendendo palavra a palavra:** "O papel declara. O satélite confere. A instituição decide."
9. **"Como começar" fixo na tela,** com as 4 etapas trocando.
10. **Fio condutor entre seções** (trilha de auditoria), desenhado com o scroll.
11. **Números que contam** (311 → 38, 8.393.915, 1,46 bilhão). O componente CountUp já existe.
12. **Faixa corrida das fontes oficiais** (INPE, SICAR, MapBiomas, IBAMA, Copernicus) e outra das normas. Só como origem do dado, nunca como parceiros (regra 7).

**Peças de documento**
13. **Prévia de laudo:** página de laudo em miniatura; ao passar o mouse numa linha da tabela, o polígono acende no mapa (faz o papel do celular de mentira da iAgroSat). Pode usar páginas dos PDFs de exemplo.
14. **Selo carimbado:** "Triagem: sinal, não prova" entra como carimbo (leve giro e opacidade).
15. **Os 6 produtos em xadrez escuro** com ícones de traço.

**Menu e rodapé**
16. **Menu suspenso de Crédito rural no desktop** com os 6 produtos e miniaturas (a decisão 15 deixou para depois).
17. **Rodapé em colunas por área** (Crédito rural, Exportação, Empresa, Contato) com o cartão de chamada invadindo o rodapé.

## Restrições que pesam

- **Regra de movimento (decisão 44):** só `transform`, `opacity` e `clip-path`, pelos componentes de `components/motion/`; a página funciona completa sem JavaScript e com `prefers-reduced-motion`.
  - Já existem em `components/motion/`: `ScrubText` (8), `HorizontalSection` (9), `DrawLine` (10), `CountUp` (11) e `Marquee` (12). O CSS de `ScrubText`, `HorizontalSection` e `Marquee` saiu na D5 e volta do kit da iAgroSat (`referencia/css/`). Funcionam em todos os navegadores.
  - JavaScript de interação novo: 3 e 13 liberadas; 16 se decide na etapa 10.
- **Imagens proibidas para a iAgroIntel:** órbita de satélite e globo, entre outras. O satélite em traço da iAgroSat não serve; o equivalente são polígonos e camadas.
- **Polígonos (decisão 45):** traçado ilustrativo com rótulo visível, nunca o contorno real de um imóvel. Selo de status sobre imagem real, sempre marcado como exemplo.
- **Prévia de laudo (13):** páginas dos PDFs de exemplo, que já estão em `public/exemplos/`.
- **Desempenho:** imagem em tela cheia pesa no celular (LCP). O H1 em texto continua sendo o LCP; a imagem entra por trás, com a versão de 800 px no celular. Lighthouse conferido a cada etapa.

## O que já existe no site (conferido em 2026-11-16)

- A tagline é o H1 da abertura da home: a ideia 8 não entra na home (repetiria a frase); vai para a ressalva global em Crédito rural.
- `CountUp` (11) já roda na home e nos indicadores.
- O rodapé já tem a caixa escura de chamada invadindo o rodapé (17, em parte). Falta: colunas por área.
- A abertura da iAgroSat (imagem em tela cheia com talhão contornado e painel) é o padrão `hh-*` do kit, que saiu do `padroes.css` na E8.

## Plano aprovado (decisão 47)

Uma página por vez; a seguinte só começa com a anterior aprovada e publicada.

| # | Página ou etapa | Ideias | Observação | Situação |
|---|---|---|---|---|
| 1A | Home: abertura e faixa de fontes | 1, 12 | Imagem de Crédito rural com contorno ilustrativo (P34 fechada); faixa "Origem dos dados" entre a prova e os produtos, ligada à rolagem. Lighthouse celular: 93, LCP 2,9 s | **Concluída em 2026-11-16** (commit `d5f63ca`) |
| 1B | Home: produtos | 5 | Mosaico das imagens no lugar da lista escura (decisão 46) | A fazer |
| 2 | Modelo de página de produto (7 páginas) | 6, 7, 14, 2 | Grade de coordenadas e carimbo de cena com os dados de `content/imagens.ts`; carimbo na ressalva das Perícias; ideia 2 como piloto na Perícia Pré-Crédito | A fazer |
| 3 | Laudo PRODES | 3 | Antes e depois com divisória arrastável | A fazer |
| 4 | Crédito rural | 4, 15, 9, 8 | Página no limite do Lighthouse (90) | A fazer |
| 5 | Exportação e Triagem EUDR | 4, 7 | | A fazer |
| 6 | Como começar | 9, 10 | | A fazer |
| 7 | Tecnologia e Normas | 12, 10, 7 | | A fazer |
| 8 | Exemplos | 13 | | A fazer |
| 9 | Cooperativas e Sobre | 7 | | A fazer |
| 10 | Menu e rodapé | 16, 17 | Globais: por último. Decidir a 16 aqui | A fazer |

Fora: Contato, Privacidade e Termos (esperam o jurídico).

## Para as próximas etapas

- **Kit da iAgroSat:** `C:\PROJETOS\design-system-iagro\referencia` (css/, paginas/, componentes/), só leitura. Do kit vem estrutura, nunca cor: os blocos usam variáveis e o `app/tokens.css` já tem os valores da iAgroIntel. Três cuidados: `--light` em fundo claro (trocar por `--sinal-escuro` ou `--main-text` se leva informação); `--i-*` é a marca irmã (só no endosso); `--sun` e `--clay` são de status e foco.
- **Folga de desempenho da home é pequena** (uma série deu 90; TBT de 50 para 70 a 180 ms com o contorno e o letreiro). A 1B entra sem JavaScript novo e com as imagens em lazy.
- **Letreiro:** sempre ligado à rolagem, nunca automático (WCAG 2.2.2).
