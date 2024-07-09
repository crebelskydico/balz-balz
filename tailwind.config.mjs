/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      width: {
        max: "1440px",
      },
      gridTemplateColumns: {
        root: "minmax(1rem, 1fr) repeat(12, minmax(0, 6.5rem)) minmax(1rem, 1fr)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
