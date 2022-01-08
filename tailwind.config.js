module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'background': '#141313',
      'overlay': 'rgba(0,0,0,0.95)',
      'white': '#fff',
      'transparent':'rgba(0,0,0,0)',
    },
    fontFamily: {
      sans: ["Open Sans", "Helvetica Neue", 'Helvetica', 'Roboto', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};