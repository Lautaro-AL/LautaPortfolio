/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0C0E14',
        surface: '#13171F',
        accent: '#4F8EF7',
        'accent-cyan': '#64FFDA',
        'text-primary': '#E8EDF5',
        'text-secondary': '#5A6070',
        'border-color': '#1E2330',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
