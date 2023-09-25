/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        primary2: '#38bdf8',
        footer: '#0f172a',
        footer2: '#1e293b',
    },
    },
  },
  plugins: [],
}

