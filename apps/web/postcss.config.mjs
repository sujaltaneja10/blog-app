const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  theme: {
    extend: {
      colors: {
        accent: {
          one: '#FF7000',
          two: '#E2985E',
          three: '#E2995F',
          800: '#FFF1E6',
        },
        primary: {
          500: '#FF7000',
          100: '#FFF1E6',
        },
        dark: {
          100: '#000000',
          200: '#0F1117',
          300: '#151821',
          400: '#212734',
          500: '#3F4354',
        },
        light: {
          900: '#FFFFFF',
          850: '#FDFDFD',
          800: '#F4F6F8',
          700: '#DCE3F1',
          500: '#7B8EC8',
          400: '#858EAD',
        },
        gradient: {
          one: '#171C2394', // 58%
          two: '#13161C',
        },
      },
    },
  },
};
export default config;
