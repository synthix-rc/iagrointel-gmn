# Imagens Sentinel-2 para iagrointel.com (novembro de 2026)

Fotos limpas (sem texto, polígono ou sobreposição), cor verdadeira B4/B3/B2 a 10 m, Sentinel-2 L2A lido por janela HTTP do catálogo Element84 earth-search. Offset de +1000 decidido cena a cena pelo percentil 0,5 de B02 e B11 (código de `/home/dev/iagrosat-split/log/scripts_imagens/s2lib.py`); em todas as cenas o valor ficou abaixo de 800, então nenhuma teve offset subtraído. Nuvem e sombra medidas pela camada SCL (classes 3, 8, 9, 10) dentro do quadro. Locais diferentes dos usados em iagrosat.com. Google Earth Engine não foi usado.

| arquivo | produto | local | data | nuvem |
|---|---|---|---|---|
| `01_pericia_pre_credito.jpg` / `_web.jpg` / `.txt` | Perícia Pré-Crédito | Chapadão do Sul (MS), 80,7 % do quadro; Cassilândia (MS), 19,3 % | 28/07/2024 | 0,00 % |
| `02_laudo_prodes.jpg` / `_web.jpg` / `.txt` | Laudo PRODES | Novo Progresso (PA), 100 % do quadro | 24/07/2024 | 0,00 % |
| `03_pericia_carteira.jpg` / `_web.jpg` / `.txt` | Perícia de Carteira | São Desidério (BA), 100 % do quadro | 21/08/2024 | 0,00 % |
| `04_laudo_acompanhamento.jpg` / `_web.jpg` / `.txt` | Laudo de Acompanhamento | Montividiu (GO), 100 % do quadro | 24/05/2025 | 0,00 % |
| `05_potencial_carbono.jpg` / `_web.jpg` / `.txt` | Potencial de Carbono | Marliéria (MG), 80,6 %; Bom Jesus do Galho (MG), 12,5 %; Pingo-d'Água (MG), 5,1 %; Dionísio (MG), 1,0 %; Córrego Novo (MG), 0,8 % | 04/09/2024 | 0,01 % |
| `06_base_territorial_grsac.jpg` / `_web.jpg` / `.txt` | Base Territorial GRSAC | Nova Xavantina (MT), 94,5 %; Nova Nazaré (MT), 5,5 % | 19/05/2024 | 0,00 % |
| `07_triagem_eudr.jpg` / `_web.jpg` / `.txt` | Triagem EUDR | Patrocínio (MG), 100 % do quadro | 16/08/2024 | 0,00 % |
| `08_credito_rural.jpg` / `_web.jpg` / `.txt` | Crédito rural | Não-Me-Toque (RS), 97,1 %; Santo Antônio do Planalto (RS), 2,6 %; Victor Graeff (RS), 0,3 % | 28/09/2024 | 0,00 % |

Atribuição obrigatória (em cada .txt, com o ano da cena): "Contém dados Copernicus Sentinel modificados [ano da cena], processados pela iAgroSat".

A imagem 07 mostra talhões de culturas perenes numa região cafeeira (Patrocínio, MG); não há máscara de café aplicada, então a legenda não deve afirmar que cada talhão é café.
