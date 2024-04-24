/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          home: '#B2D8CD',
          navbar: '#E5B9C1',
          text: '#5C2929',
        },
      },
    },
  },
  plugins: [],
}