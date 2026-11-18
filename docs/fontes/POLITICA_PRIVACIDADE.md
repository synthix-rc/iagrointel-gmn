MINUTA — sujeita a revisão jurídica

# Política de Privacidade da iAgroSat

Esta versão é de 14 de novembro de 2026. Esta política abrange o site iagrosat.com, o aplicativo app.iagrosat.com, o MCP iAgroSat e seu cadastro, o Strata, o complemento para QGIS e o assistente de WhatsApp, quando ativado. O MCP é um protocolo que permite a um assistente consultar ferramentas externas. O QGIS é um programa para trabalhar com mapas. A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, orienta este documento. Os pontos identificados por C01 a C18 precisam de confirmação antes da aprovação jurídica.

## 1. Quem responde pelos dados

A controladora é IAGROSAT LTDA, inscrita no Cadastro Nacional da Pessoa Jurídica (CNPJ) sob nº 61.579.333/0001-01. Seu endereço é Av. Paulista, 1636, Conj. 4, Bela Vista, São Paulo-SP, CEP 01310-200. A controladora decide as finalidades e os meios de uso dos dados pessoais.

O contato para privacidade é contato@iagrosat.com. O encarregado de proteção de dados é o responsável pelo canal de comunicação com os titulares e o órgão de proteção de dados. O encarregado está a nomear. **[CONFIRMAR] C01.** A empresa deve formalizar a nomeação e divulgar o canal do encarregado.

## 2. Site e pedidos de atendimento

O formulário do site recebe nome e e-mail. O formulário também recebe organização, função, interesse, mensagem e página de origem, quando informados. O código encaminha esses dados por e-mail com o serviço Resend. Os dados servem para responder ao contato e tratar o interesse declarado.

O atendimento do aplicativo recebe assunto, descrição, conversa e os dados de contato informados pelo usuário. O código registra o pedido por meio do serviço interno. O código também prevê avisos por e-mail e WhatsApp. Esses avisos podem conter nome, e-mail, telefone e descrição do problema.

**[CONFIRMAR] C02.** Não foi identificado prazo de exclusão dos contatos do site, pedidos de atendimento ou mensagens nas caixas de e-mail. Falta confirmar também o provedor que recebe e armazena essas caixas.

## 3. Aplicativo do produtor

O cadastro do aplicativo recebe nome, e-mail, telefone, senha, tipo de usuário e plano. O cadastro também recebe o número do Cadastro de Pessoas Físicas (CPF) ou do CNPJ. O serviço registra o aceite dos termos, o aceite da política e a opção de receber comunicações de divulgação. Essa última opção é separada e começa desmarcada no serviço de cadastro.

A senha passa por uma transformação criptográfica antes de ser armazenada. A autenticação usa bcrypt, um método próprio para proteger senhas. SHA-256 é uma função que transforma um valor em um resumo de tamanho fixo. A autenticação é compatível com registros antigos em SHA-256. Esses registros são convertidos para bcrypt após uma entrada válida.

O aplicativo registra vínculos com organizações e equipes, funções de acesso e a data da última entrada. O acesso exige senha e um identificador, que pode ser e-mail, CPF ou CNPJ, conforme a opção disponível. O código da interface também prevê informações adicionais para verificação de acesso.

Um talhão é uma divisão da propriedade usada para organizar o acompanhamento agrícola. Os dados de fazendas e talhões podem incluir nome, código do Cadastro Ambiental Rural (CAR), município, estado, área, coordenadas e limites desenhados no mapa. Os talhões também podem incluir cultura, variedade, altitude e ano de plantio. A plataforma vincula esses dados às permissões da conta. A plataforma também produz resultados de monitoramento, alertas e relatórios.

**[CONFIRMAR] C03.** Não foi identificado prazo automático de exclusão para contas, fazendas, talhões, resultados e registros de pedidos de privacidade. A rotina de exclusão examinada apenas registra o pedido para avaliação. Falta confirmar quem conclui o atendimento e em qual prazo.

## 4. MCP iAgroSat e cadastro de chaves

O cadastro do MCP iAgroSat recebe e-mail, nome opcional, finalidade de uso declarada e aceite dos termos. O cadastro guarda a data do registro, a data do aceite e a versão dos termos.

