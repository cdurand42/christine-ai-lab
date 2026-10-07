import React, { createContext, useContext, useState, useEffect } from 'react';
import { ViewMode } from '../types';

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ViewMode>(() => {
    const saved = localStorage.getItem('christine_lab_view_mode');
    return (saved === 'engineering' || saved === 'product') ? saved : 'product';
  });

  useEffect(() => {
    localStorage.setItem('christine_lab_view_mode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'product' ? 'engineering' : 'product'));
  };

  return (
    <ViewModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = () => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
