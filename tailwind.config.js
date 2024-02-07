module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_7e": "#0000007e" },
        deep_orange: { 50: "#f5ebdd", "50_01": "#f4e6d8", A200: "#ff7235" },
        blue_gray: {
          200: "#aabbcc",
          400: "#8d8d8d",
          "100_00": "#d9d9d900",
          "400_01": "#8c8c8c",
        },
        light_blue: { A200: "#3ec1f3" },
        red: { 200: "#eaa58b", 300: "#ca7358" },
        gray: {
          50: "#f9fcff",
          200: "#e7e7e7",
          300: "#e3e2e2",
          800: "#494949",
          900: "#30242a",
          "300_29": "#d9dcdd29",
          "300_01": "#e5e5e5",
          "300_5d": "#dadfe25d",
          "300_3b": "#d9dddf3b",
          "300_1b": "#d9dbdb1b",
        },
        white: { A700_12: "#ffffff12", A700: "#ffffff" },
        pink: { 50: "#f9d4e3", 100: "#ffb7d5", 300: "#f95c9e" },
        lime: { 900: "#a15842" },
        teal: { 50: "#d9ecf6", "50_8a": "#d8ebf68a" },
        indigo: { A400_01: "#4856df", A400: "#4756df" },
      },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient:
          "linear-gradient(224deg ,#d9ecf6,#d8ebf68a,#dadfe25d,#d9dddf3b,#d9dcdd29,#d9dbdb1b,#ffffff12,#d9d9d900)",
        gradient1: "linear-gradient(315deg ,#ffffff,#f9d4e3)",
      },
      boxShadow: { bs: "0px 10px  30px 0px #ffb7d5" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
