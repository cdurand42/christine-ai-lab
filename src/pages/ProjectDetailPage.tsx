import React from 'react';
import { ProjectData } from '../types';
import { StatusBadge } from '../components/Badge';
import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { useViewMode } from '../context/ViewModeContext';
import { WorkForceDemo } from '../components/demos/WorkForceDemo';
import { LariviereDemo } from '../components/demos/LariviereDemo';
import { DataLabDemo } from '../components/demos/DataLabDemo';
import { ECSRadarDemo } from '../components/demos/ECSRadarDemo';
import { FinOpsDemo } from '../components/demos/FinOpsDemo';
import { ArrowLeft, Play, ExternalLink, Terminal, Shield, CheckCircle2, Lock, Cpu, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

interface ProjectDetailPageProps {
  project: ProjectData;
  onBack: () => void;
  onOpenImage: (imageUrl: string, caption: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack, onOpenImage }) => {
  const { mode } = useViewMode();

  const renderInteractiveDemo = () => {
    switch (project.interactiveDemoId) {
      case 'workforce-matrix':
        return <WorkForceDemo />;
      case 'lariviere-studio':
        return <LariviereDemo />;
      case 'datalab-bench':
        return <DataLabDemo />;
      case 'ecs-radar':
        return <ECSRadarDemo />;
      case 'finops-calculator':
        return <FinOpsDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Top Navigation */}
      <div className="flex items-center justify-between gap-4 pt-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'ensemble des projets</span>
        </button>

        <div className="flex items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            {project.category}
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {project.name}
        </h1>
        <p className="text-base sm:text-lg text-sky-400 font-mono">
          {project.baseline}
        </p>

        {/* Action strip: Explicit Live App vs Interactive Demo vs Case Study */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.demoType === 'REAL LIVE APP' && project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Live App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          {project.demoType === 'INTERACTIVE PORTFOLIO DEMO' && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500/10 text-sky-300 border border-sky-500/30">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Interactive Portfolio Demo</span>
            </div>
          )}

          {project.demoType === 'CASE STUDY ONLY' && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-slate-300 border border-slate-800">
              <span>Technical Case Study</span>
            </div>
          )}

          {project.repoUrl && (
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Dépôt : {project.repoVisibility}</span>
            </div>
          )}
        </div>
      </div>

      {/* Problem, Solution & Impact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h3 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">01. Le Problème Métier</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h3 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">02. La Solution Conçue</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <h3 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">03. L'Impact &amp; Résultat</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{project.impact}</p>
        </div>
      </div>

      {/* INTERACTIVE DEMO (IF AVAILABLE) */}
      {project.interactiveDemoId && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <h3 className="text-base font-bold text-white">Démonstration Interactive Intégrée</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">Exécutable directement dans le navigateur</span>
          </div>

          {renderInteractiveDemo()}
        </section>
      )}

      {/* ARCHITECTURE & WORKFLOW */}
      <section className="space-y-4">
        <ArchitectureDiagram
          overview={project.architecture.overview}
          flow={project.architecture.flow}
        />
      </section>

      {/* ENGINEERING HIGHLIGHTS: What I Built & What I Learned */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* What I Built */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Ce que j'ai conçu &amp; développé
          </div>
          <ul className="space-y-3 text-xs text-slate-300">
            {project.whatIBuilt.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 flex-shrink-0 mt-1.5"></span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What I Learned & Key Insights */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            Retours d'expérience &amp; Décisions clés
          </div>
          <ul className="space-y-3 text-xs text-slate-300">
            {project.whatILearned.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5"></span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TECHNICAL DECISIONS & TRADE-OFFS */}
      {project.decisions.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-sky-400" />
            Arbitrages Techniques &amp; Compromis
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.decisions.map((dec, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2 text-xs">
                <div className="font-semibold text-slate-100 flex items-center gap-2">
                  <span className="font-mono text-sky-400">#0{idx+1}</span>
                  <span>{dec.decision}</span>
                </div>
                <div className="text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-400">Pourquoi : </span>
                  {dec.rationale}
                </div>
                <div className="text-slate-400 pt-1 border-t border-slate-800/60 text-[11px]">
                  <span className="font-semibold text-slate-400">Alternative écartée : </span>
                  {dec.alternativeConsidered}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TESTING, QA & SECURITY COLUMNS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Testing & QA */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 text-xs">
          <div className="flex items-center gap-2 font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4" />
            Tests &amp; Assurance Qualité
          </div>
          <div className="space-y-2 text-slate-300">
            <div className="flex gap-2">
              <span className="text-slate-400">Frameworks :</span>
              <span className="font-mono text-slate-200">{project.testing.frameworks.join(', ')}</span>
            </div>
            <p className="leading-relaxed text-slate-400">{project.testing.description}</p>
            {project.testing.sampleCommand && (
              <div className="p-2.5 rounded-lg bg-slate-950 font-mono text-[11px] text-sky-300 border border-slate-800 overflow-x-auto">
                $ {project.testing.sampleCommand}
              </div>
            )}
          </div>
        </div>

        {/* Security & Data Governance */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 text-xs">
          <div className="flex items-center gap-2 font-mono font-bold text-indigo-400 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            Sécurité &amp; Confidentialité
          </div>
          <div className="space-y-2 text-slate-300">
            <ul className="space-y-1.5">
              {project.security.highlights.map((sec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-400">
                  <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0 mt-2"></span>
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
            <p className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
              <strong className="text-slate-300">Gouvernance des données : </strong>
              {project.security.dataPrivacy}
            </p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS & REAL ASSETS GALLERY */}
      {project.assets.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
              <ImageIcon className="w-4 h-4 text-sky-400" />
              Captures d'Écran Réelles du Produit
            </div>
            <span className="text-xs text-slate-400">Cliquez pour agrandir</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.assets.filter(a => a.type === 'image').map((asset, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImage(asset.url, asset.caption)}
                className="group relative h-48 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 cursor-pointer transition-all shadow-md"
              >
                <img
                  src={asset.url}
                  alt={asset.caption}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-[11px] text-slate-200 font-mono truncate">{asset.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
