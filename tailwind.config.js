module.exports = {
  mode: "jit",
  prefix: "",
  purge: {
    enabled: true,
    content: ["./public/**/*.html", "./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
