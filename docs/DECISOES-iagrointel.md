# Decisões vigentes — iAgroIntel

Versão 1.1 · 2026-11-14 · Só o que vale hoje. Decisões 22 a 35 acrescentadas com as respostas do cliente; 12 e 14 atualizadas. Decisões 36 a 43 em 2026-11-15. Decisões 44 a 47 em 2026-11-16 (visual, página por página). O histórico (decisões 1 a 6 de 13 e 14/11) está em `arquivo/DECISOES-iagrointel.md`.
Formato: `[data] · [decisão] · [motivo] · [aprovado por]`. As decisões da iAgroSat ficam no DECISOES.md da iAgroSat.

## Conteúdo e produtos

1. `[2026-11-14] · O documento https://iagrointel.com/iagrointel-cooperativas-43d07d5fa0bd727b/ é a referência oficial de produtos e conteúdo de Crédito rural · Último documento enviado pelo cliente · Rodrigo`
2. `[2026-11-14] · Crédito rural tem 6 produtos, nesta ordem e com estes nomes: Perícia Pré-Crédito · Laudo PRODES · Laudo de Acompanhamento · Perícia de Carteira · Base Territorial GRSAC · Potencial de Carbono da Carteira (ver PRODUTOS.md) · Os produtos 4 e 5 do documento têm o mesmo conteúdo e viram um só; os nomes dizem o que o produto entrega · Rodrigo`
3. `[2026-11-14] · Laudo de Acompanhamento leva o subtítulo "Operações acima de 300 ha · Resolução CMN 5.267" · O gancho regulatório fica visível sem prender o nome à norma · Rodrigo`
4. `[2026-11-14] · "Perícia" é mantido (Perícia Pré-Crédito e Perícia de Carteira), com a ressalva fixa "Análise técnica de triagem, sem valor de perícia judicial" no topo das duas páginas · O cliente usa o nome · Rodrigo`
5. `[2026-11-14] · Potencial de Carbono da Carteira é produto de Crédito rural (exceção aprovada à lógica de nome por tipo de peça). Outros produtos de crédito de carbono ficam fora do site por enquanto e, quando existirem, terão página de primeiro nível · O produto parte da carteira de crédito; os futuros produtos de carbono não · Rodrigo`
6. `[2026-11-14] · Exportação é item de primeiro nível do menu, com a Triagem EUDR (versão completa, paga). Título da página: "Exportação para a União Europeia · EUDR". O Mapa DDS gratuito é a versão de entrada da Triagem EUDR · O menu nomeia o mercado, não a norma · Rodrigo`
7. `[2026-11-14] · As ferramentas existentes (Mapa DDS, Gerador GeoJSON, página Ferramentas) entram como links para os endereços atuais, sem alteração: seção "Ferramentas gratuitas" em Exportação e link "Ferramentas" no rodapé. A manutenção é do cliente; elas serão trazidas para dentro do site depois · Foco em estrutura e conteúdo · Rodrigo`
8. `[2026-11-14] · Outras aplicações sai do site; Inteligência Territorial fica fora até ter descrição · O carbono virou produto e a página ficaria vazia · Rodrigo`
9. `[2026-11-14] · Normas conferidas no texto oficial (Res. CMN 5.267, 5.268 e 5.303; Res. BCB 586; Regulamento (UE) 2023/1115) e textos aprovados: "A consulta obrigatória ao PRODES volta em 4 de janeiro de 2027"; abertura de Crédito rural sem "três normas"; GRSAC limitado aos segmentos S1 a S4; datas do EUDR (30/12/2026 grandes e médios · 30/06/2027 micro e pequenos); norma da Perícia Pré-Crédito = Seção 9 do MCR (Res. CMN 5.193/2024, 5.268/2025 e 5.303/2026) · Pesquisa registrada em FONTES-regulatorias.md · Rodrigo`
10. `[2026-11-14] · A oferta de Como começar (prova técnica sem custo com operações de safra encerrada; piloto de até 50 imóveis em 60 dias) vale como está no documento do cliente · Está no documento oficial · Rodrigo`

## Estrutura e navegação

