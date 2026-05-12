import { PARTY_COLORS, CHART_COLORS } from '@/config/routes.config';

/**
 * Get the color assigned to a political party
 */
export function getPartyColor(partyName) {
  return PARTY_COLORS[partyName] || CHART_COLORS[0];
}

/**
 * Get a color from the default palette by index
 */
export function getChartColor(index) {
  return CHART_COLORS[index % CHART_COLORS.length];
}

/**
 * Generate a gradient string for CSS
 */
export function getGradient(color, direction = 'to right') {
  return `linear-gradient(${direction}, ${color}22, ${color}88)`;
}

/**
 * Get status color for acta states
 */
export function getActaStatusColor(status) {
  const colors = {
    contabilizada: '#10b981',
    contabilizadas: '#10b981',
    envio_jee: '#f59e0b',
    pendiente: '#ef4444',
    pendientes: '#ef4444',
  };
  return colors[status] || '#6b7280';
}
