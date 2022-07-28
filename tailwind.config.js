module.exports = {
  content: [
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
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
  }
};
