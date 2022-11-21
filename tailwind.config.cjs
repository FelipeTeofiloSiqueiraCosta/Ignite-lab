/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14, //extra small
      sm: 16, //small
      md: 18, //medium
      lg: 20, //large
      xl: 24, //extra large
      "2xl": 32, //2 extra large
    },
    colors: {
      black: "#000",
      white: "#fff",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        300: "#C4C4CC",
        100: "#E1E1E6",
      },
      cyan: {
        500: "#81D8F7",
        300: "#B0EAFF",
      },
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        //fonte padrão do tailwind
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
