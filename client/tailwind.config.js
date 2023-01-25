/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pillred: '#EA6A6C',
        pillwhite: '#FFFFFF',
        pillthird: '#708B75',
      },
      keyframes: {
        rotateText: {
          '0%, 100%': { transform: 'rotate(360deg)' },
          '100%, 0%': { transform: 'rotate(0deg)' },
        },
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
};
