import { NavLink } from 'react-router-dom';
import { Crown, Landmark, Building2, Users, Globe } from 'lucide-react';
import { ELECTION_CATEGORIES } from '@/config/routes.config';

const ICON_MAP = { Crown, Landmark, Building2, Users, Globe };

/**
 * Category selector tabs for switching between election types
 */
export default function CategorySelector({ active, onChange, variant = 'tabs', className = '' }) {
  if (variant === 'links') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {ELECTION_CATEGORIES.map((cat) => {
          const Icon = ICON_MAP[cat.icon] || Crown;
          return (
            <NavLink
              key={cat.key}
              to={cat.route}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'bg-primary-600/20 text-primary-300 border border-primary-500/30'
                  : 'bg-surface-700/30 text-surface-200/60 border border-transparent hover:bg-surface-700/50 hover:text-surface-100'
                }`
              }
            >
              <Icon size={16} />
              <span>{cat.label}</span>
            </NavLink>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-1 p-1 bg-surface-800/80 rounded-xl border border-surface-700/50 ${className}`}>
      {ELECTION_CATEGORIES.map((cat) => {
        const Icon = ICON_MAP[cat.icon] || Crown;
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onChange?.(cat.key)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${isActive
                ? 'bg-primary-600/25 text-primary-300 shadow-lg shadow-primary-900/20'
                : 'text-surface-200/50 hover:text-surface-100 hover:bg-surface-700/40'
              }
            `}
          >
            <Icon size={16} />
            <span className="hidden sm:inline">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
