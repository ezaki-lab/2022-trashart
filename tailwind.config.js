module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Blinker', 'Noto Sans JP', 'Meiryo', 'sans-serif']
      },
      colors: {
        'separating': '#0992a8',
        'crafting': '#fc9114',
        'sharing': '#ff543d'
      }
    }
  },
  plugins: [require("daisyui")]
};
