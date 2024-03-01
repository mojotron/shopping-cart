/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      green: {
        100: '#d1fae5',
        400: '#34d399',
        600: '#059669',
      },
      gray: {
        50: '#fafafa',
        400: '#a3a3a3',
        600: '#525252',
        800: '#262626',
      },
      orange: {
        400: '#fb923c',
        600: '#ea580c',
      },
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
    },
    fontFamily: {
      righteous: ['Righteous', 'sans'],
    },
    extend: {},
  },
  plugins: [],
};
