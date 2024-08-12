/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Roboto:["Roboto", "sans-serif"],
        Montserrat:["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Audiowide:["Audiowide", "sans-serif"]
      }
    },
  },
  plugins: [],
}