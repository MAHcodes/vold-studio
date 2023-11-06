/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontSize: {
        sm: "var(--fz-sm)",
        base: "var(--fz-base)",
        md: "var(--fz-md)",
        lg: "var(--fz-lg)",
        xl: "var(--fz-xl)",
        "2xl": "var(--fz-2xl)",
        "3xl": "var(--fz-3xl)",
      },
      colors: {
        "very-light-blue": "#6868FA",
        "interdimensional-blue": "#4524CB",
      },
    },
  },
  plugins: [],
};
