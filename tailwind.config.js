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
        Saleem_QuranFont: ['_PDMS_Saleem_QuranFont', 'sans-serif'],
        Othmani: ['Othmani', 'sans-serif'],
      },
      colors: {
        primary: '#2ca4ab',
        'primary-100': '#e6f7f8',
        'primary-200': '#b3e7ea',
        'primary-300': '#80d7dc',
        'primary-400': '#4dc7ce',
        'primary-500': '#2ca4ab',
      },
    },
  },
  plugins: [],
};
