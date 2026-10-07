import React, { useState } from 'react';
import { Database, Zap, ArrowUpDown, Info, CheckCircle2 } from 'lucide-react';

interface CommuneMetric {
  codeInsee: string;
  name: string;
  departement: string;
  consoTotaleMWh: number;
  nbSites: number;
  residentielPct: number;
  tertiairePct: number;
  industriePct: number;
  agriculturePct: number;
  radarScore: number; // deviation score in std dev
  radarStatus: 'Standard' | 'Attention Profil Industriel' | 'Écart Résidentiel Atypique';
}

const SAMPLE_COMMUNES: CommuneMetric[] = [
  {
    codeInsee: '69123',
    name: 'Lyon (Métropole)',
    departement: '69 — Rhône',
    consoTotaleMWh: 2480500,
    nbSites: 312000,
    residentielPct: 42,
    tertiairePct: 47,
    industriePct: 10,
    agriculturePct: 1,
    radarScore: 0.4,
    radarStatus: 'Standard'
  },
  {
    codeInsee: '42218',
    name: 'Saint-Étienne',
    departement: '42 — Loire',
    consoTotaleMWh: 820400,
    nbSites: 115000,
    residentielPct: 48,
    tertiairePct: 34,
    industriePct: 17,
    agriculturePct: 1,
    radarScore: 0.8,
    radarStatus: 'Standard'
  },
  {
    codeInsee: '74010',
    name: 'Annecy',
    departement: '74 — Haute-Savoie',
    consoTotaleMWh: 695200,
    nbSites: 87500,
    residentielPct: 44,
    tertiairePct: 39,
    industriePct: 16,
    agriculturePct: 1,
    radarScore: 0.6,
    radarStatus: 'Standard'
  },
  {
    codeInsee: '68224',
    name: 'Mulhouse',
    departement: '68 — Haut-Rhin',
    consoTotaleMWh: 610000,
    nbSites: 68000,
    residentielPct: 38,
    tertiairePct: 29,
    industriePct: 32,
    agriculturePct: 1,
    radarScore: 2.3,
    radarStatus: 'Attention Profil Industriel'
  },
  {
    codeInsee: '72181',
    name: 'Le Mans',
    departement: '72 — Sarthe',
    consoTotaleMWh: 745800,
    nbSites: 96000,
    residentielPct: 46,
    tertiairePct: 36,
    industriePct: 17,
    agriculturePct: 1,
    radarScore: 0.5,
    radarStatus: 'Standard'
  }
];

export const DataLabDemo: React.FC = () => {
  const [selectedInsee, setSelectedInsee] = useState<string>('68224'); // Mulhouse selected by default to show deviation
  const currentCommune = SAMPLE_COMMUNES.find(c => c.codeInsee === selectedInsee) || SAMPLE_COMMUNES[0];

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <h4 className="text-sm font-semibold tracking-wide text-sky-400 uppercase font-mono">Module Bench & Radar Enedis Open Data</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Analytique colonnaire DuckDB — Échantillon réel 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Sélectionner une commune :</span>
          <select
            value={selectedInsee}
            onChange={(e) => setSelectedInsee(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-sky-500"
          >
            {SAMPLE_COMMUNES.map(c => (
              <option key={c.codeInsee} value={c.codeInsee}>
                {c.name} ({c.codeInsee})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Commune Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-4">
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-400">Consommation Annuelle</div>
          <div className="text-lg font-bold text-slate-100 font-mono mt-0.5">
            {currentCommune.consoTotaleMWh.toLocaleString('fr-FR')} <span className="text-xs text-slate-400">MWh</span>
          </div>
          <div className="text-[11px] text-slate-500">{currentCommune.nbSites.toLocaleString('fr-FR')} compteurs</div>
        </div>

        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <div className="text-xs text-slate-400">Score Radar Déviation</div>
          <div className="text-lg font-bold text-sky-400 font-mono mt-0.5">
            +{currentCommune.radarScore} σ
          </div>
          <div className="text-[11px] text-slate-400">Écart à la médiane de strate</div>
        </div>

        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 col-span-2">
          <div className="text-xs text-slate-400">Statut Radar Signal</div>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
              currentCommune.radarScore > 1.5 ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
            }`}>
              {currentCommune.radarStatus}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            {currentCommune.radarScore > 1.5 ? 'Pondération industrielle supérieure aux moyennes régionales' : 'Distribution homogène conforme au profil urbain'}
          </div>
        </div>
      </div>

      {/* Sector Breakdown Visualization */}
      <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 my-4">
        <div className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center justify-between">
          <span>Décomposition Sectorielle de la Consommation :</span>
          <span className="text-slate-400">100% normalisé</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-800 h-4 rounded-lg overflow-hidden flex shadow-inner">
          <div style={{ width: `${currentCommune.residentielPct}%` }} className="bg-sky-500 transition-all duration-300" title={`Résidentiel: ${currentCommune.residentielPct}%`}></div>
          <div style={{ width: `${currentCommune.tertiairePct}%` }} className="bg-indigo-500 transition-all duration-300" title={`Tertiaire: ${currentCommune.tertiairePct}%`}></div>
          <div style={{ width: `${currentCommune.industriePct}%` }} className="bg-amber-500 transition-all duration-300" title={`Industrie: ${currentCommune.industriePct}%`}></div>
          <div style={{ width: `${currentCommune.agriculturePct}%` }} className="bg-emerald-500 transition-all duration-300" title={`Agriculture: ${currentCommune.agriculturePct}%`}></div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-sky-500"></span>
            <span className="text-slate-300">Résidentiel ({currentCommune.residentielPct}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-indigo-500"></span>
            <span className="text-slate-300">Tertiaire / Bureaux ({currentCommune.tertiairePct}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-amber-500"></span>
            <span className="text-slate-300">Industrie ({currentCommune.industriePct}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-emerald-500"></span>
            <span className="text-slate-300">Agriculture ({currentCommune.agriculturePct}%)</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-sky-400" />
          Radar produit un signal statistique descriptif explicable — aucun jugement de valeur ni causalité hâtive.
        </span>
        <span className="font-mono text-slate-400">Moteur In-Memory DuckDB</span>
      </div>
    </div>
  );
};
