import { GithubIcon } from './icons/GithubIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-mono font-black text-white text-base tracking-tight">CHRISTINE</span>
              <span className="font-mono font-bold text-sky-400 text-base tracking-tight">AI LAB</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Portfolio technique & laboratoire d'ingénierie logicielle par Christine.
              Conception et déploiement de produits d'intelligence artificielle appliqués, plateformes de données en mémoire et systèmes agentiques de production.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/cdurand42"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github.com/cdurand42</span>
              </a>
            </div>
          </div>

          {/* Standards & Philosophy */}
          <div className="space-y-2">
            <h5 className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">Principes Directeurs</h5>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li>• Produit fonctionnel &gt; Sophistication inutile</li>
              <li>• Données factuelles sans extrapolation fictive</li>
              <li>• Gestion rigoureuse des secrets &amp; privacy-first</li>
              <li>• Optimisation des coûts d'infrastructure (DuckDB, Parquet)</li>
              <li>• Validation stricte : tests Pytest &amp; E2E</li>
            </ul>
          </div>

          {/* Legal / Disclaimers */}
          <div className="space-y-2">
            <h5 className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">Avertissement Déontologique</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Ce portfolio présente des travaux techniques et prototypes réalisés par Christine. Les noms d'entreprises (Enedis, Evernex, Lariviere, ZCube) sont cités exclusivement au titre de cas d'usage ou contextes d'études sans prétendre représenter officiellement ces organisations.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Christine AI Lab. Conçu avec Vite, React 18, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px]">
            <span>Client-Side Static SSG</span>
            <span>•</span>
            <span>Zero-Tracker</span>
            <span>•</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
