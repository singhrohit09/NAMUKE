import { RiskCategory } from '../types/risk';

export function getRiskCategory(score: number): RiskCategory {
  if (score < 25) return 'LOW';
  if (score < 50) return 'MODERATE';
  if (score < 75) return 'HIGH';
  return 'SEVERE';
}

export function getRiskLabel(category: RiskCategory): string {
  switch (category) {
    case 'LOW':
      return 'Low Risk';
    case 'MODERATE':
      return 'Moderate Risk';
    case 'HIGH':
      return 'High Risk';
    case 'SEVERE':
      return 'Severe Alert';
    default:
      return 'Unknown';
  }
}

export function getRiskColor(category: RiskCategory): {
  text: string;
  bg: string;
  border: string;
  hex: string;
  pill: string;
} {
  switch (category) {
    case 'LOW':
      return {
        text: 'text-sage-dark',
        bg: 'bg-sage/15',
        border: 'border-sage/40',
        hex: '#586E53',
        pill: 'bg-sage/15 text-sage-dark border border-sage/40 font-medium',
      };
    case 'MODERATE':
      return {
        text: 'text-amber-dark',
        bg: 'bg-amber/15',
        border: 'border-amber/40',
        hex: '#E8AD55',
        pill: 'bg-amber/15 text-amber-dark border border-amber/40 font-medium',
      };
    case 'HIGH':
      return {
        text: 'text-coral',
        bg: 'bg-coral/15',
        border: 'border-coral/40',
        hex: '#D96C5F',
        pill: 'bg-coral/15 text-coral border border-coral/40 font-medium',
      };
    case 'SEVERE':
      return {
        text: 'text-crimson',
        bg: 'bg-crimson/15',
        border: 'border-crimson/40',
        hex: '#B7493E',
        pill: 'bg-crimson/15 text-crimson border border-crimson/40 font-medium',
      };
    default:
      return {
        text: 'text-charcoal-muted',
        bg: 'bg-ivory-200',
        border: 'border-ivory-border',
        hex: '#737975',
        pill: 'bg-ivory-200 text-charcoal-muted border border-ivory-border',
      };
  }
}

export function getHazardIconName(type: string): string {
  switch (type) {
    case 'thunderstorm':
      return 'CloudLightning';
    case 'heavy_rainfall':
      return 'CloudRain';
    case 'lightning':
      return 'Zap';
    case 'strong_winds':
      return 'Wind';
    case 'local_flooding':
      return 'Droplets';
    default:
      return 'AlertTriangle';
  }
}
