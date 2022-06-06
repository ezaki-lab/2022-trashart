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
      }
    }
  },
  plugins: [require("daisyui")]
};
