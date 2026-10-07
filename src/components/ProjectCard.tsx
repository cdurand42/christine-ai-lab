import React from 'react';
import { ProjectData } from '../types';
import { StatusBadge } from './Badge';
import { useViewMode } from '../context/ViewModeContext';
import { ArrowRight, Terminal, Shield, CheckCircle2, ExternalLink, Play, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectData;
  onSelect: (projectId: string) => void;
  onOpenImage?: (imageUrl: string, caption: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onOpenImage }) => {
  const { mode } = useViewMode();
  const coverAsset = project.assets.find(a => a.isCover) || project.assets[0];

  return (
    <div className="group bg-slate-900/70 border border-slate-800/90 hover:border-slate-700/90 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between">
      <div>
        {/* Visual Cover Preview if available */}
        {coverAsset && (
          <div className="relative h-44 bg-slate-950 overflow-hidden border-b border-slate-800/80">
            {coverAsset.type === 'image' ? (
              <img
                src={coverAsset.url}
                alt={coverAsset.caption}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-center">
                <Layers className="w-12 h-12 text-sky-400/40 mb-2" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            
            {/* Badges on cover */}
            <div className="absolute top-3 left-3 flex gap-2">
              <StatusBadge status={project.status} size="sm" />
            </div>

            <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950/80 text-slate-300 border border-slate-800 backdrop-blur-sm">
              {project.category.split('&')[0].trim()}
            </div>
          </div>
        )}

        {/* Content body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs text-sky-400 font-mono mt-0.5">{project.baseline}</p>
            </div>
          </div>

          {/* DUAL VIEW CONTENT */}
          {mode === 'product' ? (
            /* PRODUCT VIEW */
            <div className="space-y-3 mt-3 text-xs text-slate-300">
              <p className="line-clamp-2 text-slate-400 leading-relaxed">
                {project.problem}
              </p>
              
              <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/60">
                <span className="font-semibold text-slate-200">Solution & Valeur : </span>
                <span className="text-slate-400 line-clamp-2">{project.solution}</span>
              </div>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                    {tech}
                  </span>
                ))}
                {project.stack.length > 4 && (
                  <span className="font-mono text-[10px] px-1.5 py-0.5 text-slate-400">
                    +{project.stack.length - 4}
                  </span>
                )}
              </div>
            </div>
          ) : (
            /* ENGINEERING VIEW */
            <div className="space-y-3 mt-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 font-mono text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                  <Terminal className="w-3.5 h-3.5" />
                  Stack & Architecture
                </div>
                <div className="text-slate-400 text-[10px]">
                  {project.stack.join(' • ')}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <div className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-2">{project.whatIBuilt[0]}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{project.security.highlights[0]}</span>
                </div>
              </div>

              {/* Testing pill */}
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
                <span>Tests : {project.testing.frameworks.join(', ')}</span>
                <span className="text-slate-300 font-semibold">{project.repoVisibility}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card footer actions */}
      <div className="px-5 py-3.5 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-2">
        <button
          onClick={() => onSelect(project.id)}
          className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
        >
          {mode === 'product' ? 'Voir le projet' : 'Étude d\'ingénierie'}
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>

        {project.hasLiveDemo && (
          <button
            onClick={() => onSelect(project.id)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 border border-sky-500/30 transition-colors"
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Tester en Live</span>
          </button>
        )}
      </div>
    </div>
  );
};
