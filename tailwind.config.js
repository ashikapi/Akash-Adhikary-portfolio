/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
      },
      textColor: {
        transparent: 'transparent',
      },
      textStrokeWidth: {
        '1': '1px',
        '2': '2px',
      },
      textStrokeColor: {
        black: '#000',
      },

    },
  },
  plugins: [
    require('tailwindcss-text-stroke'),
  ],
}


