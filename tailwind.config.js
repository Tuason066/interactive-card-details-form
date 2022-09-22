/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,css}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        gradient:
          'linear-gradient(180deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%))',
        red: 'hsl(0, 100%, 66%)',
        violet: {
          100: 'hsl(270, 3%, 87%)',
          200: 'hsl(279, 6%, 55%)',
          300: 'hsl(278, 68%, 11%)',
        },
      },
      fontFamily: {
        spaceGrotest: "'Space Grotesk', sans-serif",
      },
      fontSize: {
        cardSM: 'clamp(1px, 4vw, .75rem)',
        cardMD: 'clamp(1px, 4.9vw, 1.15rem)',
        cardLG: 'clamp(1px, 4.9vw, 1.5rem)',
      },
      spacing: {
        formTop: 'clamp(2rem, 20vw, 5rem)',
        formLeft: 'clamp(2rem, 20vw, 5rem)',
      },
    },
  },
  plugins: [],
};
