import { ProjectCategory } from '../types';

export interface CategoryInfo {
  id: ProjectCategory;
  label: string;
  description: string;
  count?: number;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'All',
    label: 'Tous les projets',
    description: 'Ensemble des produits, plateformes data et outils IA construits.'
  },
  {
    id: 'Enterprise AI & Organization',
    label: 'Enterprise AI',
    description: 'Cartographie organisationnelle ETI, arbitrage humain-agent et gouvernance IA.'
  },
  {
    id: 'Multimodal AI & Creative Automation',
    label: 'Multimodal & Automation',
    description: 'Studios de génération publicitaire multiformat avec charte de marque déterministe.'
  },
  {
    id: 'Data & Decision Systems',
    label: 'Data & Decision',
    description: 'Pipelines analytiques haute performance DuckDB/Parquet et détection de signaux.'
  },
  {
    id: 'Agentic Intelligence & Public Tenders',
    label: 'Public Intelligence',
    description: 'Veille d\'appels d\'offres, qualification multi-sources et validation de preuves historiques.'
  },
  {
    id: 'Developer Tools & FinOps',
    label: 'FinOps & DevTools',
    description: 'Télémétrie en temps réel des coûts de tokens IA et architecture zero-knowledge.'
  },
  {
    id: 'Agentic AI & Edge Systems',
    label: 'Edge & Local Agents',
    description: 'Assistants locaux Windows et mobiles avec sandbox de commandes et isolation de profil.'
  }
];
