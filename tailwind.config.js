/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yadata-navy': '#0f172a',
        'yadata-slate': '#1e293b',
        'yadata-blue': '#2563eb',
        'yadata-cyan': '#22d3ee',
      },
      fontFamily: {
        'enterprise': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
