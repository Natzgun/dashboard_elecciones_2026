import { formatNumber, formatPercent } from '@/utils/formatters';
import { ACTA_STATUSES } from '@/config/routes.config';

/**
 * Progress bar showing acta processing status
 * Displays: Contabilizadas | Para envío JEE | Pendientes
 */
export default function ActasProgressBar({ data, showLabels = true, size = 'md', className = '' }) {
  if (!data) return null;

  const { contabilizadas, envio_jee, pendientes, total } = data;
  const heights = { sm: 'h-2', md: 'h-3', lg: 'h-4' };

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Stacked progress bar */}
      <div className={`flex w-full rounded-full overflow-hidden ${heights[size]} bg-surface-700/50`}>
        <div
          className="bg-emerald-500 transition-all duration-700 ease-out"
          style={{ width: `${contabilizadas.porcentaje}%` }}
          title={`Contabilizadas: ${formatPercent(contabilizadas.porcentaje)}`}
        />
        <div
          className="bg-amber-500 transition-all duration-700 ease-out"
          style={{ width: `${envio_jee.porcentaje}%` }}
          title={`Para envío JEE: ${formatPercent(envio_jee.porcentaje)}`}
        />
        <div
          className="bg-red-500 transition-all duration-700 ease-out"
          style={{ width: `${pendientes.porcentaje}%` }}
          title={`Pendientes: ${formatPercent(pendientes.porcentaje)}`}
        />
      </div>

      {/* Labels */}
      {showLabels && (
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="text-xs text-surface-200/70">
              Contabilizadas: <strong className="text-emerald-400">{formatNumber(contabilizadas.cantidad)}</strong>
              <span className="text-surface-200/40 ml-1">({formatPercent(contabilizadas.porcentaje)})</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
            <span className="text-xs text-surface-200/70">
              Envío JEE: <strong className="text-amber-400">{formatNumber(envio_jee.cantidad)}</strong>
              <span className="text-surface-200/40 ml-1">({formatPercent(envio_jee.porcentaje)})</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0"></span>
            <span className="text-xs text-surface-200/70">
              Pendientes: <strong className="text-red-400">{formatNumber(pendientes.cantidad)}</strong>
              <span className="text-surface-200/40 ml-1">({formatPercent(pendientes.porcentaje)})</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
