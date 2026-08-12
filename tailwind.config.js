/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // "Ember" ramp — warm carbon + amber
        bg: '#0D0B0A',
        surface: '#16130F',
        'surface-raised': '#1E1A15',
        accent: '#FF6B35',
        'accent-hover': '#FF8A5E',
        'accent-2': '#F2C14E',
        'text-primary': '#F2EDE6',
        'text-secondary': '#8A8078',
        'border-color': '#252019',
        'border-strong': '#8A8078',
        success: '#5FBF7E',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'ds-pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
      },
      animation: {
        'ds-pulse': 'ds-pulse 2s ease-in-out infinite',
        'ds-pulse-fast': 'ds-pulse 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}
