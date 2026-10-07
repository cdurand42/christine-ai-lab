import React from 'react';
import { PROJECTS } from '../data/projects';
import { StatusBadge } from '../components/Badge';
import { Shield, Lock, ExternalLink, Terminal, CheckCircle2, AlertTriangle, Layers } from 'lucide-react';

export const InventoryPage: React.FC = () => {
  const inventoryItems = [
    {
      name: 'WorkForceAI',
      localPath: 'D:\\WorkForceAI',
      remote: 'https://github.com/cdurand42/WorkForceAI.git',
      branch: 'fix/p0-03-durable-checkpoints',
      stack: 'Python 3.12, Streamlit, Pydantic v2, Ruff, Pytest, Playwright',
      status: 'PILOT' as const,
      category: 'Enterprise AI & Organization',
      visibility: 'Private Enterprise',
      hasLiveDemo: true,
      securityNotes: 'Aucun secret requis en mode local. Faux client Novalis Industries. Gitleaks actif. Dépôt conservé privé.'
    },
    {
      name: 'Éditions Larivière AI',
      localPath: 'D:\\LariviereAI & D:\\Lariviere-Live',
      remote: 'https://github.com/cdurand42/Lariviere-Live.git',
      branch: 'codex/lariviere-auth-branding',
      stack: 'Python, Streamlit, Gemini Multimodal, Pillow (Lanczos), PBKDF2-HMAC-SHA256, python-pptx',
      status: 'PILOT' as const,
      category: 'Multimodal AI & Creative Automation',
      visibility: 'Public Gateway + Private Core',
      hasLiveDemo: true,
      securityNotes: 'Architecture sas sécurisée : portail public léger avec chargement mémoire du dépôt privé via GitHub API. Dérivation forte 600k itérations.'
    },
    {
      name: 'DataLab Enedis',
      localPath: 'D:\\DataLab-Enedis & D:\\DataLab-Live',
      remote: 'https://github.com/cdurand42/DataLab-Live.git',
      branch: 'fix-session-controls-no-sidebar / main',
      stack: 'Python 3.12, DuckDB, Apache Parquet, Streamlit, FastAPI, PBKDF2',
      status: 'PILOT' as const,
      category: 'Data & Decision Systems',
      visibility: 'Public Gateway + Private Core',
      hasLiveDemo: true,
      securityNotes: 'Open Data public (Enedis). Frontend public consommant le backend via X-DataLab-Token côté serveur. Swagger/docs désactivés en prod.'
    },
    {
      name: 'ECS Signal-to-Deal',
      localPath: 'D:\\ECS-Signal-to-Deal',
      remote: 'https://github.com/cdurand42/ecs-signal-to-deal.git',
      branch: 'codex/phase0-executable-audit',
      stack: 'Python 3.12, Streamlit, Playwright, Ruff, Pytest, Windows Loop Policy',
      status: 'PILOT' as const,
      category: 'Agentic Intelligence & Public Tenders',
      visibility: 'Proprietary Pilot (Private)',
      hasLiveDemo: true,
      securityNotes: 'Données BOAMP/TED publiques. Aucun contact inventé, aucun accès CRM Evernex. Dépôt conservé privé.'
    },
    {
      name: 'GeminiUsageMonitor',
      localPath: 'D:\\GeminiUsageMonitor & D:\\GeminiUsageDashboard',
      remote: 'https://github.com/cdurand42/GeminiUsageDashboard.git',
      branch: 'codex/next-2-reliable-cost-engine / main',
      stack: 'FastAPI, SQLAlchemy 2.0, Alembic, Pydantic v2, Streamlit, Python Decimal',
      status: 'PILOT' as const,
      category: 'Developer Tools & FinOps',
      visibility: 'Public Gateway + Private Service',
      hasLiveDemo: true,
      securityNotes: 'Architecture Zero-Knowledge : ne reçoit pas la clé API Google. Ingestion de compteurs de tokens uniquement. Protection mot de passe hmac constant.'
    },
    {
      name: 'Jarvis Local Assistant',
      localPath: 'D:\\Jarvis',
      remote: 'https://github.com/cdurand42/jarvis.git',
      branch: 'feat/mvp-bootstrap',
      stack: 'Python 3.10+, Gemini 2.5 Flash, FastAPI, WebSockets, HTML5 Speech, SQLite, PWA',
      status: 'PROTOTYPE' as const,
      category: 'Agentic AI & Edge Systems',
      visibility: 'Proprietary Prototype (Private)',
      hasLiveDemo: true,
      securityNotes: 'Écoute loopback 127.0.0.1 uniquement. Validation obligatoire des actions système par l\'utilisateur. Proxy chiffré Tailscale Serve.'
    },
    {
      name: 'Zcube Enedis Pilot',
      localPath: 'D:\\Zcube-Enedis-Pilot',
      remote: 'https://github.com/cdurand42/Zcube-Enedis-Pilot.git',
      branch: 'main',
      stack: 'Python, Streamlit, Gemini, python-pptx, GeminiUsageMonitor Client',
      status: 'PILOT' as const,
      category: 'Enterprise AI & Organization',
      visibility: 'Proprietary Pilot (Private)',
      hasLiveDemo: false,
      securityNotes: 'Pilote interne de cadrage territorial. Intégration de télémétrie de coût non bloquante.'
    }
  ];

  return (
    <div className="space-y-8 py-6 pb-20">
      
      <div className="space-y-2 border-b border-slate-800 pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Contrôle Qualité &amp; Audit Sécurité</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Inventaire Technique des Dépôts
        </h1>
        <p className="text-xs text-slate-400 max-w-3xl leading-relaxed">
          Audit exhaustif des dépôts locaux scannés sur le système hôte, stacks associées, statut de déploiement et politique stricte d'étanchéité des secrets.
        </p>
      </div>

      {/* Security Guarantee Notice */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-start gap-3">
        <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <h4 className="font-semibold text-emerald-300">Politique de prévention des fuites</h4>
          <p className="text-slate-300 leading-relaxed">
            Conformément à la charte de sécurité, aucun dépôt propriétaire présentant un risque de divulgation de données d'entreprise ou de clé API n'a été basculé en accès public. Les projets disposant d'une démonstration live utilisent une architecture découplée à sas d'authentification ou un portail public-safe consommant des endpoints protégés.
          </p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/60 shadow-lg">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 font-mono text-slate-400">
              <th className="p-3.5">Projet &amp; Local</th>
              <th className="p-3.5">Statut</th>
              <th className="p-3.5">Stack Technique</th>
              <th className="p-3.5">Visibilité GitHub</th>
              <th className="p-3.5">Gouvernance &amp; Sécurité</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-slate-300">
            {inventoryItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                <td className="p-3.5 font-medium text-slate-100">
                  <div className="font-bold text-sm text-sky-300">{item.name}</div>
                  <div className="font-mono text-[10px] text-slate-400 mt-0.5">{item.localPath}</div>
                  <div className="font-mono text-[10px] text-indigo-400">Branche : {item.branch}</div>
                </td>
                <td className="p-3.5 whitespace-nowrap">
                  <StatusBadge status={item.status} size="sm" />
                </td>
                <td className="p-3.5">
                  <div className="font-mono text-[11px] text-slate-300 max-w-xs">{item.stack}</div>
                </td>
                <td className="p-3.5 whitespace-nowrap">
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                    {item.visibility}
                  </span>
                </td>
                <td className="p-3.5 text-slate-400 text-[11px] max-w-sm leading-snug">
                  {item.securityNotes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
