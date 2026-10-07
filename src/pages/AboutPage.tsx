import { Terminal, Cpu, CheckCircle2, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../components/icons/GithubIcon';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8 pb-20">
      
      {/* Intro Hero */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Ingénierie Produit &amp; Systèmes IA</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          À propos — Christine AI Lab
        </h1>
        <p className="text-base text-slate-300 leading-relaxed font-mono">
          Product Builder &amp; AI Systems Engineer. Je transforme des frictions métier complexes en produits logiciels testés, sécurisés et déployés.
        </p>
      </div>

      {/* Core Philosophy Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400" />
            Du problème métier à l'outil vivant
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Je ne construis pas des démos pour la beauté du code isolé. Je pars de cas concrets (pénurie de techniciens en automatisme chez un industriel, mise en page publicitaire chronophage pour un éditeur, tri fastidieux d'appels d'offres publics audiovisuels) pour concevoir une application que l'utilisateur peut tester immédiatement.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
            <Shield className="w-4 h-4 text-emerald-400" />
            Pragmatisme &amp; Zéro Complaisance IA
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            L'IA générative n'est pas une formule magique. Un LLM ne doit jamais déformer un logo d'entreprise (résolu par un pipeline déterministe Pillow), halluciner un contact commercial (banni dans le pilote ECS) ou faire exploser les budgets de tokens (surveillé par microservice FinOps avec précision Decimal).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Architecture Économique &amp; Résiliente
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Priorité à l'efficacité : requêtage colonnaire DuckDB et Apache Parquet pour traiter des volumes massifs d'Open Data sans payer d'instance de base de données cloud, sas d'accès PBKDF2 pour déployer gratuitement sur Streamlit Cloud sans divulguer de code propriétaire.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-rose-400" />
            Culture QA, Tests &amp; Sécurité
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Chaque projet s'appuie sur une suite de tests rigoureuse : fixtures Pytest isolant le réseau, validations de bout en bout Playwright sur mobile et desktop, contrôle Gitleaks pour éliminer tout risque de fuite de secret avant publication.
          </p>
        </div>
      </div>

      {/* Methodology Lifecycle */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-slate-100 font-mono uppercase tracking-wider">
          Cycle de Réalisation d'un Produit
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-sky-400 font-bold">1. Découverte</div>
            <div className="text-[11px] text-slate-400 mt-1">Audit du besoin réel &amp; données sources</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-indigo-400 font-bold">2. Architecture</div>
            <div className="text-[11px] text-slate-400 mt-1">Pipeline minimal, local-first &amp; zero-cost</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-emerald-400 font-bold">3. Prototype Live</div>
            <div className="text-[11px] text-slate-400 mt-1">Streamlit / React livré en quelques jours</div>
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-amber-400 font-bold">4. Durcissement</div>
            <div className="text-[11px] text-slate-400 mt-1">Tests E2E, sas auth &amp; déploiement</div>
          </div>
        </div>
      </div>

      {/* Contact & Links */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-slate-900/70 border border-slate-800 gap-4">
        <div>
          <div className="text-sm font-bold text-white">Échanger autour d'un projet ou d'un cadrage technique</div>
          <div className="text-xs text-slate-400 mt-0.5">Disponible pour des présentations en direct et revues de code.</div>
        </div>
        <a
          href="https://github.com/cdurand42"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Profil GitHub (@cdurand42)</span>
        </a>
      </div>

    </div>
  );
};
