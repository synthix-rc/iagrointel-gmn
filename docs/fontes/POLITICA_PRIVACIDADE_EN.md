MINUTA — sujeita a revisão jurídica

DRAFT — subject to legal review

# iAgroSat Privacy Policy

Version dated 14 November 2026. This policy covers iagrosat.com, app.iagrosat.com, MCP iAgroSat and its sign-up service, Strata, the QGIS plugin and the WhatsApp assistant, when activated. MCP is a protocol that allows an assistant to consult external tools. QGIS is a program for working with maps. It is based on Brazil’s General Personal Data Protection Law (LGPD), Law No. 13,709/2018. Items C01–C18 require confirmation before legal approval. The Portuguese and English texts are versions of the same policy. Confirmation notices identify matters still to be verified.

## 1. Who is responsible for the data

The controller is IAGROSAT LTDA, registered in Brazil’s National Register of Legal Entities (CNPJ) under No. 61.579.333/0001-01. Its address is Av. Paulista, 1636, Conj. 4, Bela Vista, São Paulo-SP, CEP 01310-200, Brazil. The controller determines why and how personal data is used.

The privacy contact is contato@iagrosat.com. The data protection officer provides a communication channel for individuals and the data protection authority. The officer is to be appointed. **[CONFIRMAR] C01.** The company must formalize the appointment and publish the officer’s contact channel.

## 2. Website and support requests

The website form receives a name and email address. It also receives organization, role, interest, message and originating page, when supplied. The code forwards these details by email using Resend. They are used to answer the inquiry and address the interest expressed.

Application support receives the subject, description, conversation and contact details supplied by the user. The code records the request through the internal service and provides for email and WhatsApp notifications. Those notifications may contain a name, email address, phone number and description of the problem.

**[CONFIRMAR] C02.** No deletion period was identified for website contacts, support requests or messages in mailboxes. The provider receiving and storing those mailboxes also needs confirmation.

## 3. Farmer application

Application sign-up receives a name, email address, phone number, password, user type and plan. It also receives an individual taxpayer identifier (CPF) or a legal entity identifier (CNPJ). The service records acceptance of the terms and privacy policy, and the choice to receive promotional communications. This last choice is separate and defaults to false in the sign-up service.

Passwords undergo a cryptographic transformation before storage. Authentication uses bcrypt, a method designed to protect passwords. Older SHA-256 records remain supported and are converted to bcrypt after a successful login. SHA-256 is a function that transforms a value into a fixed-length digest.

The application records organization and team relationships, access roles and the last login date. Login uses an email address or CPF/CNPJ and a password, depending on the available flow. The interface code also provides for additional access verification information.

Farms and fields may include a name, Rural Environmental Registry (CAR) code, municipality, state, area, coordinates and boundaries drawn on a map. Fields may also include crop, variety, elevation and planting year. The platform links these details to account permissions and produces monitoring results, alerts and reports. A field is a division of a farm used to organize agricultural monitoring.

**[CONFIRMAR] C03.** No automatic deletion period was identified for accounts, farms, fields, results or privacy request records. The deletion routine examined only records a request for assessment. Responsibility for completing requests and the completion period remain to be confirmed.

## 4. MCP iAgroSat and access-key sign-up

MCP iAgroSat sign-up receives an email address, optional name, declared intended use and acceptance of the terms. It stores the sign-up date, acceptance date and terms version.

The access key is displayed when created. The database stores its SHA-256 digest and first nine characters for identification. It also stores status, quota, creation date and revocation date. The complete key is not stored in that table. Users of an external assistant should also consider processing by that assistant’s provider.

The service receives the internet protocol (IP) address, which identifies the network connection. Sign-up and quota tables store a SHA-256 digest of the IP combined with an additional secret value. This makes direct association with the IP harder but does not guarantee anonymity. Usage records store the key relationship, tool, date, quota decision, outcome and query duration. Those tables do not store the question body or polygon.

