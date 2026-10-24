import React from 'react';
import {
  LayoutDashboard,
  CloudSun,
  MapPin,
  TrendingUp,
  AlertTriangle,
  History,
  Info,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';

export type NavigationTab =
  | 'overview'
  | 'weather'
  | 'map'
  | 'forecast'
  | 'alerts'
  | 'historical'
  | 'about'
  | 'settings';

interface SidebarProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  unreadAlertCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onTabChange,
  collapsed,
  onToggleCollapse,
  unreadAlertCount = 2,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'weather', label: 'Live Weather', icon: CloudSun },
    { id: 'map', label: 'Risk Map', icon: MapPin },
    { id: 'forecast', label: 'Forecast', icon: TrendingUp },
    {
      id: 'alerts',
      label: 'Early Warnings',
      icon: AlertTriangle,
      badge: unreadAlertCount > 0 ? unreadAlertCount : undefined,
    },
    { id: 'historical', label: 'Historical Analysis', icon: History },
    { id: 'about', label: 'About Meghdoot', icon: Info },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside
      className={`h-screen bg-charcoal border-r border-slate-700/60 flex flex-col transition-all duration-300 z-30 select-none text-ivory ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-slate-700/60">
        <div
          onClick={() => onTabChange('overview')}
          className="flex items-center gap-3 cursor-pointer overflow-hidden group"
        >
          <img
            src="/src/assets/meghdoot-logo.svg"
            alt="Meghdoot"
            className="w-9 h-9 rounded shrink-0 shadow-sm transition-transform group-hover:scale-105"
          />
          {!collapsed && (
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold tracking-tight text-ivory text-lg">Meghdoot</span>
                <span className="text-xs text-sage font-serif font-medium">मेघदूत</span>
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider truncate font-mono uppercase">
                Weather Intelligence
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded text-slate-500 hover:text-ivory hover:bg-slate-800 transition hidden md:flex items-center justify-center border border-transparent hover:border-slate-700"
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Nav List */}
      <nav className="flex-1 py-4 px-2.5 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id as NavigationTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs transition-all group relative ${
                isActive
                  ? 'bg-slate text-ivory font-semibold border border-slate-600 shadow-sm'
                  : 'text-slate-400 hover:text-ivory hover:bg-slate-800/80 border border-transparent'
              } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? 'text-sage' : 'text-slate-500 group-hover:text-ivory'
                }`}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}

              {item.badge && (
                <span
                  className={`ml-auto px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                    isActive
                      ? 'bg-coral text-white'
                      : 'bg-coral/20 text-coral border border-coral/30'
                  } ${collapsed ? 'absolute top-1.5 right-2 w-2 h-2 p-0 rounded-full' : ''}`}
                >
                  {!collapsed && item.badge}
                </span>
              )}

              {isActive && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-sage rounded-r" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer System Status */}
      <div className="p-3 border-t border-slate-700/60 bg-charcoal-900/80">
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2.5'}`}>
          <div className="w-2 h-2 rounded-full bg-sage animate-pulse shrink-0" />
          {!collapsed && (
            <div className="flex flex-col text-[11px] leading-tight">
              <span className="text-ivory font-medium font-mono text-[10px]">Station Node: Active</span>
              <span className="text-slate-500 text-[10px] font-mono">Convective Model v1.2</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
