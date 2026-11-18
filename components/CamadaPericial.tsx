import { inicio } from "@/content/inicio";

type Props = {
  slug: string;
  area?: string;
  carimbo?: string;
};

/**
 * Camada de animação pericial sobre a imagem Sentinel-2 de cada produto.
 * Ilustra visualmente o papel da imagem de satélite e a inteligência do produto:
 * - Perícia Pré-Crédito: contorno do CAR desenhado em vetor + scanner pericial + badges de triagem (IBAMA, TI, CAR).
 * - Laudo PRODES: linha de varredura temporal (2019 vs Hoje) + polígono de alerta auditado como falso positivo.
 * - Laudo de Acompanhamento: mapa de calor NDVI com pulso fenológico + curva de safra (preparo -> pico -> colheita).
 * - Perícia de Carteira: múltiplos polígonos de imóveis varridos por radar orbital em lote.
 * - Base Territorial GRSAC: buffers regulatórios de proteção ambiental (5km/10km) + coordenadas + Tabela RSA1.
 * - Potencial de Carbono: isolinhas de dossel florestal e densidade de biomassa (280 tCO2e/ha) + pulso de carbono.
 * - Triagem EUDR: retícula de mira pericial sobre o talhão + corte 31/12/2020 + GeoJSON validado.
 */