Processing receives the CAR code or coordinates needed for the query. There are reusable result files separate from quota records. Some results contain information about the queried area. This policy therefore does not promise that no geographic information is stored.

The sign-up routine is scheduled to run at service startup and every 24 hours. It deletes the sign-up record after 12 months from revocation. It also deletes it when sign-up occurred more than 12 months ago and there is no usage record from the last 12 months. The second condition can be met before 12 months have elapsed since revocation. Deletion covers the email address, name, declared use, IP digest and acceptance details in the sign-up record. It does not delete the key, usage records or outcome records.

**[CONFIRMAR] C04.** No deletion period was identified for MCP key, usage and outcome tables. Usage and outcome tables block ordinary updates and deletions. A period and procedure consistent with individuals’ rights must be established.

The code reuses certain responses for up to five minutes and limits that set to 256 files. These values govern reuse and do not guarantee deletion of each file after five minutes. **[CONFIRMAR] C05.** The removal period for result files and other copies used to speed up queries remains to be confirmed.

## 5. Strata

A time series is a set of data organized over time. Strata receives the drawn polygon, language and, for time series, analysis period. Without a key, it applies a quota using the IP digest and records the date and decision to allow or refuse analysis. With a key, it uses MCP quota controls. Use without an account does not necessarily make records anonymous.

Analysis sessions and time-series jobs have a two-hour validity period in the code. Their data remains in service memory. Removal from memory depends on routines triggered by subsequent operations; running jobs receive separate handling. Expiry does not establish immediate deletion of every copy.

**[CONFIRMAR] C06.** No deletion period was identified for Strata’s IP-based quota records. The table blocks ordinary updates and deletions.

Temporary layer directories are removed at the end of processing. At startup, the service clears the working folder and removes query files last modified more than 90 days earlier. **[CONFIRMAR] C07.** This cleanup does not establish a maximum storage period during continuous operation. Periodic removal of query copies on disk remains to be defined.

## 6. QGIS plugin

The plugin examined works without its own sign-up. No telemetry transmission to iAgroSat was found in the plugin code. Telemetry means automatically sending information about a program’s use or operation.

The plugin makes external connections to obtain data. Queries may send coordinates, search-area boundaries and dates to the Element 84 Earth Search catalog, NASA POWER climate service and ISRIC SoilGrids. It also accesses imagery and map files hosted on Amazon and Google services. Those providers receive a connection from the user’s computer and its outbound IP address. The plugin does not automatically transmit the entire QGIS project.

The code keeps query files in the computer’s temporary folder. Exported results remain where the user chooses to save them. **[CONFIRMAR] C08.** No general periodic deletion routine was found for the plugin’s local files. Retention also depends on the user’s computer cleanup.

## 7. WhatsApp assistant, when activated

The assistant uses the business number +55 11 5028-5888 and Meta Cloud API, when activated. An API is an interface that enables programs to communicate. The service receives the originating phone number, message identifier, text and references to submitted images or audio. It may link the phone number to the account, farms and team permissions.

The code stores incoming and outgoing messages, message direction, delivery status and dates. It also records notification preferences and opt-in or opt-out dates. Field functions may store tasks, reports and information supplied by users. There are routines for downloading images and audio. The audio transcription examined runs on the local service. Technical logs may contain message excerpts and phone numbers or their last digits.

Temporary session storage has different time limits depending on the function. Sign-up uses one hour, invitations use 30 minutes, and conversation sessions may use up to 24 hours, renewed each time they are saved. Photos awaiting a crop selection have a ten-minute validity period in this storage. These are not retention periods for the message history in the database.

The code allows notifications to be disabled through preferences and cancellation commands. Opting out does not automatically erase history. **[CONFIRMAR] C09.** Retention and deletion of WhatsApp messages, media, field reports, processing queues and technical logs remain to be confirmed.

## 8. CAR, SICAR and other public records

