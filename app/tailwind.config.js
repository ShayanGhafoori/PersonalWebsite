module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "440px",
      md: "680px",
      lg: "1100px",
      xl: "1480px",
    },
    extend: {
      fontFamily: {
        "neue-haas-grotesk": ["Neue Haas Grotesk Display Pro", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
