import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slideIn": "slideIn 1s ease-in forwards",
      },
      keyframes: {
        slideIn: {
          "0%": {
            opacity: '0',
            transform: "translateY(60px)",
          },
          "100%": {
            opacity: '1',
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
