// ---------------------------------------------------------------------------
// Conteúdo das 6 páginas de produto de crédito (docs/PRODUTOS.md).
// Fonte: documento do cliente (MAPA-site.md › Fontes de conteúdo), Produtos 1 a 7, texto LITERAL, conferido
// palavra por palavra na camada 2 (14/11/2026). Os nomes NÃO ficam aqui: cada bloco é indexado pelo slug e o
// nome vem de content/produtos.ts. Onde o documento usa o nome antigo do produto, vale o nome oficial.
// Segunda rodada (14/11/2026): respostas do cliente em docs/CONTEUDO-respostas.md (P3, P4, P5, P12, P25, P31, P17).
//
// Como o documento vira página:
// - texto: os parágrafos do produto no documento, na ordem, literais (abertura da página);
// - entrega / naoFaz: os itens das listas "O que entrega" e "O que não faz" do documento, literais;
// - cruza: os itens que o documento enumera na frase "cruza ... com ...", com a inicial maiúscula;
// - o que nenhuma fonte traz: null → a página mostra "A DEFINIR", com o código de PENDENCIAS.md no comentário.
// Textos aprovados pelo Rodrigo em 14/11/2026 que o documento não tem (abertura de "O que cruza" da Perícia
// Pré-Crédito; "O que entrega" do Laudo PRODES e do Laudo de Acompanhamento; nota da norma do Laudo PRODES) ficam.
// Números do documento (P19) e oficiais (P18): sem etiqueta, com período e fonte no próprio texto (decisões 27 e 28).
// ---------------------------------------------------------------------------

import type { Rico, Valor } from "./valor";
import { fonteCmn5303, norma as linhaNorma, type LinhaNorma } from "./credito-rural";

// Norma relacionada: id = linha da tabela de normas do documento (content/credito-rural.ts); objeto = norma fora
// dessa tabela (ex.: EUDR, Seção 9 do MCR) ou linha da tabela com ajuste próprio da página.
export type RefNorma = LinhaNorma["id"] | LinhaNorma;

export type ConteudoProduto = {
  maturidade: Valor;                  // decisão 25 (P12 encerrada): Pronto ou Piloto, nunca "beta"
  evidencia: string | Rico;           // H2 de evidência (documento do cliente)
  texto?: (string | Rico)[];          // parágrafos da abertura (documento do cliente, literais)
  cruzaIntro?: string;                // frase antes da lista de "O que cruza"
  cruza: (string | Rico)[] | null;    // O que cruza
  entrega: (string | Rico)[] | null;  // O que entrega
  naoFaz: (string | Rico)[] | null;   // O que não faz (sempre visível)
  // Norma relacionada: só a norma que trata do assunto (nunca "cumpre"). Uma norma ou uma lista (ex.: Perícia de
  // Carteira, duas linhas). null = ainda não definida (a seção mostra "A DEFINIR"); "nao-se-aplica" = o produto não
  // tem norma (a seção some).
  norma: RefNorma | RefNorma[] | null | "nao-se-aplica";
  normaNota?: string | Rico;          // frase curta abaixo da tabela (ex.: o que a norma exige e o que o produto não substitui)
  normaOperacao?: string;             // "Na operação": parágrafo no fim da seção Norma relacionada, depois da nota
  // Seção Exemplos sem nenhum exemplo em content/exemplos.ts: "A DEFINIR", com o código no comentário (entra em
  // `npm run pendencias`). Sem o campo, a página mostra o "A DEFINIR" do modelo, que o script não conta.
  semExemplos?: string;
};

// Maturidade confirmada pelo dono (decisão 25; CONTEUDO-respostas.md › Páginas de produto).
export const maturidadePronto: Valor = { valor: "Pronto" };
export const maturidadePiloto: Valor = { valor: "Piloto" };

// Perícia de Carteira: a linha da 5.267 da tabela de normas, com a frase da carteira acrescentada
// (CONTEUDO-respostas.md › Perícia de Carteira; TEXTO NOVO (aprovado em 14/11/2026, P4)).
const cmn5267 = linhaNorma("cmn-5267");
const cmn5267Carteira: LinhaNorma = { ...cmn5267, muda: `${cmn5267.muda} Na carteira, vale só para essas operações.` };

