# Site da iAgroIntel

Site estático em Next.js 15 (App Router, TypeScript, `output: "export"`), publicado na Vercel. O sistema visual é herdado do site da iAgroSat (empresa mãe), com a paleta própria da iAgroIntel.

## Antes de qualquer tarefa de página ou estilo
1. Leia `docs/DESIGN.md` (sistema visual) e, se existir, `docs/SISTEMA-visual.md` (marca e contraste da iAgroIntel).
   Para estrutura e conteúdo: `docs/MAPA-site.md` (fonte única das páginas, menu e rodapé), `docs/PRODUTOS.md` (nomes e rotas dos produtos), `docs/DECISOES-iagrointel.md` (decisões vigentes), `docs/PENDENCIAS.md` (códigos de pendência), `docs/FONTES-regulatorias.md` (normas conferidas) e `docs/CONTEUDO-respostas.md` (textos das pendências resolvidas; fontes em `docs/fontes/`).
   A pasta `docs/arquivo/` guarda versões antigas, só para histórico: não é referência.
   O texto vem das fontes listadas no MAPA-site.md (documento do cliente e páginas existentes). O que nenhuma fonte traz fica "A DEFINIR".
2. Reaproveite os padrões de `app/padroes.css` e os componentes de `components/motion/` e `components/padroes/`. Não crie estilo novo quando já existe um padrão.
3. Cor só em `app/tokens.css`. Nenhum hex de marca em outro arquivo.

## Regras
- Todo o texto fica em `content/`, em português do Brasil: `content/site.ts` para o que é global (empresa, menu, rodapé) e um arquivo por página ou área (`content/inicio.ts` etc.). Nenhum texto de página dentro de `.tsx`.
- Nunca inventar texto, número, cliente ou afirmação de produto. Texto novo leva o comentário `// TEXTO NOVO (a aprovar)`.
- A marca se escreve **iAgroIntel** e **iAgroSat**, nunca em caixa-alta (nem via CSS).
- Números no formato brasileiro (8,39 mi · 50.000 ha).
- Contraste: Sinal (#4FA3C7) e Céu (#8DB8D8) nunca levam informação sozinhos em fundo claro (ver docs/DESIGN.md §3).
- Movimento só com transform, opacity e clip-path, pelos componentes de components/motion/ (GSAP e Lenis). A página funciona completa sem JavaScript e com prefers-reduced-motion: nesse caso o conteúdo aparece parado e inteiro. JavaScript de interação novo só onde uma decisão registrada liberar (hoje: decisão 44).
- Prefixo novo de CSS: confira antes que ele não existe (lista em docs/DESIGN.md §8).
- Antes de dizer que terminou: `npm run typecheck` e `npm run build` sem erro e conferência em 1440 px e 390 px. (ESLint ainda não está instalado: decisão 18.)
- Commit ou push só quando eu pedir.
