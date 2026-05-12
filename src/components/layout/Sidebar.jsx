import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard, Vote, Crown, Landmark, Building2, Users, Globe,
  MapPin, Map, FileSearch, Workflow, ChevronDown, ChevronLeft,
  ChevronRight, BarChart3,
} from 'lucide-react';
import useUIStore from '@/store/useUIStore';
import { NAV_ITEMS } from '@/config/routes.config';

const ICON_MAP = {
  LayoutDashboard, Vote, Crown, Landmark, Building2, Users, Globe,
  MapPin, Map, FileSearch, Workflow, BarChart3,
};

function NavItem({ item, collapsed }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const Icon = ICON_MAP[item.icon] || LayoutDashboard;
  const hasChildren = item.children && item.children.length > 0;

  const isActive = hasChildren
    ? item.children.some((c) => location.pathname === c.route)
    : location.pathname === item.route;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className={`
            flex items-center w-full gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
            transition-all duration-200 group
            ${isActive
              ? 'bg-primary-600/20 text-primary-300'
              : 'text-surface-200/70 hover:bg-surface-700/50 hover:text-surface-100'
            }
          `}
          title={collapsed ? item.label : undefined}
        >
          <Icon size={20} className="shrink-0" />
          {!collapsed && (
            <>
              <span className="flex-1 text-left">{item.label}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              />
            </>
          )}
        </button>
        {!collapsed && open && (
          <div className="ml-5 mt-1 space-y-0.5 border-l border-surface-700/50 pl-3">
            {item.children.map((child) => {
              const ChildIcon = ICON_MAP[child.icon] || BarChart3;
              return (
                <NavLink
                  key={child.route}
                  to={child.route}
                  className={({ isActive: active }) =>
                    `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-200
                    ${active
                      ? 'bg-primary-600/15 text-primary-300 font-medium'
                      : 'text-surface-200/60 hover:bg-surface-700/40 hover:text-surface-100'
                    }`
                  }
                >
                  <ChildIcon size={16} className="shrink-0" />
                  <span>{child.label}</span>
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  return (
    <NavLink
      to={item.route}
      className={({ isActive: active }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
        transition-all duration-200 group
        ${active
          ? 'bg-primary-600/20 text-primary-300'
          : 'text-surface-200/70 hover:bg-surface-700/50 hover:text-surface-100'
        }`
      }
      title={collapsed ? item.label : undefined}
    >
      <Icon size={20} className="shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </NavLink>
  );
}

export default function Sidebar() {
  const { sidebarCollapsed, setSidebarCollapsed } = useUIStore();

  return (
    <aside
      className={`
        fixed left-0 top-0 h-full bg-surface-800 border-r border-surface-700/50
        flex flex-col z-40 transition-all duration-300
        ${sidebarCollapsed ? 'w-[72px]' : 'w-[260px]'}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-surface-700/50">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shrink-0">
          <BarChart3 size={18} className="text-white" />
        </div>
        {!sidebarCollapsed && (
          <div className="animate-fade-in">
            <h1 className="text-sm font-bold text-surface-100 leading-tight">Electoral 2026</h1>
            <p className="text-[10px] text-surface-200/50 font-medium">Dashboard ONPE</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.label} item={item} collapsed={sidebarCollapsed} />
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="px-3 py-3 border-t border-surface-700/50">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="flex items-center justify-center w-full gap-2 px-3 py-2 rounded-lg
            text-surface-200/50 hover:bg-surface-700/50 hover:text-surface-100
            transition-all duration-200 text-xs"
        >
          {sidebarCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <>
              <ChevronLeft size={16} />
              <span>Colapsar</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
