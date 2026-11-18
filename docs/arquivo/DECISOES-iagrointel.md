# Registro de decisões — iAgroIntel

Formato: `[AAAA-MM-DD] · [fase] · [decisão] · [motivo] · [aprovado por]`

Este arquivo guarda as decisões da iAgroIntel. As decisões da iAgroSat ficam no DECISOES.md original. Quando esse arquivo for enviado ao Projeto, as duas partes serão conferidas uma contra a outra.

---

## Decisões da iAgroIntel

1. `[2026-11-13] · Fase 0 · Lógica de nomenclatura por tipo de peça: Perícia (análise completa de imóvel ou carteira; entrega dossiê), Laudo (resposta a uma pergunta específica), Base (dado estruturado para relatório), Triagem (filtro antes de uma declaração). Nomes sem "iAgroSat", sem número de norma, sem "Forense" e sem "Certificado". Nomes oficiais: Perícia Pré-Crédito, Perícia de Carteira, Laudo PRODES, Laudo de Acompanhamento, Base Territorial GRSAC, Triagem EUDR; segunda camada: Projeto de Carbono, Inteligência Territorial · Um nome por produto; o nome diz o que se entrega; a regulação muda e o nome não pode envelhecer junto · Rodrigo`
   - Observação: a palavra "Perícia" depende da decisão em aberto P11 (Perícia × Dossiê). Se P11 for decidida por "Dossiê", esta linha será substituída.
2. `[2026-11-13] · Fase 0 · "Base Territorial GRSAC" no lugar de "Base GRSAC" · O produto entrega só a parte territorial das tabelas do relatório GRSAC; o nome curto sugeriria o relatório inteiro (honestidade técnica) · Rodrigo`
3. `[2026-11-13] · Fase 0 · Mapa do site aprovado (ver MAPA-site.md): Crédito rural como página principal; uma página por produto núcleo no mesmo modelo; Exportação e EUDR; Tecnologia; Normas; Verificar laudo; Sobre; Contato; Privacidade e Termos. Carbono e inteligência territorial numa página secundária "Outras aplicações". Menu: Crédito rural · Exportação · Tecnologia · Normas · Verificar laudo · Contato. Rodapé com "É produtor? Conheça a iAgroSat." e razão social. Bloco explicando a cooperativa que compra das duas marcas · Foco comercial em instituições financeiras e obrigação regulatória (orientação do Carlos); segunda camada presente sem destaque · Rodrigo`
   - Substituída pela decisão 5 (mapa v2).
4. `[2026-11-13] · Fase 0 · Arquivos de trabalho do projeto mantidos em Markdown no Projeto (pasta claude/) e atualizados a cada conversa · Pedido do Rodrigo · Rodrigo`
5. `[2026-11-13] · Fase 4 · Mapa do site v2 aprovado (MAPA-site.md), a partir da prévia "iAgroIntel Crédito Rural" (PREVIA-cooperativas.md): Crédito rural na estrutura da prévia; novas páginas /credito-rural/cooperativas, /como-comecar, /exemplos e /outras-aplicacoes/projeto-de-carbono; redirecionamento 301 da URL de prévia. C1: Projeto de Carbono com página própria em Outras aplicações e bloco curto na Crédito rural, fora dos produtos núcleo. C2: CTA principal do site passa a ser "Como começar". Plano de implementação PLANO-site-v2.md aprovado, com D2 (texto em content/, content/site.ts para o global e um arquivo por área), D3 (só verificação de tipos com tsc agora; ESLint depois) e D4 (submenu de Crédito rural no painel do menu e índice na própria página; lista suspensa no desktop depois) · A prévia já escrita vira a base da página principal; mantém o foco em obrigação regulatória sem perder o material de carbono · Rodrigo`
   - Observação: a oferta "prova técnica sem custo" e "piloto de até 50 imóveis em 60 dias" continua a confirmar (P24); entra com PENDENTE.

## Em aberto (aguardando aprovação)

- **P11. "Perícia" ou "Dossiê"** nos dois produtos de análise completa. Recomendação: **Dossiê Pré-Crédito** e **Dossiê de Carteira**. Argumentos em NOMENCLATURA-produtos.md.

---

## Decisões herdadas da iAgroSat citadas no orquestrador (conferir com o DECISOES.md original)

- **10/11 (ano a confirmar)** · Logo da família: Rota 1 · Talhão. A iAgroIntel deriva pela troca de paleta, sem desenho novo. Logo, símbolo e lockup de endosso da Intel estão aprovados e não serão redesenhados.
- Arquitetura: iAgroIntel é marca endossada. Fórmula: "iAgroIntel — uma plataforma iAgroSat" · EN "an iAgroSat platform" · DE "eine iAgroSat-Plattform".
- Rodapé jurídico: IAGROSAT LTDA · CNPJ 61.579.333/0001-01.
- Stack do site: Next.js (App Router), geração estática, TypeScript, Vercel.
