const colors = require('tailwindcss/colors');
module.exports = {
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.75rem',
        md: '1.75rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '15px',
      },
    },
    fontFamily: {
      body: ['HelveticaNeue'],
      canela: ['Canela'],
    },
    
    extend: {
      fontSize: {
        0: ['0px', '0px'],
        6: ['6px', '8px'],
        7: ['7px', '10px'],
        8: ['8px', '10px'],
        10: ['10px', '14px'],
        11: ['11px', '14px'],
        15: ['15px', '18px'],
        22: ['22px', '26px'],
        25: ['25px', '28px'],
        26: ['26px', '28px'],
        27: ['27px', '30px'],
        28: ['28px', '32px'],
        32: ['32px', '36px'],
        35: ['35px', '38px'],
        40: ['40px', '44px'],
        44: ['44px', '48px'],
        45: ['45px', '48px'],
      },
      spacing: {
        '4.5': '1.125rem',
        '101': '101px',
        '34': '130px',
        '3/10': '20%',
        '300': '300px',
        '500': '500px',
      },
      minWidth: {
        '1/5': '20%',
      },
      colors: {
        emeraldone: '#2F756A',
        lightblue: {
          200: '#141751',
          300: '#1d2285',
          500: '#464684',
        },
        gray: colors.trueGray,
        emerald: colors.emerald,
        yellow: colors.yellow,
        indigo:{900:'#1E1E50'},
      },
      scale: {
        '65': '.65',
        '70': '.70',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo')({
      empty: true, // DEFAULTS to true
    }),
  ],
};
