import React, { useState } from 'react';
import { Search, FileText, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';

interface TenderNotice {
  id: string;
  source: 'BOAMP' | 'TED';
  sourceId: string;
  buyer: string;
  title: string;
  amountPublished: string | null;
  relevanceScore: number;
  scoreReasons: string[];
  historicalIncumbent: {
    found: boolean;
    name: string | null;
    evidenceNoticeId: string | null;
    status: 'Titulaire marché précédent prouvé' | 'Inconnu (pas d\'avis d\'attribution relié)';
  };
  dealStatus: 'Avis Clôturé' | 'En cours de consultation';
}

const SAMPLE_NOTICES: TenderNotice[] = [
  {
    id: 'notice-annecy',
    source: 'BOAMP',
    sourceId: 'BOAMP:26-96602',
    buyer: 'Communauté d\'Agglomération du Grand Annecy',
    title: 'Acquisition et maintenance d\'équipements audiovisuels et de visioconférence pour les salles communautaires',
    amountPublished: '380 000 € HT',
    relevanceScore: 92,
    scoreReasons: [
      'Mots-clés audiovisuels qualifiés : régie, visioconférence, écrans grande taille',
      'Besoin de financement et maintenance pluriannuelle explicite',
      'Acheteur public récurrent à solvabilité établie'
    ],
    historicalIncumbent: {
      found: true,
      name: 'Videlio SAS (Attribution 2022)',
      evidenceNoticeId: 'BOAMP:22-145091',
      status: 'Titulaire marché précédent prouvé'
    },
    dealStatus: 'En cours de consultation'
  },
  {
    id: 'notice-hec',
    source: 'BOAMP',
    sourceId: 'BOAMP:26-38299',
    buyer: 'HEC Paris — Campus Jouy-en-Josas',
    title: 'Fourniture de matériels audiovisuels pour les amphithéâtres et studios pédagogiques hybrides',
    amountPublished: null, // Note: strictly Non publié as documented in DEMO_RUNBOOK!
    relevanceScore: 86,
    scoreReasons: [
      'Termes clés : régies captation hybride, sonorisation amphithéâtre',
      'Grand compte enseignement supérieur à cycle d\'investissement régulier'
    ],
    historicalIncumbent: {
      found: true,
      name: 'Axians Communication (Attribution 2021)',
      evidenceNoticeId: 'BOAMP:21-88402',
      status: 'Titulaire marché précédent prouvé'
    },
    dealStatus: 'Avis Clôturé'
  }
];

export const ECSRadarDemo: React.FC = () => {
  const [selectedNoticeId, setSelectedNoticeId] = useState<string>('notice-annecy');
  const activeNotice = SAMPLE_NOTICES.find(n => n.id === selectedNoticeId) || SAMPLE_NOTICES[0];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <h4 className="text-sm font-semibold tracking-wide text-sky-400 uppercase font-mono">Radar d'Avis Publics & Preuve de Titulaire</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Pilote Zcube × Evernex Capital Solutions — Données BOAMP réelles</p>
        </div>
        <div className="flex gap-2">
          {SAMPLE_NOTICES.map(notice => (
            <button
              key={notice.id}
              onClick={() => setSelectedNoticeId(notice.id)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                selectedNoticeId === notice.id
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {notice.buyer.split('—')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Notice Details */}
      <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 my-4 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-800/80">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-sky-400 px-2 py-0.5 rounded bg-sky-950/60 border border-sky-800/60">
                {activeNotice.sourceId}
              </span>
              <span className="text-xs text-slate-400">Acheteur :</span>
              <span className="text-xs font-semibold text-slate-200">{activeNotice.buyer}</span>
            </div>
            <h5 className="text-sm font-semibold text-slate-100 mt-2">{activeNotice.title}</h5>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-mono">Score Pertinence</div>
              <div className="text-lg font-bold font-mono text-emerald-400">{activeNotice.relevanceScore}/100</div>
            </div>
            <div className="w-12 h-12 rounded-lg bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-center text-emerald-400 font-bold font-mono">
              AV
            </div>
          </div>
        </div>

        {/* Fact vs System Interpretation Notice */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Column 1: Facts from Source */}
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
            <div className="font-mono text-[11px] font-semibold text-sky-400 uppercase flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Faits issus de la source publique (Immuables)
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Montant officiel :</span>
                <span className="font-mono font-medium">
                  {activeNotice.amountPublished ?? (
                    <span className="text-amber-400/90 font-mono">Non publié (stricte non-extrapolation)</span>
                  )}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Statut de consultation :</span>
                <span className="font-mono">{activeNotice.dealStatus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Source officielle :</span>
                <span className="font-mono text-sky-400">Bulletin Officiel des Annonces des Marchés Publics</span>
              </div>
            </div>
          </div>

          {/* Column 2: Investigation & Historical Incumbent */}
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
            <div className="font-mono text-[11px] font-semibold text-indigo-400 uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Preuve de Titulaire Historique (Enquête)
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Titulaire précédent :</span>
                <span className="font-semibold text-emerald-300">{activeNotice.historicalIncumbent.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Avis d'attribution lié :</span>
                <span className="font-mono text-sky-400 underline cursor-pointer">{activeNotice.historicalIncumbent.evidenceNoticeId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Certification :</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Même acheteur + avis d'attribution vérifié
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown of score */}
        <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800/80 text-xs">
          <div className="text-[11px] font-mono text-slate-400 mb-1.5">Justification du score de pertinence :</div>
          <ul className="space-y-1 text-slate-300">
            {activeNotice.scoreReasons.map((reason, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Règle déontologique : 100% données publiques BOAMP/TED. Zéro contact ou donnée privée simulée.
        </span>
        <span className="font-mono text-slate-400">Signal-to-Deal v1.0</span>
      </div>
    </div>
  );
};
