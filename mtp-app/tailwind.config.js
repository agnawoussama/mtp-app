/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      width: {
        'asideSpc': '350px'
      },
      colors: {
        'asideBg': 'rgb(237, 242, 247)',
        'homeIcon': 'rgb(78, 92, 110)',
        'headerCl': '#fafbfb',
        'asideBg2': '#99999933',
        'channelPv' : '#4b5563'
      },
      zIndex: {
        '999': '999'
      }
    },
  },
  plugins: [],
}
