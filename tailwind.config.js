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
        background: '#090D14',
        surface: '#0F172A',
        surfaceHover: '#1E293B',
        card: '#111827',
        border: '#1F2937',
        primary: {
          DEFAULT: '#38BDF8',
          hover: '#0EA5E9',
          light: '#E0F2FE',
          dark: '#0369A1'
        },
        accent: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
