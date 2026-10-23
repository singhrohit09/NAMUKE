# Problem Statement: NAMUKE

## 1. Problem Overview
Severe, sudden, and localized weather anomalies—such as urban flash floods, cyclones, microbursts, and extreme heatwaves—inflict catastrophic economic loss and endanger lives. Existing meteorological forecasting models operate at coarse geographical resolutions (typically 10–25 km² grids) and update infrequently (every 3 to 6 hours), leaving local communities and municipal authorities under-informed during hyper-local micro-climate emergencies.

## 2. Target Users
1. **Local Citizens & Commuters**: Require street-level, timely alerts, safe route recommendations, and plain-English risk assessments before venturing out.
2. **First Responders & Disaster Management Teams**: Need real-time hazard mapping, impact radius estimations, and early warnings to prioritize resource dispatch and evacuation.
3. **Municipal / Urban Planners**: Seek empirical sensor data and historical pattern analysis to safeguard infrastructure and drainage networks.

## 3. Core Challenges to Address
- **Spatial Granularity**: Translating regional macro-weather forecasts down to 1 km² street-level risk predictions.
- **Latency & Early Warning**: Providing actionable warning lead-times (15–60 minutes ahead of rapid events; 24–72 hours for cyclonic fronts).
- **Data Heterogeneity**: Fusing diverse data inputs—satellite imagery, regional radar, IoT weather stations, and user-reported ground conditions.

## 4. Expected MVP Hackathon Outcome
1. **Interactive GIS Dashboard**: High-fidelity map interface showing live weather parameters, localized risk heatmaps, and simulated hazard zones.
2. **AI Risk Prediction Service**: A functional inference pipeline that accepts localized coordinates and historical/sensor telemetry to evaluate storm/flood risk with confidence scores.
3. **Automated Early Warning Feed**: Real-time push alert generator providing severity levels (Info, Warning, Critical) and actionable safety advisories.
4. **End-to-End User Journey**: User queries a location -> Backend fetches/computes risk -> AI engine generates prediction -> UI visualizes the risk zone and issues alert.
