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
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        down: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translateY(20px)",
          }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        down: "down 2s ease infinite",
      },
      colors: {
        "very-light-blue": "#6868FA",
        "interdimensional-blue": "#4524CB",
      },
    },
  },
  plugins: [],
};
