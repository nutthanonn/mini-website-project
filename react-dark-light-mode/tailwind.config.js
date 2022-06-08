module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        sun: "url(~/src/assets/sun.svg)",
        moon: "url(~/src/assets/moon.svg)",
      },
    },
  },
  plugins: [],
};
