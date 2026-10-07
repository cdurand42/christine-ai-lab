import React, { useState } from 'react';
import { DollarSign, Shield, Activity, RefreshCw, CheckCircle2 } from 'lucide-react';

interface PricingTier {
  modelId: string;
  name: string;
  inputPerMillion: number;
  outputPerMillion: number;
  imagePricePerUnit: number;
}

const PRICING_CATALOG: PricingTier[] = [
  {
    modelId: 'gemini-2.5-flash',
    name: 'Gemini 2.5 Flash',
    inputPerMillion: 0.15, // $0.15 / 1M tokens
    outputPerMillion: 0.60, // $0.60 / 1M tokens
    imagePricePerUnit: 0.0003
  },
  {
    modelId: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    inputPerMillion: 1.25, // $1.25 / 1M tokens (<128k)
    outputPerMillion: 5.00, // $5.00 / 1M tokens
    imagePricePerUnit: 0.0025
  },
  {
    modelId: 'gemini-2.5-flash-lite',
    name: 'Gemini 2.5 Flash Lite',
    inputPerMillion: 0.075,
    outputPerMillion: 0.30,
    imagePricePerUnit: 0.00015
  }
];

export const FinOpsDemo: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('gemini-2.5-flash');
  const [promptTokens, setPromptTokens] = useState<number>(45000);
  const [candidateTokens, setCandidateTokens] = useState<number>(12000);
  const [imageCount, setImageCount] = useState<number>(4);
  const [callsPerMonth, setCallsPerMonth] = useState<number>(500);

  const tier = PRICING_CATALOG.find(t => t.modelId === selectedModel) || PRICING_CATALOG[0];

  // Exact Python Decimal replica calculation
  const inputCostSingle = (promptTokens / 1_000_000) * tier.inputPerMillion;
  const outputCostSingle = (candidateTokens / 1_000_000) * tier.outputPerMillion;
  const imageCostSingle = imageCount * tier.imagePricePerUnit;
  const totalCostSingle = inputCostSingle + outputCostSingle + imageCostSingle;
  const totalCostMonthly = totalCostSingle * callsPerMonth;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <h4 className="text-sm font-semibold tracking-wide text-sky-400 uppercase font-mono">Calculateur FinOps Zero-Knowledge</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Moteur de précision décimale — Télémétrie GeminiUsageMonitor</p>
        </div>
        <div className="flex gap-2">
          {PRICING_CATALOG.map(t => (
            <button
              key={t.modelId}
              onClick={() => setSelectedModel(t.modelId)}
              className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                selectedModel === t.modelId
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Inputs & Outputs */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-4 items-center">
        {/* Sliders Form */}
        <div className="md:col-span-7 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs">
          <div>
            <div className="flex justify-between text-slate-300 font-mono mb-1">
              <span>Tokens d'Entrée (Prompt) :</span>
              <span className="text-sky-400 font-bold">{promptTokens.toLocaleString('fr-FR')} tokens</span>
            </div>
            <input
              type="range"
              min="1000"
              max="200000"
              step="5000"
              value={promptTokens}
              onChange={(e) => setPromptTokens(Number(e.target.value))}
              className="w-full accent-sky-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 font-mono mb-1">
              <span>Tokens de Sortie (Réponse) :</span>
              <span className="text-indigo-400 font-bold">{candidateTokens.toLocaleString('fr-FR')} tokens</span>
            </div>
            <input
              type="range"
              min="500"
              max="50000"
              step="1000"
              value={candidateTokens}
              onChange={(e) => setCandidateTokens(Number(e.target.value))}
              className="w-full accent-indigo-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 font-mono mb-1">
              <span>Visuels Multimodaux (Images traitées) :</span>
              <span className="text-emerald-400 font-bold">{imageCount} images</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={imageCount}
              onChange={(e) => setImageCount(Number(e.target.value))}
              className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 font-mono mb-1">
              <span>Volume Mensuel d'Exécutions :</span>
              <span className="text-amber-400 font-bold">{callsPerMonth.toLocaleString('fr-FR')} requêtes/mois</span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={callsPerMonth}
              onChange={(e) => setCallsPerMonth(Number(e.target.value))}
              className="w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Calculated Totals Cards */}
        <div className="md:col-span-5 space-y-3">
          <div className="p-4 bg-slate-950/80 rounded-xl border border-sky-500/30 shadow-lg">
            <div className="text-xs text-slate-400 font-mono uppercase">Coût Estimé par Requête</div>
            <div className="text-2xl font-bold font-mono text-sky-400 mt-1">
              ${totalCostSingle.toFixed(5)} <span className="text-xs text-slate-400 font-normal">USD</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">
              ~{(totalCostSingle * 0.92).toFixed(5)} € EUR
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-xl border border-emerald-500/30 shadow-lg">
            <div className="text-xs text-slate-400 font-mono uppercase">Budget Estimé Mensuel ({callsPerMonth} runs)</div>
            <div className="text-3xl font-extrabold font-mono text-emerald-400 mt-1">
              ${totalCostMonthly.toFixed(2)} <span className="text-xs text-slate-400 font-normal">USD/mois</span>
            </div>
            <div className="text-[11px] text-emerald-300/80 mt-1">
              FinOps sous contrôle : projection basée sur le snapshot tarifaire officiel.
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Architecture Zero-Knowledge
            </div>
            <p>
              Le moniteur n'accepte que les compteurs de tokens. Aucune clé API Google Gemini n'est requise ni transmise.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Arithmétique Python Decimal stricte : élimine les erreurs d'arrondi de la virgule flottante.
        </span>
        <span className="font-mono text-slate-400">API Endpoint: POST /usage</span>
      </div>
    </div>
  );
};
