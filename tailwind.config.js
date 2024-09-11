/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        themecol: "#007cc3",
        themedark: "#1d4670"
      },
    },
  },
  plugins: [],
}

