/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#151B23',
          900: '#0E1318',
          800: '#151B23',
          700: '#222B36',
          600: '#2D3845',
          500: '#485666',
          muted: '#6B7A8A',
        },
        slate: {
          DEFAULT: '#222B36',
          900: '#151B23',
          800: '#222B36',
          700: '#2C3847',
          600: '#3D4C5E',
          500: '#54667D',
        },
        ivory: {
          DEFAULT: '#F4F1EA',
          50: '#FAF8F4',
          100: '#F4F1EA',
          200: '#ECE6DA',
          300: '#DFD7C7',
          400: '#CEC4B1',
          paper: '#FAF9F6',
          surface: '#FFFFFF',
          border: '#DCD5C6',
          muted: '#6B7A8A',
        },
        sage: {
          DEFAULT: '#A7B8A2',
          light: '#C0CEBC',
          dark: '#586E53',
          deep: '#3D4E3A',
          soft: '#EEF3EC',
        },
        amber: {
          DEFAULT: '#E8AD55',
          light: '#F2C682',
          dark: '#C2882F',
          soft: '#FDF6EB',
        },
        coral: {
          DEFAULT: '#D96C5F',
          light: '#E58E83',
          dark: '#B7493E',
          soft: '#FCEFEB',
        },
        // Backward-compatible semantic aliases
        monsoon: {
          DEFAULT: '#586E53',
          light: '#A7B8A2',
          dark: '#3D4E3A',
          soft: '#EEF3EC',
        },
        terracotta: {
          DEFAULT: '#D96C5F',
          light: '#E58E83',
          dark: '#B7493E',
          soft: '#FCEFEB',
        },
        crimson: {
          DEFAULT: '#B7493E',
          light: '#D96C5F',
          dark: '#8E2C23',
          soft: '#FCEFEB',
        },
        ochre: {
          DEFAULT: '#E8AD55',
          light: '#F2C682',
          dark: '#C2882F',
          soft: '#FDF6EB',
        },
        softborder: '#DCD5C6',
        darkborder: '#2A3644',
        risk: {
          low: '#586E53',
          moderate: '#E8AD55',
          high: '#D96C5F',
          severe: '#B7493E',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(37, 43, 45, 0.05)',
        'paper': '0 1px 3px rgba(37, 43, 45, 0.04), 0 4px 12px rgba(37, 43, 45, 0.03)',
        'elevated': '0 4px 20px -2px rgba(37, 43, 45, 0.08)',
      }
    },
  },
  plugins: [],
}
