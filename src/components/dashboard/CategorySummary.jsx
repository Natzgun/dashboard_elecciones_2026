import { formatNumber, formatPercent } from '@/utils/formatters';
import ActasProgressBar from './ActasProgressBar';
import { ELECTION_CATEGORIES } from '@/config/routes.config';
import { actasResumen } from '@/data/mockData';
import { Crown, Landmark, Building2, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ICON_MAP = { Crown, Landmark, Building2, Users, Globe };

/**
 * Summary cards for all 5 election categories
 * Shows acta progress for each category
 */
export default function CategorySummary({ className = '' }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {ELECTION_CATEGORIES.map((cat, index) => {
        const data = actasResumen.categorias[cat.key];
        const Icon = ICON_MAP[cat.icon] || Crown;
        if (!data) return null;

        return (
          <Link
            key={cat.key}
            to={cat.route}
            className="flex items-center gap-4 p-4 rounded-xl bg-surface-800/60 border border-surface-700/30
              hover:bg-surface-700/40 hover:border-primary-500/20 transition-all duration-200 group"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 shrink-0">
              <Icon size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-surface-100">{data.label}</span>
                <span className="text-lg font-bold text-emerald-400">
                  {formatPercent(data.contabilizadas.porcentaje)}
                </span>
              </div>
              <ActasProgressBar data={data} showLabels={false} size="sm" />
            </div>
            <ArrowRight size={16} className="text-surface-200/30 group-hover:text-primary-400 transition-colors shrink-0" />
          </Link>
        );
      })}
    </div>
  );
}
