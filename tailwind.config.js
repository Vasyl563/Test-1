/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.{vue, js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
};
