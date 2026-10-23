# API Contract & Schema Specifications

This document defines the strict contract between the **Frontend** (Rohit), **Backend** (Mohit), and **AI/ML Service** (Gaurav). No changes may be made to these endpoints or schemas without prior cross-team coordination.

---

## 1. Base URL
- **Local Development**: `http://localhost:8000/api/v1`
- **Standard Error Response**:
  ```json
  {
    "success": false,
    "error": {
      "code": "BAD_REQUEST",
      "message": "Human readable error description",
      "details": {}
    }
  }
  ```

---

## 2. Endpoints

### `GET /weather/current`
Fetches current hyper-local weather conditions for given coordinates.

- **Query Parameters**:
  - `lat` (float, required): Latitude (e.g., `19.0760`)
  - `lon` (float, required): Longitude (e.g., `72.8777`)

- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "location": {
        "name": "Mumbai Coastal Zone",
        "latitude": 19.0760,
        "longitude": 72.8777
      },
      "temperature": 29.5,
      "humidity": 84,
      "pressure_hpa": 1004.2,
      "wind_speed_kmh": 45.8,
      "wind_direction": "SW",
      "precipitation_rate_mmh": 12.4,
      "recorded_at": "2026-10-23T10:00:00Z"
    }
  }
  ```

---

### `POST /prediction/risk`
Executes AI risk prediction for severe weather phenomena at target coordinates.

- **Request Body**:
  ```json
  {
    "latitude": 19.0760,
    "longitude": 72.8777,
    "time_horizon_hours": 24,
    "include_sensor_telemetry": true
  }
  ```

- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "assessment_id": "risk_9941a8",
      "timestamp": "2026-10-23T10:15:00Z",
      "overall_risk_level": "CRITICAL",
      "confidence_score": 0.92,
      "hazards": [
        {
          "type": "cyclone",
          "severity": "HIGH",
          "probability": 0.88,
          "estimated_lead_time_hours": 14.5,
          "details": "Predicted landfall within 45km radius with wind gusts exceeding 100km/h."
        },
        {
          "type": "flood",
          "severity": "CRITICAL",
          "probability": 0.94,
          "estimated_lead_time_hours": 6.0,
          "details": "Inundation risk in low-lying coastal corridors."
        }
      ],
      "recommended_action": "Issue evacuation advisory for Zone 3 coastal belt."
    }
  }
  ```

---

### `GET /alerts/active`
Retrieves live active alerts and warnings.

- **Query Parameters**:
  - `min_severity` (optional): `INFO` | `WARNING` | `CRITICAL` (default: `WARNING`)

- **Response (200 OK)**:
  ```json
  {
    "success": true,
    "data": {
      "active_count": 1,
      "alerts": [
        {
          "id": "alert_c01",
          "severity": "CRITICAL",
          "title": "Severe Cyclone Warning - Coastal Belt",
          "description": "High-velocity gale winds and severe coastal surge predicted.",
          "issued_at": "2026-10-23T09:30:00Z",
          "expires_at": "2026-10-23T18:00:00Z",
          "affected_polygon": [
            [18.9, 72.7], [19.2, 72.8], [19.3, 73.0], [18.8, 72.9]
          ]
        }
      ]
    }
  }
  ```

---

## 3. Mock Fallback Rule for Frontend (Rohit)
If backend services or AI inference are temporarily offline or undergoing migration, the frontend may consume local JSON mocks conforming strictly to the payloads documented above located in `frontend/src/mocks/`.
