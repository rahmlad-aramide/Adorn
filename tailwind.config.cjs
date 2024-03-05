/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url(./assets/images/hero.jpg)",
      'about': "url(./assets/images/about.jpg)",
      'footer': "url(./assets/images/footer.jpg)",
    },
    fontFamily: {
      'lancelot': ['Lancelot', 'cursive'],
      'workSans': ['Work Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': '#121212', /* dark */
        'secondary': '#F87979', /* pink */
        'tertiary': '#555555', /* grey */
      }
    },
  },
  plugins: [],
}
