import { useLocation } from 'react-router-dom';
import { Menu, Bell, RefreshCw } from 'lucide-react';
import useUIStore from '@/store/useUIStore';
import { ELECTION_CATEGORIES } from '@/config/routes.config';

/**
 * Get breadcrumb label from the current path
 */
function getBreadcrumb(pathname) {
  if (pathname === '/') return 'Dashboard';
  
  const cat = ELECTION_CATEGORIES.find((c) => c.route === pathname);
  if (cat) return cat.label;

  const segments = pathname.split('/').filter(Boolean);
  return segments
    .map((s) => s.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()))
    .join(' / ');
}

export default function Header() {
  const location = useLocation();
  const { sidebarCollapsed, setSidebarCollapsed } = useUIStore();
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <header className="h-16 border-b border-surface-700/50 bg-surface-800/50 backdrop-blur-sm flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-lg text-surface-200/60 hover:bg-surface-700/50 hover:text-surface-100 transition-colors lg:hidden"
        >
          <Menu size={20} />
        </button>
        <div>
          <h2 className="text-lg font-semibold text-surface-100">{breadcrumb}</h2>
          <p className="text-xs text-surface-200/50">Elecciones Generales 2026 — Perú</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-surface-200/60 hover:bg-surface-700/50 hover:text-surface-100 transition-colors">
          <RefreshCw size={14} />
          <span className="hidden sm:inline">Actualizar</span>
        </button>
        <button className="relative p-2 rounded-lg text-surface-200/60 hover:bg-surface-700/50 hover:text-surface-100 transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-xs font-bold ml-2">
          BD
        </div>
      </div>
    </header>
  );
}
