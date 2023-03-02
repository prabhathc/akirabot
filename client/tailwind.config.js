/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pillred: '#EA6A6C',
        pillwhite: '#FFFFFF',
        pillblue: '#CCE4F5',
        pillgreen: '#5E8C61',
        pilldblue: '#88C0E7',
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
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
