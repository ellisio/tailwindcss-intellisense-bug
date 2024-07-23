import { nextui } from "@nextui-org/react";
import { join } from "path";
import { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    join(__dirname, "../../packages/**/*.{ts,tsx}"),
    join(__dirname, "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"),
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 0 0 1px var(--ds-gray-alpha-300)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    nextui({
      prefix: "ds",
    }),
  ],
};

export default config;
