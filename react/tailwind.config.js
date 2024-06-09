/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      sim: ['10px', '12px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      colors: {
        'col-green': '#32CD32',
        'col-zinc': '#27272a',
        'col-green-v':'#086c10'
      },
    },
  },
  plugins: [],
}

