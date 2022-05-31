module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '"M PLUS 1p"', 'Meiryo', 'sans-serif']
      }
    }
  },
  plugins: [require("daisyui")]
};
