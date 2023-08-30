/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
       blue: '#18499D',
    },
    fontSize: {
      xl: ['4.5rem'],
      lg: ['3rem'],
      // md: ['2.25rem'],
      // sm: ['1.5rem'],
    },
    borderRadius: {
      'sm': '1.25rem',
    },
    extend: {
      fontFamily: {
        custom: ['PP Mori, sans-serif'],
      },
    },
  },
  plugins: [],
}

 