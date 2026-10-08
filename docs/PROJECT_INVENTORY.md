# Christine AI Lab — Inventaire & Audit Technique des Projets

Ce document recense l'ensemble des dépôts et projets réels identifiés sur l'environnement de travail de Christine, leur positionnement, leur niveau de maturité, leur mode d'accès vérifié, leur stack technique et leur posture de sécurité.

---

## 1. Projets Phares du Book (5 Projets)

### A. REAL / PROTECTED LIVE APPS (Streamlit déployé & vérifié)

| Projet | Dépôt Local | Statut Audité | Mode d'Accès Vérifié | URL Live Déployée | Stack Clé | Visibilité GitHub |
|---|---|---|---|---|---|---|
| **WorkForce Optimize AI** | `D:\WorkForceAI` | `PILOT` | **LIVE APP** | [workforce-ai.streamlit.app](https://workforce-ai.streamlit.app/) | Python 3.12, Streamlit, Pydantic v2, Ruff, Pytest, Playwright | `Private Enterprise` |
| **Éditions Larivière AI Studio** | `D:\LariviereAI` & `D:\Lariviere-Live` | `PILOT` | **PROTECTED LIVE** | [lariviere-ai.streamlit.app](https://lariviere-ai.streamlit.app/) | Python, Streamlit, Gemini Vision, Pillow (Lanczos), PBKDF2 | `Public Gateway` (`Lariviere-Live`) + `Private Core` |
| **DataLab Enedis** | `D:\DataLab-Enedis` & `D:\DataLab-Live` | `PILOT` | **PROTECTED LIVE** | [datalab-enedis.streamlit.app](https://datalab-enedis.streamlit.app/) | Python 3.12, DuckDB, Apache Parquet, Streamlit, FastAPI | `Public Gateway` (`DataLab-Live`) + `Private Core` |

### B. INTERACTIVE DEMO ONLY (Déploiement live planifié ultérieurement)

| Projet | Dépôt Local | Statut Audité | Mode d'Accès | Démonstrateur | Stack Clé | Visibilité GitHub |
|---|---|---|---|---|---|---|
| **ECS Signal-to-Deal** | `D:\ECS-Signal-to-Deal` | `PILOT` | **INTERACTIVE DEMO** | Simulateur d'avis BOAMP / Titulaire | Python 3.12, Streamlit, Playwright, Pytest, Loop Policy Windows | `Proprietary Pilot` (Privé) |
| **GeminiUsageMonitor & Dashboard** | `D:\GeminiUsageMonitor` & `D:\GeminiUsageDashboard` | `PILOT` | **INTERACTIVE DEMO** | Simulateur FinOps tokens / Coûts | FastAPI, SQLAlchemy 2.0, Alembic, Streamlit, Python Decimal | `Public Gateway` (`GeminiUsageDashboard`) + `Private Backend` |

---

## 2. Analyse de Sécurité & Confidentialité Avant Publication

### Règle d'or appliquée :
**Aucun dépôt propriétaire contenant du code métier sensible, des prompts confidentiels ou des données internes d'entreprise n'a été rendu public.**

### Détails par projet :

1. **WorkForceAI (`D:\WorkForceAI`)**
   - **Secrets** : Aucun secret hardcodé requis. Démonstration exécutable hors-ligne en mode local déterministe.
   - **Données** : Modélisation canonique sur une ETI industrielle fictive (`Novalis Industries`, ~2 400 salariés).
   - **Décision** : Maintenu en dépôt privé. Application live accessible sur `https://workforce-ai.streamlit.app/` et démonstrateur interactif WorkScan intégré au lab.

2. **Éditions Larivière AI (`D:\LariviereAI` & `D:\Lariviere-Live`)**
   - **Secrets** : Aucun secret dans le dépôt public `Lariviere-Live`.
   - **Architecture Sas** : Le portail public Streamlit protège l'accès par contrôle PBKDF2-HMAC-SHA256 (600 000 itérations). Le code privé n'est chargé en mémoire conteneur qu'après authentification via l'API GitHub avec en-tête Authorization HTTPS.
   - **Décision** : Le dépôt public `Lariviere-Live` sert de passerelle d'exécution avec sas d'accès sur `https://lariviere-ai.streamlit.app/`.

3. **DataLab Enedis (`D:\DataLab-Enedis` & `D:\DataLab-Live`)**
   - **Secrets** : Aucun secret exposé. Le frontend public `DataLab-Live` communique côté serveur avec le backend privé via `X-DataLab-Token`.
   - **Données** : Données issues exclusivement de l'Open Data public Enedis (consommations annuelles par commune et secteur).
   - **Décision** : Dépôt public `DataLab-Live` pour le frontal avec portail d'accès sur `https://datalab-enedis.streamlit.app/` ; moteur analytique DuckDB/Parquet privé.

4. **ECS Signal-to-Deal (`D:\ECS-Signal-to-Deal`)**
   - **Secrets** : Aucun accès aux systèmes CRM ou bases internes Evernex.
   - **Données** : Avis d'appels d'offres publics légaux (BOAMP, TED, APProch).
   - **Décision** : Dépôt conservé privé. Démonstrateur interactif intégré dans Christine AI Lab ; déploiement live planifié ultérieurement.

5. **GeminiUsageMonitor (`D:\GeminiUsageMonitor` & `D:\GeminiUsageDashboard`)**
   - **Secrets** : Architecture Zero-Knowledge. Le microservice n'accepte aucune clé API Google Gemini ; il ingère uniquement les métadonnées de consommation (compteurs de tokens, type de modèle).
   - **Décision** : Démonstrateur FinOps interactif intégré dans Christine AI Lab ; déploiement live planifié ultérieurement.

---

## 3. Dépôts & Expérimentations Secondaires (`D:\crm_project`)

Des prototypes exploratoires ont également été identifiés dans `D:\crm_project` et répertoriés dans la catégorie *Experimental Lab* :
- `SafeTableAI` : Intelligence de conformité des allergènes pour la restauration
- `eventlead-ai-beta` : Qualification et enrichissement de prospects événementiels
- `docuboard-ai` : Pipeline OCR et structuration de documents
- `stockpilot-ai` : Assistant de prévision des stocks pour commerces de proximité
