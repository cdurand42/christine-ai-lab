import React, { useState } from 'react';
import { Users, Bot, Cpu, ShieldAlert, CheckCircle2, ArrowRight } from 'lucide-react';

interface Task {
  id: string;
  name: string;
  timeShare: number; // percentage of weekly time
  complexity: 'Low' | 'Medium' | 'High';
  risk: 'Low' | 'Medium' | 'High';
  currentMode: 'Human' | 'Copilot' | 'Supervised Agent' | 'Autonomous Agent';
  supervisionReq: string;
}

const SAMPLE_ROLES: { [key: string]: { title: string; site: string; count: number; tasks: Task[] } } = {
  plc_tech: {
    title: 'Technicien Automatisme & PLC',
    site: 'Mulhouse — Lignes automatisées',
    count: 14,
    tasks: [
      {
        id: 't1',
        name: 'Diagnostic de pannes d\'automates (Siemens S7/TIA Portal)',
        timeShare: 35,
        complexity: 'High',
        risk: 'High',
        currentMode: 'Copilot',
        supervisionReq: 'Validation obligatoire du technicien avant écriture de code automate'
      },
      {
        id: 't2',
        name: 'Rédaction des comptes-rendus d\'intervention GMAO',
        timeShare: 20,
        complexity: 'Low',
        risk: 'Low',
        currentMode: 'Autonomous Agent',
        supervisionReq: 'Vérification asynchrone par échantillonnage'
      },
      {
        id: 't3',
        name: 'Vérification des sauvegardes de programmes machines',
        timeShare: 15,
        complexity: 'Medium',
        risk: 'Medium',
        currentMode: 'Supervised Agent',
        supervisionReq: 'Notification d\'alerte et accusé de réception requis'
      },
      {
        id: 't4',
        name: 'Intervention physique sur armoire électrique sous tension',
        timeShare: 30,
        complexity: 'High',
        risk: 'High',
        currentMode: 'Human',
        supervisionReq: 'Exclusivité humaine requise (Habilitation BR/BC)'
      }
    ]
  },
  maint_tech: {
    title: 'Technicien Maintenance Mécatronique',
    site: 'Le Mans — Supply chain & usinage',
    count: 28,
    tasks: [
      {
        id: 'm1',
        name: 'Analyse des courbes vibratoires des broches',
        timeShare: 25,
        complexity: 'Medium',
        risk: 'Medium',
        currentMode: 'Supervised Agent',
        supervisionReq: 'Déclenchement d\'ordre de travail soumis à validation du chef d\'équipe'
      },
      {
        id: 'm2',
        name: 'Recherche de références de pièces d\'usure dans les éclatés',
        timeShare: 20,
        complexity: 'Low',
        risk: 'Low',
        currentMode: 'Copilot',
        supervisionReq: 'Validation du panier de commande par le technicien'
      },
      {
        id: 'm3',
        name: 'Remplacement mécanique et lignage laser',
        timeShare: 40,
        complexity: 'High',
        risk: 'High',
        currentMode: 'Human',
        supervisionReq: 'Opération manuelle physique critique'
      },
      {
        id: 'm4',
        name: 'Mise à jour des fiches d\'instructions opératoires',
        timeShare: 15,
        complexity: 'Low',
        risk: 'Low',
        currentMode: 'Copilot',
        supervisionReq: 'Relecture humaine avant publication'
      }
    ]
  }
};