A chave de acesso é apresentada na criação. O banco guarda seu resumo SHA-256 e os primeiros nove caracteres para identificação. O banco também guarda situação, cota e datas de criação e revogação. A chave completa não é armazenada nessa tabela. Quem usa um assistente externo deve considerar também o tratamento realizado pelo fornecedor desse assistente.

O endereço de protocolo de internet (IP) identifica a conexão de rede. O serviço recebe esse endereço. As tabelas de cadastro e cota guardam um resumo SHA-256 do IP combinado com um valor secreto adicional. Esse procedimento dificulta a associação direta ao IP. O procedimento não garante anonimato. O registro de uso guarda vínculo com a chave, ferramenta, data, decisão sobre a cota, resultado e duração da consulta. O registro de uso não guarda o corpo da pergunta nem o polígono nessas tabelas.

O processamento recebe o código CAR ou as coordenadas necessários à consulta. Há arquivos de resultados para reutilização, separados dos registros de cota. Alguns resultados contêm informações da área consultada. Por isso, esta política não promete ausência de armazenamento de toda informação geográfica.

A rotina de cadastro é programada para executar na inicialização do serviço e a cada 24 horas. Ela apaga o registro cadastral após 12 meses da revogação. Também o apaga quando o cadastro tem mais de 12 meses e não existe registro de uso nos últimos 12 meses. A segunda condição pode ser atendida mesmo antes de completar 12 meses da revogação. A exclusão abrange e-mail, nome, uso declarado, resumo do IP e dados do aceite presentes no cadastro. Ela não apaga a chave nem os registros de uso e resultado.

**[CONFIRMAR] C04.** Não foi identificado prazo de exclusão das tabelas de chaves, uso e resultado do MCP. As tabelas de uso e resultado bloqueiam alterações e exclusões comuns. É preciso definir prazo e procedimento compatível com os direitos dos titulares.

O código reutiliza certas respostas por até cinco minutos. O código limita esse conjunto a 256 arquivos. Esses valores controlam a reutilização. Os valores não garantem a exclusão de cada arquivo ao fim de cinco minutos. **[CONFIRMAR] C05.** Falta confirmar o prazo de remoção dos arquivos de resultados e das demais cópias usadas para acelerar consultas.

## 5. Strata

Uma série temporal é um conjunto de dados organizado ao longo do tempo. O Strata recebe o polígono desenhado, o idioma e, nas séries temporais, o período da análise. Sem chave, o Strata aplica a cota por resumo do IP, com registro da data e da decisão de permitir ou recusar a análise. Com chave, o Strata utiliza o controle do MCP. O uso sem conta não torna os registros necessariamente anônimos.

As sessões de análise e os trabalhos de séries temporais têm validade de duas horas no código. Seus dados ficam na memória do serviço. A retirada dos dados da memória depende das rotinas acionadas por novas operações. Os trabalhos ainda em execução têm tratamento próprio. O fim da validade não comprova apagamento imediato de todas as cópias.

**[CONFIRMAR] C06.** Não foi identificado prazo de exclusão dos registros de cota por IP do Strata. A tabela bloqueia alterações e exclusões comuns.

Os diretórios temporários das camadas são removidos ao final do processamento. Na inicialização, o serviço limpa a pasta de trabalho. Nesse momento, o serviço também remove arquivos de consulta com modificação anterior a 90 dias. **[CONFIRMAR] C07.** Essa limpeza não estabelece um prazo máximo de permanência durante execução contínua. Falta definir a remoção periódica das cópias de consulta em disco.

## 6. Complemento para QGIS

O complemento examinado funciona sem cadastro próprio. Telemetria é o envio automático de informações sobre uso ou funcionamento de um programa. Não foi localizado envio de telemetria para a iAgroSat no código do complemento.

O complemento faz conexões externas para obter dados. As consultas podem enviar coordenadas, limites da área de busca e datas ao catálogo Element 84 Earth Search, ao serviço climático NASA POWER e ao ISRIC SoilGrids. O complemento também acessa arquivos de imagens e mapas hospedados em serviços da Amazon e do Google. Esses provedores recebem a conexão do computador do usuário e seu IP de saída. O complemento não transmite automaticamente todo o projeto QGIS.

