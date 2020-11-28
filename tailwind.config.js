module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Sora", "sans-serif"],
      body: ["Poppins", "sans-serif"]
    },
    extend: {
      fontSize: {
        "xxs" : '.6rem',
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      },
      colors: {
        "primary" : "#009688",
        "primary-light" : "#52C7B8",
        "primary-dark" : "#00675B",
        "accent" : "#23B987"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
