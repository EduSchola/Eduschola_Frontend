import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Convergence', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-bg": "url(../assets/images/hero.png)",
        "footer-bg": "url(../assets/images/Vector.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        white: "#fff",
        primary: "#3A72AA",
        secondary: "#6699CC",
        cta: "#FF9900",
        cta_hover: "#ED9512",
        footerbg: "#1E1E1E",
        footerExt: "#3A72AA",
        formbg: "#3A72AA",
        goldbg: "#4483C1",
      },
    },
  },
  plugins: [],
};
export default config;
