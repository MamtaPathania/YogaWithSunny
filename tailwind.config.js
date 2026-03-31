/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yoga: {
          50: '#f0f9f4',
          100: '#dbf0e3',
          200: '#bae0cb',
          300: '#8cc9aa',
          400: '#5ba982',
          500: '#3a8c63',
          600: '#2b6f4e',
          700: '#235940',
          800: '#1d4734',
          900: '#193a2b',
          950: '#0e2019',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
