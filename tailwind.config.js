/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/components/**/*.js',
    './src/components/**/*.jsx',
    './src/layout/**/*.js',
    './src/layout/**/*.jsx',
    './src/util/**/*.js',
    './src/util/**/*.jsx',
    './src/pages/**/*.js',
    './src/pages/**/*.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        uthmainc: ['uthmanicHafs', 'sans-serif'],
        meQuran: ['meQuran', 'sans-serif'],
        nastaleeq: ['nastaleeq', 'sans-serif'],
        surahNames: ['surahNames', 'sans-serif'],
      },
      colors: {
        primary: '#2ca4ab',
      },
    },
  },
  plugins: [],
};
