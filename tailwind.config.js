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
        200: '#e5e5e5',
        400: '#a3a3a3',
        600: '#525252',
        800: '#262626',
      },
      orange: {
        50: '#fff7ed',
        100: '#fef3c7',
        200: '#fde68a',
        400: '#fb923c',
        600: '#ea580c',
      },
    },
    fontSize: {
      xs: '12px',
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
      sans: ['Raleway', 'sans'],
      righteous: ['Righteous', 'sans'],
    },
    extend: {},
  },
  plugins: [],
};
