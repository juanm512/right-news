/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    extend: {
      keyframes: {
        clipPathUp: {
          from:{
          clipPath: "inset(100% 0 0 0)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathDown: {
          from:{
          clipPath: "inset(0 0 100% 0)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathLeft: {
          from:{
          clipPath: "inset(0 0 0 100%)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathRight: {
          from:{
          clipPath: "inset(0 100% 0 0)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathUpLeft: {
          from:{
          clipPath: "inset(100% 0 0 100%)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathUpRight: {
          from:{
          clipPath: "inset(100% 100% 0 0)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathDownLeft: {
          from:{
          clipPath: "inset(0 0 100% 100%)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        clipPathDownRight: {
          from:{
          clipPath: "inset(0 100% 100% 0)"
          },
          to:{clipPath:"inset(0 0 0 0)"}
        },
        // below this is opacity entrance
        opacity: {
          '0%, 50%':{ opacity: 0 },

          '100%':{ opacity: 1 }
        },
        // below this is scale entrance
        scale: {
          from:{ transform: "scale(0)" },
          to:{ transform: "scale(1)" }
        },
          scaleOpacity: {
            from:{ transform: "scale(0)", opacity: 0 },
            to:{ transform: "scale(1)", opacity: 1 }
          },
        // below this is x entrance
        xLeft: {
          from:{ transform: "translateX(-150%)" },
          to:{ transform: "translateX(0)" }
        },
        xRight: {
          from:{ transform: "translateX(150%)" },
          to:{ transform: "translateX(0)" }
        },
          xUpOpacity: {
            from:{ transform: "translateX(-150%)", opacity: 0 },
            to:{ transform: "translateX(0)", opacity: 1 }
          },
          xDownOpacity: {
            from:{ transform: "translateX(150%)", opacity: 0 },
            to:{ transform: "translateX(0)", opacity: 1 }
          },
        // below this is y entrance
        yUp: {
          from:{ transform: "translateY(-150%)" },
          to:{ transform: "translateY(0)" }
        },
        yDown: {
          from:{ transform: "translateY(150%)" },
          to:{ transform: "translateY(0)" }
        },
          yUpOpacity: {
            from:{ transform: "translateY(-150%)", opacity: 0 },
            to:{ transform: "translateY(0)", opacity: 1 }
          },
          yDownOpacity: {
            from:{ transform: "translateY(150%)", opacity: 0 },
            to:{ transform: "translateY(0)", opacity: 1 }
          },
      },
      animation: {
        clipPathTB: 'clipPathDown 400ms ease-in forwards',
        clipPathLeftRight: 'clipPathRight 1000ms ease-in-out forwards',
      },
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("tailwindcss-animate")
    // ...
  ],
}
