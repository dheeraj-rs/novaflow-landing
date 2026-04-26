/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#ebf0fe',
          200: '#ced9fd',
          300: '#a1b8fa',
          400: '#6d8ef5',
          500: '#4a6cf7',
          600: '#3447eb',
          700: '#2a36d7',
          800: '#272db1',
          900: '#252b8d',
        },
      },
    },
  },
  plugins: [],
}
