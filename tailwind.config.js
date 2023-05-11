/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        rotateCX: {
          '0%': {transform: 'rotateX(0deg)'},
          '100%': {transform: 'rotateX(180deg)'},
        },
      },
      animation: {
        chevronup: 'rotateCX 200ms reverse linear',
        chevrondown: 'rotateCX 200ms forwards linear',
      },
    },
  },
  plugins: [],
}
