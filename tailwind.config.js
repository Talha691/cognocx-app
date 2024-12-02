/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,ts}"
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      'max-450': { 'max': '450px' },
    },
  },
};
export const plugins = [];


