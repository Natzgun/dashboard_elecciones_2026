import { formatNumber, formatCompact } from '@/utils/formatters';

/**
 * KPI Card - Displays a key metric with icon, label, value, and optional trend
 */
export default function KPICard({ label, value, subtitle, icon: Icon, color = 'primary', trend, className = '' }) {
  const colorMap = {
    primary: 'from-primary-500/20 to-primary-600/5 border-primary-500/20',
    success: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20',
    warning: 'from-amber-500/20 to-amber-600/5 border-amber-500/20',
    error: 'from-red-500/20 to-red-600/5 border-red-500/20',
    info: 'from-blue-500/20 to-blue-600/5 border-blue-500/20',
  };

  const iconColorMap = {
    primary: 'text-primary-400 bg-primary-500/15',
    success: 'text-emerald-400 bg-emerald-500/15',
    warning: 'text-amber-400 bg-amber-500/15',
    error: 'text-red-400 bg-red-500/15',
    info: 'text-blue-400 bg-blue-500/15',
  };

  const displayValue = typeof value === 'number' ? formatNumber(value) : value;

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl border bg-gradient-to-br p-5
        card-hover ${colorMap[color]} ${className}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium text-surface-200/60 uppercase tracking-wider">{label}</p>
          <p className="text-2xl font-bold text-surface-100">{displayValue}</p>
          {subtitle && (
            <p className="text-sm text-surface-200/50">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className={`p-2.5 rounded-lg ${iconColorMap[color]}`}>
            <Icon size={22} />
          </div>
        )}
      </div>
      {trend != null && (
        <div className={`mt-3 flex items-center gap-1 text-xs font-medium ${trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          <span>{trend >= 0 ? '↑' : '↓'}</span>
          <span>{Math.abs(trend)}% vs anterior</span>
        </div>
      )}
      {/* Decorative glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-current opacity-[0.03]"></div>
    </div>
  );
}
