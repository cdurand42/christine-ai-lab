import React, { useState, useEffect } from 'react';
import { ViewModeProvider } from './context/ViewModeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { InventoryPage } from './pages/InventoryPage';
import { ImageModal } from './components/ImageModal';
import { PROJECTS } from './data/projects';

export const AppContent: React.FC = () => {
  // Simple, robust client routing compatible with static hosting / GitHub Pages
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  const [modalImage, setModalImage] = useState<{ isOpen: boolean; url: string; caption: string }>({
    isOpen: false,
    url: '',
    caption: ''
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setCurrentRoute(hash || '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('/#')) {
      const targetId = path.substring(2);
      if (currentRoute !== '/') {
        window.location.hash = '/';
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    window.location.hash = path;
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenImage = (url: string, caption: string) => {
    setModalImage({ isOpen: true, url, caption });
  };

  const handleCloseImage = () => {
    setModalImage({ isOpen: false, url: '', caption: '' });
  };

  // Route matching
  let pageContent: React.ReactNode = null;

  if (currentRoute.startsWith('/projects/')) {
    const projectId = currentRoute.replace('/projects/', '').split('?')[0];
    const project = PROJECTS.find(p => p.id === projectId);
    if (project) {
      pageContent = (
        <ProjectDetailPage
          project={project}
          onBack={() => navigateTo('/')}
          onOpenImage={handleOpenImage}
        />
      );
    } else {
      // 404 Project fallback
      pageContent = (
        <div className="py-20 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-100">Projet introuvable</h2>
          <p className="text-sm text-slate-400">Le projet demandé n'existe pas dans le lab.</p>
          <button
            onClick={() => navigateTo('/')}
            className="px-4 py-2 bg-sky-500 text-slate-950 font-semibold rounded-xl text-xs hover:bg-sky-400"
          >
            Retourner à l'accueil
          </button>
        </div>
      );
    }
  } else if (currentRoute === '/about') {
    pageContent = <AboutPage />;
  } else if (currentRoute === '/inventory') {
    pageContent = <InventoryPage />;
  } else {
    pageContent = (
      <HomePage
        onSelectProject={(id) => navigateTo(`/projects/${id}`)}
        onOpenImage={handleOpenImage}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#090D14] text-slate-100">
      <Navbar currentPath={currentRoute} onNavigate={navigateTo} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {pageContent}
      </main>

      <Footer />

      <ImageModal
        isOpen={modalImage.isOpen}
        imageUrl={modalImage.url}
        caption={modalImage.caption}
        onClose={handleCloseImage}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ViewModeProvider>
      <AppContent />
    </ViewModeProvider>
  );
};

export default App;
