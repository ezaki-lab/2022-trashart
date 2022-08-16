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
        'picking': {
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
        'sharing': {
          '50': '#ffedeb',
          '100': '#ffdbd6',
          '200': '#ffbbb3',
          '300': '#ff978a',
          '400': '#ff7866',
          '500': '#ff543d',
          '600': '#ff1e00',
          '700': '#bd1600',
          '800': '#800f00',
          '900': '#3d0700'
        }
      }
    }
  }
};
