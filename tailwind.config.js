/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          '100': '#101111',
          '200': '#000',
          '300': '#151515',
        },
        white: {
          '100': '#fff',
        },
        gray: {
          '100': '#292929',
          '200': '#878787',
        },

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #7A87FB, #FFD49C)',
      },
    },
  },
  plugins: [],
}