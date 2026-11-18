// ---------------------------------------------------------------------------
// Páginas /privacidade/ (português) e /privacidade/en/ (inglês): minuta do cliente, LITERAL (P15; decisão 30).
// Gerado em 14/11/2026 a partir de docs/fontes/POLITICA_PRIVACIDADE.md e POLITICA_PRIVACIDADE_EN.md, baixados de
// https://iagrointel.com/privacidade-iagrosat-82f4bce0e1bdf7c0/. Não edite o texto da política aqui: se a minuta
// mudar, baixe de novo e gere de novo. Marcas do Markdown viram trechos: b = negrito, a = link, code = código.
// As duas páginas ficam com a faixa de rascunho e o noindex até o parecer do jurídico (18 itens C01 a C18).
// ---------------------------------------------------------------------------

export type TrechoPolitica = string | { b: string } | { a: string; href: string } | { code: string };
export type BlocoPolitica = { p: TrechoPolitica[] } | { tabela: { cabecalho: string[]; linhas: string[][] } };
export type Politica = {
  lang: "pt-BR" | "en";
  rota: string;
  rotuloPagina: string;                      // título curto (aba do navegador)
  avisos: string[];                          // "MINUTA — sujeita a revisão jurídica" (e "DRAFT — ..." na versão em inglês)
  titulo: string;
  intro: TrechoPolitica[][];
  secoes: { titulo: string; blocos: BlocoPolitica[] }[];
  outraLingua: { href: string; hrefLang: string; label: string };
};

