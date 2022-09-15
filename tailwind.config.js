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
          '50': '#e0fffd',
          '100': '#c2fffb',
          '200': '#8afff7',
          '300': '#4dfff3',
          '400': '#14ffef',
          '500': '#00d6c8',
          '600': '#00ada2',
          '700': '#008077',
          '800': '#005751',
          '900': '#002926'
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
          '50': '#e9fbea',
          '100': '#d3f8d5',
          '200': '#a7f1ab',
          '300': '#7bea81',
          '400': '#4fe356',
          '500': '#23dc2c',
          '600': '#1cb023',
          '700': '#15841b',
          '800': '#0e5812',
          '900': '#072c09'
        }
      }
    }
  }
};
