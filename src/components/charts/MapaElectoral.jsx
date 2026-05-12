import { useState, useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { PARTY_COLORS } from '@/config/routes.config';
import { formatPercent, formatNumber } from '@/utils/formatters';

const GEO_URL = '/peru-departamentos.json';

/**
 * Normalize department name for matching
 * Handles accent differences between GeoJSON and mock data
 */
function normalizeName(name) {
  if (!name) return '';
  return name
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Interactive map of Peru showing election results by department
 */
export default function MapaElectoral({
  departamentos = [],
  selectedDept = null,
  onSelectDept,
  height = 600,
  className = '',
}) {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Build a lookup map for department data
  const deptMap = useMemo(() => {
    const map = {};
    departamentos.forEach((d) => {
      map[normalizeName(d.departamento)] = d;
    });
    return map;
  }, [departamentos]);

  // Get color for a department based on winning party or progress
  const getFillColor = (geoName) => {
    const normalized = normalizeName(geoName);
    const data = deptMap[normalized];
    if (!data) return '#1e293b';

    // Color by winning party
    if (data.ganador && PARTY_COLORS[data.ganador]) {
      const color = PARTY_COLORS[data.ganador];
      // Adjust opacity based on progress percentage
      const opacity = Math.max(0.4, data.porcentaje / 100);
      return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    }

    // Fallback: color by progress
    if (data.porcentaje >= 93) return '#10b981';
    if (data.porcentaje >= 90) return '#f59e0b';
    return '#ef4444';
  };

  const handleMouseEnter = (geo, evt) => {
    const name = geo.properties.NOMBDEP;
    const normalized = normalizeName(name);
    const data = deptMap[normalized];

    setTooltipContent({
      name,
      data,
    });
    setTooltipPos({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseMove = (evt) => {
    setTooltipPos({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          center: [-75.5, -9.5],
          scale: 1800,
        }}
        width={500}
        height={700}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup
          center={[-75.5, -9.5]}
          minZoom={0.8}
          maxZoom={4}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.NOMBDEP;
                const normalized = normalizeName(name);
                const isSelected = selectedDept && normalizeName(selectedDept) === normalized;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFillColor(name)}
                    stroke={isSelected ? '#60a5fa' : 'rgba(255,255,255,0.15)'}
                    strokeWidth={isSelected ? 2 : 0.5}
                    onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => onSelectDept?.(name)}
                    style={{
                      default: {
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'fill 0.2s ease',
                      },
                      hover: {
                        fill: '#3b82f6',
                        stroke: '#60a5fa',
                        strokeWidth: 1.5,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: '#2563eb',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Custom Tooltip */}
      {tooltipContent && (
        <div
          className="fixed z-50 pointer-events-none glass rounded-lg px-4 py-3 shadow-2xl border border-surface-700/50"
          style={{
            left: tooltipPos.x + 16,
            top: tooltipPos.y - 10,
            transform: 'translateY(-50%)',
          }}
        >
          <p className="text-sm font-semibold text-surface-100 mb-1">
            {tooltipContent.name}
          </p>
          {tooltipContent.data ? (
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-surface-200/50">Mesas:</span>
                <span className="text-xs font-medium text-surface-200/80">
                  {formatNumber(tooltipContent.data.mesas)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-surface-200/50">Avance:</span>
                <span className="text-xs font-bold text-emerald-400">
                  {formatPercent(tooltipContent.data.porcentaje)}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-surface-200/50">Ganador:</span>
                <span
                  className="text-xs font-medium"
                  style={{ color: PARTY_COLORS[tooltipContent.data.ganador] || '#3b82f6' }}
                >
                  {tooltipContent.data.ganador}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-surface-200/50">Electores:</span>
                <span className="text-xs text-surface-200/80">
                  {formatNumber(tooltipContent.data.electores)}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-surface-200/40">Sin datos disponibles</p>
          )}
        </div>
      )}
    </div>
  );
}
