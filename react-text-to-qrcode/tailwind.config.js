module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
      },
    },
  },
  plugins: [],
};
