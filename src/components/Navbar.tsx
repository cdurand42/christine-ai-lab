import React, { useState } from 'react';
import { useViewMode } from '../context/ViewModeContext';
import { Terminal, Briefcase, Menu, X, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const { mode, toggleMode } = useViewMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'projects', label: 'Projets', path: '/' },
    { id: 'skills', label: 'Expertise', path: '/#skills' },
    { id: 'inventory', label: 'Audit & Inventaire', path: '/inventory' },
    { id: 'about', label: 'À propos', path: '/about' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div
          onClick={() => { onNavigate('/'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <span className="font-mono font-black text-white text-base">C</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white font-mono">CHRISTINE</span>
              <span className="font-bold text-sm sm:text-base tracking-tight text-sky-400 font-mono">AI LAB</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono -mt-1 hidden sm:block">Building useful AI products</div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.path)}
              className={`hover:text-white transition-colors ${currentPath === link.path ? 'text-sky-400 font-semibold' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Controls: ViewMode Toggle & GitHub */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Engineering vs Product Toggle */}
          <div className="bg-slate-900 border border-slate-800 p-1 rounded-full flex items-center shadow-inner">
            <button
              onClick={() => mode !== 'product' && toggleMode()}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                mode === 'product'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Vue Orientée Produit & Utilité Métier"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Produit</span>
            </button>
            <button
              onClick={() => mode !== 'engineering' && toggleMode()}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                mode === 'engineering'
                  ? 'bg-indigo-600 text-white font-bold shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Vue Orientée Stack, Architecture & Tests"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Engineering</span>
            </button>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/cdurand42"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="GitHub de Christine (@cdurand42)"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile mode switch button */}
          <button
            onClick={toggleMode}
            className={`p-2 rounded-lg text-xs font-mono font-medium flex items-center gap-1 ${
              mode === 'engineering' ? 'bg-indigo-950 text-indigo-300 border border-indigo-800' : 'bg-sky-950 text-sky-300 border border-sky-800'
            }`}
          >
            {mode === 'engineering' ? <Terminal className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-3">
          <div className="flex flex-col gap-2 text-sm font-medium">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => { onNavigate(link.path); setMobileMenuOpen(false); }}
                className="text-left py-2 px-3 rounded-lg hover:bg-slate-900 text-slate-300 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Mode d'affichage :</span>
            <button
              onClick={toggleMode}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 ${
                mode === 'engineering' ? 'bg-indigo-600 text-white' : 'bg-sky-500 text-slate-950'
              }`}
            >
              {mode === 'engineering' ? <Terminal className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
              {mode === 'engineering' ? 'Mode Engineering' : 'Mode Produit'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
