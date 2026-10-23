# Antigravity Skills & AI Pair Programming Setup Guide

> **For Teammates (Mohit, Rohit, Gaurav) & Their AI Pair Programmers**  
> This document guides your AI assistant to perform with the highest professional engineering standards, adhere to project architecture, and automatically leverage our 21 curated domain skills.

---

## ⚡ 1. Quick Start: Zero-Config Setup for Teammates

If you are a teammate who just cloned or pulled the repository:
```bash
git pull --no-rebase origin main
```
**You do NOT need to manually download individual skills.**  
This repository already packages all 21 specialized skills inside `.agents/skills/`. Google Antigravity automatically detects any `.agents/skills/` directory from the repository root and activates skills on demand through **progressive disclosure**.

---

## 🤖 2. Instructions for Teammate AI Assistants

> **AI Assistant Directive:**  
> When working in this repository, you are acting as a senior engineer paired with either **Mohit** (Lead & Backend), **Rohit** (Frontend & UI/UX), or **Gaurav** (AI/ML & Data).
> 
> Before writing code:
> 1. Read [`AGENTS.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/AGENTS.md) and [`docs/TEAM_ROLES.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/docs/TEAM_ROLES.md).
> 2. Read the specific role file for your teammate:
>    - Mohit: [`docs/MohitRole.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/docs/MohitRole.md)
>    - Rohit: [`docs/RohitRole.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/docs/RohitRole.md)
>    - Gaurav: [`docs/GauravRole.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/docs/GauravRole.md)
> 3. Consult the relevant skill from `.agents/skills/` listed below based on the task domain.

---

## 🧰 3. Project Skills Inventory & Activation Triggers

The following skills are pre-installed in `.agents/skills/`. AI assistants should proactively apply the corresponding skill when executing tasks:

### A. Full-Stack & Backend (Mohit's Focus)
| Skill Directory | Trigger / When to Use | Key Capabilities |
| :--- | :--- | :--- |
| [`.agents/skills/fastapi-pro`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/fastapi-pro) | Building backend endpoints, async routes, WebSockets | Async route design, Pydantic V2 validation, lifespan events |
| [`.agents/skills/python-pro`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/python-pro) | Python backend architecture, package management | Python 3.12+ async patterns, type hints, uv/ruff, clean code |
| [`.agents/skills/api-design-principles`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/api-design-principles) | Defining endpoints or schemas in [`docs/API_CONTRACT.md`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/docs/API_CONTRACT.md) | Standardized REST status codes, JSON envelopes, validation |
| [`.agents/skills/api-testing-observability-api-mock`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/api-testing-observability-api-mock) | Generating mock responses for frontend development | Offline mock engines, synthetic weather & alert generators |
| [`.agents/skills/architect-review`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/architect-review) | Making technical decisions or reviewing pull requests | Clean Architecture, separation of concerns, regression check |
| [`.agents/skills/full-stack-orchestration-full-stack-feature`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/full-stack-orchestration-full-stack-feature) | End-to-end features spanning DB, API, AI, and UI | Multi-layer execution flow, contract verification |

### B. Frontend & UI/UX (Rohit's Focus)
| Skill Directory | Trigger / When to Use | Key Capabilities |
| :--- | :--- | :--- |
| [`.agents/skills/frontend-developer`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/frontend-developer) | Building React components, layouts, pages | React 19 / Next.js best practices, responsive layouts, a11y |
| [`.agents/skills/kpi-dashboard-design`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/kpi-dashboard-design) | Designing risk dashboards & live monitoring cards | Metric card hierarchy, real-time alert banners, typography |
| [`.agents/skills/react-state-management`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/react-state-management) | Handling API responses, client state, caching | Zustand stores, TanStack React Query, offline cache sync |
| [`.agents/skills/tailwind-design-system`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/tailwind-design-system) | Styling weather themes, radar badges, color tokens | Tailored dark-mode palette, danger/warning severity tokens |

### C. AI / Machine Learning & Data Pipeline (Gaurav's Focus)
| Skill Directory | Trigger / When to Use | Key Capabilities |
| :--- | :--- | :--- |
| [`.agents/skills/ml-engineer`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/ml-engineer) | Training or serving prediction models | PyTorch / Scikit-learn inference, batching, confidence scores |
| [`.agents/skills/ai-engineer`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/ai-engineer) | Multimodal weather data, AI fallback heuristics | Feature engineering, heuristic rules, model wrapping |
| [`.agents/skills/ml-pipeline-workflow`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/ml-pipeline-workflow) | Data preprocessing & automated pipeline | Data normalization, test splits, inference export (`predict.py`) |

### D. Weather GIS & Geospatial (Domain Specific)
| Skill Directory | Trigger / When to Use | Key Capabilities |
| :--- | :--- | :--- |
| [`.agents/skills/geospatial-weather-analytics`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/geospatial-weather-analytics) | Leaflet / Mapbox maps, radar polygons, coordinates | GeoJSON polygon rendering, hazard zones, storm trajectory cones |

### E. Team Collaboration & Quality Assurance (All Members)
| Skill Directory | Trigger / When to Use | Key Capabilities |
| :--- | :--- | :--- |
| [`.agents/skills/git-collaboration`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/git-collaboration) | Before pulling, committing, or pushing code | Safe branch workflows, zero-conflict coordination, no force-push |
| [`.agents/skills/code-review`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/code-review) | Before committing or completing a task | Security audits, credential checks, boundary violations |
| [`.agents/skills/python-testing-patterns`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/python-testing-patterns) | Writing tests for backend or inference logic | Pytest fixtures, mock network calls, edge case testing |
| [`.agents/skills/unit-testing-test-generate`](file:///Users/zyzz_mohit/StormGuard_Ai/NAMUKE/.agents/skills/unit-testing-test-generate) | Generating unit tests for new components | High-coverage assertions, null/boundary checks |

---

## 🌐 4. How to Install Skills Globally (Optional)

If teammates want these skills available across **all** their personal projects on their local Mac / Linux machine:

1. Create the global Antigravity configuration directory:
   ```bash
   mkdir -p ~/.gemini/config/skills
   ```
2. Copy any skill from this repository to the global directory:
   ```bash
   cp -r .agents/skills/* ~/.gemini/config/skills/
   ```
3. To explore and download additional official/community skills:
   - Official Antigravity Documentation: [antigravity.google/docs/skills](https://antigravity.google/docs/skills)
   - Antigravity Skill Vault (300+ skills): [github.com/rmyndharis/antigravity-skills](https://github.com/rmyndharis/antigravity-skills)
   - Addy Osmani Engineering Skills: [github.com/addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

---

## 💬 5. Copy-Paste AI Prompts for Each Teammate

Teammates can copy and paste these exact prompts into their Antigravity chat to immediately align their AI:

### Prompt for Mohit (Backend & Architecture):
> *"You are my AI coding assistant for NAMUKE. I am Mohit, the Team Lead and Backend Engineer. Please read `AGENTS.md`, `docs/MohitRole.md`, and `docs/API_CONTRACT.md`. Use `.agents/skills/fastapi-pro` and `.agents/skills/architect-review` to help me implement backend routes and maintain integration integrity."*

### Prompt for Rohit (Frontend & UI/UX):
> *"You are my AI coding assistant for NAMUKE. I am Rohit, the Frontend Engineer. Please read `AGENTS.md`, `docs/RohitRole.md`, and `docs/API_CONTRACT.md`. Use `.agents/skills/frontend-developer`, `.agents/skills/tailwind-design-system`, and `.agents/skills/geospatial-weather-analytics` to build our reactive dashboard and map visualization."*

### Prompt for Gaurav (AI/ML & Data Pipeline):
> *"You are my AI coding assistant for NAMUKE. I am Gaurav, the AI/ML Engineer. Please read `AGENTS.md`, `docs/GauravRole.md`, and `docs/API_CONTRACT.md`. Use `.agents/skills/ml-engineer`, `.agents/skills/ml-pipeline-workflow`, and `.agents/skills/python-testing-patterns` to build our prediction pipeline and inference wrapper."*

---

## ✅ 6. Automated Skill Verification

Run this one-line command from the repository root to verify that all 21 skills are present and valid:
```bash
python3 -c "import os; skills = os.listdir('.agents/skills'); print(f'✓ {len(skills)} skills installed and ready in .agents/skills/')"
```
