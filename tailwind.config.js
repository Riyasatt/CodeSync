/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#0F0616 ",
        secondary : "#CF9FFF",
        tert:"#BF40BF"
      }
    },
  },
  plugins: [],
}