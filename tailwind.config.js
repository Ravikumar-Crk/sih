/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        command: {
          bg: '#080E1E',
          card: '#0F1A34',
          cardHover: '#162347',
          sidebar: '#0A1227',
          border: '#1E2D54',
          accent: '#2563EB',
          text: '#F1F5F9',
          muted: '#94A3B8',
        },
        risk: {
          safe: '#10B981',
          watch: '#EAB308',
          warning: '#F97316',
          critical: '#EF4444',
          info: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-fast': 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 2s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '50%': { transform: 'scale(1.15)', opacity: '0.3' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
