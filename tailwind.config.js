/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './renderer/**/*.{ts,tsx}',
    './layouts/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        paper: '8.5in',
        print: {
          raw: 'print',
        },
      },
      spacing: {
        4.5: '1.125rem',
      },
      fontSize: {
        '2xs': '9px',
      },
      scale: {
        110: '1.1',
        120: '1.2',
        125: '1.25',
        140: '1.4',
        150: '1.5',
        160: '1.6',
      },
    },
  },
  plugins: [],
};
