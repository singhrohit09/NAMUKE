---
name: testing
description: Guides unit, integration, and manual end-to-end testing for backend endpoints, AI inference models, and frontend UI components.
---

# Testing Skill

## When to Use
Use this skill to verify code before committing, validating features, or preparing for the hackathon demo.

## Testing Guidelines

### Backend Testing (Mohit)
- Test route status codes (200, 400, 404, 500).
- Test input validation: invalid lat/lon values, missing payload fields.
- Test endpoint response structure against `docs/API_CONTRACT.md`.

### AI/ML Pipeline Testing (Gaurav)
- Run baseline prediction tests with sample telemetry:
  ```bash
  python ai/predict.py --lat 19.0760 --lon 72.8777
  ```
- Verify deterministic outputs and realistic hazard confidence scores.
- Test handling of null or missing sensor inputs.

### Frontend Testing (Rohit)
- Verify UI renders properly in both light and dark themes.
- Test map interaction: clicking markers, changing zoom, rendering polygons.
- Test offline / mock fallback when backend is unreachable.

### Never Claim Unverified Tests
Never report that a test passed unless you executed the test command or directly inspected the running output.
