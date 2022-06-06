module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        popup: "popup 0.6s",
      },
      keyframes: {
        popup: {
          "0%": { transform: "translateY(200%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
