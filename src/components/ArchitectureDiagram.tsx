import React from 'react';
import { ArrowRight, Layers, Cpu, Server, Shield, Database, Smartphone } from 'lucide-react';

interface ArchitectureStep {
  step: string;
  detail: string;
}

interface ArchitectureDiagramProps {
  overview: string;
  flow: ArchitectureStep[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ overview, flow }) => {
  return (
    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 my-4">
      <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-2 flex items-center gap-2">
        <Layers className="w-4 h-4" />
        Architecture & Flux d'Exécution
      </div>
      <p className="text-xs text-slate-400 mb-5 leading-relaxed">{overview}</p>

      {/* Responsive Workflow Steps */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/30 to-emerald-500/20 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 relative z-10">
          {flow.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-lg p-3.5 hover:border-slate-700 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  Étape {idx + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
              </div>
              <h6 className="text-xs font-semibold text-slate-100">{item.step}</h6>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
