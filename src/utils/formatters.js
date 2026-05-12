/**
 * Number and text formatting utilities for the electoral dashboard
 */

/**
 * Format a number with thousands separators (Peruvian locale)
 */
export function formatNumber(num) {
  if (num == null) return '—';
  return new Intl.NumberFormat('es-PE').format(num);
}

/**
 * Format a number as a compact string (e.g., 1.2M, 456K)
 */
export function formatCompact(num) {
  if (num == null) return '—';
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

/**
 * Format a percentage with specified decimal places
 */
export function formatPercent(value, decimals = 1) {
  if (value == null) return '—';
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format a date string to locale format
 */
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Format time duration in minutes/seconds
 */
export function formatDuration(startStr, endStr) {
  if (!startStr || !endStr) return '—';
  const diffMs = new Date(endStr) - new Date(startStr);
  const minutes = Math.floor(diffMs / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  return minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Truncate text with ellipsis
 */
export function truncate(str, maxLength = 30) {
  if (!str || str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '…';
}