export const WorkForceDemo: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'plc_tech' | 'maint_tech'>('plc_tech');
  const roleData = SAMPLE_ROLES[selectedRole];
  const [tasks, setTasks] = useState<Task[]>(roleData.tasks);

  // Switch role reset
  const handleSelectRole = (key: 'plc_tech' | 'maint_tech') => {
    setSelectedRole(key);
    setTasks(SAMPLE_ROLES[key].tasks);
  };

  const updateMode = (taskId: string, newMode: Task['currentMode']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, currentMode: newMode } : t));
  };

  const humanShare = tasks.filter(t => t.currentMode === 'Human').reduce((a, b) => a + b.timeShare, 0);
  const copilotShare = tasks.filter(t => t.currentMode === 'Copilot').reduce((a, b) => a + b.timeShare, 0);
  const agentShare = tasks.filter(t => t.currentMode === 'Supervised Agent' || t.currentMode === 'Autonomous Agent').reduce((a, b) => a + b.timeShare, 0);

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 text-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h4 className="text-sm font-semibold tracking-wide text-sky-400 uppercase font-mono">Simulateur WorkScan & Arbitrage</h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">Cas étalon : Novalis Industries (~2 400 salariés)</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => handleSelectRole('plc_tech')}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${selectedRole === 'plc_tech' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            Mulhouse (PLC)
          </button>
          <button
            onClick={() => handleSelectRole('maint_tech')}
            className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${selectedRole === 'maint_tech' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}
          >
            Le Mans (Mécatronique)
          </button>
        </div>
      </div>

      {/* Role Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <div className="text-xs text-slate-400">Poste & Localisation</div>
          <div className="text-sm font-semibold text-slate-100 mt-1">{roleData.title}</div>
          <div className="text-xs text-slate-500">{roleData.site}</div>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <div className="text-xs text-slate-400">Population Analysée</div>
          <div className="text-sm font-semibold text-slate-100 mt-1">{roleData.count} collaborateurs</div>
          <div className="text-xs text-amber-400/80">Tension forte sur les recrutements</div>
        </div>
        <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
          <div className="text-xs text-slate-400">Répartition Cible Temps de Travail</div>
          <div className="flex items-center gap-2 mt-1 text-xs font-mono">
            <span className="text-slate-300">{humanShare}% Humain</span>
            <span className="text-sky-400">| {copilotShare}% Copilot</span>
            <span className="text-emerald-400">| {agentShare}% Agent</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden flex">
            <div style={{ width: `${humanShare}%` }} className="bg-slate-400"></div>
            <div style={{ width: `${copilotShare}%` }} className="bg-sky-400"></div>
            <div style={{ width: `${agentShare}%` }} className="bg-emerald-400"></div>
          </div>
        </div>
      </div>

      {/* Interactive Tasks Table */}
      <div className="space-y-3 mt-4">
        <div className="text-xs font-mono uppercase text-slate-400">Activités cartographiées & Arbitrage d'autonomie :</div>
        {tasks.map(task => (
          <div key={task.id} className="p-3.5 bg-slate-950/40 border border-slate-800/90 rounded-lg hover:border-slate-700 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {task.timeShare}% temps hebdo
                  </span>
                  <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${task.risk === 'High' ? 'text-rose-400 bg-rose-950/40 border border-rose-800/40' : 'text-slate-400 bg-slate-800/40'}`}>
                    Risque : {task.risk}
                  </span>
                  <span className="text-xs text-slate-400">Complexité : {task.complexity}</span>
                </div>
                <div className="text-sm font-medium text-slate-200">{task.name}</div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{task.supervisionReq}</span>
                </div>
              </div>

              {/* Mode Selector */}
              <div className="flex items-center gap-1 self-start md:self-center bg-slate-900 p-1 rounded-lg border border-slate-800">
                {(['Human', 'Copilot', 'Supervised Agent', 'Autonomous Agent'] as const).map(mode => (
                  <button
                    key={mode}
                    onClick={() => updateMode(task.id, mode)}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                      task.currentMode === mode
                        ? mode === 'Human'
                          ? 'bg-slate-700 text-white'
                          : mode === 'Copilot'
                          ? 'bg-sky-600 text-white'
                          : mode === 'Supervised Agent'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-emerald-600 text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {mode === 'Supervised Agent' ? 'Agent Sup.' : mode === 'Autonomous Agent' ? 'Agent Auto' : mode}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          Règle de gouvernance : chaque agent déployé conserve un point de contrôle humain formalisé.
        </span>
        <span className="font-mono text-slate-400">WorkScan Engine v1</span>
      </div>
    </div>
  );
};
