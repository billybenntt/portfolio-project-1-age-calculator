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

      colors: {
        'primary': {
          'purple': 'hsl(259, 100%, 65%)',
          'light-red': 'hsl(0,100%,67%)',
        },
        'accent': {
          'gray': 'hsl(0,4%,95%)',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [],
}