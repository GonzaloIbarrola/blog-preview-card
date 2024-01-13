/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero' : 'url(/src/assets/images/illustration-article.svg)'
    },
    colors: {
      'yellow' : 'hsl(47, 88%, 63%)',
      'white' : 'hsl(0, 0%, 100%)',
      'grey' : 'hsl(0, 0%, 50%)',
      'black' : 'hsl(0, 0%, 7%)'
    },
    fontFamily: {
      'sans' : 'Figtree'
    },
    boxShadow: {
      'cardShadow' : '8px 8px 0px 0px #000'
    },
    extend: {},
  },
  plugins: [],
}