export default function CamadaPericial({ slug, area, carimbo }: Props) {
  const info = inicio.animacoesProdutos[slug];
  if (!info) return null;

  return (
    <div className={`cp-layer cp-${slug}`} aria-hidden="true">
      {/* Faixa superior do modo pericial */}
      <div className="cp-topo">
        <div className="cp-topo-esq">
          {area && <span className="cp-area">{area}</span>}
          <span className="cp-modo">{info.modo}</span>
        </div>
        <span className="cp-selo">{info.selo}</span>
      </div>

      {/* Camada gráfica interativa / vetorial específica por produto */}
      <div className="cp-stage">
        {slug === "pericia-pre-credito" && (
          <div className="cp-graphic cp-graphic-pre-credito">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Retícula de cantos */}
              <path d="M 20 40 L 20 20 L 40 20" className="cp-mira" />
              <path d="M 340 40 L 340 20 L 320 20" className="cp-mira" />
              <path d="M 20 180 L 20 200 L 40 200" className="cp-mira" />
              <path d="M 340 180 L 340 200 L 320 200" className="cp-mira" />

              {/* Polígono do CAR sendo vetorizado */}
              <polygon
                points="75,45 285,38 315,155 185,185 65,145"
                className="cp-car-poly"
              />

              {/* Vértices piscantes do imóvel */}
              <circle cx="75" cy="45" r="3" className="cp-vertice" />
              <circle cx="285" cy="38" r="3" className="cp-vertice" />
              <circle cx="315" cy="155" r="3" className="cp-vertice" />
              <circle cx="185" cy="185" r="3" className="cp-vertice" />
              <circle cx="65" cy="145" r="3" className="cp-vertice" />

              {/* Linha de laser / scanner descendo */}
              <line x1="50" y1="0" x2="330" y2="0" className="cp-laser-h" />
            </svg>

            {/* Badges de auditoria técnica */}
            <div className="cp-chips-flutuantes">
              <span className="cp-chip cp-chip-ok">✓ {info.badges[0]}</span>
              <span className="cp-chip cp-chip-ok">✓ {info.badges[1]}</span>
              <span className="cp-chip cp-chip-ok">✓ {info.badges[2]}</span>
            </div>
          </div>
        )}

        {slug === "laudo-prodes" && (
          <div className="cp-graphic cp-graphic-prodes">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Linha divisora temporal que varre horizontalmente */}
              <line x1="180" y1="20" x2="180" y2="200" className="cp-split-linha" />

              {/* Polígono de alerta que é auditado */}
              <polygon
                points="110,65 245,55 260,140 150,165"
                className="cp-alerta-poly"
              />

              {/* Hachura de análise pericial */}
              <line x1="125" y1="75" x2="160" y2="155" className="cp-hachura" />
              <line x1="155" y1="70" x2="190" y2="150" className="cp-hachura" />
              <line x1="185" y1="65" x2="220" y2="145" className="cp-hachura" />
              <line x1="215" y1="60" x2="250" y2="140" className="cp-hachura" />
            </svg>

            {/* Comparativo temporal */}
            <div className="cp-split-rotulos">
              <span className="cp-tempo-esq">2019 · Pré-corte</span>
              <span className="cp-tempo-dir">Hoje · Pós-alerta</span>
            </div>

            {/* Carimbo pericial de resolução */}
            <div className="cp-selo-laudo">
              <span className="cp-selo-check">✓</span>
              <div>
                <strong>Falso positivo descartado</strong>
                <small>Área consolidada antes de 31/07/2019</small>
              </div>
            </div>
          </div>
        )}

        {slug === "laudo-de-acompanhamento" && (
          <div className="cp-graphic cp-graphic-acompanhamento">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Pivô central com pulso de NDVI */}
              <circle cx="180" cy="95" r="56" className="cp-pivo-base" />
              <circle cx="180" cy="95" r="56" className="cp-pivo-ndvi" />
              <line x1="180" y1="95" x2="225" y2="60" className="cp-pivo-braco" />

              {/* Curva fenológica senoidal da safra */}
              <path
                d="M 40 195 Q 110 195, 140 165 T 220 145 T 280 180 T 330 195"
                className="cp-curva-safra"
              />
              {/* Marcador correndo pela curva fenológica */}
              <circle cx="220" cy="145" r="4" className="cp-ponto-safra" />
            </svg>

            {/* Indicadores de vigor vegetativo */}
            <div className="cp-ndvi-gauge">
              <span className="cp-ndvi-tag">NDVI 0.82 · Vigor Máximo</span>
              <div className="cp-ndvi-estagios">
                <span>Preparo</span>
                <span className="is-ativo">Desenvolvimento</span>
                <span>Colheita</span>
              </div>
            </div>
          </div>
        )}

        {slug === "pericia-de-carteira" && (
          <div className="cp-graphic cp-graphic-carteira">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Ondas concêntricas de radar regional */}
              <circle cx="180" cy="110" r="30" className="cp-radar-wave cp-rw-1" />
              <circle cx="180" cy="110" r="65" className="cp-radar-wave cp-rw-2" />
              <circle cx="180" cy="110" r="105" className="cp-radar-wave cp-rw-3" />

              {/* Constelação de fazendas na carteira */}
              <polygon points="50,40 90,35 105,75 60,85" className="cp-fazenda-item fz-1" />
              <polygon points="260,30 310,25 325,65 270,75" className="cp-fazenda-item fz-2" />
              <polygon points="120,95 175,85 185,130 135,140" className="cp-fazenda-item fz-3" />
              <polygon points="215,90 270,80 280,125 225,135" className="cp-fazenda-item fz-4" />
              <polygon points="70,140 115,135 125,175 80,185" className="cp-fazenda-item fz-5" />
              <polygon points="240,150 295,145 310,185 255,195" className="cp-fazenda-item fz-6" />
            </svg>

            {/* Painel HUD de lote */}
            <div className="cp-carteira-hud">
              <div className="cp-hud-linha">
                <span className="cp-hud-dot" />
                <strong>1.240 imóveis auditados</strong>
              </div>
              <span className="cp-hud-sub">99.2% regular · 26 bases em tempo real</span>
            </div>
          </div>
        )}

        {slug === "base-territorial-grsac" && (
          <div className="cp-graphic cp-graphic-grsac">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Gride de coordenadas cartográficas */}
              <line x1="60" y1="20" x2="60" y2="200" className="cp-gride-fio" />
              <line x1="180" y1="20" x2="180" y2="200" className="cp-gride-fio" />
              <line x1="300" y1="20" x2="300" y2="200" className="cp-gride-fio" />
              <line x1="20" y1="60" x2="340" y2="60" className="cp-gride-fio" />
              <line x1="20" y1="120" x2="340" y2="120" className="cp-gride-fio" />
              <line x1="20" y1="180" x2="340" y2="180" className="cp-gride-fio" />

              {/* Buffer regulatório de proteção */}
              <circle cx="210" cy="115" r="48" className="cp-buffer-raio cp-buf-5k" />
              <circle cx="210" cy="115" r="78" className="cp-buffer-raio cp-buf-10k" />

              {/* Propriedade conforme fora do risco crítico */}
              <polygon points="70,75 125,70 140,115 85,125" className="cp-prop-grsac" />
            </svg>

            {/* Cartão de exposição territorial RSA1 */}
            <div className="cp-grsac-card">
              <span className="cp-grsac-tit">Res. BCB 586 · Tabela RSA1</span>
              <div className="cp-grsac-stats">
                <span>Risco Crítico: <b>0.00%</b></span>
                <span>Buffer 10km: <b>Isento</b></span>
              </div>
            </div>
          </div>
        )}

        {slug === "potencial-de-carbono-da-carteira" && (
          <div className="cp-graphic cp-graphic-carbono">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Isolinhas de dossel e biomassa sobre a floresta */}
              <path d="M 50 140 C 90 90, 170 100, 220 70 C 270 40, 310 80, 330 130" className="cp-iso cp-iso-1" />
              <path d="M 70 160 C 110 115, 180 120, 230 95 C 275 70, 305 105, 320 150" className="cp-iso cp-iso-2" />
              <path d="M 90 180 C 130 140, 195 145, 240 120 C 280 100, 300 130, 310 170" className="cp-iso cp-iso-3" />

              {/* Círculos de fixação de carbono */}
              <circle cx="160" cy="85" r="5" className="cp-c-pulse cp-cp-1" />
              <circle cx="250" cy="65" r="6" className="cp-c-pulse cp-cp-2" />
              <circle cx="210" cy="130" r="4" className="cp-c-pulse cp-cp-3" />
            </svg>

            {/* Painel de estimativa de carbono */}
            <div className="cp-carbono-badge">
              <div className="cp-carb-topo">
                <span className="cp-carb-simb">CO₂</span>
                <strong>280 tCO₂e/ha</strong>
              </div>
              <small>Elegibilidade ARR / IFM · Lei 11.428</small>
            </div>
          </div>
        )}

        {slug === "triagem-eudr" && (
          <div className="cp-graphic cp-graphic-eudr">
            <svg viewBox="0 0 360 220" className="cp-svg" fill="none">
              {/* Retícula de mira geodésica EUDR */}
              <circle cx="180" cy="105" r="50" className="cp-mira-anel" />
              <line x1="180" y1="40" x2="180" y2="170" className="cp-mira-eixo" />
              <line x1="115" y1="105" x2="245" y2="105" className="cp-mira-eixo" />

              {/* Polígono de exportação auditado */}
              <polygon points="140,75 220,70 230,135 150,140" className="cp-eudr-poly" />
            </svg>

            {/* Monospace GeoJSON snippet */}
            <div className="cp-eudr-codigo">
              <code>{`{"eudr": "2023/1115", "cutoff": "2020-12-31"}`}</code>
              <code>{`"status": "DEFORESTATION_FREE" ✓`}</code>
            </div>

            {/* Selo oficial de conformidade pré-embarque */}
            <div className="cp-eudr-selo">
              <span>EUDR 2023/1115 COMPLIANT</span>
              <small>Corte 31/12/2020 · GeoJSON Emitido</small>
            </div>
          </div>
        )}
      </div>

      {/* Faixa inferior de detalhe */}
      <div className="cp-rodape">
        <span className="cp-detalhe">{info.detalhe}</span>
        {carimbo && <span className="cp-carimbo">{carimbo}</span>}
      </div>
    </div>
  );
}
