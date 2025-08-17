import type { Config } from "tailwindcss";

const config: Config = {
  presets: [require("../../packages/config/tailwind-preset.js")],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: []
};

export default config; 