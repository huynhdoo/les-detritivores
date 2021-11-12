const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

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
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 7))" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        scroll: "scroll 40s linear infinite",
      },
      other: {
        content: "",
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
  plugins: [
    plugin(function ({ addUtilities, theme, config }) {
      const themeColors = theme("colors");
      const individualBorderColors = Object.keys(themeColors).map(
        (colorName) => {
          if (typeof themeColors[colorName] == "string") {
            return {
              [`.border-b-${colorName}`]: {
                borderBottomColor: themeColors[colorName],
              },
              [`.border-t-${colorName}`]: {
                borderTopColor: themeColors[colorName],
              },
              [`.border-l-${colorName}`]: {
                borderLeftColor: themeColors[colorName],
              },
              [`.border-r-${colorName}`]: {
                borderRightColor: themeColors[colorName],
              },
            };
          }

          const colors = {};

          Object.keys(themeColors[colorName]).forEach((level) => {
            colors[`.border-b-${colorName}-${level}`] = {
              borderBottomColor: themeColors[colorName][level],
            };
            colors[`.border-t-${colorName}-${level}`] = {
              borderTopColor: themeColors[colorName][level],
            };
            colors[`.border-l-${colorName}-${level}`] = {
              borderLeftColor: themeColors[colorName][level],
            };
            colors[`.border-r-${colorName}-${level}`] = {
              borderRightColor: themeColors[colorName][level],
            };
          });

          return colors;
        }
      );

      addUtilities(individualBorderColors);
    }),
  ],
};
