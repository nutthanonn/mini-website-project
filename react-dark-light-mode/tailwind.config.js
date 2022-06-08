module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        sun: "url(~/src/assets/sun.svg)",
        moon: "url(~/src/assets/moon.svg)",
      },
      animation: {
        moonBounce: "moonBounce 1s",
        sunBounce: "sunBounce 1s",
      },
      keyframes: {
        moonBounce: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        sunBounce: {
          "0%": {
            transform: "translateY(20%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
