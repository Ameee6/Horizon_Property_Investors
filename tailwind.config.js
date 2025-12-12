/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6eef5',
          100: '#ccdde9',
          200: '#99bad4',
          300: '#6698be',
          400: '#3375a9',
          500: '#005393',
          600: '#004276',
          700: '#003258',
          800: '#00213b',
          900: '#00111d',
        },
        gold: {
          50: '#fefaf0',
          100: '#fcf5e1',
          200: '#f9ebc3',
          300: '#f6e0a5',
          400: '#f3d687',
          500: '#f0cc69',
          600: '#d4a840',
          700: '#a17f31',
          800: '#6d5521',
          900: '#3a2b10',
        },
      },
    },
  },
  plugins: [],
};
