# Architecture Decision Records (ADRs)

This document logs significant architectural and technical decisions made during the project.

---

## ADR-001: Separation of Module Ownership
- **Date**: 2026-10-23
- **Status**: Accepted
- **Context**: Hackathon teams frequently encounter git merge conflicts when all members edit the same root files (e.g., `backend/server.js` or monolithic app files).
- **Decision**: Split the repository into three clearly bounded directories: `frontend/` (Rohit), `backend/` (Mohit), and `ai/` (Gaurav). Cross-module interactions happen strictly through agreed API contracts in `docs/API_CONTRACT.md`.
- **Consequences**: Minimal merge conflicts, independent local running and testing, faster parallel iteration.

---

## ADR-002: Offline Mock First Development
- **Date**: 2026-10-23
- **Status**: Accepted
- **Context**: The frontend team cannot wait for full model training or database migrations before building the interface.
- **Decision**: Establish strict mock JSON fixtures matching `docs/API_CONTRACT.md`. Rohit develops against these mocks until Mohit's backend and Gaurav's inference service are connected.
- **Consequences**: Unblocks UI development immediately; eliminates integration bottlenecks late in the hackathon.

---

## ADR-003: Progressive AI Pipeline (Baseline First)
- **Date**: 2026-10-23
- **Status**: Accepted
- **Context**: Training large Transformer/CNN models on raw satellite data during a 24–48 hour hackathon carries high risk of uncompleted pipelines.
- **Decision**: Gaurav builds a fast, deterministic baseline rule-based / tabular ML model first that outputs valid risk scores and hazard polygons. Complex deep learning models will only replace the baseline if time permits.
- **Consequences**: Guarantees a 100% working demo even if heavy training scripts face GPU/time limitations.
