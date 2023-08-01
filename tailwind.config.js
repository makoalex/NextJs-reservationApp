/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '2xsm': '10px',
        xsm: '12px',
        sm: '13px',
        reg: '15px',
        lg: '18px',
        '2xl': '22px',
        '3xl': '25px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '60px',
      },
      colors:{
        'orange': '#ff7d00',
        'light-orange':'#ff9e00',
        'green': '#38b000'
      }
    },
  },
  plugins: [],
};
