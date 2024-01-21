/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '8xl': '1440px',
      },
      colors: {
        'navbar': '#3D4F5C',
        'light-blue': '#46B8C8',
        'primary-orange': '#FB8958',
        'primary-gray': '#FBFAFA',
        'footer': '#939393',
        'primary-yellow': '#FFC351',
        'form': '#F3F3F3',
        'dark-blue': '#3098a6'
      },
      boxShadow: {
        'works': ' 0px 8px 35px 0px #BBA98E26',
      },
      maxWidth: {
        '1/2': '50%',
        '1/4': '25%',
        '2/3': '66.666667%',
      },
      margin: {
        '30vh': '30vh',
      },
    },

  },
  plugins: [],
}

