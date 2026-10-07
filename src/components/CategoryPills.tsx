import React from 'react';
import { ProjectCategory } from '../types';
import { CATEGORIES } from '../data/taxonomy';

interface CategoryPillsProps {
  selected: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
  counts?: Record<ProjectCategory, number>;
}

export const CategoryPills: React.FC<CategoryPillsProps> = ({ selected, onSelect, counts }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
      {CATEGORIES.map(cat => {
        const count = counts ? counts[cat.id] : undefined;
        const isActive = selected === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              isActive
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <span>{cat.label}</span>
            {count !== undefined && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-slate-950/30 text-slate-900' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
