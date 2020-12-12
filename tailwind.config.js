module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/*.js", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        mainBrand: "#ceb06d",
        softBrand: "#e7d8b7",
        softDrop: "#f7efe2",
        darkDrop: "#031e49"
      }
    },
  },
  options: {
    whitelist: []
  },
  variants: {},
  plugins: [],
};
