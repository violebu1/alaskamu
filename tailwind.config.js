/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'blackOps':['Black Ops One', 'cursive'],
      'garamond':['EB Garamond', 'serif'],
      'oswald':[ 'Oswald', 'sans-serif'],
      'redrose':['Red Rose', 'cursive'],
        'bangers':['Bangers', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}