11. `[2026-11-14] · Sitemap fechado conforme MAPA-site.md (versão 3) · Rodrigo`
12. `[2026-11-14] · Menu: Crédito rural · Exportação · Tecnologia · Normas (Verificar laudo saiu: decisão 23). À direita, o link de texto "Acessar plataforma ↗" (app.iagrointel.com) e um único botão de destaque, "Como começar" · Um destaque só para quem ainda não é cliente; o link atende quem já é · Rodrigo`
13. `[2026-11-14] · A seta ↗ aparece só em "Acessar plataforma". Nenhum outro link leva seta · Rodrigo`
14. `[2026-11-14] · Exportação fica no menu: o cliente enviou o conteúdo (P6 e P7). Verificar laudo: ver decisão 23 · Rodrigo`
15. `[2026-11-13] · Submenu de Crédito rural no painel do menu e índice de âncoras na própria página; lista suspensa no desktop fica para depois · Rodrigo`

## Método e repositório

16. `[2026-11-14] · O site é construído por camadas: 0 documentos · 1 esqueleto · 2 conteúdo e pendências · 3 design e interatividade · 4 lançamento. Cada camada termina com aprovação · Rodrigo`
17. `[2026-11-14] · Documentos antigos arquivados em claude/arquivo/ (Projeto) e docs/arquivo/ (repositório). Os documentos de trabalho ficam em Markdown na pasta claude/ e são atualizados a cada conversa · Rodrigo`
18. `[2026-11-13] · Repositório synthix-rc/iagrointel: texto em content/ (content/site.ts para o global e um arquivo por área); verificação de tipos com tsc (ESLint depois); todo número, data ou norma sem fonte conferida leva código de pendência, e o build de lançamento falha enquanto houver algum; a faixa de rascunho e o noindex saem juntos, por página · Rodrigo`

## Conteúdo do site (camada 2)

19. `[2026-11-14] · O texto do site é o literal das fontes (documento do cliente e página de ferramentas), trocando só os nomes de produto pelos oficiais e mantendo as correções de norma da decisão 9. A ressalva global passa a ser o aviso final literal do documento: "Nenhuma saída decide crédito. A iAgroIntel organiza a evidência territorial com fonte e data; a decisão e a responsabilidade continuam com a instituição. Os resultados são uma triagem. Indicam sinais e não constituem prova." · O documento do cliente é a referência (decisão 1) · Rodrigo`
20. `[2026-11-14] · Potencial de Carbono da Carteira não tem norma relacionada (a seção não aparece): o documento não cita norma, e VCS/Verra é padrão de mercado. A contagem da tabela RSA1 entra como exemplo na Base Territorial GRSAC. Como começar, etapa 4, lista os 6 produtos · Rodrigo`
21. `[2026-11-14] · A Triagem EUDR abre com o texto de "Solicitar acesso" da página de ferramentas; os cartões das ferramentas usam os títulos literais dela. A abertura com "8,4 mi" e a ferramenta CONAB ficam só na página de ferramentas · Rodrigo`

## Respostas do cliente (camada 2, segunda rodada)

