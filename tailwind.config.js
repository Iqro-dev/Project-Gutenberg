module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        medium: { max: "1500px" },
        "2xl": { min: "1501px" },
      },
    },
  },
  plugins: [],
};
