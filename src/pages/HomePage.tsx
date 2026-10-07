import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { SKILL_DOMAINS } from '../data/skills';
import { CATEGORIES } from '../data/taxonomy';
import { ProjectCategory } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { CategoryPills } from '../components/CategoryPills';
import { useViewMode } from '../context/ViewModeContext';
import { Terminal, Cpu, Database, ShieldCheck, Layout, ArrowRight, Sparkles, CheckCircle2, Play, ExternalLink } from 'lucide-react';

interface HomePageProps {
  onSelectProject: (projectId: string) => void;
  onOpenImage: (imageUrl: string, caption: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectProject, onOpenImage }) => {
  const { mode } = useViewMode();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  // Count projects per category
  const counts = CATEGORIES.reduce((acc, cat) => {
    if (cat.id === 'All') {
      acc[cat.id] = PROJECTS.length;
    } else {
      acc[cat.id] = PROJECTS.filter(p => p.category === cat.id).length;
    }
    return acc;
  }, {} as Record<ProjectCategory, number>);

  const featuredProjects = PROJECTS.filter(p => p.featured).sort((a, b) => a.order - b.order);
  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-rose-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-8 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>AI Product Engineering Lab</span>
            <span className="text-slate-400">•</span>
            <span className="text-sky-400 font-semibold">Par Christine</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Building useful <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              AI products.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            De la cartographie organisationnelle industrielle aux studios publicitaires multimodaux et moteurs analytiques DuckDB. <br className="hidden sm:inline" />
            <span className="text-slate-400">Pas de promesses théoriques : des produits fonctionnels, testés et déployés.</span>
          </p>

          {/* Quick Metrics / Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="text-xl font-bold text-sky-400">7</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Produits &amp; Pilotes</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="text-xl font-bold text-indigo-400">100%</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Core Python &amp; LLM</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="text-xl font-bold text-emerald-400">Zero-Leak</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Architecture Sas &amp; FinOps</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="text-xl font-bold text-amber-400">0 €</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Frais Cloud Inutiles</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Sélection Phare</div>
            <h2 className="text-2xl font-bold text-white mt-1">Réalisations Majeures</h2>
            <p className="text-xs text-slate-400 mt-0.5">
              {mode === 'product'
                ? 'Applications concrètes répondant à des problématiques métier critiques.'
                : 'Architectures logicielles, décisions techniques, tests et sécurité.'}
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 hidden sm:block">
            Vue active : <span className="text-sky-400 font-bold uppercase">{mode}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      </section>

      {/* TECHNICAL DOMAINS & SKILLS MATRIX */}
      <section id="skills" className="space-y-6 pt-6">
        <div className="border-b border-slate-800 pb-4">
          <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Socle Technique</div>
          <h2 className="text-2xl font-bold text-white mt-1">Domaines d'Expertise &amp; Savoir-Faire</h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Compétences éprouvées sur le terrain, illustrées dans les dépôts de code réels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_DOMAINS.map(domain => (
            <div
              key={domain.id}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                    {getIcon(domain.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100">{domain.title}</h3>
                    <span className="text-[10px] font-mono text-sky-400 px-1.5 py-0.2 rounded bg-sky-950/40">
                      {domain.badge}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">{domain.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800/60 text-xs">
                {domain.items.map((item, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/40">
                    <div className="flex items-center justify-between text-slate-200 font-medium">
                      <span>{item.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400">{item.level}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALL PROJECTS CATALOG WITH TAXONOMY FILTER */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider">Catalogue Complet</div>
            <h2 className="text-2xl font-bold text-white mt-1">Tous les Systèmes &amp; Expérimentations</h2>
          </div>
        </div>

        {/* Category Filter Pills */}
        <CategoryPills
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          counts={counts}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onOpenImage={onOpenImage}
            />
          ))}
        </div>
      </section>

      {/* ENGINEERING PHILOSOPHY / INTERVIEW BANNER */}
      <section className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 space-y-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Positionnement &amp; Entretien Technique
          </div>
          <h3 className="text-xl font-bold text-white">
            « Construire des produits réels plutôt qu'accumuler des lignes de code isolées. »
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Chaque projet de ce lab est guidé par le même pragmatisme : partir d'une friction métier réelle (ETI industrielle, salon événementiel, appels d'offres publics, facturation d'API), concevoir l'architecture la plus économique et fiable possible (Python, DuckDB, Parquet, Streamlit, FastAPI), intégrer des garde-fous déterministes sur l'IA, et livrer une interface que l'utilisateur final peut manipuler immédiatement.
          </p>
        </div>
      </section>

    </div>
  );
};
