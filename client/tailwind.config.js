/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px'
      },
      colors: {
        coolgray: '#9699AB',
        lightgray: '#D6D9E6',
        magnolia: '#F0F6FF',
        alabaster: '#FAFBFF',
        marineblue: '#02295A',
        purpleblue: '#473DFF',
        pastelblue: '#ADBEFF',
        lightblue: '#BFE2FD',
        strawberryred: '#ED3548',
        primary: '#4e2248',
        secondary: '#aa6291',
        accent: '#0e656f',
        silver: '#d9d9d9',
        mid: '#979797',
        smoke: '#848884',
        dark: '#444444',
        darker: '#0A0708',
        deep: '#030303',
        deeper: '#000300',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
      },
      backgroundImage: {
        'sidebar-mobile': "url('./assets/sidebar-mobile.svg')",
        'sidebar-desktop': "url('./assets/sidebar-desktop.svg')",
        'icon-arcade': "url('./assets/icon-arcade.svg')",
        'icon-advanced': "url('./assets/icon-advanced.svg')",
        'icon-pro': "url('./assets/icon-pro.svg')",
        'icon-checkmark': "url('./assets/icon-checkmark.svg')",
        'icon-thank-you': "url('./assets/icon-thank-you.svg')"
      },
    },
  },
  
}
