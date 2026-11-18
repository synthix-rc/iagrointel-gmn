// ---------------------------------------------------------------------------
// Página /tecnologia/: docs/MAPA-site.md v3 › Demais páginas › Tecnologia ("Imagens Sentinel-2, bases oficiais,
// formatos de entrada, processamento, teste de consistência e limites, apresentados como a tecnologia iAgroSat").
// Texto: frases do documento do cliente, LITERAIS, tiradas das descrições dos produtos (o produto de origem está
// no comentário de cada item). Nenhuma frase nova. Nomes das seções = os do MAPA-site.md.
// O método de classificação dos alertas PRODES: resposta literal do cliente (P8 encerrada, 14/11/2026).
// ---------------------------------------------------------------------------
import type { Rico } from "./valor";

export type SecaoTecnologia = { id: string; rotulo: string; titulo: string; itens: (string | Rico)[] };

export const paginaTecnologia = {
  rotulo: "A tecnologia iAgroSat", // MAPA-site.md (Tecnologia: apresentada como "a tecnologia iAgroSat")
  titulo: "Tecnologia",            // nome da página no mapa
  // Frase literal de CONTEUDO-respostas.md › Sobre (P10): relação entre a tecnologia da iAgroSat e a iAgroIntel.
  lead: "A iAgroSat atende quem cuida da própria terra. A iAgroIntel usa a mesma tecnologia, com imagens Sentinel-2 e uma base reconciliada de dados públicos, para organizar a evidência territorial de cada imóvel, com fonte e data.",
  // Imagem Sentinel-2 da abertura (content/imagens.ts › pericia-de-carteira: vista regional de São Desidério, BA).
  imagemAbertura: "pericia-de-carteira",
  // Selos da abertura (.pl-selos .cl-selos, padrão de monitoramento__uso-do-solo.tsx): termos literais das seções abaixo.
  selos: [
    "Sentinel-2 · 10 m",
    "Earth Search · Element 84",
    "Código de verificação (hash)",
    "Só com o CAR · sem dado pessoal",
  ],
  // Rótulo do índice de âncoras na base da abertura (mesmo padrão cr-indice de /credito-rural/).
  indiceRotulo: "Nesta página",
  // Faixa .tiles da seção "Bases oficiais" (nomes literais do item 1 de Bases oficiais e de content/inicio.ts › fontes).
  basesTiles: [
    "IBAMA",
    "ICMBio",
    "Órgãos estaduais",
    "INPE · PRODES",
    "Terras indígenas",
    "Unidades de conservação",
    "Territórios quilombolas",
    "Assentamentos",
    "INCRA · SIGEF",
    "SICAR",
  ],
  // Selos dos formatos aceitos na seção "Formatos de entrada" (termos literais do item 2 da seção).
  formatosSelos: ["CAR", "KML", "KMZ", "Shapefile", "GeoJSON", "WKT"],
  // Números da seção "Teste de consistência" (padrão .cl-nums com CountUp, tirados literalmente do texto da P19).
  consistenciaNumeros: [
    { valor: "200", rotulo: "CARs reais no lote conferido" },
    { valor: "4.704", rotulo: "verificações contra consultas diretas ao banco de dados" },
    { valor: "0", rotulo: "divergências no processamento" },
  ],
  secoes: [
    {
      id: "sentinel-2",
      rotulo: "01 · Sensoriamento remoto",
      titulo: "Imagens Sentinel-2", // MAPA-site.md
      itens: [
        // Produto 2 (Laudo PRODES)
        // Marco de 31/07/2019 conferido (FONTES-regulatorias.md): sem a marca FONTES.
        "Se houver sobreposição com desmatamento posterior a 31 de julho de 2019, o laudo analisa a série de imagens do Sentinel-2, satélite europeu com resolução de 10 metros, antes e depois do evento.",
        // Produto 3 (Laudo de Acompanhamento)
        "A partir do polígono da gleba financiada, o laudo acompanha a série Sentinel-2 do desembolso à colheita.",
        // Produto 1 (Perícia Pré-Crédito), O que entrega
        "Imagem Sentinel-2 recente com o imóvel e as ocorrências desenhadas",
      ],
    },
    {
      id: "bases-oficiais",
      rotulo: "02 · Cruzamento territorial",
      titulo: "Bases oficiais", // MAPA-site.md
      itens: [
        // Produto 1 (Perícia Pré-Crédito)
        "A perícia cruza o imóvel com os embargos do IBAMA, do ICMBio e de órgãos estaduais, com o PRODES de todos os biomas, terras indígenas, unidades de conservação, territórios quilombolas, assentamentos, parcelas certificadas do Sistema de Gestão Fundiária (SIGEF) e o valor da terra do município.",
        // Tabela de normas (linha das Resoluções CMN 5.268 e 5.303)
        "PRODES, o mapeamento anual de desmatamento do Instituto Nacional de Pesquisas Espaciais (INPE)",
      ],
    },
    {
      id: "formatos",
      rotulo: "03 · Geometria e cadastro",
      titulo: "Formatos de entrada", // MAPA-site.md
      itens: [
        // Produto 1 (Perícia Pré-Crédito)
        "O analista informa o número do Cadastro Ambiental Rural (CAR) e, se tiver, o polígono da gleba financiada.",
        "Quando o banco envia a gleba em arquivo de mapa (KML, KMZ, shapefile, GeoJSON ou WKT), a perícia mede a gleba, e não apenas o imóvel. A parte da gleba fora do CAR aparece como pendência.",
        // Produtos 4 e 5 (Perícia de Carteira)
        "A cooperativa ou o banco envia a lista de CARs da carteira.",
      ],
    },
    {
      id: "processamento",
      rotulo: "04 · Esteira de verificação",
      titulo: "Processamento", // MAPA-site.md
      itens: [
        // Produto 2 (Laudo PRODES)
        "Para cada imóvel, a consulta cruza o perímetro com o PRODES de todos os biomas, remove os registros duplicados da base oficial e informa em qual data do cronograma o imóvel se enquadra.",
        // Produtos 4 e 5 (Perícia de Carteira)
        "A plataforma devolve uma matriz com o resultado de cada imóvel, a fonte, a data e a pendência, e o resumo da carteira.",
        // Produto 1 (Perícia Pré-Crédito), O que entrega e O que não faz
        "Código de verificação (hash) de cada arquivo",
        "Não usa dado pessoal: roda só com o CAR",
      ],
    },
    {
      id: "consistencia",
      rotulo: "05 · Outubro de 2026",
      titulo: "Teste de consistência", // MAPA-site.md
      itens: [
        // Produtos 4 e 5 (Perícia de Carteira)
        // Números do documento, com período (decisão 28; P19 encerrada).
        "No teste de outubro de 2026, um lote de 200 CARs reais foi conferido contra consultas diretas ao banco de dados em 4.704 verificações, sem divergência. O teste verifica a consistência do processamento, não a exatidão das fontes públicas.",
      ],
    },
    {
      id: "classificacao-prodes",
      rotulo: "06 · Método",
      titulo: "Classificação dos alertas PRODES", // TEXTO NOVO (aprovado em 15/11/2026): rótulo da seção (P8)
      // Método: literal do cliente (CONTEUDO-respostas.md › Tecnologia; P8 encerrada), dividido nas 4 frases originais sem alterar nenhuma palavra.
      itens: [
        "O PRODES, do INPE, é tratado como sinal.",
        "Cada polígono do PRODES depois do marco é conferido na série Sentinel-2 do próprio polígono antes de entrar no laudo: a nuvem é medida sobre o polígono, e a cena só é usada com pelo menos 70% dos pixels livres.",
        "Sem confirmação, o polígono aparece como \"a confirmar\", nunca como desmatamento.",
        "As duplicatas da base do PRODES são removidas antes da soma. As imagens vêm do catálogo público Earth Search, da Element 84.",
      ],
    },
    {
      id: "limites",
      rotulo: "07 · Escopo da triagem",
      titulo: "Limites", // MAPA-site.md
      itens: [
        // Produto 2 (Laudo PRODES)
        "Ele informa se as imagens confirmam a supressão. Quando não permitem confirmar, o laudo diz isso, e o item fica para o analista.",
        "O cruzamento não substitui a consulta à lista oficial do Ministério do Meio Ambiente. Ele indica o que o analista deve verificar nessa consulta.",
        // Produto 1 (Perícia Pré-Crédito), O que não faz
        "Não é perícia judicial e não tem valor de prova pericial",
        // Aviso final do documento
        "Os resultados são uma triagem. Indicam sinais e não constituem prova.",
      ],
    },
  ] as SecaoTecnologia[],
};