22. `[2026-11-14] · As respostas do cliente na planilha de pendências (docs/fontes/pendencias-respondido-2026-11-14.xlsx) são fonte de conteúdo. Os textos a aplicar estão em CONTEUDO-respostas.md · O cliente respondeu por escrito · Rodrigo`
23. `[2026-11-14] · Verificar laudo sai do site (menu, painel, rota e sitemap) até existir o mecanismo de verificação. A P11 fica aberta, com a resposta do cliente · O mecanismo ainda não está construído · Rodrigo`
24. `[2026-11-14] · Crédito rural sem o bloco "O risco de errar para os dois lados" · O documento do cliente não trata do tema · Rodrigo e cliente`
25. `[2026-11-14] · Maturidade: Perícia Pré-Crédito, pronto; Laudo PRODES, Laudo de Acompanhamento, Perícia de Carteira, Base Territorial GRSAC, Potencial de Carbono da Carteira e Triagem EUDR, piloto. Nunca "beta" nem "beta privado" · Confirmado pelo dono · Rodrigo`
26. `[2026-11-14] · Tagline: "O papel declara. O satélite confere. A instituição decide." · Liga o produto (conferir) ao cliente (a instituição decide) e repete a ideia da ressalva global · Rodrigo`
27. `[2026-11-14] · Números oficiais da base: 8.393.915 cadastros no CAR; 132 fontes oficiais na base; 26 fontes públicas na Perícia Pré-Crédito; 1,46 bilhão de registros (contagem de julho de 2026); "40 anos de uso do solo" com a fonte MapBiomas Coleção 10 (1985–2024); 88% fica, com a conta visível (311 → 38 = 87,8%); embargo, se citado, só 115.863 CARs em vigor (outubro de 2026, 11 órgãos). "1,19 bilhão" e "130+" saem · Números da casa, com fonte (P18) · Rodrigo`
28. `[2026-11-14] · Os números do documento do cliente valem como informação do cliente, sempre com período e fonte (P19) · O documento é a referência (decisão 1) e cita SICOR e SICAR · Rodrigo e cliente`
29. `[2026-11-14] · Datas: mês e ano nas datas de referência ("julho de 2026"); dia completo nos prazos e marcos de norma e nas datas de acesso de fonte · Regra da casa (furo F10) com exceção para normas · Rodrigo`
30. `[2026-11-14] · Primeira versão só em português; a Privacidade sai em português e inglês (/privacidade/ e /privacidade/en/), com a minuta do cliente e faixa de rascunho até o parecer do jurídico. Publicação na Vercel. LinkedIn sem endereço por enquanto: o botão aparece sem link · P15, P20, P21 e P23 · Rodrigo`
31. `[2026-11-14] · Regras da casa (aba Furos): nenhum preço no site; nunca "dados licenciados" nem "base vendável"; o site não mede acesso nem usa cookies, e se medir entra aviso de consentimento antes · Furos F5, F7 e F9 · Rodrigo`
32. `[2026-11-14] · Exemplos: os PDFs e a planilha do cliente vão para public/exemplos/ (os dois laudos de Jataí recomprimidos, de cerca de 8 MB para cerca de 1 MB). Entram os dois casos novos da Perícia Pré-Crédito (café em MG; pecuária no Pará). Os dois PDFs de confirmação de desmatamento esperam a P32 · P13 · Rodrigo`
33. `[2026-11-14] · Perícia de Carteira: o que cruza é imóvel a imóvel, nas 26 fontes da Perícia Pré-Crédito; normas relacionadas: Resolução CMN 5.267 (só operações acima de 300 ha) e Resoluções CMN 5.268 e 5.303 · Resposta do cliente (P4); normas já conferidas · Rodrigo`
34. `[2026-11-14] · A linha do tempo e a galeria de imagens indicadas pelo cliente são da iAgroSat e não entram como fonte. Sobre: rascunho da Synthix a partir do ORQUESTRADOR, a aprovar (P10). Imagens: P14 aberta · Rodrigo`
35. `[2026-11-14] · Ícones PNG (32, 180, 192 e 512 px) gerados a partir do favicon.svg oficial, sem mudar o desenho. Manual de marca e CMYK ficam para depois do site · P24, P26 e P30 · Rodrigo`

## Design (camada 3)

36. `[2026-11-15] · Home, link do dossiê de exemplo: o texto passa a ser "Ver um dossiê de exemplo (anonimizado)". Sai "laudo real, hash SHA-256 verificável" · A verificação de laudos ainda não existe no site (P11, decisão 23) · Rodrigo`
37. `[2026-11-15] · Cooperativas: a seção de indicador sai. Os números (22,3% e 390 cooperativas) e a fonte (SICOR, 2025) ficam só na abertura · A seção repetia a abertura (auditoria D1, M3) · Rodrigo`
38. `[2026-11-15] · Exportação e Triagem EUDR ficam sem as etapas de Como começar, que são de crédito rural (safra encerrada, imóveis, os 6 produtos). O botão de chamada fica no fim da seção da Triagem EUDR (Exportação) e na abertura (Triagem EUDR). Exportação ganha a ressalva global no fim, como as outras páginas de segmento e produto · O documento do cliente só descreve como começar em crédito rural; pergunta ao cliente na P7 · Rodrigo`

## Lançamento (camada 4)

