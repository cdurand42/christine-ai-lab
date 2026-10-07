# Christine AI Lab — Inventaire & Audit Technique des Projets

Ce document recense l'ensemble des dépôts et projets réels identifiés sur l'environnement de travail de Christine, leur positionnement, leur niveau de maturité, leur stack technique et leur posture de sécurité.

---

## 1. Projets Phares Intégrés au Portfolio

| Projet | Dépôt Local | Statut | Stack Clé | Visibilité GitHub | Démo Live / Simulateur |
|---|---|---|---|---|---|
| **WorkForce Optimize AI** | `D:\WorkForceAI` | `PILOT` | Python 3.12, Streamlit, Pydantic v2, Ruff, Pytest, Playwright | `Private Enterprise` | Simulateur WorkScan intégré + Local Runner |
| **Éditions Larivière AI Studio** | `D:\LariviereAI` & `D:\Lariviere-Live` | `LIVE` | Python, Streamlit, Gemini Multimodal, Pillow (Lanczos), PBKDF2 | `Public Gateway` (`Lariviere-Live`) + `Private Core` | Portail Streamlit Cloud + Inspecteur de formats intégré |
| **DataLab Enedis** | `D:\DataLab-Enedis` & `D:\DataLab-Live` | `LIVE` | Python 3.12, DuckDB, Apache Parquet, Streamlit, FastAPI | `Public Gateway` (`DataLab-Live`) + `Private Core` | Portail Streamlit Cloud + Explorateur Bench/Radar intégré |
| **ECS Signal-to-Deal** | `D:\ECS-Signal-to-Deal` | `PILOT` | Python 3.12, Streamlit, Playwright, Pytest, Loop Policy Windows | `Proprietary Pilot` (Privé) | Simulateur Radar & Avis d'Attribution intégré |
| **GeminiUsageMonitor & Dashboard** | `D:\GeminiUsageMonitor` & `D:\GeminiUsageDashboard` | `LIVE` | FastAPI, SQLAlchemy 2.0, Alembic, Streamlit, Python Decimal | `Public Gateway` (`GeminiUsageDashboard`) + `Private Backend` | Dashboard Streamlit + Calculateur FinOps intégré |
| **Jarvis — Assistant Local** | `D:\Jarvis` | `PROTOTYPE` | Python 3.10+, Gemini 2.5 Flash, FastAPI, WebSockets, SQLite, PWA | `Proprietary Prototype` (Privé) | Simulateur de bac à sable d'actions intégré |
| **Zcube Enedis Pilot** | `D:\Zcube-Enedis-Pilot` | `PILOT` | Python, Streamlit, Gemini, python-pptx, Usage Monitor Client | `Proprietary Pilot` (Privé) | Étude de cas & Cadrage de scénarios |

---

## 2. Analyse de Sécurité & Confidentialité Avant Publication

### Règle d'or appliquée :
**Aucun dépôt propriétaire contenant du code métier sensible, des prompts confidentiels ou des données internes d'entreprise n'a été rendu public.**

### Détails par projet :

1. **WorkForceAI (`D:\WorkForceAI`)**
   - **Secrets** : Zéro secret hardcodé requis. Démonstration exécutable à 100% hors-ligne en mode local déterministe.
   - **Données** : Modélisation canonique sur une ETI industrielle fictive (`Novalis Industries`, ~2 400 salariés).
   - **Décision** : Maintenu en dépôt privé. Démonstration assurée via captures d'écran réelles et simulateur de matrice de tâches intégré au lab.

2. **Éditions Larivière AI (`D:\LariviereAI` & `D:\Lariviere-Live`)**
   - **Secrets** : Aucun secret dans le dépôt public `Lariviere-Live`.
   - **Architecture Sas** : Le portail public Streamlit demande un identifiant/mot de passe haché par PBKDF2-HMAC-SHA256 (600 000 itérations). Le code privé n'est chargé en mémoire conteneur qu'après authentification via l'API GitHub avec en-tête Authorization HTTPS.
   - **Décision** : Le dépôt public `Lariviere-Live` sert de passerelle d'exécution 100% sécurisée sur Streamlit Community Cloud.

3. **DataLab Enedis (`D:\DataLab-Enedis` & `D:\DataLab-Live`)**
   - **Secrets** : Aucun secret exposé. Le frontend public `DataLab-Live` communique côté serveur avec le backend privé via `X-DataLab-Token`.
   - **Données** : Données issues exclusivement de l'Open Data public Enedis (consommations annuelles par commune et secteur).
   - **Décision** : Dépôt public `DataLab-Live` pour le frontal léger ; moteur analytique DuckDB/Parquet privé.

4. **ECS Signal-to-Deal (`D:\ECS-Signal-to-Deal`)**
   - **Secrets** : Zéro accès aux systèmes CRM ou bases internes Evernex.
   - **Données** : 100% avis d'appels d'offres publics légaux (BOAMP, TED, APProch).
   - **Décision** : Dépôt conservé privé. Reproduction de la démo via le runbook officiel de 7 minutes et simulateur d'avis public dans le lab.

5. **GeminiUsageMonitor (`D:\GeminiUsageMonitor` & `D:\GeminiUsageDashboard`)**
   - **Secrets** : Garantie Zero-Knowledge. Le microservice n'accepte aucune clé API Google Gemini ; il ingère uniquement les métadonnées de consommation (compteurs de tokens, type de modèle).
   - **Décision** : Frontal public `GeminiUsageDashboard` déployable sur Streamlit Cloud avec mot de passe temps constant.

6. **Jarvis (`D:\Jarvis`)**
   - **Secrets** : Configuration `.env` locale exclue de Git.
   - **Réseau** : Écoute exclusive sur loopback (127.0.0.1) et tunnel chiffré privé Tailscale Serve sans exposition Internet.
   - **Décision** : Dépôt privé.

---

## 3. Dépôts & Expérimentations Secondaires (`D:\crm_project`)

Des prototypes exploratoires ont également été identifiés dans `D:\crm_project` et répertoriés dans la catégorie *Experimental Lab* :
- `SafeTableAI` : Intelligence de conformité des allergènes pour la restauration
- `eventlead-ai-beta` : Qualification et enrichissement de prospects événementiels
- `docuboard-ai` : Pipeline OCR et structuration de documents
- `stockpilot-ai` : Assistant de prévision des stocks pour commerces de proximité
