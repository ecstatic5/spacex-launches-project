/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      martian: ["Martian Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animated")],
};
