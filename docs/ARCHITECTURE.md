# NAMUKE Architecture & Technical Specification

## 1. System Overview
NAMUKE is architected as a modular, decoupled system designed to ingest weather telemetry, compute localized risk using machine learning models, and present interactive geospatial dashboards with real-time alerts.

```mermaid
graph TD
    subgraph Data & AI Pipeline ["AI/ML Subsystem (Owner: Gaurav)"]
        AI_SRC[Telemetry & Historical Data] --> AI_PRE[Data Preprocessor]
        AI_PRE --> AI_ENG[Risk Prediction Engine]
        AI_ENG --> AI_EXP[Inference API / Exported Model]
    end

    subgraph Backend Core ["Backend Services (Owner: Mohit)"]
        AI_EXP --> BE_SRV[Core Backend Service / API Gateway]
        BE_DB[(Database & Cache: PostgreSQL / Redis)] <--> BE_SRV
        BE_SRV --> BE_ALERT[Alert & Notification Dispatcher]
    end

    subgraph Client Application ["Frontend UI/UX (Owner: Rohit)"]
        BE_SRV --> FE_MAP[Interactive Map & Risk Heatmap]
        BE_SRV --> FE_DASH[Weather Dashboard & Metrics Cards]
        BE_ALERT --> FE_NOTIF[Live Warning Banner & Push Alerts]
        FE_VIZ[AI Visualization Components (Gaurav & Rohit)] --> FE_DASH
    end
```

---

## 2. Technology Stack

| Layer | Primary Technology | Lead Owner | Support |
| :--- | :--- | :--- | :--- |
| **Frontend** | React / Next.js / Vite, Leaflet.js / Mapbox, Modern CSS | Rohit | Gaurav (Viz), Mohit (Shell) |
| **Backend & APIs** | Node.js (Express) or Python (FastAPI), REST JSON APIs | Mohit | Rohit (Contracts) |
| **Database & Cache** | SQLite / PostgreSQL, In-memory / Redis cache | Mohit | Gaurav (Telemetry schemas) |
| **AI / ML Pipeline** | Python (PyTorch / Scikit-learn / XGBoost), NumPy, Pandas | Gaurav | Rohit & Mohit (Integration) |

---

## 3. Directory & Responsibility Boundaries

```
NAMUKE/
├── AGENTS.md                  # Persistent AI developer rules & context
├── docs/                      # Architectural docs, roles, contracts, board
├── .agents/skills/            # Reusable Antigravity agent skills
├── frontend/                  # [Rohit's Domain] UI components, maps, dashboard
├── backend/                   # [Mohit's Domain] Server APIs, DB models, routing
├── ai/                        # [Gaurav's Domain] Model weights, inference scripts, datasets
├── .env.example               # Environment variables template
├── .gitignore                 # Repository ignore rules
└── README.md                  # Project overview and run instructions
```

---

## 4. End-to-End Data Flow

1. **Query / Telemetry Ingestion**:
   - The user selects a location on the frontend map or enters coordinates (`lat`, `lon`).
2. **API Delegation**:
   - The frontend requests `/api/v1/weather/risk?lat=...&lon=...` from the backend.
3. **Inference Execution**:
   - The backend passes current parameters + station readings to Gaurav's inference module (`ai/predict.py` or AI microservice).
4. **Response & Alerting**:
   - The backend aggregates risk metrics (e.g. Cyclone risk: 85%, Flash Flood: 40%), attaches evacuation guidance if above critical thresholds, and returns standard JSON.
5. **UI Rendering**:
   - Rohit's frontend updates the radar/map overlay, color-codes risk zones (Green/Amber/Red), and shows live warning alerts.
