/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "Segoe UI", "sans-serif"],
        display: ['"Playfair Display"', "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          xl: "2rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tavue: {
          primary: "#0A2E4E",
          "primary-content": "#F4F1EC",
          secondary: "#D6B46B",
          "secondary-content": "#1A1A1A",
          accent: "#3E6E8C",
          neutral: "#1A1A1A",
          "neutral-content": "#F4F1EC",
          "base-100": "#F4F1EC",
          "base-content": "#1A1A1A",
          info: "#3ABFF8",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
};