export const conteudoCredito: Record<string, ConteudoProduto> = {
  // Documento do cliente, Produto 1 · Perícia Pré-Crédito
  "pericia-pre-credito": {
    maturidade: maturidadePronto,
    // "26 fontes públicas": número oficial da base, confirmado pelo cliente na P4 (decisão 27).
    evidencia: "Um CAR, 26 fontes públicas, e cada ocorrência com fonte, data e hectares",
    texto: [
      "O analista informa o número do Cadastro Ambiental Rural (CAR) e, se tiver, o polígono da gleba financiada. A perícia cruza o imóvel com os embargos do IBAMA, do ICMBio e de órgãos estaduais, com o PRODES de todos os biomas, terras indígenas, unidades de conservação, territórios quilombolas, assentamentos, parcelas certificadas do Sistema de Gestão Fundiária (SIGEF) e o valor da terra do município.",
      "Quando o banco envia a gleba em arquivo de mapa (KML, KMZ, shapefile, GeoJSON ou WKT), a perícia mede a gleba, e não apenas o imóvel. A parte da gleba fora do CAR aparece como pendência.",
    ],
    cruzaIntro: "Cruza o CAR, ou o polígono da gleba, com:", // aprovado em 14/11/2026
    cruza: [
      "Embargos do IBAMA, do ICMBio e de órgãos estaduais",
      "PRODES de todos os biomas",
      "Terras indígenas",
      "Unidades de conservação",
      "Territórios quilombolas",
      "Assentamentos",
      "Parcelas certificadas do Sistema de Gestão Fundiária (SIGEF)",
      "Valor da terra do município",
    ],
    entrega: [
      "Relatório em PDF e dados em JSON para integração",
      "Imagem Sentinel-2 recente com o imóvel e as ocorrências desenhadas",
      "Embargo em vigor separado de embargo já levantado",
      "Código de verificação (hash) de cada arquivo",
    ],
    naoFaz: [
      "Não decide o crédito",
      "Não é perícia judicial e não tem valor de prova pericial",
      "Não usa dado pessoal: roda só com o CAR",
    ],
    // Decisão 9: norma relacionada = Seção 9 do MCR, com link para a 5.303.
    norma: {
      id: "mcr-secao-9",
      norma: { valor: "Seção 9 do Manual de Crédito Rural (Resoluções CMN 5.193/2024, 5.268/2025 e 5.303/2026)" },
      // TEXTO NOVO (aprovado em 14/11/2026, P25)
      muda: "A Seção 9 do Manual de Crédito Rural (MCR), do Banco Central, reúne os impedimentos sociais, ambientais e climáticos ao crédito rural. Entre eles: imóvel com embargo ambiental, imóvel em unidade de conservação e supressão de vegetação nativa depois de 31/07/2019 na lista do Ministério do Meio Ambiente baseada no PRODES.",
      // TEXTO NOVO (aprovado em 14/11/2026, P25)
      data: { valor: "Em vigor. A consulta à lista do Ministério do Meio Ambiente segue o calendário da Resolução CMN 5.303: 04/01/2027 (acima de 15 módulos fiscais), 01/07/2027 (de 4 a 15) e 03/01/2028 (até 4)." },
      fonte: [fonteCmn5303],
    },
  },

  // Documento do cliente, Produto 2 · "Consulta PRODES" (nome que não se usa no site)
  "laudo-prodes": {
    maturidade: maturidadePiloto,
    evidencia: "O alerta do PRODES vira um laudo: o que a imagem confirma e o que não confirma",
    texto: [
      "Para cada imóvel, a consulta cruza o perímetro com o PRODES de todos os biomas, remove os registros duplicados da base oficial e informa em qual data do cronograma o imóvel se enquadra.",
      // Marco de 31/07/2019 conferido (FONTES-regulatorias.md; P25 encerrada): sem a marca FONTES.
      "Se houver sobreposição com desmatamento posterior a 31 de julho de 2019, o laudo analisa a série de imagens do Sentinel-2, satélite europeu com resolução de 10 metros, antes e depois do evento. Ele informa se as imagens confirmam a supressão. Quando não permitem confirmar, o laudo diz isso, e o item fica para o analista.",
      "O cruzamento não substitui a consulta à lista oficial do Ministério do Meio Ambiente. Ele indica o que o analista deve verificar nessa consulta.",
    ],
    cruza: [
      "Perímetro com o PRODES de todos os biomas",
      "Série de imagens do Sentinel-2, antes e depois do evento",
    ],
    entrega: ["Laudo em PDF com figuras antes e depois de cada polígono"], // aprovado em 14/11/2026 (o documento não tem a lista)
    naoFaz: ["Não substitui a consulta à lista oficial do Ministério do Meio Ambiente"],
    // Ligação aprovada em 14/11/2026 (o Produto 2 não cita norma; vem da tabela de normas do documento).
    norma: "cmn-5268-5303",
    // Aprovado em 14/11/2026 e pelo Revisor (FONTES-regulatorias.md): a norma exige a consulta e o laudo não a substitui.
    normaNota: "As Resoluções CMN 5.268 e 5.303 exigem a consulta à lista oficial do MMA. Este laudo não substitui essa consulta.",
    // TEXTO NOVO (aprovado em 15/11/2026, P32). "Na operação", da frase obrigatória do cliente reescrita pela Synthix
    // (decisão 41; CONTEUDO-respostas.md › Segunda rodada).
    normaOperacao: "Sem desmatamento depois de 31/07/2019, o laudo entrega à instituição a evidência polígono a polígono, com imagem, fonte e data, para a verificação do item 17 da Seção 9 do Manual de Crédito Rural. Com desmatamento, o laudo mostra onde e em que janela de tempo ele aconteceu, e o crédito com recursos controlados ou direcionados passa a depender de documento do órgão ambiental que comprove a regularidade da supressão, como a autorização de supressão de vegetação (ASV) ou o termo de compromisso ambiental.",
  },

  // Documento do cliente, Produto 3 · "Laudo acima de 300 ha (Resolução 5.267)" (nome que não se usa no site)
  "laudo-de-acompanhamento": {
    maturidade: maturidadePiloto,
    evidencia: "Acima de 300 hectares, o satélite acompanha a gleba do plantio à colheita",
    texto: [
      "A partir do polígono da gleba financiada, o laudo acompanha a série Sentinel-2 do desembolso à colheita. Ele registra plantio, pico de vegetação e colheita, e compara a área cultivada com a área financiada, com a diferença em hectares.",
      // "306 hectares" e "março de 2026": confirmados pelo PDF de exemplo (306,5 ha; P13 encerrada).
      "No exemplo de milho safrinha em Jataí (GO), um custeio de 306 hectares contratado em março de 2026, o satélite registrou solo exposto em março, emergência em abril, pico em maio e colheita de junho a julho.",
    ],
    // TEXTO NOVO (aprovado em 14/11/2026, P3): aprovado pelo cliente.
    cruza: [
      "O polígono da gleba financiada com a série de imagens Sentinel-2, do desembolso à colheita: plantio, pico e colheita",
      "A área cultivada com a área financiada",
    ],
    entrega: ["Imagens em cor natural e NDVI da gleba"], // aprovado em 14/11/2026 (o documento não tem a lista)
    // Literal do cliente (P3), do texto revisado de Monitoramento de Lavoura (MAPA-site.md › Fontes de conteúdo).
    naoFaz: [
      "Não substitui a vistoria de campo.",
      "Não mede produtividade.",
      "Uma queda do NDVI, o índice de vegetação medido pelo satélite, mostra onde olhar, mas não a causa: praga, doença, falta de água, colheita ou falha de plantio.",
      "Em período chuvoso, a última imagem limpa pode ter semanas.",
      "A resolução é de 10 m: talhão pequeno tem poucos pixels.",
    ],
    norma: "cmn-5267", // documento, Produto 3 (nome do produto cita a Resolução 5.267)
  },

  // Documento do cliente, Produtos 4 e 5 · "Carteira da cooperativa e lote do banco": um produto só (decisão 2)
  "pericia-de-carteira": {
    maturidade: maturidadePiloto,
    // Números do teste de outubro de 2026 (período no texto abaixo; decisão 28).
    evidencia: "200 imóveis num lote, 4.704 verificações independentes, nenhuma divergência",
    texto: [
      "A cooperativa ou o banco envia a lista de CARs da carteira. A plataforma devolve uma matriz com o resultado de cada imóvel, a fonte, a data e a pendência, e o resumo da carteira. O analista revisa os casos com sinal; os demais seguem o fluxo normal.",
      "No teste de outubro de 2026, um lote de 200 CARs reais foi conferido contra consultas diretas ao banco de dados em 4.704 verificações, sem divergência. O teste verifica a consistência do processamento, não a exatidão das fontes públicas.",
    ],
    // Literal do cliente (P4; decisão 33).
    cruza: ["Cada imóvel da carteira, um a um, nas mesmas 26 fontes públicas da Perícia Pré-Crédito."],
    entrega: [
      "Matriz por imóvel em planilha e JSON",
      "Resumo da carteira em PDF",
      "Fila de revisão para o analista",
    ],
    naoFaz: [
      "Não certifica cumprimento integral do Manual de Crédito Rural",
      "Não cruza dados de outras instituições",
    ],
    // Normas relacionadas (decisão 33): as linhas da tabela de normas, a 5.267 com a frase da carteira.
    norma: [cmn5267Carteira, "cmn-5268-5303"],
  },

  // Documento do cliente, Produto 6 · "Base do relatório GRSAC"
  "base-territorial-grsac": {
    maturidade: maturidadePiloto,
    evidencia: "As tabelas do GRSAC saem da mesma carteira",
    texto: [
      "A cooperativa ou o banco envia a carteira com o CAR, o valor de exposição, o setor e a natureza da contraparte de cada operação. A plataforma devolve uma planilha com as tabelas do relatório preenchidas na parte que depende do território. A instituição completa o que depende dos seus dados internos e responde pela divulgação.",
    ],
    // Aprovado pelo cliente em 14/11/2026 (P5): frase de entrada e linhas da tabela RSA1 da Resolução BCB 586.
    cruzaIntro: "A instituição envia, para cada operação, o CAR, o valor de exposição, o setor e a natureza da contraparte.",
    cruza: [
      "Unidade de conservação, de proteção integral e de uso sustentável",
      "Terra indígena declarada ou homologada",
      "Área embargada pelo IBAMA ou pelo ICMBio",
      "Supressão registrada pelo PRODES",
    ],
    entrega: [
      "Tabela RSA1: carteira em imóveis com unidade de conservação, terra indígena, embargo e supressão registrada",
      "Tabela CRFR1 Agro: exposição por setor e região",
      "Tabela CRFR2: exposição a seca e a chuva intensa",
      "Aba de lacunas com o motivo de cada linha não preenchida",
    ],
    naoFaz: [
      "Não é o relatório: a divulgação é da instituição",
      "Não preenche linhas que exigem CPF ou CNPJ da contraparte",
    ],
    // Ligação aprovada em 14/11/2026 (o Produto 6 não cita norma; vem da tabela de normas do documento).
    norma: "bcb-586",
  },

  // Documento do cliente, Produto 7 · "Carbono na carteira". 6º produto de Crédito rural (decisão 5).
  // "Não garante emissão de créditos nem receita" fica: é negação, não promessa.
  "potencial-de-carbono-da-carteira": {
    maturidade: maturidadePiloto,
    // Números do estudo de outubro de 2026 (período no texto abaixo; decisão 28).
    evidencia: "139 de 150 imóveis do Cerrado têm vegetação nativa acima do mínimo legal: 62.730 hectares",
    texto: [
      "O estudo parte da mesma carteira de CARs. Ele mede o excedente de vegetação nativa acima da reserva legal e da área de preservação permanente, verifica se a área pode ser convertida legalmente, estima o estoque de carbono com o mapa de biomassa da Agência Espacial Europeia e indica a rota possível no Verified Carbon Standard (VCS), o padrão mantido pela organização Verra. No fim, monta o rascunho do documento de descrição do projeto (PDD) no modelo oficial, com cada número ligado à fonte.",
      // Frase da Mata Atlântica: texto provisório do cliente até o parecer do jurídico (P17 aberta, sem marca no site).
      // "a lei impede a rota de desmatamento evitado" → "a Lei 11.428/2006 restringe ... evitado" (lei conferida).
      "O estudo de exemplo usou 150 imóveis de CAR público do Cerrado, em Goiás e Mato Grosso, em outubro de 2026. Em 30 deles, a área precisa de conferência contra o mapa oficial da Lei da Mata Atlântica. Numa carteira de 290 imóveis na Mata Atlântica, a Lei 11.428/2006 restringe a supressão da Mata Atlântica, o que limita a rota de desmatamento evitado, e o estudo registra essa conclusão.",
    ],
    // Aprovado pelo Rodrigo em 14/11/2026 (P31), a partir do documento do cliente.
    cruza: [
      "A carteira de CARs com a vegetação nativa acima da reserva legal e da área de preservação permanente (APP)",
      "A possibilidade legal de conversão",
      "O estoque de carbono, pelo mapa de biomassa da ESA",
    ],
    entrega: [
      "Triagem da carteira com estudo de viabilidade",
      "Estoque de carbono por imóvel e por estrato",
      "Rascunho de PDD no modelo Verra",
    ],
    naoFaz: [
      "Estoque não é crédito emitido",
      "Não garante emissão de créditos nem receita",
      "O PDD final exige especialista credenciado",
    ],
    norma: "nao-se-aplica", // decisão 20: o documento não cita norma; a seção "Norma relacionada" some
  },
};
