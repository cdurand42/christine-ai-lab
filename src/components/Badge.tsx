import React from 'react';
import { ProjectStatus } from '../types';

interface BadgeProps {
  status: ProjectStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<BadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  switch (status) {
    case 'LIVE':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 ${sizeClasses}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          LIVE
        </span>
      );
    case 'PILOT':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 ${sizeClasses}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          PILOTE ENTREPRISE
        </span>
      );
    case 'BETA':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 ${sizeClasses}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          BETA
        </span>
      );
    case 'PROTOTYPE':
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 ${sizeClasses}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          PROTOTYPE
        </span>
      );
    case 'EXPERIMENTAL':
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/30 ${sizeClasses}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
          EXPÉRIMENTAL
        </span>
      );
  }
};
