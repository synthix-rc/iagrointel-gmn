# Pendências — iAgroIntel

Versão 1.4 · 2026-11-16 · P34 encerrada (etapa 1A da home). Versão 1.3 · 2026-11-15 · Segunda rodada do cliente: P10, P14, P32 e P33 encerradas; P7 em parte. Versão 1.2 · 2026-11-14 · Atualizada com as respostas do cliente (planilha `fontes/pendencias-respondido-2026-11-14.xlsx`) e as decisões do Rodrigo de 14/11/2026. Textos a aplicar: `CONTEUDO-respostas.md`. Lista gerada pelo código, por página: `PENDENCIAS-site.md`. A lista anterior está em `arquivo/PENDENCIAS.md`.
Os códigos marcados com * são usados no código do site (componente Pendente e `npm run pendencias`). FONTES continua sendo o código das normas e datas.

## Abertas

### Cliente (iAgroIntel)

| ID | Página | O que falta | Situação em 14/11/2026 |
|---|---|---|---|
| P7 | Triagem EUDR e Exportação | Os dois textos e a sigla DDS foram respondidos em 15/11. Falta: como começa um exportador (etapas próprias, como as de crédito rural)? Até lá, as duas páginas ficam sem etapas (decisão 38). Também: para onde vai o botão de chamada dessas páginas? Hoje leva a /como-comecar/, que é de crédito rural; fica assim até a resposta (Rodrigo, 15/11) | Rodrigo mostra ao cliente a página do Mapa DDS (https://iagrointel.com/ferramentas/eudr-dds/): o nome fica |
| P11 | Verificar laudo | Mecanismo de verificação. Resposta do cliente: "Mecanismo possível: registrar o sha256 de cada laudo na emissão; a página /verificar recebe o código ou o arquivo e diz se confere com o original. O modelo já existe na casa (documentos assinados com sha256). Não está construído para os laudos da iAgroIntel" | A página sai do site até o mecanismo existir (decisão 23) |

### Jurídico da iAgroSat

| ID | Item | O que falta |
|---|---|---|
| P15 | Privacidade | Parecer sobre a minuta (ainda com 18 itens C01 a C18 para confirmar). O site usa a minuta em PT e EN com faixa de rascunho até o parecer. A minuta é a política da iAgroSat: cobre iagrosat.com e app.iagrosat.com e não cita iagrointel.com. O jurídico precisa incluir o iagrointel.com. |
| P16 | Termos | Termos de uso do site (não existem; só há minuta para o MCP). Também furo F4 |
| P17 | Potencial de Carbono da Carteira | Parecer sobre a frase da Mata Atlântica. Até lá vale o texto provisório do cliente (lei conferida); a frase não tem marca no site |

### Rodrigo

| ID | Item | O que falta |
|---|---|---|
| P20 | Formulários e publicação | Destino dos formulários de Contato e Como começar; domínio. Conta: Vercel (decidido) |
| P23 | LinkedIn | URL da página. Até lá, o ícone aparece sem link, marcado com P23. Bloqueia o lançamento |

### Marca (depois do site)

| ID | Item | O que falta |
|---|---|---|
| P26 | Manual de marca v0.1 | Revisar e aprovar. Não afeta o site |
| P29 | Arquivos da iAgroSat | Kit oficial da iAgroSat no ZIP do front-end (pasta brand/). Atenção do furo F3: site, app e kit da iAgroSat usam cores e fontes diferentes. O site da iAgroIntel usa só o lockup de endosso oficial, sem mudança |
| P30 | CMYK da paleta | Prova de gráfica |

## Encerradas em 16/11/2026

| ID | Como fechou |
|---|---|
| P34 | Abertura da home com a imagem Sentinel-2 de Crédito rural atrás do texto e um contorno ilustrativo (etapa 1A, commit `d5f63ca`; decisões 44 e 45) |

## Encerradas em 15/11/2026

| ID | Como fechou |
|---|---|
| P10 | Texto do cliente para o Sobre (CONTEUDO-respostas.md, segunda rodada) |
| P14 | 8 imagens Sentinel-2 do cliente em public/imagens/ (decisão 42) |
| P32* | PDFs 6 e 7 passam para a Triagem EUDR; Laudo PRODES com o PDF novo (marco de 31/07/2019) |
| P33 | PDFs corrigidos pelo cliente, substituídos em public/exemplos/ |

## Encerradas em 14/11/2026

| ID | Como fechou |
|---|---|
| P1 | O bloco "O risco de errar para os dois lados" sai de Crédito rural |
| P2 | Rascunho da Synthix aprovado pelo cliente (abertura e duas marcas) |
| P3 | O que cruza aprovado; O que não faz literal do cliente |
| P4 | Cruza: imóvel a imóvel, nas 26 fontes da Perícia Pré-Crédito. Normas 5.267 (acima de 300 ha) e 5.268/5.303 |
| P5 | O que cruza aprovado (linhas da tabela RSA1) |
| P6 | Problema e público literais do cliente |
| P8 | Método literal do cliente |
| P9 | O que envia aprovado; o bloco de prazos sai |
| P12* | Maturidade confirmada pelo dono: Perícia Pré-Crédito pronto; os outros 6, piloto |
| P13* | PDFs recebidos e conferidos (zip do cliente, 14/11/2026); em `public/exemplos/` |
| P18* | Números oficiais (decisão 27) |
| P19* | Números do documento do cliente valem como informação do cliente, com período e fonte (decisão 28) |
| P21 | Só português na primeira versão (Privacidade também em inglês) |
| P22 | Nova tagline: "O papel declara. O satélite confere. A instituição decide." |
| P24 | Ícones PNG gerados a partir do favicon.svg oficial |
| P25 | Marco de 31/07/2019 conferido; "O que exige" e "Quando" escritos (CONTEUDO-respostas.md) |
| P27 | Favicon, ícones e avatar aprovados (estão em `public/brand/`) |
| P28 | Todas as versões do logo aprovadas |
| P31 | O que cruza aprovado |

## Aba Furos da planilha do cliente

| Furo | Onde ficou |
|---|---|
| F1, F2 | P18 (encerrada) |
| F3 | P29 |
| F4 | P16 |
| F5 | Regra: o site não mede acesso nem usa cookies; se medir, aviso de consentimento antes (decisão 31) |
| F6, F7, F9, F10 | Regras da casa (decisões 29 e 31) |
| F8 | Já atendido pela ressalva global |
| F11 | P13 (encerrada: os PDFs vieram) |
| F12 | Já atendido (decisão 18) |

## Correspondência com os códigos antigos (para o código do site)

| Antigo | Novo |
|---|---|
| P01 | P18 |
| P23 | P19 |
| P07 | P13 |
| P09 | P12 |
| P24 | fechada (decisão 10): tirar a marca |
| FONTES | FONTES (sem mudança) |
