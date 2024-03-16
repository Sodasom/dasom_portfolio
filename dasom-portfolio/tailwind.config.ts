import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#FFFFFF",
        "base-gray300": "#BDC1C8",
        "base-gray400": "#9A9DA3",
        "base-gray500": "#71767E",
        "base-gray800": "#282D35",
        "base-black": "#111620",
      },
      dropShadow: {
        "hover-shadow": "0px 0px 10px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