39. `[2026-11-15] · Homologação na Vercel, no projeto isolado (https://iagrointel.vercel.app/), sem o domínio iagrointel.com. Enquanto o site não for lançado, nenhuma página é indexada: uma chave única (NEXT_PUBLIC_INDEXAR, desligada por padrão) põe noindex em todas as páginas, home inclusive, e faz o robots.txt bloquear tudo. O endereço .vercel.app fica sempre com noindex, mesmo depois do lançamento · O deploy de produção num .vercel.app pode ser indexado, e a home não tinha noindex · Rodrigo`
40. `[2026-11-15] · O documento https://iagrointel.com/respostas-site-43cf99efd2dc667f/ (segunda rodada de respostas do cliente) é fonte de conteúdo. Textos a aplicar em CONTEUDO-respostas.md, seção "Segunda rodada" · Rodrigo`
41. `[2026-11-15] · Laudo PRODES, frase "Na operação": a frase obrigatória do cliente ("serve como comprovação para o crédito") foi reescrita pela Synthix, porque contradiz a ressalva global, o próprio laudo ("triagem: sinal, não prova") e a regra de que quem decide é a instituição. A lista de documentos ficou só com o que a Res. CMN 5.303 confirma (ASV, ato equivalente e termo de compromisso ambiental); "plano de recuperação" e "termo de ajustamento de conduta" saíram por não estarem confirmados · Rodrigo delegou a redação à Synthix`
42. `[2026-11-15] · Imagens Sentinel-2 do cliente (8, sem texto, de locais diferentes dos da iAgroSat) convertidas para WebP em duas larguras (2.400 e 1.600 px); legenda com o município de maior área do quadro; Triagem EUDR com a legenda de região pedida pelo cliente · P14 · Rodrigo`
43. `[2026-11-15] · A faixa de rascunho sai de 15 páginas com conteúdo aprovado: Crédito rural, Cooperativas, os 6 produtos (Potencial de Carbono com o texto provisório da P17), Exportação, Triagem EUDR (a P7 que falta não é texto), Tecnologia, Normas, Como começar e Exemplos. Fica em Contato (P20), Privacidade e Privacy (P15) e Termos (P16). A indexação continua desligada no site inteiro (decisão 39) · Rodrigo`

## Visual, página por página (segunda fase da camada 3)

44. `[2026-11-16] · Regra de movimento reescrita: movimento só com transform, opacity e clip-path, pelos componentes de components/motion/ (GSAP e Lenis, já em uso); a página funciona completa sem JavaScript e com prefers-reduced-motion. JavaScript de interação novo liberado para as ideias 3 (antes e depois do Laudo PRODES) e 13 (prévia de laudo); a ideia 16 (menu suspenso) se decide na última etapa. O Code atualiza o CLAUDE.md e o DESIGN.md na etapa 1A · A regra "sem JavaScript" não descrevia o site, que já anima com GSAP; o DESIGN.md §1 já dizia "funciona sem JavaScript" · Rodrigo`
45. `[2026-11-16] · Polígonos sobre imagem Sentinel-2 (ideias 1 e 2): traçado ilustrativo, nunca o contorno real de um imóvel do CAR, com rótulo visível (proposta: "contorno ilustrativo"; texto novo, aprovado na etapa em que entrar). Selo de status sobre imagem de lugar real sempre marcado como exemplo · O contorno real identifica um imóvel, e a home diz "identidade do produtor jamais exibida" · Rodrigo`
46. `[2026-11-16] · Produtos na home em mosaico de imagens (ideia 5); produtos em xadrez escuro (ideia 15) em Crédito rural · Rodrigo`
47. `[2026-11-16] · Ordem do trabalho visual, uma página por vez, a seguinte só começa com a anterior aprovada e publicada: 1 Home (1A abertura com imagem e polígono + faixa de fontes; 1B mosaico) · 2 Modelo de página de produto · 3 Laudo PRODES · 4 Crédito rural · 5 Exportação e Triagem EUDR · 6 Como começar · 7 Tecnologia e Normas · 8 Exemplos · 9 Cooperativas e Sobre · 10 Menu e rodapé. Contato, Privacidade e Termos ficam fora até o jurídico. Detalhe em IDEIAS-visuais.md · Rodrigo`

## Herdadas da iAgroSat (conferir com o DECISOES.md da iAgroSat)

- Logo da família: Rota 1 · Talhão. A iAgroIntel deriva pela troca de paleta, sem desenho novo. Logo, símbolo e lockup de endosso aprovados; não são redesenhados.
- Arquitetura: iAgroIntel é marca endossada. "iAgroIntel — uma plataforma iAgroSat" · EN "an iAgroSat platform" · DE "eine iAgroSat-Plattform".
- Rodapé jurídico: IAGROSAT LTDA · CNPJ 61.579.333/0001-01.
- Stack do site: Next.js (App Router), geração estática, TypeScript, Vercel.
