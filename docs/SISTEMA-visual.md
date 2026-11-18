# Sistema visual — iAgroIntel (base da Fase 1)

Atualizado: 2026-11-13 · Situação: **não iniciado** (ainda não existe design system da iAgroIntel)

## 1. Conferência dos SVGs recebidos (2026-11-13)

| Arquivo | Conferido contra o orquestrador |
|---|---|
| iagrointel-simbolo-cor | OK: Documento #1F4E79 · Céu #8DB8D8 · Tinta #101B2D (parcela maior) · Sinal #4FA3C7 (parcela acesa) · Documento #1F4E79 (triângulo) |
| iagrointel-simbolo-negativo | OK: parcela maior em Papel frio #F4F6F8; demais em Documento, Céu e Sinal |
| iagrointel-simbolo-mono-escuro / mono-claro | OK: tudo #101B2D / tudo #FFFFFF |
| iagrointel-horizontal-cor | OK: "iAgro" #101B2D; "Intel" #1F4E79 |
| iagrointel-horizontal-negativo | OK: "iAgro" #F4F6F8; "Intel" #8DB8D8 |
| iagrointel-horizontal-mono-escuro / mono-claro | OK |
| iagrointel-endosso-cor | OK: horizontal Intel + "uma plataforma" em #1F4E79 + horizontal iAgroSat nas cores da iAgroSat, escala 0,3 |
| iagrosat-horizontal-cor | Recebido (referência da mãe): Campo #2F8F46 · Broto #9BD18B · Noite #17261C · Sol #F2B233 |

**Geometria (FATO, lida dos SVGs):**
- Símbolo: 100 × 100 com raio 24.
- Horizontal: 428,2 × 100. A palavra começa em x ≈ 133, ou seja, o espaço entre símbolo e palavra é de cerca de 1/3 da altura do símbolo.
- Endosso: 429,4 × 156. A linha "uma plataforma" tem x-altura de cerca de 12 unidades.

**PREMISSA a testar na Fase 1:** a linha "uma plataforma" fica abaixo de ~5 px de x-altura quando o endosso tem menos de ~180 px de largura. É um candidato a tamanho mínimo do endosso.

**Não recebidos:** vertical, favicon, ícones 32/180/192/512, avatar; endosso negativo, mono escuro, mono claro, EN e DE.

## 2. Contraste WCAG da paleta (FATO: calculado pela fórmula WCAG 2.x em 2026-11-13)

Limites: AA texto normal ≥ 4,5 · AA texto grande e elementos gráficos ≥ 3,0

| Texto / elemento | Fundo | Razão | Uso permitido |
|---|---|---|---|
| Tinta #101B2D | Papel frio #F4F6F8 | 15,93 | Texto (AAA) |
| Tinta #101B2D | Branco | 17,26 | Texto (AAA) |
| Documento #1F4E79 | Papel frio | 8,00 | Texto (AAA) |
| Documento #1F4E79 | Branco | 8,66 | Texto (AAA) |
| Sinal #4FA3C7 | Papel frio | 2,62 | **Só grafismo decorativo** (falha até para elemento gráfico informativo) |
| Céu #8DB8D8 | Papel frio | 1,94 | **Só grafismo decorativo** |
| Papel frio | Tinta | 15,93 | Texto (AAA) |
| Céu #8DB8D8 | Tinta | 8,20 | Texto (AAA) |
| Sinal #4FA3C7 | Tinta | 6,08 | Texto (AA) |
| Branco | Documento | 8,66 | Texto (AAA) |
| Papel frio | Documento | 8,00 | Texto (AAA) |
| Céu #8DB8D8 | Documento | 4,12 | Texto grande / gráfico apenas (falha AA normal) |

**Consequências para o sistema (RECOMENDAÇÃO):**
1. Sobre fundo claro, Sinal e Céu nunca levam informação sozinhos: nem texto, nem linha de gráfico, nem polígono sem contorno. Para destacar evidência em fundo claro é preciso uma variante escura do Sinal (a definir na Fase 1).
2. Sobre fundo escuro (Tinta), Sinal e Céu funcionam como texto e destaque. Isso favorece mapas e telas de dado em fundo escuro.
3. O logo negativo vai preferencialmente sobre Tinta. Sobre Documento, o "Intel" em Céu fica com 4,12.

## 3. O que o design system precisa definir (escopo da Fase 1)

1. Tokens de cor: paleta base, variante escura do Sinal para fundo claro, cinzas neutros frios, cores de status (conforme / com aviso / não conforme / dado insuficiente) com AA e forma ou rótulo.
2. Tipografia: escala documental Manrope 800/700/500/400 + JetBrains Mono para dados, rótulos e hashes.
3. Grid e densidade: grid de página web e de documento A4, espaçamentos, margens.
4. Componentes: tabela, selo de status, bloco de hash e verificação, carimbo de verificação, cartão de produto, citação de fonte, ressalva, selo de maturidade, botão, campo, navegação, rodapé com endosso.
5. Padrões gráficos derivados do talhão.
6. Tratamento de imagem: Sentinel-2 com atribuição Copernicus, polígonos CAR/PRODES, legendas.
7. Ícones.
8. Versões faltantes do logo (endosso negativo, mono, EN, DE; vertical; favicon; ícones de app).
9. Teste lado a lado com a iAgroSat.
