module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "scale-input": "scale(1.3, 0.4) 3s linear",
      },
    },
  },
  plugins: [],
};
