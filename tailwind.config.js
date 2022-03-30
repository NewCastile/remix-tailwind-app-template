const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "weather-light-green": "#eaefe3",
      "weather-green": "#b7e4c7",
      "weather-green-shadow": "#52b788",
      "weather-lile": "#e6d3ff",
      "weather-dark-lile": "#1f1f31",
      "weather-lile-shadow": "#6e4eaf"
    }
  },
  plugins: []
};