O código mantém arquivos de consulta na pasta temporária do computador. Os resultados exportados ficam no local escolhido pelo usuário. **[CONFIRMAR] C08.** Não foi localizada uma rotina geral de exclusão periódica dos arquivos locais do complemento. A permanência também depende da limpeza do computador pelo usuário.

## 7. Assistente de WhatsApp, quando ativado

Quando ativado, o assistente usa o número institucional +55 11 5028-5888 e a Meta Cloud API. API é uma interface que permite a comunicação entre programas. O serviço recebe telefone de origem, identificador da mensagem, texto e referências de imagens ou áudios enviados. O serviço pode vincular o telefone à conta, às fazendas e às permissões da equipe.

O código guarda mensagens recebidas e enviadas, direção da mensagem, estado de entrega e datas. O código também registra preferências de avisos e datas de adesão ou cancelamento. As funções de campo podem guardar tarefas, relatos e informações enviadas pelo usuário. Há rotinas para baixar imagens e áudios. A transcrição de áudio examinada ocorre no serviço local. Registros técnicos podem conter trechos de mensagens e telefone ou seus últimos dígitos.

O armazenamento temporário de sessões tem prazos distintos conforme a função. O armazenamento temporário usado no cadastro tem prazo de uma hora. O armazenamento temporário usado nos convites tem prazo de 30 minutos. A sessão de conversa pode ter prazo de até 24 horas, renovado a cada gravação. Fotos à espera de escolha da cultura têm validade de dez minutos nesse armazenamento. Esses prazos não são os prazos do histórico de mensagens no banco.

O código permite desativar avisos por preferências e por comandos de cancelamento. Cancelar os avisos não apaga automaticamente o histórico. **[CONFIRMAR] C09.** Falta confirmar a retenção e a exclusão de mensagens, mídias, relatos de campo, filas de processamento e registros técnicos do WhatsApp.

## 8. CAR, SICAR e outros registros públicos

A iAgroSat trata informações do CAR, do Sistema Nacional de Cadastro Ambiental Rural (SICAR) e de outras fontes públicas para análises territoriais e ambientais. Essas informações podem incluir código cadastral, localização, área e situação do imóvel. O acesso público não elimina a proteção de dados pessoais prevista na LGPD.

A regra da iAgroSat é que seus produtos nunca publiquem nome ou CPF dos titulares dos imóveis. A identificação pessoal do proprietário não é necessária para apresentar os dados territoriais e ambientais dessas consultas. No MCP, as consultas ao banco selecionam campos sem identificação do titular. O código verifica campos pessoais proibidos na resposta.

**[CONFIRMAR] C10.** A aplicação dessa regra em todas as respostas, relatórios e integrações dos demais produtos precisa de validação completa. Esta minuta registra a regra exigida pela empresa. A inspeção parcial não constitui garantia técnica de aplicação dessa regra em todos os produtos.

