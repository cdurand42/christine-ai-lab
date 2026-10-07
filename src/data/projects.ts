import { ProjectData } from '../types';

export const PROJECTS: ProjectData[] = [
  {
    id: 'workforce-ai',
    name: 'WorkForce Optimize AI',
    baseline: 'Cartographie organisationnelle ETI, qualification des tâches et arbitrage Humain / Copilot / Agent',
    category: 'Enterprise AI & Organization',
    status: 'PILOT',
    featured: true,
    order: 1,
    problem: 'Les ETI industrielles font face à des départs massifs en retraite (ex: 18% à 5 ans), une pénurie de compétences critiques en automatisme/PLC, et un manque de méthode pour arbitrer objectivement entre automatisation par agents, assistance copilot ou maintien humain sans risquer l\'outil de production.',
    solution: 'Une suite complète de diagnostic organisationnel pour cabinets de conseil RH et directions industrielles, modélisant les structures réelles (cas étalon Novalis Industries, 2 400 salariés, 4 sites). Elle analyse le travail réel à la tâche, quantifie le potentiel IA, qualifie la supervision requise et génère un rapport exécutif prêt pour le comité de direction.',
    impact: 'Passe d\'une discussion spéculative sur l\'IA à une matrice d\'arbitrage auditée à la tâche avec exigences techniques, niveau d\'autonomie et plan de transfert des compétences.',
    stack: ['Python 3.12', 'Streamlit', 'Pydantic v2', 'Ruff', 'Pytest', 'Playwright', 'Gitleaks'],
    models: ['WorkScan Dynamic V1', 'LLM Provider WorkScan autonome (optionnel)'],
    architecture: {
      overview: 'Architecture modulaire déterministe par défaut avec injection de dépendances, garantie sans base de données externe et sans secrets obligatoires pour un lancement immédiat.',
      flow: [
        { step: 'Accueil & Portefeuille', detail: 'Sélection du cabinet et de l\'entreprise cible (Novalis Industries)' },
        { step: 'Dashboard Exécutif', detail: 'Vue synthétique des sites, effectifs analysés (135 techniciens) et tension RH' },
        { step: 'WorkScan Tâches', detail: 'Cartographie granulaire des activités, audit de complétude et score d\'automatisation' },
        { step: 'WorkDesigner', detail: 'Arbitrage du mode d\'exécution cible (Humain, Copilot, Agent Supervisé, Agent Autonome)' },
        { step: 'AgentDeploy', detail: 'Spécification des agents retenus, supervision humaine obligatoire et exigences SI' },
        { step: 'Executive Report', detail: 'Consolidation exécutive complète du diagnostic et de la gouvernance' }
      ]
    },
    whatIBuilt: [
      'Moteur d\'arbitrage en 4 quadrants (Humain, Copilot, Agent supervisé, Agent autonome) basé sur la complexité cognitive et le risque industriel',
      'Modélisation multi-sites de l\'ETI Novalis Industries (Lyon R&D, Saint-Étienne production, Le Mans mécatronique, Mulhouse automatismes)',
      'Système de points de contrôle durables (durable checkpoints) préservant l\'état de la session sans persistance lourde',
      'Suite de tests unitaires et d\'intégration avec validation Playwright multi-résolutions (Desktop 1366px et Mobile 390px)',
      'Rapport exécutif consolidé imprimable et exportable avec gouvernance des risques'
    ],
    whatILearned: [
      'Les directeurs d\'usines et DRH rejettent les préconisations IA boîte noire ; chaque attribution d\'agent doit expliciter le niveau de supervision humaine nécessaire.',
      'Un mode déterministe local sans aucun secret externe est la clé pour une adoption sereine et une démo 100% fiable en comité de direction.'
    ],
    decisions: [
      {
        decision: 'Moteur local déterministe par défaut avec provider IA optionnel',
        rationale: 'Permet une démo instantanée hors-ligne sans risque de panne réseau, de latence de token ou de fuite de données industrielles.',
        alternativeConsidered: 'Appel API obligatoire vers un LLM distant pour chaque calcul de tâche.'
      },
      {
        decision: 'Modélisation à la tâche plutôt qu\'au poste de travail',
        rationale: 'Les métiers de maintenance ne sont pas remplaçables en bloc ; seules des sous-tâches spécifiques (diagnostic PLC, compte-rendu GMAO) peuvent être déléguées à des agents.',
        alternativeConsidered: 'Score global de remplacement par intitulé de poste (méthode trop simpliste et anxiogène).'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'Playwright', 'Ruff', 'Gitleaks'],
      description: 'Validation de l\'état canonique WorkScan, préservation des sessions, non-régression de l\'invalidation des scénarios et tests visuels responsive (mobile/desktop).',
      sampleCommand: 'pytest tests/ -v && ruff check .'
    },
    security: {
      highlights: [
        'Zéro secret requis : aucun identifiant ni clé externe n\'est nécessaire pour exécuter la démo complète',
        'Contrôle automatique anti-secrets via Gitleaks en pré-commit',
        'Données industrielles strictement anonymisées / fictives (Novalis Industries)'
      ],
      dataPrivacy: 'Aucune donnée RH ou industrielle interne n\'est transmise à un serveur tiers.'
    },
    hasLiveDemo: true,
    interactiveDemoId: 'workforce-matrix',
    liveDemoLabel: 'Lancer l\'application (Local / Pilot)',
    repoVisibility: 'Private Enterprise',
    repoUrl: 'https://github.com/cdurand42/WorkForceAI',
    assets: [
      {
        type: 'image',
        url: './assets/workforce/00_home_novalis_desktop.png',
        caption: 'Accueil WorkForce AI — Portefeuille de diagnostic Novalis Industries',
        isCover: true
      },
      {
        type: 'image',
        url: './assets/workforce/01_workscan_novalis_desktop.png',
        caption: 'WorkScan — Audit granulaire des tâches de maintenance et potentiel IA'
      },
      {
        type: 'image',
        url: './assets/workforce/02_workdesigner_novalis_desktop.png',
        caption: 'WorkDesigner — Arbitrage Humain / Copilot / Agent Supervisé / Autonome'
      },
      {
        type: 'image',
        url: './assets/workforce/03_agentdeploy_novalis_desktop.png',
        caption: 'AgentDeploy — Spécification technique et supervision humaine requise'
      },
      {
        type: 'image',
        url: './assets/workforce/05_executive_report_novalis_desktop.png',
        caption: 'Executive Report — Restitution exécutive consolidée pour la direction'
      },
      {
        type: 'image',
        url: './assets/workforce/07_agentdeploy_asterion_mobile.png',
        caption: 'AgentDeploy Mobile — Interface 100% utilisable sur écran 390px'
      }
    ]
  },
  {
    id: 'lariviere-ai',
    name: 'Éditions Larivière AI Studio',
    baseline: 'Génération publicitaire multiformat avec charte de marque déterministe et sas d\'accès sécurisé',
    category: 'Multimodal AI & Creative Automation',
    status: 'LIVE',
    featured: true,
    order: 2,
    problem: 'Créer manuellement des kits publicitaires complets pour des événements de référence (Game Fair, Bol d\'Or) demande des jours de déclinaisons graphiques (Feed carré 1080×1080, Story/Reel 1080×1920, carrousels). Les modèles d\'IA générative classiques déforment les logos vectoriels et hallucinent la typographie officielle.',
    solution: 'Un studio créatif multimodal combinant la puissance générative de Google Gemini Multimodal pour les visuels d\'ambiance et un moteur déterministe Pillow pour l\'incrustation exacte des logos officiels par redimensionnement Lanczos, détection de contraste local (logo blanc ou noir) et zone d\'exclusion sanctuarisée. L\'accès public est protégé par un sas PBKDF2 avec chargeur dynamique du code privé.',
    impact: 'Génération instantanée de packs publicitaires prêts à diffuser avec 100% de fidélité à la marque et zéro risque de logo déformé.',
    stack: ['Python', 'Streamlit', 'Google Gemini Multimodal', 'Pillow (PIL)', 'PBKDF2-HMAC-SHA256', 'python-pptx', 'Pytest'],
    models: ['Google Gemini Multimodal (Vision)', 'Visual Quality Judge (Audit read-only)'],
    architecture: {
      overview: 'Architecture hybride à deux niveaux : un portail Streamlit public léger (Lariviere-Live) assurant l\'authentification, qui télécharge en mémoire le moteur privé (LariviereAI) sans exposer le code métier propriétaire ni les prompts.',
      flow: [
        { step: 'Sas d\'Authentification', detail: 'Contrôle des identifiants par hachage PBKDF2-HMAC-SHA256 (600k itérations, sel 16 octets)' },
        { step: 'Chargeur Dynamique', detail: 'Appel sécurisé REST GitHub API pour rapatrier le dépôt privé en mémoire du conteneur' },
        { step: 'Génération du MASTER', detail: 'Génération du concept visuel principal via Gemini avec zone sanctuarisée en haut à droite' },
        { step: 'Déclinaison Multiformat', detail: 'Appels image-to-image uniques pour le Feed Carré et la Story/Reel sans boucle infinie' },
        { step: 'Incrustation Déterministe', detail: 'Détourage automatique du logo PNG officiel, calcul de contraste et incrustation Lanczos' },
        { step: 'Visual Quality Judge', detail: 'Audit automatique de conformité visuelle et packaging en présentation PowerPoint' }
      ]
    },
    whatIBuilt: [
      'Architecture "Public Portal / Private Core" permettant de déployer sur Streamlit Community Cloud gratuit sans consommer de slot privé ni divulguer le code',
      'Moteur d\'incrustation vectorielle/bitmap déterministe avec calcul dynamique de contraste local pour sélectionner automatiquement la variante blanche ou noire du logo',
      'Juge de qualité visuelle autonome (Visual Quality Judge) évaluant le cadrage, l\'éclairage et les zones de texte',
      'Pipeline de génération de présentations PowerPoint client (`pptx_generator.py`) intégrant les assets créés',
      'Gestionnaire de cache multiniveau (L1, key visual, campaign portfolio) évitant les régénérations inutiles'
    ],
    whatILearned: [
      'Ne jamais déléguer le rendu d\'un logo ou d\'une marque au modèle d\'IA générative : le modèle doit créer l\'ambiance, et le code déterministe (PIL) doit appliquer la charte.',
      'Un sas d\'authentification à dérivation forte couplé à un chargeur dynamique en mémoire permet d\'héberger des démonstrations privées de manière totalement gratuite et sécurisée.'
    ],
    decisions: [
      {
        decision: 'Séparation physique du portail public (Lariviere-Live) et du moteur métier (LariviereAI)',
        rationale: 'Permet de partager une URL de test fonctionnelle avec des partenaires sans rendre public le savoir-faire propriétaire ni les prompts.',
        alternativeConsidered: 'Rendre le dépôt complet public (inacceptable pour la confidentialité de la marque).'
      },
      {
        decision: 'Rendu déterministe du logo par PIL plutôt que génération par le prompt',
        rationale: 'Garantit à 100% l\'intégrité des proportions, de la typographie et de la netteté du logo Game Fair officiel.',
        alternativeConsidered: 'Fournir le logo en image de référence au modèle génératif (résultait en logos déformés ou mal orthographiés).'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'Unittest', 'Mocks réseau complets'],
      description: 'Tests unitaires avec isolation stricte des dépendances externes : aucun appel Gemini réel n\'est émis pendant la suite de tests automatisée.',
      sampleCommand: 'python -m unittest discover -s tests -p "test_campaign_direct_*.py" -v'
    },
    security: {
      highlights: [
        'Sas PBKDF2-HMAC-SHA256 avec comparaison en temps constant (`hmac.compare_digest`)',
        'Fail-closed absolu : aucun appel API externe n\'est émis avant authentification valide',
        'Token GitHub transporté exclusivement via en-tête Authorization HTTPS'
      ],
      dataPrivacy: 'Aucune donnée confidentielle ou briefing privé n\'est indexé ou rendu public.'
    },
    hasLiveDemo: true,
    liveDemoUrl: 'https://github.com/cdurand42/Lariviere-Live',
    liveDemoLabel: 'Voir le portail Live (Lariviere-Live)',
    interactiveDemoId: 'lariviere-studio',
    repoVisibility: 'Public Gateway',
    repoUrl: 'https://github.com/cdurand42/Lariviere-Live',
    assets: [
      {
        type: 'image',
        url: './assets/lariviere/feed_carre.png',
        caption: 'Format Feed Carré 1080×1080 — Incrustation contrastée du logo Game Fair officiel',
        isCover: true
      },
      {
        type: 'image',
        url: './assets/lariviere/story_reel.png',
        caption: 'Format Story / Reel 1080×1920 — Déclinaison verticale avec composition produit'
      },
      {
        type: 'image',
        url: './assets/lariviere/carousel_1.png',
        caption: 'Format Carrousel — Composition multi-visuels pour réseaux sociaux'
      }
    ]
  },
  {
    id: 'datalab-enedis',
    name: 'DataLab Enedis',
    baseline: 'Moteur analytique territorial haute performance sur l\'Open Data Enedis (DuckDB & Parquet)',
    category: 'Data & Decision Systems',
    status: 'LIVE',
    featured: true,
    order: 3,
    problem: 'L\'Open Data électrique national couvre des dizaines de milliers de communes et des millions de lignes de consommation. Croiser ces volumes, comparer des territoires homogènes et décomposer les variations annuelles par secteur (résidentiel, tertiaire, industriel, agricole) sature les tableurs et entraîne habituellement des coûts d\'infrastructure cloud élevés.',
    solution: 'Un toolkit analytique en Python pur sans aucune base de données payante : ingestion et normalisation des flux Open Data Enedis en fichiers colonnaires Apache Parquet, moteur de requêtes DuckDB ultra-rapide (<50ms), radar d\'anomalies statistiques explicables et portail web de visualisation.',
    impact: 'Temps de réponse instantané sur la France entière, zéro coût d\'infrastructure cloud et transparence statistique totale sans fausse prétention de causalité.',
    stack: ['Python 3.12', 'DuckDB', 'Apache Parquet', 'Streamlit', 'FastAPI', 'Pandas / NumPy', 'Pytest'],
    architecture: {
      overview: 'Pipeline de données colonnaire local à 5 modules indépendants, complété par un portail public (DataLab-Live) sécurisé consommant l\'API via un jeton X-DataLab-Token côté serveur.',
      flow: [
        { step: 'Core Ingestion', detail: 'Extraction de l\'Open Data Enedis et conversion en fichiers Parquet partitionnés' },
        { step: 'Bench Module', detail: 'Agrégation et comparaison multi-critères des communes par secteur et profil' },
        { step: 'Radar Déviations', detail: 'Calcul d\'écarts statistiques sectoriels normalisés pour détecter les profils atypiques' },
        { step: 'Watch Décomposition', detail: 'Analyse comparative N vs N-1 avec décomposition de la variation par secteur d\'activité' },
        { step: 'Explorer & API Live', detail: 'Interface interactive Streamlit et API FastAPI pour requêtage temps réel' }
      ]
    },
    whatIBuilt: [
      'Moteur d\'ingestion transformant les JSON volumineux de l\'API Open Data en Parquet optimisé DuckDB',
      'Module Radar calculant des scores de déviation statistique explicables (sans boîte noire ML)',
      'Module Watch décomposant rigoureusement les variations d\'une année sur l\'autre par segment économique',
      'Portail frontal public (DataLab-Live) découplé consommant le moteur via requêtes HTTP serveur sécurisées',
      'Panel analytique équilibré permettant des comparaisons territorialement pertinentes'
    ],
    whatILearned: [
      'DuckDB couplé au format Parquet enterre les bases de données relationnelles traditionnelles (Postgres/MySQL) pour l\'analytique en lecture seule, tout en supprimant 100% des coûts d\'hébergement de base de données.',
      'En matière d\'analytics territorial, l\'explicabilité est non négociable : le système doit décrire des faits statistiques et refuser d\'imputer arbitrairement des causes d\'inefficacité énergétique.'
    ],
    decisions: [
      {
        decision: 'Format de stockage colonnaire Parquet + DuckDB en mémoire',
        rationale: 'Permet de filtrer et d\'agréger 35 000 communes en quelques millisecondes sur un simple processeur portable sans aucun serveur SQL dédié.',
        alternativeConsidered: 'PostgreSQL avec extension TimescaleDB (trop lourd à installer, coût d\'hébergement cloud mensuel inutile).'
      },
      {
        decision: 'Signalisation descriptive explicite vs modèle de Machine Learning prédictif',
        rationale: 'Les collectivités et analystes ont besoin de comprendre la formule exacte de l\'écart plutôt que d\'avoir un score opaque d\'algorithme aléatoire.',
        alternativeConsidered: 'Isolation Forest / Auto-encodeur pour détection d\'anomalies.'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'DuckDB test assertions'],
      description: 'Validation de l\'intégrité des calculs d\'agrégation, de la cohérence des jointures de communes et des performances de conversion Parquet.',
      sampleCommand: 'pytest tests/ -v'
    },
    security: {
      highlights: [
        'Open Data 100% public : aucune donnée privée ou nominative de compteur',
        'Frontend public-safe isolant les algorithmes internes via un jeton d\'API X-DataLab-Token côté serveur',
        'Documentation OpenAPI et Swagger désactivées en production pour réduire la surface d\'attaque'
      ],
      dataPrivacy: 'Données strictement issues des flux publics de distribution Enedis.'
    },
    hasLiveDemo: true,
    liveDemoUrl: 'https://github.com/cdurand42/DataLab-Live',
    liveDemoLabel: 'Explorer le portail DataLab-Live',
    interactiveDemoId: 'datalab-bench',
    repoVisibility: 'Public Gateway',
    repoUrl: 'https://github.com/cdurand42/DataLab-Live',
    assets: [
      {
        type: 'image',
        url: './assets/enedis/enedis-blueGreen.svg',
        caption: 'DataLab Enedis — Logo et charte territoriale Open Data',
        isCover: true
      }
    ]
  },
  {
    id: 'ecs-signal-to-deal',
    name: 'ECS Signal-to-Deal',
    baseline: 'Intelligence d\'appels d\'offres publics audiovisuels & IT pour le financement d\'actifs',
    category: 'Agentic Intelligence & Public Tenders',
    status: 'PILOT',
    featured: true,
    order: 4,
    problem: 'Dans le financement d\'équipements IT et audiovisuels pour les grands comptes et collectivités, les opportunités d\'appels d\'offres publics sont dispersées (BOAMP, TED, APProch). Les commerciaux perdent des heures à éplucher des avis, sans savoir qui détenait le marché historique ni si des montants ont été rendus publics.',
    solution: 'Un système d\'intelligence commerciale développé dans le cadre du pilote ZCube Technologies × Evernex Capital Solutions. Il collecte en temps réel les avis publics, calcule un score de pertinence audiovisuelle avec explicitation des critères, recherche les avis d\'attribution historiques pour identifier le titulaire en place, et génère des dossiers d\'enquête vérifiables.',
    impact: 'Détection en 7 minutes des avis clés (ex: Grand Annecy BOAMP:26-96602, HEC Paris BOAMP:26-38299) avec traçabilité intégrale de la preuve source.',
    stack: ['Python 3.12', 'Streamlit', 'Playwright (E2E)', 'Ruff', 'Pytest', 'Windows Async Loop Policy'],
    architecture: {
      overview: 'Architecture factuelle stricte : l\'interface distingue formellement les faits issus des sources publiques de l\'interprétation de pertinence calculée par le système.',
      flow: [
        { step: 'Collecte Multi-Sources', detail: 'Interrogation des APIs publiques BOAMP, TED Europe et plateformes locales' },
        { step: 'Scoring Audiovisuel', detail: 'Évaluation de pertinence sur les mots-clés d\'équipements (écrans, régies, captation, IT)' },
        { step: 'Enquête Titulaire', detail: 'Croisement automatique avec les avis d\'attribution pour repérer les intégrateurs sortants' },
        { step: 'Dossier Local & Veille', detail: 'Sauvegarde des avis clés en session locale avec horodatage et URL d\'origine' }
      ]
    },
    whatIBuilt: [
      'Algorithme de qualification de pertinence audiovisuelle sans hallucinations commerciales',
      'Moteur d\'enquête vérifiant l\'identité de l\'acheteur, le numéro d\'avis et la preuve formelle du titulaire historique',
      'Lanceur système avec sélection de la boucle `WindowsSelectorEventLoopPolicy` pour éviter les crashs de socket sur Windows',
      'Protocole de démonstration reproductible de 7 minutes avec script de contrôle de santé (`demo_readiness.py`)',
      'Tests de bout en bout avec Playwright vérifiant le parcours complet sans régression visuelle'
    ],
    whatILearned: [
      'Dans les outils d\'intelligence commerciale B2B, inventer un contact ou simuler un besoin de financement détruit la crédibilité : l\'exactitude de la source publique prime sur le volume.',
      'Les montants non publiés dans un avis doivent obligatoirement rester notés "Non publié" et ne jamais être extrapolés à zéro ou estimés artificiellement.'
    ],
    decisions: [
      {
        decision: 'Données publiques réelles exclusives (zéro donnée commerciale inventée)',
        rationale: 'Garantit l\'éthique de la prospection et la conformité légale totale envers les acheteurs publics et Evernex.',
        alternativeConsidered: 'Génération de contacts ou de montants probables par un modèle de langage (rejeté catégoriquement).'
      },
      {
        decision: 'Patch WindowsSelectorEventLoopPolicy sous Windows',
        rationale: 'Empêche les erreurs de connexion réinitialisée causées par la boucle Proactor native de Windows lors des longues requêtes Streamlit.',
        alternativeConsidered: 'Forcer l\'exécution uniquement sous Linux/Docker.'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'Playwright E2E', 'Ruff', 'demo_readiness.py'],
      description: 'Contrôles de démonstration frais (`demo_readiness.py --live`), tests d\'interface Playwright et validation du release candidate avant tout cadrage.',
      sampleCommand: 'pytest tests/ -v && python scripts/demo_readiness.py'
    },
    security: {
      highlights: [
        'Zéro accès aux systèmes CRM ou bases internes d\'Evernex : isolation totale',
        'Zéro stockage de données nominatives non publiques',
        'Cache local de session de 30 minutes sans persistance non sollicitée'
      ],
      dataPrivacy: 'Données strictement limitées aux avis d\'appels d\'offres publiés officiellement par l\'État et les collectivités.'
    },
    hasLiveDemo: true,
    interactiveDemoId: 'ecs-radar',
    liveDemoLabel: 'Lancer le Radar d\'avis publics',
    repoVisibility: 'Proprietary Pilot',
    repoUrl: 'https://github.com/cdurand42/ecs-signal-to-deal',
    assets: [
      {
        type: 'diagram',
        url: './assets/favicon.svg',
        caption: 'ECS Signal-to-Deal — Workflow de qualification d\'appels d\'offres publics',
        isCover: true
      }
    ]
  },
  {
    id: 'gemini-usage-monitor',
    name: 'GeminiUsageMonitor & Dashboard',
    baseline: 'Microservice FinOps zero-knowledge & tableau de bord de télémétrie de tokens en temps réel',
    category: 'Developer Tools & FinOps',
    status: 'LIVE',
    featured: true,
    order: 5,
    problem: 'Lorsqu\'une équipe fait tourner plusieurs prototypes et produits basés sur l\'API Google Gemini (Lariviere, Enedis, Jarvis, etc.), il devient très difficile de savoir quel projet consomme quels tokens, de calculer le coût réel des appels multimodaux (texte, images, audio) et d\'alerter sur les dépassements de budget sans risquer d\'exposer la clé API secrète.',
    solution: 'Un microservice indépendant haute fiabilité (FastAPI, SQLAlchemy 2.0, Alembic) et un dashboard Streamlit public sécurisé. Il ingère les métadonnées de consommation (compteurs de tokens, nom de modèle, type d\'opération) avec garantie zero-knowledge : la clé API Google Gemini n\'est jamais reçue, ni stockée, ni exposée. Le calcul financier utilise la précision Python Decimal avec des snapshots tarifaires immuables.',
    impact: 'Surveillance budgétaire au centime près sur l\'ensemble des projets du lab, avec zéro risque de fuite de clé Google.',
    stack: ['FastAPI', 'SQLAlchemy 2.0', 'Alembic', 'Pydantic v2', 'Streamlit', 'Python Decimal', 'Pytest'],
    architecture: {
      overview: 'Architecture microservice découplée : API d\'ingestion idempotente déployée sur Railway, base de données SQLite/PostgreSQL versionnée par migrations Alembic, et dashboard Streamlit séparé.',
      flow: [
        { step: 'Appel Gemini Projet', detail: 'L\'application cliente (ex: Lariviere) appelle l\'API Google et récupère l\'objet usage_metadata' },
        { step: 'Télémétrie X-Monitor', detail: 'Envoi asynchrone non-bloquant de {project, model, prompt_tokens, candidate_tokens} vers l\'API' },
        { step: 'Calcul Decimal', detail: 'Application du snapshot tarifaire immuable en précision Decimal (sans dérive flottante)' },
        { step: 'Idempotence & Persistance', detail: 'Stockage de l\'événement avec clé de déduplication dans la table UsageEvent' },
        { step: 'Visualisation Dashboard', detail: 'Dashboard Streamlit sécurisé par mot de passe en temps constant affichant les coûts' }
      ]
    },
    whatIBuilt: [
      'Service FastAPI v0.2 avec injection de dépendances et validation stricte Pydantic v2',
      'Moteur de tarification basé sur Python `Decimal` pour éliminer tout risque d\'erreur d\'arrondi sur des millions de micro-appels',
      'Client Python non bloquant (`failure-safe`) : si le monitor est éteint, les applications clientes continuent de fonctionner sans aucune interruption',
      'Gestionnaire de migrations versionnées Alembic supportant à la fois SQLite local et PostgreSQL Neon en production',
      'Dashboard frontal indépendant (`GeminiUsageDashboard`) prêt pour Streamlit Community Cloud'
    ],
    whatILearned: [
      'L\'arithmétique en virgule flottante native (`float`) est interdite en FinOps : sur des millions de requêtes, les micro-arrondis créent des écarts financiers significatifs. `Decimal` est obligatoire.',
      'Un système de télémétrie ne doit jamais recevoir la clé d\'API du fournisseur : isoler la télémétrie des credentials garantit une sécurité hermétique.'
    ],
    decisions: [
      {
        decision: 'Zéro transit de clé d\'API Google vers le monitor',
        rationale: 'Même si le serveur de monitoring venait à être compromis, aucune clé Gemini ne pourrait être volée.',
        alternativeConsidered: 'Faire passer les appels Google Gemini à travers le monitor comme proxy inverse.'
      },
      {
        decision: 'Client télémétrique failure-safe silencieux',
        rationale: 'Un problème sur l\'outil de monitoring ne doit sous aucun prétexte bloquer l\'expérience utilisateur de l\'application principale.',
        alternativeConsidered: 'Requête synchrone bloquante avec exception levée en cas d\'échec de transmission.'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'Alembic test migrations'],
      description: 'Tests exhaustifs de la fidélité des calculs tarifaires, de l\'idempotence des soumissions et de l\'intégrité des migrations de base de données.',
      sampleCommand: 'pytest tests/ -v'
    },
    security: {
      highlights: [
        'Zéro-knowledge : la clé API Google Gemini n\'est ni demandée ni acceptée',
        'Jeton d\'authentification par en-tête `X-Monitor-Token` pour l\'ingestion et `X-Monitor-Read-Token` pour la lecture',
        'Vérification du mot de passe dashboard en temps constant avec `hmac.compare_digest`'
      ],
      dataPrivacy: 'Aucun contenu de prompt ni de réponse textuelle n\'est enregistré : uniquement les compteurs de tokens.'
    },
    hasLiveDemo: true,
    interactiveDemoId: 'finops-calculator',
    liveDemoLabel: 'Calculateur FinOps interactif',
    repoVisibility: 'Public Gateway',
    repoUrl: 'https://github.com/cdurand42/GeminiUsageDashboard',
    assets: [
      {
        type: 'diagram',
        url: './assets/favicon.svg',
        caption: 'GeminiUsageMonitor — Architecture de télémétrie FinOps zero-knowledge',
        isCover: true
      }
    ]
  },
  {
    id: 'jarvis',
    name: 'Jarvis — Assistant Local Vocal & Actions',
    baseline: 'Assistant personnel Windows & mobile local avec sandbox d\'actions et isolation de profil',
    category: 'Agentic AI & Edge Systems',
    status: 'PROTOTYPE',
    featured: false,
    order: 6,
    problem: 'Les assistants vocaux commerciaux (Alexa, Google Assistant, Siri) envoient l\'intégralité des échanges vocaux sur des serveurs distants, ne peuvent pas exécuter d\'actions concrètes sur un poste de travail Windows local, et ne disposent d\'aucun contrôle granulaire par profil d\'utilisateur (ex: profil enfant sécurisé vs profil admin).',
    solution: 'Un assistant personnel hybride exécuté sur PC Windows, propulsé par Gemini 2.5 Flash, offrant une interface vocale PWA accessible à la fois sur le bureau et sur mobile via Tailscale Serve HTTPS. L\'exécution de commandes système (Notepad, Calculatrice, Explorateur, ouverture d\'URLs) est strictement contrôlée par une demande d\'approbation explicite de l\'utilisateur.',
    impact: 'Un assistant intelligent capable d\'agir sur le PC sans jamais violer la vie privée ni exécuter de code arbitraire non autorisé.',
    stack: ['Python 3.10+', 'Gemini 2.5 Flash', 'FastAPI', 'WebSockets', 'HTML5 Web Speech API', 'SQLite', 'PWA / Service Worker'],
    models: ['Google Gemini 2.5 Flash'],
    architecture: {
      overview: 'Architecture locale sécurisée : boucle d\'écoute locale sur 127.0.0.1, isolation stricte par profil SQLite, et proxy HTTPS privé Tailscale Serve pour l\'accès mobile sans ouvrir de port public.',
      flow: [
        { step: 'Interaction Vocale / Texte', detail: 'Capture via Web Speech API ou saisie clavier dans la PWA responsive' },
        { step: 'Raisonnement LLM', detail: 'Interprétation de l\'intention via Gemini 2.5 Flash avec prompts contextualisés au profil' },
        { step: 'Détection d\'Outil', detail: 'Identification de l\'action demandée (ex: ouvrir une URL, lancer la calculatrice)' },
        { step: 'Porte d\'Approbation Humaine', detail: 'Interception de l\'action et demande de confirmation explicite à l\'utilisateur' },
        { step: 'Exécution Sandboxée', detail: 'Lancement du sous-processus Windows approuvé avec arguments assainis' }
      ]
    },
    whatIBuilt: [
      'Système d\'approbation d\'actions ("Human-in-the-loop") empêchant toute exécution silencieuse d\'action sur la machine',
      'Isolation complète des données par profil SQLite (`demo`, profil sécurisé enfant `joseph`)',
      'Application web progressive (PWA) installable sur Android avec shell fonctionnant hors-ligne',
      'Guide d\'accès distant privé via Tailscale Serve chiffré sans exposition sur Internet public'
    ],
    whatILearned: [
      'Donner des outils système à un modèle de langage sans barrière de confirmation humaine est une faille critique de sécurité. L\'approbation utilisateur doit être native dans l\'architecture.',
      'Les API Web Speech modernes permettent une reconnaissance vocale fluide directement dans le navigateur sans dépendances lourdes de modèles Whisper locaux.'
    ],
    decisions: [
      {
        decision: 'Écoute exclusive sur loopback (127.0.0.1) et Tailscale Serve',
        rationale: 'Interdit catégoriquement le binding sur 0.0.0.0 pour empêcher tout accès non autorisé depuis le réseau local public.',
        alternativeConsidered: 'Ouverture directe d\'un port avec tunnel ngrok public.'
      },
      {
        decision: 'Validation systématique avant ouverture d\'URL ou lancement de programme',
        rationale: 'Protège contre les attaques de prompt injection qui tenteraient de faire ouvrir des sites malveillants à l\'utilisateur.',
        alternativeConsidered: 'Exécution autonome immédiate sans confirmation.'
      }
    ],
    testing: {
      frameworks: ['Pytest', 'Unittest sandbox'],
      description: 'Tests de restriction des profils (vérification que le profil restreint refuse les commandes non autorisées) et validation des tokens distants.',
      sampleCommand: 'pytest tests/ -v'
    },
    security: {
      highlights: [
        'Sandbox de sous-processus : liste blanche stricte de commandes autorisées',
        'Refus absolu de binding sur adresse non-locale sans jeton de sécurité',
        'Séparation stricte des historiques SQLite par profil'
      ],
      dataPrivacy: 'Données d\'historique stockées localement sur le disque de la machine.'
    },
    hasLiveDemo: true,
    interactiveDemoId: 'jarvis-sandbox',
    liveDemoLabel: 'Tester le simulateur de sandbox',
    repoVisibility: 'Proprietary Pilot',
    repoUrl: 'https://github.com/cdurand42/jarvis',
    assets: [
      {
        type: 'image',
        url: './assets/jarvis/icon-512.png',
        caption: 'Jarvis — Icône PWA pour application bureau et mobile',
        isCover: true
      }
    ]
  },
  {
    id: 'zcube-enedis-pilot',
    name: 'Zcube Enedis Pilot',
    baseline: 'Cadrage de scénarios territoriaux par IA et génération automatisée de supports PowerPoint',
    category: 'Enterprise AI & Organization',
    status: 'PILOT',
    featured: false,
    order: 7,
    problem: 'Dans le cadre d\'études de cadrage pour des projets de distribution électrique régionale, la synthèse des contextes territoriaux en livrables exécutifs PowerPoint demande un temps considérable et une rigueur de mise en page constante.',
    solution: 'Un pilote d\'intelligence territoriale intégrant des scénarios de cadrage d\'opportunités, la synthèse d\'éléments de contexte territorial Enedis et la génération automatisée de présentations PowerPoint professionnelles via python-pptx, avec suivi de la consommation de tokens par GeminiUsageMonitor.',
    impact: 'Génération en quelques secondes d\'un support de cadrage complet intégrant les données territoriales et les orientations stratégiques.',
    stack: ['Python', 'Streamlit', 'Google Gemini', 'python-pptx', 'GeminiUsageMonitor Client', 'Pytest'],
    architecture: {
      overview: 'Pipeline d\'aide au cadrage : recueil des paramètres de scénario, enrichissement par contexte territorial en cache, génération de brief exécutif et compilation vers template PowerPoint.',
      flow: [
        { step: 'Contexte Territorial', detail: 'Sélection des paramètres territoriaux et données en cache' },
        { step: 'Génération Scénario', detail: 'Appel Gemini pour structurer les opportunités et axes prioritaires' },
        { step: 'Télémétrie FinOps', detail: 'Transmission transparente des tokens consommés au service GeminiUsageMonitor' },
        { step: 'Export PowerPoint', detail: 'Création à chaud du fichier .pptx prêt pour la présentation client' }
      ]
    },
    whatIBuilt: [
      'Générateur automatisé de présentations PowerPoint aux standards graphiques d\'entreprise',
      'Client léger de télémétrie vers GeminiUsageMonitor avec comportement failure-safe',
      'Interface de cadrage visuel intégrant les visuels et logos officiels'
    ],
    whatILearned: [
      'La génération de livrables bureautiques (PowerPoint, Word) est souvent plus valorisée par les décideurs d\'entreprise qu\'une simple API JSON brute.',
      'L\'intégration native d\'une télémétrie de coût permet de rassurer les directions sur le budget d\'exploitation récurrent.'
    ],
    decisions: [
      {
        decision: 'Génération PowerPoint native via python-pptx',
        rationale: 'Permet au consultant de retoucher manuellement les diapositives après génération, plutôt qu\'un PDF figé non modifiable.',
        alternativeConsidered: 'Export en PDF non éditable.'
      }
    ],
    testing: {
      frameworks: ['Pytest'],
      description: 'Tests de validité de la structure des fichiers PPTX générés et non-régression de l\'intégration de télémétrie.',
      sampleCommand: 'pytest tests/ -v'
    },
    security: {
      highlights: [
        'Zéro transmission de clés API Google au moniteur de consommation',
        'Données de proposition et de contexte territorial isolées en cache local'
      ],
      dataPrivacy: 'Utilisation de contextes de cadrage sans données industrielles sensibles.'
    },
    hasLiveDemo: false,
    liveDemoLabel: 'Étude de cas technique',
    repoVisibility: 'Proprietary Pilot',
    repoUrl: 'https://github.com/cdurand42/Zcube-Enedis-Pilot',
    assets: [
      {
        type: 'image',
        url: './assets/enedis/enedis-blueGreen.svg',
        caption: 'Zcube Enedis Pilot — Scénarios et cadrages territoriaux',
        isCover: true
      }
    ]
  }
];
