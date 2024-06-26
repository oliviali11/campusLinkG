/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'eagle-lake': ['Eagle Lake', 'cursive'],
        'archivo-black': ['Archivo Black'],
        'gaegu': ['Gaegu', 'cursive']
      }
    },
  },
  plugins: [],
}

