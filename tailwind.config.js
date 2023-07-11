/** @type {import('tailwindcss').Config} */

export default {
  mode: 'jit',
  content: [
    './*.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1440px',
    },
    extend: {

    },
  },
  plugins: [],
}