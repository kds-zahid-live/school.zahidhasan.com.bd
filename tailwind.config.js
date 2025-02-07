/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Scan all JS/TS files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro-rounded': ['"SF Pro Rounded"', 'sans-serif'],
      },
      animation: {
        'logo-spin': 'logo-spin 50s linear infinite',
        'rotate-shadow': 'rotate-shadow 50s linear infinite',
      },
      keyframes: {
        'logo-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-shadow': {
          '0%': { 'text-shadow': '50px 20px 90px #40D3F3, -30px 0px 80px #CA52B7' },
          '25%': { 'text-shadow': '30px 50px 90px #40D3F3, 0px -30px 80px #CA52B7' },
          '50%': { 'text-shadow': '-50px 20px 90px #40D3F3, 30px 0px 80px #CA52B7' },
          '75%': { 'text-shadow': '-30px -50px 90px #40D3F3, 0px 30px 80px #CA52B7' },
          '100%': { 'text-shadow': '50px 20px 90px #40D3F3, -30px 0px 80px #CA52B7' },
        },
      },
    },
  },
  plugins: [],
}

