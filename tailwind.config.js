/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      xs: '540px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        dark: '#111111',
        accentLight: '#f7e17a',
        accentDark: '#be8c3f',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/img/hero/bg.png')",
        about: "url('/src/img/about/image.png')",
        interview: "url('/src/img/interview/bg2.png')",
      },
      content: {
        outlineText: 'url("/src/img/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
