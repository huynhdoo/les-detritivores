const colors = require("tailwindcss/colors");
module.exports = {
  important: true,
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        smph: "320px",
      },
      width: {
        250: "53.313rem",
        150: "30rem",
        100: "40rem",
        200: "32rem",
      },
      transitionProperty: {
        height: "height",
      },
      height: {
        250: "31.875rem",
        150: "25rem",
        200: "32rem",
      },
      fontSize: {
        vw: "calc(1.375rem + 0.5vw)",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        indigo: colors.indigo,
        red: colors.red,
        yellow: colors.yellow,
        amber: colors.amber,
        lime: colors.lime,
        green: colors.green,
        emerald: colors.emerald,
        teal: colors.teal,
        sky: colors.sky,
        blue: colors.blue,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        cyan: colors.cyan,
        orange: colors.orange,
        warmGray: colors.warmGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        orangeDDTV: "#e94e1a",
        greenDDTV: "#263b29",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
