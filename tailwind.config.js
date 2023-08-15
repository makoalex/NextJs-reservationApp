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
        reg2:'16px',
        lg: '18px',
        '2xl': '22px',
        '3xl': '25px',
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '48px',
        '7xl': '60px',
      },
      colors:{
        'yellow': '#ecbf64',
        'gold':' #b38b59',
        'green': '#38b000',
        'grey': '#f0f0f0'
      }
    },
  },
  plugins: [],
};