export const politicaPt: Politica = {
  lang: "pt-BR",
  rota: "/privacidade/",
  rotuloPagina: "Privacidade", // nome da página no mapa
  avisos: [
  "MINUTA — sujeita a revisão jurídica"
],
  titulo: "Política de Privacidade da iAgroSat",
  intro: [
  [
    "Esta versão é de 14 de novembro de 2026. Esta política abrange o site iagrosat.com, o aplicativo app.iagrosat.com, o MCP iAgroSat e seu cadastro, o Strata, o complemento para QGIS e o assistente de WhatsApp, quando ativado. O MCP é um protocolo que permite a um assistente consultar ferramentas externas. O QGIS é um programa para trabalhar com mapas. A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, orienta este documento. Os pontos identificados por C01 a C18 precisam de confirmação antes da aprovação jurídica."
  ]
],
  secoes: [
  {
    "titulo": "1. Quem responde pelos dados",
    "blocos": [
      {
        "p": [
          "A controladora é IAGROSAT LTDA, inscrita no Cadastro Nacional da Pessoa Jurídica (CNPJ) sob nº 61.579.333/0001-01. Seu endereço é Av. Paulista, 1636, Conj. 4, Bela Vista, São Paulo-SP, CEP 01310-200. A controladora decide as finalidades e os meios de uso dos dados pessoais."
        ]
      },
      {
        "p": [
          "O contato para privacidade é contato@iagrosat.com. O encarregado de proteção de dados é o responsável pelo canal de comunicação com os titulares e o órgão de proteção de dados. O encarregado está a nomear. ",
          {
            "b": "[CONFIRMAR] C01."
          },
          " A empresa deve formalizar a nomeação e divulgar o canal do encarregado."
        ]
      }
    ]
  },
  {
    "titulo": "2. Site e pedidos de atendimento",
    "blocos": [
      {
        "p": [
          "O formulário do site recebe nome e e-mail. O formulário também recebe organização, função, interesse, mensagem e página de origem, quando informados. O código encaminha esses dados por e-mail com o serviço Resend. Os dados servem para responder ao contato e tratar o interesse declarado."
        ]
      },
      {
        "p": [
          "O atendimento do aplicativo recebe assunto, descrição, conversa e os dados de contato informados pelo usuário. O código registra o pedido por meio do serviço interno. O código também prevê avisos por e-mail e WhatsApp. Esses avisos podem conter nome, e-mail, telefone e descrição do problema."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C02."
          },
          " Não foi identificado prazo de exclusão dos contatos do site, pedidos de atendimento ou mensagens nas caixas de e-mail. Falta confirmar também o provedor que recebe e armazena essas caixas."
        ]
      }
    ]
  },
  {
    "titulo": "3. Aplicativo do produtor",
    "blocos": [
      {
        "p": [
          "O cadastro do aplicativo recebe nome, e-mail, telefone, senha, tipo de usuário e plano. O cadastro também recebe o número do Cadastro de Pessoas Físicas (CPF) ou do CNPJ. O serviço registra o aceite dos termos, o aceite da política e a opção de receber comunicações de divulgação. Essa última opção é separada e começa desmarcada no serviço de cadastro."
        ]
      },
      {
        "p": [
          "A senha passa por uma transformação criptográfica antes de ser armazenada. A autenticação usa bcrypt, um método próprio para proteger senhas. SHA-256 é uma função que transforma um valor em um resumo de tamanho fixo. A autenticação é compatível com registros antigos em SHA-256. Esses registros são convertidos para bcrypt após uma entrada válida."
        ]
      },
      {
        "p": [
          "O aplicativo registra vínculos com organizações e equipes, funções de acesso e a data da última entrada. O acesso exige senha e um identificador, que pode ser e-mail, CPF ou CNPJ, conforme a opção disponível. O código da interface também prevê informações adicionais para verificação de acesso."
        ]
      },
      {
        "p": [
          "Um talhão é uma divisão da propriedade usada para organizar o acompanhamento agrícola. Os dados de fazendas e talhões podem incluir nome, código do Cadastro Ambiental Rural (CAR), município, estado, área, coordenadas e limites desenhados no mapa. Os talhões também podem incluir cultura, variedade, altitude e ano de plantio. A plataforma vincula esses dados às permissões da conta. A plataforma também produz resultados de monitoramento, alertas e relatórios."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C03."
          },
          " Não foi identificado prazo automático de exclusão para contas, fazendas, talhões, resultados e registros de pedidos de privacidade. A rotina de exclusão examinada apenas registra o pedido para avaliação. Falta confirmar quem conclui o atendimento e em qual prazo."
        ]
      }
    ]
  },
  {
    "titulo": "4. MCP iAgroSat e cadastro de chaves",
    "blocos": [
      {
        "p": [
          "O cadastro do MCP iAgroSat recebe e-mail, nome opcional, finalidade de uso declarada e aceite dos termos. O cadastro guarda a data do registro, a data do aceite e a versão dos termos."
        ]
      },
      {
        "p": [
          "A chave de acesso é apresentada na criação. O banco guarda seu resumo SHA-256 e os primeiros nove caracteres para identificação. O banco também guarda situação, cota e datas de criação e revogação. A chave completa não é armazenada nessa tabela. Quem usa um assistente externo deve considerar também o tratamento realizado pelo fornecedor desse assistente."
        ]
      },
      {
        "p": [
          "O endereço de protocolo de internet (IP) identifica a conexão de rede. O serviço recebe esse endereço. As tabelas de cadastro e cota guardam um resumo SHA-256 do IP combinado com um valor secreto adicional. Esse procedimento dificulta a associação direta ao IP. O procedimento não garante anonimato. O registro de uso guarda vínculo com a chave, ferramenta, data, decisão sobre a cota, resultado e duração da consulta. O registro de uso não guarda o corpo da pergunta nem o polígono nessas tabelas."
        ]
      },
      {
        "p": [
          "O processamento recebe o código CAR ou as coordenadas necessários à consulta. Há arquivos de resultados para reutilização, separados dos registros de cota. Alguns resultados contêm informações da área consultada. Por isso, esta política não promete ausência de armazenamento de toda informação geográfica."
        ]
      },
      {
        "p": [
          "A rotina de cadastro é programada para executar na inicialização do serviço e a cada 24 horas. Ela apaga o registro cadastral após 12 meses da revogação. Também o apaga quando o cadastro tem mais de 12 meses e não existe registro de uso nos últimos 12 meses. A segunda condição pode ser atendida mesmo antes de completar 12 meses da revogação. A exclusão abrange e-mail, nome, uso declarado, resumo do IP e dados do aceite presentes no cadastro. Ela não apaga a chave nem os registros de uso e resultado."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C04."
          },
          " Não foi identificado prazo de exclusão das tabelas de chaves, uso e resultado do MCP. As tabelas de uso e resultado bloqueiam alterações e exclusões comuns. É preciso definir prazo e procedimento compatível com os direitos dos titulares."
        ]
      },
      {
        "p": [
          "O código reutiliza certas respostas por até cinco minutos. O código limita esse conjunto a 256 arquivos. Esses valores controlam a reutilização. Os valores não garantem a exclusão de cada arquivo ao fim de cinco minutos. ",
          {
            "b": "[CONFIRMAR] C05."
          },
          " Falta confirmar o prazo de remoção dos arquivos de resultados e das demais cópias usadas para acelerar consultas."
        ]
      }
    ]
  },
  {
    "titulo": "5. Strata",
    "blocos": [
      {
        "p": [
          "Uma série temporal é um conjunto de dados organizado ao longo do tempo. O Strata recebe o polígono desenhado, o idioma e, nas séries temporais, o período da análise. Sem chave, o Strata aplica a cota por resumo do IP, com registro da data e da decisão de permitir ou recusar a análise. Com chave, o Strata utiliza o controle do MCP. O uso sem conta não torna os registros necessariamente anônimos."
        ]
      },
      {
        "p": [
          "As sessões de análise e os trabalhos de séries temporais têm validade de duas horas no código. Seus dados ficam na memória do serviço. A retirada dos dados da memória depende das rotinas acionadas por novas operações. Os trabalhos ainda em execução têm tratamento próprio. O fim da validade não comprova apagamento imediato de todas as cópias."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C06."
          },
          " Não foi identificado prazo de exclusão dos registros de cota por IP do Strata. A tabela bloqueia alterações e exclusões comuns."
        ]
      },
      {
        "p": [
          "Os diretórios temporários das camadas são removidos ao final do processamento. Na inicialização, o serviço limpa a pasta de trabalho. Nesse momento, o serviço também remove arquivos de consulta com modificação anterior a 90 dias. ",
          {
            "b": "[CONFIRMAR] C07."
          },
          " Essa limpeza não estabelece um prazo máximo de permanência durante execução contínua. Falta definir a remoção periódica das cópias de consulta em disco."
        ]
      }
    ]
  },
  {
    "titulo": "6. Complemento para QGIS",
    "blocos": [
      {
        "p": [
          "O complemento examinado funciona sem cadastro próprio. Telemetria é o envio automático de informações sobre uso ou funcionamento de um programa. Não foi localizado envio de telemetria para a iAgroSat no código do complemento."
        ]
      },
      {
        "p": [
          "O complemento faz conexões externas para obter dados. As consultas podem enviar coordenadas, limites da área de busca e datas ao catálogo Element 84 Earth Search, ao serviço climático NASA POWER e ao ISRIC SoilGrids. O complemento também acessa arquivos de imagens e mapas hospedados em serviços da Amazon e do Google. Esses provedores recebem a conexão do computador do usuário e seu IP de saída. O complemento não transmite automaticamente todo o projeto QGIS."
        ]
      },
      {
        "p": [
          "O código mantém arquivos de consulta na pasta temporária do computador. Os resultados exportados ficam no local escolhido pelo usuário. ",
          {
            "b": "[CONFIRMAR] C08."
          },
          " Não foi localizada uma rotina geral de exclusão periódica dos arquivos locais do complemento. A permanência também depende da limpeza do computador pelo usuário."
        ]
      }
    ]
  },
  {
    "titulo": "7. Assistente de WhatsApp, quando ativado",
    "blocos": [
      {
        "p": [
          "Quando ativado, o assistente usa o número institucional +55 11 5028-5888 e a Meta Cloud API. API é uma interface que permite a comunicação entre programas. O serviço recebe telefone de origem, identificador da mensagem, texto e referências de imagens ou áudios enviados. O serviço pode vincular o telefone à conta, às fazendas e às permissões da equipe."
        ]
      },
      {
        "p": [
          "O código guarda mensagens recebidas e enviadas, direção da mensagem, estado de entrega e datas. O código também registra preferências de avisos e datas de adesão ou cancelamento. As funções de campo podem guardar tarefas, relatos e informações enviadas pelo usuário. Há rotinas para baixar imagens e áudios. A transcrição de áudio examinada ocorre no serviço local. Registros técnicos podem conter trechos de mensagens e telefone ou seus últimos dígitos."
        ]
      },
      {
        "p": [
          "O armazenamento temporário de sessões tem prazos distintos conforme a função. O armazenamento temporário usado no cadastro tem prazo de uma hora. O armazenamento temporário usado nos convites tem prazo de 30 minutos. A sessão de conversa pode ter prazo de até 24 horas, renovado a cada gravação. Fotos à espera de escolha da cultura têm validade de dez minutos nesse armazenamento. Esses prazos não são os prazos do histórico de mensagens no banco."
        ]
      },
      {
        "p": [
          "O código permite desativar avisos por preferências e por comandos de cancelamento. Cancelar os avisos não apaga automaticamente o histórico. ",
          {
            "b": "[CONFIRMAR] C09."
          },
          " Falta confirmar a retenção e a exclusão de mensagens, mídias, relatos de campo, filas de processamento e registros técnicos do WhatsApp."
        ]
      }
    ]
  },
  {
    "titulo": "8. CAR, SICAR e outros registros públicos",
    "blocos": [
      {
        "p": [
          "A iAgroSat trata informações do CAR, do Sistema Nacional de Cadastro Ambiental Rural (SICAR) e de outras fontes públicas para análises territoriais e ambientais. Essas informações podem incluir código cadastral, localização, área e situação do imóvel. O acesso público não elimina a proteção de dados pessoais prevista na LGPD."
        ]
      },
      {
        "p": [
          "A regra da iAgroSat é que seus produtos nunca publiquem nome ou CPF dos titulares dos imóveis. A identificação pessoal do proprietário não é necessária para apresentar os dados territoriais e ambientais dessas consultas. No MCP, as consultas ao banco selecionam campos sem identificação do titular. O código verifica campos pessoais proibidos na resposta."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C10."
          },
          " A aplicação dessa regra em todas as respostas, relatórios e integrações dos demais produtos precisa de validação completa. Esta minuta registra a regra exigida pela empresa. A inspeção parcial não constitui garantia técnica de aplicação dessa regra em todos os produtos."
        ]
      },
      {
        "p": [
          "O artigo 7º, § 3º, da LGPD exige que o uso de dados de acesso público considere a finalidade, a boa-fé e o interesse público da disponibilização. A dispensa de consentimento para dados tornados públicos pelo próprio titular não autoriza qualquer reutilização. A regra da empresa também atende à limitação dos dados ao necessário, prevista no artigo 6º. ",
          {
            "a": "Fonte legal",
            "href": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "9. Finalidades e bases legais propostas",
    "blocos": [
      {
        "p": [
          "Base legal é a hipótese da LGPD que permite usar dados pessoais para uma finalidade. Esta minuta propõe os seguintes enquadramentos."
        ]
      },
      {
        "tabela": {
          "cabecalho": [
            "Finalidade",
            "Base proposta no artigo 7º"
          ],
          "linhas": [
            [
              "Criar conta ou chave, autenticar acesso, analisar áreas e atender a pedido do usuário",
              "Inciso V, execução de contrato ou procedimentos solicitados antes da contratação"
            ],
            [
              "Aplicar cotas, prevenir abuso e proteger o funcionamento dos serviços",
              "Inciso IX, legítimo interesse, sujeito à avaliação dos direitos dos titulares"
            ],
            [
              "Responder a contatos sobre contratação e prestar suporte",
              "Inciso V, quando ligados ao serviço solicitado"
            ],
            [
              "Enviar divulgação opcional ou avisos que dependam de autorização",
              "Inciso I, consentimento específico e revogável"
            ],
            [
              "Atender obrigação legal concreta ou defender direitos em processo",
              "Incisos II e VI, quando a situação correspondente existir"
            ],
            [
              "Consultar registros públicos para a análise pedida",
              "Inciso V, quando aplicável, com observância dos §§ 3º e 7º; eventual inciso IX exige avaliação própria"
            ]
          ]
        }
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C11."
          },
          " O código demonstra operações. O código não comprova a aprovação das bases legais. A revisão deve validar cada finalidade, as avaliações de legítimo interesse e os registros de consentimento. Aceitar a política não equivale a autorizar qualquer uso dos dados. ",
          {
            "a": "Fonte legal",
            "href": "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%402020-06-10%21art7"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "10. Fornecedores e compartilhamento",
    "blocos": [
      {
        "p": [
          "O aplicativo está hospedado no servidor examinado identificado como Hetzner. O MCP, o cadastro e o Strata estão hospedados na máquina examinada identificada como Vultr. A configuração de rede desses últimos serviços prevê Cloudflare. Esse serviço pode receber o IP original antes da transformação aplicada pelo produto."
        ]
      },
      {
        "p": [
          "O Resend aparece no envio de mensagens de cadastro, convites, recuperação de senha, contato e atendimento. A Meta participa do WhatsApp e dos avisos de atendimento enviados por esse canal. O Twilio Verify aparece na verificação de telefone por mensagem de texto (SMS). O WhatsApp está integrado diretamente à Meta."
        ]
      },
      {
        "p": [
          "As análises do aplicativo incluem chamadas ao Google Earth Engine com limites de fazendas e talhões. MCP e Strata consultam provedores de dados geográficos conforme a ferramenta usada, incluindo Element 84, NASA POWER e serviços de arquivos públicos. O mapa do Strata carrega imagens da Esri diretamente no navegador. Nesse caso, a Esri recebe a conexão do usuário e a região dos mapas solicitados. No complemento QGIS, as consultas externas também partem do computador do usuário."
        ]
      },
      {
        "p": [
          "Operadores tratam dados por conta da controladora. Os serviços de hospedagem, comunicação e processamento podem atuar como operadores. Alguns destinatários também podem decidir finalidades próprias. ",
          {
            "b": "[CONFIRMAR] C12."
          },
          " Falta validar os contratos, os papéis de cada destinatário, os prestadores envolvidos e a cobertura efetiva da Cloudflare em cada endereço."
        ]
      },
      {
        "p": [
          "O atendimento automático do aplicativo contém uma integração com a Anthropic que envia mensagens e contexto quando configurada. Foi encontrada configuração de conexão para Sentry no ambiente do serviço do aplicativo. Essa configuração, isoladamente, não comprova envio de dados. ",
          {
            "b": "[CONFIRMAR] C13."
          },
          " É preciso confirmar a ativação dessas integrações, os campos enviados e a retenção. Elas não são apresentadas aqui como coleta efetivamente observada."
        ]
      }
    ]
  },
  {
    "titulo": "11. Tratamento fora do Brasil",
    "blocos": [
      {
        "p": [
          "As integrações com serviços externos podem envolver tratamento de IPs, mensagens, dados de conta ou coordenadas fora do Brasil. A consulta geográfica pode relacionar uma área a uma pessoa identificável. O fato de o mapa ser público não resolve, por si só, a questão da transferência internacional."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C14."
          },
          " Os países, as regiões de hospedagem e os mecanismos jurídicos de transferência internacional não foram comprovados no código. A revisão deve identificar os destinatários antes de aprovar esta seção. A revisão também deve validar as garantias aplicáveis dos artigos 33 a 36 da LGPD antes dessa aprovação. ",
          {
            "a": "Fonte legal",
            "href": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "12. Segurança e registros técnicos",
    "blocos": [
      {
        "p": [
          "O Protocolo de Transferência de Hipertexto Seguro (HTTPS) protege a comunicação entre navegador e serviço. As configurações examinadas incluem conexão protegida por HTTPS, permissões de acesso por conta e fazenda, proteção de senhas, chaves resumidas por SHA-256 e limitação de consultas. O banco do MCP restringe as permissões usadas pelo serviço. O banco também separa os campos autorizados para consulta."
        ]
      },
      {
        "p": [
          "Os registros de acesso da infraestrutura são diferentes das tabelas de cota. O site e o aplicativo possuem registros de acesso do servidor de páginas. Nos caminhos examinados do cadastro, do MCP e do Strata, esse registro está desativado no servidor local de páginas. Isso não comprova ausência de registros na Cloudflare ou em outros componentes."
        ]
      },
      {
        "p": [
          "A rotação de registros transfere periodicamente os registros para outros arquivos. A configuração do servidor de páginas prevê rotação diária. A configuração permite até 14 arquivos de registros anteriores, além do arquivo corrente. Esse limite não equivale a uma garantia de exclusão de todos os registros em 14 dias. ",
          {
            "b": "[CONFIRMAR] C15."
          },
          " Faltam validar prazos dos demais registros, cópias de segurança, criptografia dos dados armazenados e procedimentos de resposta a incidentes. As medidas descritas não significam proteção absoluta contra incidentes."
        ]
      }
    ]
  },
  {
    "titulo": "13. Cookies e armazenamento no navegador",
    "blocos": [
      {
        "p": [
          "Cookies são pequenos dados guardados pelo navegador. O navegador envia esses dados ao site nas visitas seguintes. Na produção examinada do aplicativo, o cookie de acesso ",
          {
            "code": "iagrosat_token"
          },
          " e o de perfil ",
          {
            "code": "iagrosat_user"
          },
          " têm duração configurada de 24 horas. O cookie de renovação ",
          {
            "code": "iagrosat_refresh_token"
          },
          ", quando emitido, dura sete dias. A lista de fazendas ",
          {
            "code": "iagrosat_user_farms"
          },
          " dura 24 horas. Os cookies de acesso e renovação são protegidos contra leitura direta pelos programas da página. Os cookies de perfil e fazendas podem ser lidos pela interface."
        ]
      },
      {
        "p": [
          "O encerramento da sessão remove esses cookies. Desativá-los no navegador pode impedir o acesso às funções autenticadas. A cópia local do código tem prazos diferentes para alguns cookies. Os prazos acima são os do código encontrado no servidor de produção."
        ]
      },
      {
        "p": [
          "localStorage é o armazenamento local do navegador. O Strata guarda a chave informada nesse armazenamento. Esse armazenamento não tem vencimento automático no código examinado. A chave pode ser removida pelo controle do Strata ou pela limpeza dos dados do site no navegador."
        ]
      },
      {
        "p": [
          "Não foram localizados programas de publicidade ou medição de audiência de terceiros nas fontes examinadas do site e do aplicativo. Na verificação das páginas publicadas do cadastro MCP, do Strata e desta política, foi encontrado um ",
          {
            "a": "programa de medição da Cloudflare",
            "href": "https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/"
          },
          " adicionado pela infraestrutura. Essa adição não aparece nos arquivos locais dessas páginas. ",
          {
            "b": "[CONFIRMAR] C16."
          },
          " Falta confirmar os dados efetivamente enviados por esse programa, sua configuração, sua retenção, eventuais cookies de terceiros e o inventário completo de preferências guardadas pelo aplicativo. A inspeção não garante ausência de outras medições em páginas não verificadas."
        ]
      }
    ]
  },
  {
    "titulo": "14. Direitos e como fazer pedidos",
    "blocos": [
      {
        "p": [
          "O artigo 18 da LGPD assegura confirmação do tratamento, acesso e correção. A anonimização impede a associação dos dados a uma pessoa pelos meios técnicos razoáveis e disponíveis no momento do tratamento. O artigo 18 também permite pedir anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade. A portabilidade é a transferência dos dados a outro fornecedor de serviço ou produto. Há direito à portabilidade nos termos da regulamentação. Há direito à informação sobre compartilhamento. Há direito à informação sobre a recusa de consentimento e suas consequências. Há direito à revogação do consentimento. A eliminação dos dados tratados com consentimento observa as exceções legais de conservação. É possível apresentar oposição nas hipóteses legais. Também é possível apresentar uma petição ao órgão federal de proteção de dados, identificado pela sigla ANPD. ",
          {
            "a": "Fonte legal",
            "href": "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%21art18"
          },
          "."
        ]
      },
      {
        "p": [
          "Envie o pedido a contato@iagrosat.com. No pedido, indique o produto e o direito que deseja exercer. Use o e-mail cadastrado quando houver conta. Para o WhatsApp, identifique o número que utiliza. Para o complemento QGIS, indique se a questão envolve um arquivo local ou uma consulta externa. Não envie senha nem chave completa. A resposta pode exigir confirmação proporcional de identidade para evitar entrega de dados à pessoa errada."
        ]
      },
      {
        "p": [
          "O aplicativo possui uma função de exportação de perfil e vínculos com fazendas. O aplicativo também possui uma função de registro de pedido de exclusão. Essa exportação não demonstra cobertura de todos os dados tratados. No cadastro MCP, a chave pode ser revogada pela função própria. A revogação interrompe o uso da chave. Os dados continuam sujeitos à retenção descrita nesta política. Os pedidos são gratuitos. O atendimento observa os prazos e limites legais."
        ]
      }
    ]
  },
  {
    "titulo": "15. Crianças, adolescentes e alterações",
    "blocos": [
      {
        "p": [
          {
            "b": "[CONFIRMAR] C17."
          },
          " Não foi localizado controle geral de idade ou procedimento específico para consentimento de responsável nas funções examinadas. A empresa deve definir o público etário e os procedimentos para eventual tratamento de dados de crianças e adolescentes, com observância do artigo 14 da LGPD. Esta minuta não presume que esses dados nunca sejam recebidos."
        ]
      },
      {
        "p": [
          "Esta versão registra a inspeção realizada em 14 de novembro de 2026. ",
          {
            "b": "[CONFIRMAR] C18."
          },
          " A empresa deve definir o procedimento de atualização desta política e de comunicação das mudanças relevantes. Novas finalidades ou alterações que exijam consentimento devem observar os requisitos legais antes de sua adoção."
        ]
      }
    ]
  }
],
  // TEXTO NOVO (aprovado em 15/11/2026): link para a versão em inglês.
  outraLingua: { href: "/privacidade/en/", hrefLang: "en", label: "English version" },
};

export const politicaEn: Politica = {
  lang: "en",
  rota: "/privacidade/en/",
  rotuloPagina: "Privacy", // nome da página no mapa (Privacy (EN))
  avisos: [
  "MINUTA — sujeita a revisão jurídica",
  "DRAFT — subject to legal review"
],
  titulo: "iAgroSat Privacy Policy",
  intro: [
  [
    "Version dated 14 November 2026. This policy covers iagrosat.com, app.iagrosat.com, MCP iAgroSat and its sign-up service, Strata, the QGIS plugin and the WhatsApp assistant, when activated. MCP is a protocol that allows an assistant to consult external tools. QGIS is a program for working with maps. It is based on Brazil’s General Personal Data Protection Law (LGPD), Law No. 13,709/2018. Items C01–C18 require confirmation before legal approval. The Portuguese and English texts are versions of the same policy. Confirmation notices identify matters still to be verified."
  ]
],
  secoes: [
  {
    "titulo": "1. Who is responsible for the data",
    "blocos": [
      {
        "p": [
          "The controller is IAGROSAT LTDA, registered in Brazil’s National Register of Legal Entities (CNPJ) under No. 61.579.333/0001-01. Its address is Av. Paulista, 1636, Conj. 4, Bela Vista, São Paulo-SP, CEP 01310-200, Brazil. The controller determines why and how personal data is used."
        ]
      },
      {
        "p": [
          "The privacy contact is contato@iagrosat.com. The data protection officer provides a communication channel for individuals and the data protection authority. The officer is to be appointed. ",
          {
            "b": "[CONFIRMAR] C01."
          },
          " The company must formalize the appointment and publish the officer’s contact channel."
        ]
      }
    ]
  },
  {
    "titulo": "2. Website and support requests",
    "blocos": [
      {
        "p": [
          "The website form receives a name and email address. It also receives organization, role, interest, message and originating page, when supplied. The code forwards these details by email using Resend. They are used to answer the inquiry and address the interest expressed."
        ]
      },
      {
        "p": [
          "Application support receives the subject, description, conversation and contact details supplied by the user. The code records the request through the internal service and provides for email and WhatsApp notifications. Those notifications may contain a name, email address, phone number and description of the problem."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C02."
          },
          " No deletion period was identified for website contacts, support requests or messages in mailboxes. The provider receiving and storing those mailboxes also needs confirmation."
        ]
      }
    ]
  },
  {
    "titulo": "3. Farmer application",
    "blocos": [
      {
        "p": [
          "Application sign-up receives a name, email address, phone number, password, user type and plan. It also receives an individual taxpayer identifier (CPF) or a legal entity identifier (CNPJ). The service records acceptance of the terms and privacy policy, and the choice to receive promotional communications. This last choice is separate and defaults to false in the sign-up service."
        ]
      },
      {
        "p": [
          "Passwords undergo a cryptographic transformation before storage. Authentication uses bcrypt, a method designed to protect passwords. Older SHA-256 records remain supported and are converted to bcrypt after a successful login. SHA-256 is a function that transforms a value into a fixed-length digest."
        ]
      },
      {
        "p": [
          "The application records organization and team relationships, access roles and the last login date. Login uses an email address or CPF/CNPJ and a password, depending on the available flow. The interface code also provides for additional access verification information."
        ]
      },
      {
        "p": [
          "Farms and fields may include a name, Rural Environmental Registry (CAR) code, municipality, state, area, coordinates and boundaries drawn on a map. Fields may also include crop, variety, elevation and planting year. The platform links these details to account permissions and produces monitoring results, alerts and reports. A field is a division of a farm used to organize agricultural monitoring."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C03."
          },
          " No automatic deletion period was identified for accounts, farms, fields, results or privacy request records. The deletion routine examined only records a request for assessment. Responsibility for completing requests and the completion period remain to be confirmed."
        ]
      }
    ]
  },
  {
    "titulo": "4. MCP iAgroSat and access-key sign-up",
    "blocos": [
      {
        "p": [
          "MCP iAgroSat sign-up receives an email address, optional name, declared intended use and acceptance of the terms. It stores the sign-up date, acceptance date and terms version."
        ]
      },
      {
        "p": [
          "The access key is displayed when created. The database stores its SHA-256 digest and first nine characters for identification. It also stores status, quota, creation date and revocation date. The complete key is not stored in that table. Users of an external assistant should also consider processing by that assistant’s provider."
        ]
      },
      {
        "p": [
          "The service receives the internet protocol (IP) address, which identifies the network connection. Sign-up and quota tables store a SHA-256 digest of the IP combined with an additional secret value. This makes direct association with the IP harder but does not guarantee anonymity. Usage records store the key relationship, tool, date, quota decision, outcome and query duration. Those tables do not store the question body or polygon."
        ]
      },
      {
        "p": [
          "Processing receives the CAR code or coordinates needed for the query. There are reusable result files separate from quota records. Some results contain information about the queried area. This policy therefore does not promise that no geographic information is stored."
        ]
      },
      {
        "p": [
          "The sign-up routine is scheduled to run at service startup and every 24 hours. It deletes the sign-up record after 12 months from revocation. It also deletes it when sign-up occurred more than 12 months ago and there is no usage record from the last 12 months. The second condition can be met before 12 months have elapsed since revocation. Deletion covers the email address, name, declared use, IP digest and acceptance details in the sign-up record. It does not delete the key, usage records or outcome records."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C04."
          },
          " No deletion period was identified for MCP key, usage and outcome tables. Usage and outcome tables block ordinary updates and deletions. A period and procedure consistent with individuals’ rights must be established."
        ]
      },
      {
        "p": [
          "The code reuses certain responses for up to five minutes and limits that set to 256 files. These values govern reuse and do not guarantee deletion of each file after five minutes. ",
          {
            "b": "[CONFIRMAR] C05."
          },
          " The removal period for result files and other copies used to speed up queries remains to be confirmed."
        ]
      }
    ]
  },
  {
    "titulo": "5. Strata",
    "blocos": [
      {
        "p": [
          "A time series is a set of data organized over time. Strata receives the drawn polygon, language and, for time series, analysis period. Without a key, it applies a quota using the IP digest and records the date and decision to allow or refuse analysis. With a key, it uses MCP quota controls. Use without an account does not necessarily make records anonymous."
        ]
      },
      {
        "p": [
          "Analysis sessions and time-series jobs have a two-hour validity period in the code. Their data remains in service memory. Removal from memory depends on routines triggered by subsequent operations; running jobs receive separate handling. Expiry does not establish immediate deletion of every copy."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C06."
          },
          " No deletion period was identified for Strata’s IP-based quota records. The table blocks ordinary updates and deletions."
        ]
      },
      {
        "p": [
          "Temporary layer directories are removed at the end of processing. At startup, the service clears the working folder and removes query files last modified more than 90 days earlier. ",
          {
            "b": "[CONFIRMAR] C07."
          },
          " This cleanup does not establish a maximum storage period during continuous operation. Periodic removal of query copies on disk remains to be defined."
        ]
      }
    ]
  },
  {
    "titulo": "6. QGIS plugin",
    "blocos": [
      {
        "p": [
          "The plugin examined works without its own sign-up. No telemetry transmission to iAgroSat was found in the plugin code. Telemetry means automatically sending information about a program’s use or operation."
        ]
      },
      {
        "p": [
          "The plugin makes external connections to obtain data. Queries may send coordinates, search-area boundaries and dates to the Element 84 Earth Search catalog, NASA POWER climate service and ISRIC SoilGrids. It also accesses imagery and map files hosted on Amazon and Google services. Those providers receive a connection from the user’s computer and its outbound IP address. The plugin does not automatically transmit the entire QGIS project."
        ]
      },
      {
        "p": [
          "The code keeps query files in the computer’s temporary folder. Exported results remain where the user chooses to save them. ",
          {
            "b": "[CONFIRMAR] C08."
          },
          " No general periodic deletion routine was found for the plugin’s local files. Retention also depends on the user’s computer cleanup."
        ]
      }
    ]
  },
  {
    "titulo": "7. WhatsApp assistant, when activated",
    "blocos": [
      {
        "p": [
          "The assistant uses the business number +55 11 5028-5888 and Meta Cloud API, when activated. An API is an interface that enables programs to communicate. The service receives the originating phone number, message identifier, text and references to submitted images or audio. It may link the phone number to the account, farms and team permissions."
        ]
      },
      {
        "p": [
          "The code stores incoming and outgoing messages, message direction, delivery status and dates. It also records notification preferences and opt-in or opt-out dates. Field functions may store tasks, reports and information supplied by users. There are routines for downloading images and audio. The audio transcription examined runs on the local service. Technical logs may contain message excerpts and phone numbers or their last digits."
        ]
      },
      {
        "p": [
          "Temporary session storage has different time limits depending on the function. Sign-up uses one hour, invitations use 30 minutes, and conversation sessions may use up to 24 hours, renewed each time they are saved. Photos awaiting a crop selection have a ten-minute validity period in this storage. These are not retention periods for the message history in the database."
        ]
      },
      {
        "p": [
          "The code allows notifications to be disabled through preferences and cancellation commands. Opting out does not automatically erase history. ",
          {
            "b": "[CONFIRMAR] C09."
          },
          " Retention and deletion of WhatsApp messages, media, field reports, processing queues and technical logs remain to be confirmed."
        ]
      }
    ]
  },
  {
    "titulo": "8. CAR, SICAR and other public records",
    "blocos": [
      {
        "p": [
          "iAgroSat processes information from CAR, the National Rural Environmental Registry System (SICAR) and other public sources for territorial and environmental analysis. This information may include registry code, location, area and property status. Public accessibility does not remove the personal data protections established by the LGPD."
        ]
      },
      {
        "p": [
          "iAgroSat’s rule is that its products must never publish property holders’ names or CPF identifiers. Personal identification of the owner is unnecessary for presenting the territorial and environmental data in these queries. In MCP, database queries select fields without identifying the holder, and the code checks responses for prohibited personal fields."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C10."
          },
          " Enforcement of this rule across all responses, reports and integrations in the other products requires complete validation. This draft records the company’s required rule without presenting a partial inspection as a universal technical guarantee."
        ]
      },
      {
        "p": [
          "Article 7(3) of the LGPD requires processing of publicly accessible personal data to consider the purpose, good faith and public interest behind its availability. The consent exemption for data made public by the individual does not authorize any reuse. The company’s rule also supports limiting data to what is necessary, under Article 6. ",
          {
            "a": "Legal source",
            "href": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "9. Proposed purposes and legal bases",
    "blocos": [
      {
        "p": [
          "A legal basis is a provision of the LGPD that permits personal data to be used for a purpose. This draft proposes the following bases."
        ]
      },
      {
        "tabela": {
          "cabecalho": [
            "Purpose",
            "Proposed basis under Article 7"
          ],
          "linhas": [
            [
              "Create an account or key, authenticate access, analyze areas and respond to a user’s request",
              "Item V, performance of a contract or requested pre-contractual steps"
            ],
            [
              "Apply quotas, prevent abuse and protect service operation",
              "Item IX, legitimate interests, subject to assessment of individuals’ rights"
            ],
            [
              "Answer contracting inquiries and provide support",
              "Item V, when connected to the requested service"
            ],
            [
              "Send optional promotions or notifications requiring permission",
              "Item I, specific, withdrawable consent"
            ],
            [
              "Fulfill a concrete legal obligation or exercise rights in proceedings",
              "Items II and VI, where the corresponding situation exists"
            ],
            [
              "Consult public records for the requested analysis",
              "Item V where applicable, observing paragraphs 3 and 7; any use of item IX requires its own assessment"
            ]
          ]
        }
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C11."
          },
          " Code demonstrates operations but does not establish approval of legal bases. Legal review must validate each purpose, legitimate-interest assessments and consent records. Accepting this policy does not authorize every possible use of data. ",
          {
            "a": "Legal source",
            "href": "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%402020-06-10%21art7"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "10. Providers and sharing",
    "blocos": [
      {
        "p": [
          "The servers examined include application hosting on the server identified as Hetzner and MCP, sign-up and Strata hosting on a machine identified as Vultr. Network configuration for the latter services provides for Cloudflare. Cloudflare may receive the original IP before the transformation performed by the product."
        ]
      },
      {
        "p": [
          "Resend appears in sign-up, invitation, password recovery, contact and support emails. Meta participates in WhatsApp and support notifications sent through that channel. Twilio Verify appears in phone verification by text message (SMS), even though WhatsApp integrates directly with Meta."
        ]
      },
      {
        "p": [
          "Application analysis includes Google Earth Engine calls with farm and field boundaries. MCP and Strata query geographic data providers according to the tool used, including Element 84, NASA POWER and public file services. Strata’s map loads Esri imagery directly in the browser. Esri therefore receives the user’s connection and the region of the requested maps. QGIS plugin requests also originate from the user’s computer."
        ]
      },
      {
        "p": [
          "Hosting, communication and processing services may act as processors, handling data on the controller’s behalf. Some recipients may also determine their own purposes. ",
          {
            "b": "[CONFIRMAR] C12."
          },
          " Contracts, each recipient’s role, the provider chain and actual Cloudflare coverage at each address remain to be validated."
        ]
      },
      {
        "p": [
          "The application’s automated support contains an Anthropic integration that sends messages and context when configured. A Sentry connection setting was found in the application service environment, but that alone does not establish data transmission. ",
          {
            "b": "[CONFIRMAR] C13."
          },
          " Activation of these integrations, transmitted fields and retention must be confirmed. They are not presented here as data collection actually observed."
        ]
      }
    ]
  },
  {
    "titulo": "11. Processing outside Brazil",
    "blocos": [
      {
        "p": [
          "External integrations may involve processing IP addresses, messages, account details or coordinates outside Brazil. A geographic query may relate an area to an identifiable person. A map being public does not, by itself, resolve international transfer requirements."
        ]
      },
      {
        "p": [
          {
            "b": "[CONFIRMAR] C14."
          },
          " Countries, hosting regions and legal mechanisms for international transfers were not established by the code. Review must identify recipients and validate the applicable safeguards under Articles 33–36 of the LGPD before approving this section. ",
          {
            "a": "Legal source",
            "href": "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html"
          },
          "."
        ]
      }
    ]
  },
  {
    "titulo": "12. Security and technical logs",
    "blocos": [
      {
        "p": [
          "HTTPS means Hypertext Transfer Protocol Secure. The configurations examined include HTTPS connections, account and farm access permissions, password protection, SHA-256 key digests and query limits. HTTPS protects communication between browser and service. The MCP database restricts service permissions and separates the fields authorized for queries."
        ]
      },
      {
        "p": [
          "Infrastructure access logs differ from quota tables. The website and application have web server access logs. The sign-up, MCP and Strata paths examined disable this logging on the local web server. This does not establish the absence of logs at Cloudflare or other components."
        ]
      },
      {
        "p": [
          "Log rotation periodically moves records to other files. Web server log rotation is configured to run daily and keep up to 14 rotated files, in addition to the current file. This limit does not guarantee deletion of all logs within 14 days. ",
          {
            "b": "[CONFIRMAR] C15."
          },
          " Retention of other logs, backups, encryption of stored data and incident response procedures remain to be validated. The measures described do not mean absolute protection against incidents."
        ]
      }
    ]
  },
  {
    "titulo": "13. Cookies and browser storage",
    "blocos": [
      {
        "p": [
          "Cookies are small pieces of data that a browser stores and sends to a website on subsequent visits. In the application production code examined, the access cookie ",
          {
            "code": "iagrosat_token"
          },
          " and profile cookie ",
          {
            "code": "iagrosat_user"
          },
          " have a configured duration of 24 hours. The renewal cookie ",
          {
            "code": "iagrosat_refresh_token"
          },
          ", when issued, lasts seven days. The farm-list cookie ",
          {
            "code": "iagrosat_user_farms"
          },
          " lasts 24 hours. Access and renewal cookies are protected against direct reading by page scripts. Profile and farm cookies can be read by the interface."
        ]
      },
      {
        "p": [
          "Logging out removes these cookies. Disabling them in the browser may prevent access to authenticated functions. The local code copy has different periods for some cookies; the periods above are from code found on the production server."
        ]
      },
      {
        "p": [
          "Strata stores the supplied key in the browser’s local storage, called localStorage. This storage has no automatic expiry in the code examined. The key can be removed through the Strata control or by clearing the site’s browser data."
        ]
      },
      {
        "p": [
          "No third-party advertising or audience measurement programs were found in the examined website and application sources. Checking the published MCP sign-up, Strata and privacy policy pages revealed a ",
          {
            "a": "Cloudflare measurement program",
            "href": "https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/"
          },
          " added by the infrastructure. This addition is absent from those pages’ local files. ",
          {
            "b": "[CONFIRMAR] C16."
          },
          " The data actually transmitted by this program, its configuration, retention, any third-party cookies and the complete inventory of preferences stored by the application remain to be confirmed. The inspection does not guarantee the absence of other measurement on pages that were not checked."
        ]
      }
    ]
  },
  {
    "titulo": "14. Rights and how to make a request",
    "blocos": [
      {
        "p": [
          "Article 18 of the LGPD provides for confirmation of processing, access and correction. Anonymization prevents data from being associated with a person using reasonable technical means available at the time of processing. Portability means transferring data to another service or product provider. Individuals may also request anonymization, blocking or deletion of unnecessary, excessive or unlawfully processed data. Rights include portability under applicable regulations, information about sharing, information about refusing consent and its consequences, and withdrawal of consent. Deletion of consent-based data is subject to statutory retention exceptions. Individuals may object where provided by law and petition the ANPD, Brazil’s federal data protection body. ",
          {
            "a": "Legal source",
            "href": "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%21art18"
          },
          "."
        ]
      },
      {
        "p": [
          "Send requests to contato@iagrosat.com and identify the product and right you wish to exercise. Use your registered email address where there is an account. For WhatsApp, identify the number you use. For the QGIS plugin, explain whether the issue concerns a local file or an external query. Do not send your password or complete access key. A response may require proportionate identity verification to avoid disclosing data to the wrong person."
        ]
      },
      {
        "p": [
          "The application has a function for exporting a profile and farm relationships. It also has a function for recording a deletion request. That export does not establish coverage of all processed data. In MCP sign-up, a key can be revoked using the relevant function. Revocation stops its use but remains subject to the retention described in this policy. Requests are free of charge and subject to statutory deadlines and limits."
        ]
      }
    ]
  },
  {
    "titulo": "15. Children, adolescents and changes",
    "blocos": [
      {
        "p": [
          {
            "b": "[CONFIRMAR] C17."
          },
          " No general age check or specific parental consent flow was found in the functions examined. The company must define its intended age groups and procedures for any processing of children’s and adolescents’ data, observing Article 14 of the LGPD. This draft does not assume such data is never received."
        ]
      },
      {
        "p": [
          "This version records the inspection performed on 14 November 2026. ",
          {
            "b": "[CONFIRMAR] C18."
          },
          " The company must define how this policy is updated and how material changes are communicated. New purposes or changes requiring consent must meet the legal requirements before adoption."
        ]
      }
    ]
  }
],
  // TEXTO NOVO (aprovado em 15/11/2026): link para a versão em português.
  outraLingua: { href: "/privacidade/", hrefLang: "pt-BR", label: "Versão em português" },
};
