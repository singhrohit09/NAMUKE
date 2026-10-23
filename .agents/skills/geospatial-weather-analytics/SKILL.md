---
name: geospatial-weather-analytics
description: Specialist in geospatial GIS mapping, weather radar telemetry, GeoJSON hazard polygons, and localized micro-climate risk visualization using Leaflet, OpenWeather, or satellite feeds. Use PROACTIVELY when implementing map components, storm trajectories, flood inundation zones, or geospatial coordinates.
---

# Geospatial Weather Analytics Skill

## When to Use
Use this skill whenever working on:
- Interactive map components (Leaflet.js, Mapbox GL, OpenLayers)
- Converting weather telemetry and sensor readings into GeoJSON features
- Generating cyclone storm trajectories and wind radius cones
- Calculating flood inundation polygons from rainfall intensity and elevation
- Formatting geographic coordinates (`latitude`, `longitude`, bounding boxes)

---

## 1. Geographic Data Standards

### Coordinate Representation
- Always use WGS84 standard `[longitude, latitude]` for GeoJSON geometry coordinates and `[latitude, longitude]` for Leaflet map centering.
- Maintain floating-point precision of 4 to 6 decimal places (approx. 1 meter to 10 meters ground accuracy).

### Standard GeoJSON Hazard Polygon Structure
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "hazard_id": "hazard_flood_01",
        "hazard_type": "flood",
        "severity": "CRITICAL",
        "color": "#ef4444",
        "fillOpacity": 0.45,
        "lead_time_hours": 6.0,
        "alert_title": "Coastal Inundation Alert"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.8258, 18.9220],
            [72.8450, 18.9350],
            [72.8390, 18.9550],
            [72.8180, 18.9400],
            [72.8258, 18.9220]
          ]
        ]
      }
    }
  ]
}
```

---

## 2. Weather Color Palette & Severity Encoding

| Severity | Color Hex | Recommended Opacity | Usage |
| :--- | :--- | :--- | :--- |
| **Normal / Low** | `#10b981` (Emerald) | `0.15` | Normal baseline atmospheric conditions |
| **Advisory / Moderate** | `#f59e0b` (Amber) | `0.30` | Heavy rain, high surf, heat advisory |
| **Warning / Severe** | `#f97316` (Orange) | `0.45` | Flash flood watch, tropical storm winds |
| **Critical / Extreme** | `#ef4444` (Red) | `0.60` | Severe cyclonic front, active inundation |

---

## 3. Leaflet.js Implementation Guidelines

```javascript
// Initialize map with dark weather theme tiles
const map = L.map('map-container').setView([19.0760, 72.8777], 11);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  maxZoom: 19
}).addTo(map);

// Render Hazard GeoJSON with interactive popup
L.geoJSON(hazardData, {
  style: (feature) => ({
    color: feature.properties.color || '#ef4444',
    weight: 2,
    fillOpacity: feature.properties.fillOpacity || 0.4
  }),
  onEachFeature: (feature, layer) => {
    layer.bindPopup(`
      <div class="p-2">
        <h4 class="font-bold text-red-600">${feature.properties.alert_title}</h4>
        <p class="text-sm">Severity: <b>${feature.properties.severity}</b></p>
        <p class="text-xs text-gray-500">Lead time: ${feature.properties.lead_time_hours} hrs</p>
      </div>
    `);
  }
}).addTo(map);
```

---

## 4. Best Practices
1. **Performance**: Avoid rendering raw raster files directly on the client canvas; use vector tiles or simplified GeoJSON polygons with under 500 vertices per boundary.
2. **Offline Fallback**: Pre-package bounding box coordinates for key demo regions (e.g. coastal metropolitan areas) so maps never load blank during network disconnects.
3. **Responsive Controls**: Place zoom controls, layer toggles, and legend badges cleanly away from touch interaction hotspots.
