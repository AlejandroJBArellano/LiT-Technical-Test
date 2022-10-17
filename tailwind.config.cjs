/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { fontFamily: { raleway: "Raleway", roboto: "Roboto" } },
    colors: {
      gray: {
        "100": "#f4f4f4",
        "200": "#eaeaea",
        "300": "#c4c4c4",
        "400": "#a3a3a3",
        "500": "#a2a2a2",
        "600": "#555",
        "700": "#3a3a3a",
      },
      white: "#fff",
      pink: {
        "100": "#ea99a3",
        "200": "#e998a2",
        "300": "rgba(234, 153, 163, 0.3)",
      },
      black: "#000",
      red: "#f22727",
    },
    fontSize: { sm: "12px", base: "14px", lg: "16px", xl: "24px" },
  },
  corePlugins: { preflight: false },
};

