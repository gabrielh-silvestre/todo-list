module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gray-dark': '#171717',
      'gray': '#444444',
      'gray-light': '#EDEDED',
      'red': '#DA0037',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '4rem',
        sm: '5rem',
        lg: '6rem',
        xl: '7rem',
        '2xl': '8rem',
      }
    },
  },
  plugins: [],
};
