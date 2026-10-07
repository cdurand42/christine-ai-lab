import React, { useState } from 'react';
import { Layers, Check, Sparkles, AlertCircle, Eye } from 'lucide-react';

export const LariviereDemo: React.FC = () => {
  const [format, setFormat] = useState<'feed' | 'story' | 'carousel'>('feed');
  const [backdropTheme, setBackdropTheme] = useState<'dark' | 'light'>('dark');
  const [showMaskOnly, setShowMaskOnly] = useState(false);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <h4 className="text-sm font-semibold tracking-wide text-sky-400 uppercase font-mono">Inspecteur Multiformat & Charte Déterministe</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Éditions Larivière — Campagne Game Fair / Bol d'Or</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFormat('feed')}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${format === 'feed' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            Feed Carré (1:1)
          </button>
          <button
            onClick={() => setFormat('story')}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${format === 'story' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            Story / Reel (9:16)
          </button>
          <button
            onClick={() => setFormat('carousel')}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${format === 'carousel' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            Carrousel
          </button>
        </div>
      </div>

      {/* Control Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-3 bg-slate-950/60 px-4 rounded-lg my-4 text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Simulation fond :</span>
          <button
            onClick={() => setBackdropTheme('dark')}
            className={`px-2.5 py-1 rounded font-medium ${backdropTheme === 'dark' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
          >
            Ambiance Sombre (Logo Blanc auto)
          </button>
          <button
            onClick={() => setBackdropTheme('light')}
            className={`px-2.5 py-1 rounded font-medium ${backdropTheme === 'light' ? 'bg-slate-200 text-slate-900 font-semibold' : 'text-slate-400'}`}
          >
            Ambiance Claire (Logo Noir auto)
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="maskToggle"
            checked={showMaskOnly}
            onChange={(e) => setShowMaskOnly(e.target.checked)}
            className="rounded bg-slate-800 border-slate-700 text-sky-500"
          />
          <label htmlFor="maskToggle" className="cursor-pointer text-slate-300 select-none">
            Afficher la zone sanctuarisée
          </label>
        </div>
      </div>

      {/* Preview Viewport */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 flex justify-center py-4 bg-slate-950/80 rounded-xl border border-slate-800/80 p-4">
          <div
            className={`relative rounded-lg overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between ${
              format === 'feed'
                ? 'w-72 h-72'
                : format === 'story'
                ? 'w-56 h-96'
                : 'w-80 h-64'
            } ${backdropTheme === 'dark' ? 'bg-gradient-to-br from-emerald-950 via-slate-900 to-amber-950' : 'bg-gradient-to-br from-amber-100 via-sky-50 to-emerald-100 text-slate-900'}`}
          >
            {/* Visual decorative background representing Gemini generative scenery */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Sanctuarized Zone Top Right */}
            <div className={`absolute top-3 right-3 p-2 rounded transition-all ${showMaskOnly ? 'border-2 border-dashed border-rose-500 bg-rose-500/20' : ''}`}>
              <div className="flex flex-col items-end">
                <div className={`px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase font-mono shadow-sm ${backdropTheme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                  GAME FAIR
                </div>
                <div className={`text-[9px] font-mono mt-0.5 ${backdropTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  OFFICIAL LOGO
                </div>
              </div>
              {showMaskOnly && (
                <div className="absolute -bottom-5 right-0 text-[10px] text-rose-400 font-mono whitespace-nowrap bg-slate-950 px-1 rounded border border-rose-800">
                  Zone sanctuarisée (Lanczos)
                </div>
              )}
            </div>

            {/* Bottom event label */}
            <div className="p-4 z-10 mt-auto">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${backdropTheme === 'dark' ? 'bg-sky-950/80 text-sky-300 border border-sky-800/40' : 'bg-sky-200 text-sky-900'}`}>
                Éditions Larivière • 43e Édition
              </span>
              <h5 className={`text-base font-bold mt-1 leading-snug ${backdropTheme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Le plus grand salon de la nature et de la chasse
              </h5>
              <p className={`text-xs mt-0.5 ${backdropTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                13, 14 & 15 juin 2026 — Parc équestre fédéral de Lamotte-Beuvron
              </p>
            </div>
          </div>
        </div>

        {/* Technical Explanations */}
        <div className="md:col-span-5 space-y-3 text-xs">
          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Génération du Fond (Gemini Vision)
            </div>
            <p className="text-slate-400 mt-1">
              Génère le décor d'ambiance et la mise en situation selon le scénario choisi, avec consigne stricte de ne jamais générer de texte ni de logo fictif en haut à droite.
            </p>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Incrustation Déterministe (Pillow Lanczos)
            </div>
            <p className="text-slate-400 mt-1">
              Le logo officiel PNG haute résolution est redimensionné sans perte d'aspect ratio. Un calcul de luminance sur la zone d'accueil détermine automatiquement le choix du logo sombre ou clair pour un contraste optimal (&gt; 4.5:1).
            </p>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800">
            <div className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              Visual Quality Judge
            </div>
            <p className="text-slate-400 mt-1">
              Un agent d'audit évalue la lisibilité, l'absence d'artefacts sur les visages ou produits, et valide le format avant enregistrement dans le cache de campagne.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