O artigo 7º, § 3º, da LGPD exige que o uso de dados de acesso público considere a finalidade, a boa-fé e o interesse público da disponibilização. A dispensa de consentimento para dados tornados públicos pelo próprio titular não autoriza qualquer reutilização. A regra da empresa também atende à limitação dos dados ao necessário, prevista no artigo 6º. [Fonte legal](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## 9. Finalidades e bases legais propostas

Base legal é a hipótese da LGPD que permite usar dados pessoais para uma finalidade. Esta minuta propõe os seguintes enquadramentos.

| Finalidade | Base proposta no artigo 7º |
| --- | --- |
| Criar conta ou chave, autenticar acesso, analisar áreas e atender a pedido do usuário | Inciso V, execução de contrato ou procedimentos solicitados antes da contratação |
| Aplicar cotas, prevenir abuso e proteger o funcionamento dos serviços | Inciso IX, legítimo interesse, sujeito à avaliação dos direitos dos titulares |
| Responder a contatos sobre contratação e prestar suporte | Inciso V, quando ligados ao serviço solicitado |
| Enviar divulgação opcional ou avisos que dependam de autorização | Inciso I, consentimento específico e revogável |
| Atender obrigação legal concreta ou defender direitos em processo | Incisos II e VI, quando a situação correspondente existir |
| Consultar registros públicos para a análise pedida | Inciso V, quando aplicável, com observância dos §§ 3º e 7º; eventual inciso IX exige avaliação própria |

**[CONFIRMAR] C11.** O código demonstra operações. O código não comprova a aprovação das bases legais. A revisão deve validar cada finalidade, as avaliações de legítimo interesse e os registros de consentimento. Aceitar a política não equivale a autorizar qualquer uso dos dados. [Fonte legal](https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%402020-06-10%21art7).

## 10. Fornecedores e compartilhamento

O aplicativo está hospedado no servidor examinado identificado como Hetzner. O MCP, o cadastro e o Strata estão hospedados na máquina examinada identificada como Vultr. A configuração de rede desses últimos serviços prevê Cloudflare. Esse serviço pode receber o IP original antes da transformação aplicada pelo produto.

O Resend aparece no envio de mensagens de cadastro, convites, recuperação de senha, contato e atendimento. A Meta participa do WhatsApp e dos avisos de atendimento enviados por esse canal. O Twilio Verify aparece na verificação de telefone por mensagem de texto (SMS). O WhatsApp está integrado diretamente à Meta.

As análises do aplicativo incluem chamadas ao Google Earth Engine com limites de fazendas e talhões. MCP e Strata consultam provedores de dados geográficos conforme a ferramenta usada, incluindo Element 84, NASA POWER e serviços de arquivos públicos. O mapa do Strata carrega imagens da Esri diretamente no navegador. Nesse caso, a Esri recebe a conexão do usuário e a região dos mapas solicitados. No complemento QGIS, as consultas externas também partem do computador do usuário.

Operadores tratam dados por conta da controladora. Os serviços de hospedagem, comunicação e processamento podem atuar como operadores. Alguns destinatários também podem decidir finalidades próprias. **[CONFIRMAR] C12.** Falta validar os contratos, os papéis de cada destinatário, os prestadores envolvidos e a cobertura efetiva da Cloudflare em cada endereço.

O atendimento automático do aplicativo contém uma integração com a Anthropic que envia mensagens e contexto quando configurada. Foi encontrada configuração de conexão para Sentry no ambiente do serviço do aplicativo. Essa configuração, isoladamente, não comprova envio de dados. **[CONFIRMAR] C13.** É preciso confirmar a ativação dessas integrações, os campos enviados e a retenção. Elas não são apresentadas aqui como coleta efetivamente observada.

## 11. Tratamento fora do Brasil

As integrações com serviços externos podem envolver tratamento de IPs, mensagens, dados de conta ou coordenadas fora do Brasil. A consulta geográfica pode relacionar uma área a uma pessoa identificável. O fato de o mapa ser público não resolve, por si só, a questão da transferência internacional.

**[CONFIRMAR] C14.** Os países, as regiões de hospedagem e os mecanismos jurídicos de transferência internacional não foram comprovados no código. A revisão deve identificar os destinatários antes de aprovar esta seção. A revisão também deve validar as garantias aplicáveis dos artigos 33 a 36 da LGPD antes dessa aprovação. [Fonte legal](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## 12. Segurança e registros técnicos

O Protocolo de Transferência de Hipertexto Seguro (HTTPS) protege a comunicação entre navegador e serviço. As configurações examinadas incluem conexão protegida por HTTPS, permissões de acesso por conta e fazenda, proteção de senhas, chaves resumidas por SHA-256 e limitação de consultas. O banco do MCP restringe as permissões usadas pelo serviço. O banco também separa os campos autorizados para consulta.

Os registros de acesso da infraestrutura são diferentes das tabelas de cota. O site e o aplicativo possuem registros de acesso do servidor de páginas. Nos caminhos examinados do cadastro, do MCP e do Strata, esse registro está desativado no servidor local de páginas. Isso não comprova ausência de registros na Cloudflare ou em outros componentes.

A rotação de registros transfere periodicamente os registros para outros arquivos. A configuração do servidor de páginas prevê rotação diária. A configuração permite até 14 arquivos de registros anteriores, além do arquivo corrente. Esse limite não equivale a uma garantia de exclusão de todos os registros em 14 dias. **[CONFIRMAR] C15.** Faltam validar prazos dos demais registros, cópias de segurança, criptografia dos dados armazenados e procedimentos de resposta a incidentes. As medidas descritas não significam proteção absoluta contra incidentes.

## 13. Cookies e armazenamento no navegador

Cookies são pequenos dados guardados pelo navegador. O navegador envia esses dados ao site nas visitas seguintes. Na produção examinada do aplicativo, o cookie de acesso `iagrosat_token` e o de perfil `iagrosat_user` têm duração configurada de 24 horas. O cookie de renovação `iagrosat_refresh_token`, quando emitido, dura sete dias. A lista de fazendas `iagrosat_user_farms` dura 24 horas. Os cookies de acesso e renovação são protegidos contra leitura direta pelos programas da página. Os cookies de perfil e fazendas podem ser lidos pela interface.

O encerramento da sessão remove esses cookies. Desativá-los no navegador pode impedir o acesso às funções autenticadas. A cópia local do código tem prazos diferentes para alguns cookies. Os prazos acima são os do código encontrado no servidor de produção.

localStorage é o armazenamento local do navegador. O Strata guarda a chave informada nesse armazenamento. Esse armazenamento não tem vencimento automático no código examinado. A chave pode ser removida pelo controle do Strata ou pela limpeza dos dados do site no navegador.

Não foram localizados programas de publicidade ou medição de audiência de terceiros nas fontes examinadas do site e do aplicativo. Na verificação das páginas publicadas do cadastro MCP, do Strata e desta política, foi encontrado um [programa de medição da Cloudflare](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/) adicionado pela infraestrutura. Essa adição não aparece nos arquivos locais dessas páginas. **[CONFIRMAR] C16.** Falta confirmar os dados efetivamente enviados por esse programa, sua configuração, sua retenção, eventuais cookies de terceiros e o inventário completo de preferências guardadas pelo aplicativo. A inspeção não garante ausência de outras medições em páginas não verificadas.

## 14. Direitos e como fazer pedidos

O artigo 18 da LGPD assegura confirmação do tratamento, acesso e correção. A anonimização impede a associação dos dados a uma pessoa pelos meios técnicos razoáveis e disponíveis no momento do tratamento. O artigo 18 também permite pedir anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade. A portabilidade é a transferência dos dados a outro fornecedor de serviço ou produto. Há direito à portabilidade nos termos da regulamentação. Há direito à informação sobre compartilhamento. Há direito à informação sobre a recusa de consentimento e suas consequências. Há direito à revogação do consentimento. A eliminação dos dados tratados com consentimento observa as exceções legais de conservação. É possível apresentar oposição nas hipóteses legais. Também é possível apresentar uma petição ao órgão federal de proteção de dados, identificado pela sigla ANPD. [Fonte legal](https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%21art18).

Envie o pedido a contato@iagrosat.com. No pedido, indique o produto e o direito que deseja exercer. Use o e-mail cadastrado quando houver conta. Para o WhatsApp, identifique o número que utiliza. Para o complemento QGIS, indique se a questão envolve um arquivo local ou uma consulta externa. Não envie senha nem chave completa. A resposta pode exigir confirmação proporcional de identidade para evitar entrega de dados à pessoa errada.

O aplicativo possui uma função de exportação de perfil e vínculos com fazendas. O aplicativo também possui uma função de registro de pedido de exclusão. Essa exportação não demonstra cobertura de todos os dados tratados. No cadastro MCP, a chave pode ser revogada pela função própria. A revogação interrompe o uso da chave. Os dados continuam sujeitos à retenção descrita nesta política. Os pedidos são gratuitos. O atendimento observa os prazos e limites legais.

## 15. Crianças, adolescentes e alterações

**[CONFIRMAR] C17.** Não foi localizado controle geral de idade ou procedimento específico para consentimento de responsável nas funções examinadas. A empresa deve definir o público etário e os procedimentos para eventual tratamento de dados de crianças e adolescentes, com observância do artigo 14 da LGPD. Esta minuta não presume que esses dados nunca sejam recebidos.

Esta versão registra a inspeção realizada em 14 de novembro de 2026. **[CONFIRMAR] C18.** A empresa deve definir o procedimento de atualização desta política e de comunicação das mudanças relevantes. Novas finalidades ou alterações que exijam consentimento devem observar os requisitos legais antes de sua adoção.
