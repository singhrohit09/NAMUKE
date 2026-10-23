---
name: frontend-development
description: Guides frontend UI/UX development, component structure, map integrations, responsive layouts, and API/mock data consumption.
---

# Frontend Development Skill

## When to Use
Use this skill when building UI components, dashboards, interactive maps, or integrating client-side API requests.

## Rules
1. **Design Quality**: High-contrast, modern UI with clear visual hierarchy, proper typography, and dark-mode aesthetic suited for crisis & weather dashboards.
2. **State Resilience**: Always handle four visual states for dynamic data:
   - Initial / Idle state
   - Loading state (spinners / skeletons)
   - Success state (with charts / cards / maps)
   - Error state (clear retry button, informative error message)
3. **Map & GIS Practices**: Ensure map layers (tiles, hazard polygons, markers) have descriptive tooltips and color legends (Green = Safe, Yellow = Advisory, Red = Severe Danger).
4. **Mock Decoupling**: Isolate API client calls inside a service/hook so switching between live API and mock data is a single environment flag.
