import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b1424',
        'navy-light': '#111d33',
        'navy-lighter': '#17233a',
        maroon: '#491f26',
        'maroon-light': '#5c2830',
        gold: '#a28e65',
        'bright-gold': '#d4b975',
        'off-white': '#f4efe3',
        'near-white': '#fbf9f4',
      },
      fontFamily: {
        display: ['Oswald', 'Anton', 'sans-serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      transitionDuration: {
        fast: '200ms',
        med: '400ms',
      },
    },
  },
  plugins: [],
};

export default config;
