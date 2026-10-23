# Final Demo Checklist & Presentation Runbook

> **Goal:** Deliver a flawless 3–5 minute presentation highlighting real-world value, technical depth, and a seamless working MVP.

---

## 🕒 T-3 Hours: Freeze & Verification Checklist
- [ ] Code freeze: No new features, only bug fixes.
- [ ] Verify that `npm run dev` / `python main.py` boots from a fresh clone without errors.
- [ ] Verify environment variables in `.env` are populated and `.env.example` is complete.
- [ ] Confirm fallback mock responses are present in case external weather APIs fail.
- [ ] Test the demo flow end-to-end on a clean browser tab (incognito mode).

---

## 🎬 3-Minute Demo Script

| Timestamp | Phase | Presenter | Key Talking Points & Action |
| :--- | :--- | :--- | :--- |
| **0:00 - 0:45** | **The Hook & Problem** | Mohit | Introduce NAMUKE. Show the gap: Macro-forecasts miss street-level micro-bursts and urban flash floods. |
| **0:45 - 2:00** | **Live MVP Walkthrough** | Rohit | Open the dashboard. Select a vulnerable coastal zone (e.g., Mumbai). Show hyper-local radar overlay, live weather metrics, and the incoming storm alert banner. |
| **2:00 - 2:45** | **AI Risk Engine & Science** | Gaurav | Explain the hybrid predictive pipeline. Show the hazard polygons, confidence intervals (92%), and how early lead-time saves lives and infrastructure. |
| **2:45 - 3:00** | **Conclusion & Impact** | Mohit | Summarize technical achievements, scalability, and next steps. Take judges' questions. |

---

## 🧪 Test Cases to Verify Before Demo
1. **Happy Path Query**: Enter coordinates -> returns valid weather stats, risk level, and visual hazard map within 500ms.
2. **Extreme Hazard Alert**: Trigger high-risk cyclone/flood scenario -> alert banner appears with evacuation recommendations.
3. **Invalid Coordinates / Error Handling**: Submit out-of-bounds coordinates -> graceful user-friendly error notification (no white screen or crash).
4. **Network Fallback**: Disconnect Wi-Fi / simulate API timeout -> app indicates cached/offline state smoothly.
