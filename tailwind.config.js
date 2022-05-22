module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Akshar', 'sans-serif'],
        'body': ['Lexend', 'sans-serif'],
      },
      aspectRatio: {
        '3/4': '3 / 4'
      }
    },
  },
  plugins: [],
}
