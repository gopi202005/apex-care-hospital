import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  tabId?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  setActiveTab: (tab: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, setActiveTab }) => {
  return (
    <nav className="flex items-center gap-2 py-3 px-4 sm:px-0 text-xs font-medium text-slate-500 overflow-x-auto">
      <button
        onClick={() => {
          setActiveTab('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="flex items-center gap-1 hover:text-brand-600 transition"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          {item.tabId ? (
            <button
              onClick={() => {
                setActiveTab(item.tabId!);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-brand-600 transition whitespace-nowrap"
            >
              {item.label}
            </button>
          ) : (
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
