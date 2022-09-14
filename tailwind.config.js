module.exports = {
  content: [
    './components/**/*.{js,jsx}',
    './hooks/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Blinker', 'Noto Sans JP', 'Meiryo', 'sans-serif']
      },
      colors: {
        'album': {
          '50': '#ddf9fd',
          '100': '#c0f4fc',
          '200': '#81e8f8',
          '300': '#42ddf5',
          '400': '#0ccbe8',
          '500': '#0992a8',
          '600': '#077688',
          '700': '#055966',
          '800': '#043b44',
          '900': '#021e22'
        },
        'crafting': {
          '50': '#fff3e6',
          '100': '#feead2',
          '200': '#fed29f',
          '300': '#fdbc72',
          '400': '#fda745',
          '500': '#fc9114',
          '600': '#d97503',
          '700': '#a15702',
          '800': '#6a3901',
          '900': '#371e01'
        },
        'separating': {
          '50': '#e9fbf3',
          '100': '#cff7e4',
          '200': '#9ef0c8',
          '300': '#6ee8ad',
          '400': '#3ee092',
          '500': '#20c877',
          '600': '#199e5e',
          '700': '#137747',
          '800': '#0d4f2f',
          '900': '#062818'
        }
      }
    }
  }
};
