export interface SkillDomain {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  items: {
    name: string;
    level: string;
    detail: string;
  }[];
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'python',
    title: 'Python Engineering',
    icon: 'Terminal',
    badge: 'Core Competency',
    description: 'Conception logicielle robuste, typage strict, architecture modulaire et optimisation mémoire.',
    items: [
      { name: 'Architecture & Modèles', level: 'Production', detail: 'Pydantic v2, dataclasses, découplage propre domaine/infrastructure' },
      { name: 'APIs & Microservices', level: 'Production', detail: 'FastAPI, endpoints asynchrones, validation de schémas, gestion d\'erreurs résiliente' },
      { name: 'Performance & Local Run', level: 'Avancé', detail: 'Traitement vectoriel, loop policies Windows Proactor/Selector, gestion fine du cache' }
    ]
  },
  {
    id: 'ai-agents',
    title: 'IA, LLM & Systèmes Agentiques',
    icon: 'Cpu',
    badge: 'Core Competency',
    description: 'Orchestration de modèles génératifs et multimodaux, prompts structurés et garde-fous déterministes.',
    items: [
      { name: 'Modèles Multimodaux & LLM', level: 'Production', detail: 'Google Gemini (Flash, Pro), vision, génération de briefs et juges de qualité' },
      { name: 'Gouvernance & Guardrails', level: 'Production', detail: 'Pas de confiance aveugle au LLM : surcouche déterministe vectorielle et filtres de validation' },
      { name: 'Systèmes Agentiques & Outils', level: 'Avancé', detail: 'Exécution d\'actions autorisées avec validation humaine (Human-in-the-loop)' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data & Decision Systems',
    icon: 'Database',
    badge: 'Zero-Cloud-Bill',
    description: 'Pipelines analytiques locaux ultra-rapides sur jeux de données massifs sans base de données facturée.',
    items: [
      { name: 'DuckDB & Apache Parquet', level: 'Production', detail: 'Requêtage analytique colonnaire en mémoire sur des volumes massifs d\'enregistrements' },
      { name: 'Statistiques Explicables', level: 'Production', detail: 'Détection d\'anomalies et décomposition YoY sans fausses allégations de causalité' },
      { name: 'ETL & Ingestion Open Data', level: 'Production', detail: 'Normalisation automatique des flux Open Data (Enedis, BOAMP, TED)' }
    ]
  },
  {
    id: 'security-qa',
    title: 'Sécurité, FinOps & QA Rigoureuse',
    icon: 'ShieldCheck',
    badge: 'Enterprise-Grade',
    description: 'Audit préventif des secrets, cryptographie constante, tests de régression et télémétrie financière.',
    items: [
      { name: 'Sécurité & Auth Sas', level: 'Production', detail: 'Dérivation PBKDF2-HMAC-SHA256 (600k it.), temps constant, architecture fail-closed' },
      { name: 'FinOps & Télémétrie de Tokens', level: 'Production', detail: 'Estimation monétaire au millième de centime avec Decimal et snapshots immuables' },
      { name: 'Testing & E2E', level: 'Production', detail: 'Pytest (fixtures, mocks réseau complets), Playwright E2E, Ruff & Gitleaks' }
    ]
  },
  {
    id: 'product-ux',
    title: 'Product Engineering & Delivery',
    icon: 'Layout',
    badge: 'Fast Delivery',
    description: 'Capacité à transformer un problème métier complexe en un produit utilisable et déployé en un temps record.',
    items: [
      { name: 'Prototypage & Interfaces Live', level: 'Production', detail: 'Streamlit pour cadrages exécutifs, applications web réactives React/Tailwind' },
      { name: 'Compréhension Métier Immédiate', level: 'Production', detail: 'Industrie, énergie, édition, financement d\'actifs IT' },
      { name: 'Déploiement Économique', level: 'Production', detail: 'Déploiements sans frais fixes (GitHub Pages, Streamlit Cloud, Railway free)' }
    ]
  }
];