iAgroSat processes information from CAR, the National Rural Environmental Registry System (SICAR) and other public sources for territorial and environmental analysis. This information may include registry code, location, area and property status. Public accessibility does not remove the personal data protections established by the LGPD.

iAgroSat’s rule is that its products must never publish property holders’ names or CPF identifiers. Personal identification of the owner is unnecessary for presenting the territorial and environmental data in these queries. In MCP, database queries select fields without identifying the holder, and the code checks responses for prohibited personal fields.

**[CONFIRMAR] C10.** Enforcement of this rule across all responses, reports and integrations in the other products requires complete validation. This draft records the company’s required rule without presenting a partial inspection as a universal technical guarantee.

Article 7(3) of the LGPD requires processing of publicly accessible personal data to consider the purpose, good faith and public interest behind its availability. The consent exemption for data made public by the individual does not authorize any reuse. The company’s rule also supports limiting data to what is necessary, under Article 6. [Legal source](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## 9. Proposed purposes and legal bases

A legal basis is a provision of the LGPD that permits personal data to be used for a purpose. This draft proposes the following bases.

| Purpose | Proposed basis under Article 7 |
| --- | --- |
| Create an account or key, authenticate access, analyze areas and respond to a user’s request | Item V, performance of a contract or requested pre-contractual steps |
| Apply quotas, prevent abuse and protect service operation | Item IX, legitimate interests, subject to assessment of individuals’ rights |
| Answer contracting inquiries and provide support | Item V, when connected to the requested service |
| Send optional promotions or notifications requiring permission | Item I, specific, withdrawable consent |
| Fulfill a concrete legal obligation or exercise rights in proceedings | Items II and VI, where the corresponding situation exists |
| Consult public records for the requested analysis | Item V where applicable, observing paragraphs 3 and 7; any use of item IX requires its own assessment |

**[CONFIRMAR] C11.** Code demonstrates operations but does not establish approval of legal bases. Legal review must validate each purpose, legitimate-interest assessments and consent records. Accepting this policy does not authorize every possible use of data. [Legal source](https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%402020-06-10%21art7).

## 10. Providers and sharing

The servers examined include application hosting on the server identified as Hetzner and MCP, sign-up and Strata hosting on a machine identified as Vultr. Network configuration for the latter services provides for Cloudflare. Cloudflare may receive the original IP before the transformation performed by the product.

Resend appears in sign-up, invitation, password recovery, contact and support emails. Meta participates in WhatsApp and support notifications sent through that channel. Twilio Verify appears in phone verification by text message (SMS), even though WhatsApp integrates directly with Meta.

Application analysis includes Google Earth Engine calls with farm and field boundaries. MCP and Strata query geographic data providers according to the tool used, including Element 84, NASA POWER and public file services. Strata’s map loads Esri imagery directly in the browser. Esri therefore receives the user’s connection and the region of the requested maps. QGIS plugin requests also originate from the user’s computer.

Hosting, communication and processing services may act as processors, handling data on the controller’s behalf. Some recipients may also determine their own purposes. **[CONFIRMAR] C12.** Contracts, each recipient’s role, the provider chain and actual Cloudflare coverage at each address remain to be validated.

The application’s automated support contains an Anthropic integration that sends messages and context when configured. A Sentry connection setting was found in the application service environment, but that alone does not establish data transmission. **[CONFIRMAR] C13.** Activation of these integrations, transmitted fields and retention must be confirmed. They are not presented here as data collection actually observed.

## 11. Processing outside Brazil

External integrations may involve processing IP addresses, messages, account details or coordinates outside Brazil. A geographic query may relate an area to an identifiable person. A map being public does not, by itself, resolve international transfer requirements.

**[CONFIRMAR] C14.** Countries, hosting regions and legal mechanisms for international transfers were not established by the code. Review must identify recipients and validate the applicable safeguards under Articles 33–36 of the LGPD before approving this section. [Legal source](https://www2.camara.leg.br/legin/fed/lei/2018/lei-13709-14-agosto-2018-787077-normaatualizada-pl.html).

## 12. Security and technical logs

HTTPS means Hypertext Transfer Protocol Secure. The configurations examined include HTTPS connections, account and farm access permissions, password protection, SHA-256 key digests and query limits. HTTPS protects communication between browser and service. The MCP database restricts service permissions and separates the fields authorized for queries.

Infrastructure access logs differ from quota tables. The website and application have web server access logs. The sign-up, MCP and Strata paths examined disable this logging on the local web server. This does not establish the absence of logs at Cloudflare or other components.

Log rotation periodically moves records to other files. Web server log rotation is configured to run daily and keep up to 14 rotated files, in addition to the current file. This limit does not guarantee deletion of all logs within 14 days. **[CONFIRMAR] C15.** Retention of other logs, backups, encryption of stored data and incident response procedures remain to be validated. The measures described do not mean absolute protection against incidents.

## 13. Cookies and browser storage

Cookies are small pieces of data that a browser stores and sends to a website on subsequent visits. In the application production code examined, the access cookie `iagrosat_token` and profile cookie `iagrosat_user` have a configured duration of 24 hours. The renewal cookie `iagrosat_refresh_token`, when issued, lasts seven days. The farm-list cookie `iagrosat_user_farms` lasts 24 hours. Access and renewal cookies are protected against direct reading by page scripts. Profile and farm cookies can be read by the interface.

Logging out removes these cookies. Disabling them in the browser may prevent access to authenticated functions. The local code copy has different periods for some cookies; the periods above are from code found on the production server.

Strata stores the supplied key in the browser’s local storage, called localStorage. This storage has no automatic expiry in the code examined. The key can be removed through the Strata control or by clearing the site’s browser data.

No third-party advertising or audience measurement programs were found in the examined website and application sources. Checking the published MCP sign-up, Strata and privacy policy pages revealed a [Cloudflare measurement program](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/) added by the infrastructure. This addition is absent from those pages’ local files. **[CONFIRMAR] C16.** The data actually transmitted by this program, its configuration, retention, any third-party cookies and the complete inventory of preferences stored by the application remain to be confirmed. The inspection does not guarantee the absence of other measurement on pages that were not checked.

## 14. Rights and how to make a request

Article 18 of the LGPD provides for confirmation of processing, access and correction. Anonymization prevents data from being associated with a person using reasonable technical means available at the time of processing. Portability means transferring data to another service or product provider. Individuals may also request anonymization, blocking or deletion of unnecessary, excessive or unlawfully processed data. Rights include portability under applicable regulations, information about sharing, information about refusing consent and its consequences, and withdrawal of consent. Deletion of consent-based data is subject to statutory retention exceptions. Individuals may object where provided by law and petition the ANPD, Brazil’s federal data protection body. [Legal source](https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2018-08-14%3B13709%21art18).

Send requests to contato@iagrosat.com and identify the product and right you wish to exercise. Use your registered email address where there is an account. For WhatsApp, identify the number you use. For the QGIS plugin, explain whether the issue concerns a local file or an external query. Do not send your password or complete access key. A response may require proportionate identity verification to avoid disclosing data to the wrong person.

The application has a function for exporting a profile and farm relationships. It also has a function for recording a deletion request. That export does not establish coverage of all processed data. In MCP sign-up, a key can be revoked using the relevant function. Revocation stops its use but remains subject to the retention described in this policy. Requests are free of charge and subject to statutory deadlines and limits.

## 15. Children, adolescents and changes

**[CONFIRMAR] C17.** No general age check or specific parental consent flow was found in the functions examined. The company must define its intended age groups and procedures for any processing of children’s and adolescents’ data, observing Article 14 of the LGPD. This draft does not assume such data is never received.

This version records the inspection performed on 14 November 2026. **[CONFIRMAR] C18.** The company must define how this policy is updated and how material changes are communicated. New purposes or changes requiring consent must meet the legal requirements before adoption.
