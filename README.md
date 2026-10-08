# Christine AI Lab — Engineering & Product Portfolio

> **Building useful AI products.**  
> Portfolio technique et laboratoire d'ingénierie logicielle par **Christine**.

Ce portfolio interactif présente des applications d'intelligence artificielle appliquées, des plateformes de données locales haute performance et des systèmes agentiques réels conçus pour des contextes d'entreprise critiques.

---

## 1. Objectif du Lab

Démontrer auprès d'interlocuteurs et directeurs techniques une capacité éprouvée de **Product Builder / Lead AI Engineer** :
- **Compréhension métier immédiate** : industrie manufacturière, énergie, édition événementielle, marchés publics.
- **Excellence Python** : Pydantic v2, DuckDB, Apache Parquet, FastAPI, Streamlit, arithmétique `Decimal`.
- **Gouvernance & Guardrails IA** : modèles multimodaux avec surcouche déterministe vectorielle (Pillow Lanczos) et garde-fous stricts (refus d'extrapoler des contacts ou des métriques artificielles).
- **Sécurité & Confidentialité** : sas d'authentification PBKDF2 (600k itérations), architectures zero-knowledge pour la télémétrie FinOps, audits automatisés Gitleaks.
- **Maîtrise des coûts d'infrastructure** : requêtage analytique colonnaire en mémoire et hébergement sans coût de serveur managé (GitHub Pages, Streamlit Cloud).

---

## 2. Projets Réels Documentés & Démontrés

Le portfolio Christine AI Lab est déployé publiquement sur GitHub Pages. Les 5 projets d'ingénierie présentés disposent tous d'une application réelle accessible en ligne (Streamlit) complétée par un démonstrateur interactif intégré dans le lab :

1. **WorkForce Optimize AI** — Cartographie organisationnelle ETI, audit de tâches et arbitrage Humain / Copilot / Agent (Cas Novalis Industries, 2 400 salariés).  
   *Maturité : PILOT · Accès : LIVE APP · [workforce-ai.streamlit.app](https://workforce-ai.streamlit.app/)*
2. **Éditions Larivière AI Studio** — Studio de génération publicitaire multiformat avec charte de marque déterministe et sas de chargement mémoire sécurisé (`Lariviere-Live`).  
   *Maturité : PILOT · Accès : PROTECTED LIVE · [lariviere-ai.streamlit.app](https://lariviere-ai.streamlit.app/)*
3. **DataLab Enedis** — Moteur analytique territorial sur l'Open Data Enedis (DuckDB & Parquet en mémoire).  
   *Maturité : PILOT · Accès : PROTECTED LIVE · [datalab-enedis.streamlit.app](https://datalab-enedis.streamlit.app/)*
4. **ECS Signal-to-Deal** — Veille d'appels d'offres publics audiovisuels & IT, scoring et preuve formelle de titulaire sortant (Pilote Zcube × Evernex Capital Solutions).  
   *Maturité : PILOT · Accès : LIVE APP · [ecs-ai.streamlit.app](https://ecs-ai.streamlit.app/)*
5. **GeminiUsageMonitor & Dashboard** — Microservice FinOps zero-knowledge & tableau de bord de télémétrie de tokens en temps réel.  
   *Maturité : PILOT · Accès : LIVE APP · [token-ai.streamlit.app](https://token-ai.streamlit.app/)*

Consultez l'audit complet dans [`docs/PROJECT_INVENTORY.md`](docs/PROJECT_INVENTORY.md).

---

## 3. Architecture du Portfolio

- **Framework** : React 18, TypeScript, Tailwind CSS, Lucide Icons.
- **Bundler** : Vite 6 (build statique optimisé ~82 kB gzip, chargement rapide).
- **Routage** : Routage côté client compatible GitHub Pages et hébergement statique sans réécriture serveur.
- **Fonctionnalité "Dual View"** :
  - **Mode Produit** : focalisé sur la valeur métier, les parcours utilisateurs et les captures d'écran réelles.
  - **Mode Engineering** : focalisé sur la stack, les flux d'architecture, les tests automatisés, la sécurité et les arbitrages techniques.
- **Démonstrateurs Interactifs Intégrés** :
  - Simulateur de matrice WorkScan (Novalis Industries)
  - Inspecteur de formats publicitaires et contraste Larivière
  - Explorateur de Bench territorial et Radar Open Data Enedis
  - Radar d'avis de marchés publics et preuve de titulaire (BOAMP)
  - Simulateur de coûts de tokens FinOps (Gemini 2.5 Flash / Pro)

---

## 4. Développement Local & Commandes

### Prérequis
- Node.js 20+ ou 22+ (recommandé)
- npm ou pnpm

### Installation
```bash
git clone https://github.com/cdurand42/christine-ai-lab.git
cd christine-ai-lab
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```
L'application démarre sur `http://localhost:5173/`.

### Exécution des tests unitaires
```bash
npm run test
```

### Compilation de production
```bash
npm run build
```
Les fichiers statiques optimisés sont générés dans le dossier `dist/`.

---

## 5. Déploiement Continu (CI/CD)

Le déploiement est entièrement automatisé via **GitHub Actions** (`.github/workflows/deploy.yml`) :
1. Déclenchement à chaque push sur la branche `main`.
2. Installation propre des dépendances (`npm ci`).
3. Exécution de la suite de tests unitaires (`npx vitest run`).
4. Build de production (`npm run build`).
5. Déploiement automatique sur **GitHub Pages**.

---

## 6. Structure du Dépôt

```
Christine-AI-Lab/
├── .github/
│   └── workflows/
│       └── deploy.yml           # Déploiement automatique GitHub Pages
├── docs/
│   └── PROJECT_INVENTORY.md     # Audit exhaustif des projets et sécurité
├── public/
│   ├── .nojekyll                # Désactivation Jekyll pour GitHub Pages
│   ├── 404.html                 # Redirection SPA pour deep-links
│   └── assets/
│       ├── favicon.svg          # Favicon officiel du Lab
│       ├── workforce/           # Vraies captures WorkForce AI (Novalis)
│       ├── lariviere/           # Vrais formats publicitaires et logos
│       └── enedis/              # Logos et charte Open Data
├── src/
│   ├── components/
│   │   ├── demos/               # Démonstrateurs interactifs intégrés
│   │   ├── icons/               # Icônes vectorielles personnalisées
│   │   ├── ArchitectureDiagram.tsx
│   │   ├── Badge.tsx
│   │   ├── CategoryPills.tsx
│   │   ├── Footer.tsx
│   │   ├── ImageModal.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   ├── context/
│   │   └── ViewModeContext.tsx  # Contexte Product vs Engineering
│   ├── data/
│   │   ├── projects.ts          # Données factuelles des 5 projets
│   │   ├── skills.ts            # Domaines de compétences techniques
│   │   └── taxonomy.ts          # Catégories de classification
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── InventoryPage.tsx
│   │   └── ProjectDetailPage.tsx
│   ├── types.ts                 # Interfaces TypeScript
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 7. Comment Ajouter un Nouveau Projet

1. Ajouter les métadonnées factuelles du projet dans `src/data/projects.ts` en respectant l'interface `ProjectData` :
   - Problème, solution, impact
   - Stack réelle et modèle d'IA
   - Ce qui a été construit et ce qui a été appris
   - Décisions techniques et compromis
   - Frameworks de test et points de sécurité
2. Copier les visuels réels ou diagrammes dans `public/assets/<nom-du-projet>/`.
3. Optionnel : concevoir un simulateur interactif dans `src/components/demos/` si une démo navigateur apporte de la valeur.
4. Mettre à jour `docs/PROJECT_INVENTORY.md`.
5. Exécuter `npm run test && npm run build` pour vérifier la compilation.
