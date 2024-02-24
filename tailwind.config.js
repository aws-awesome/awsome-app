/** @type {import('tailwindcss').Config} */
import { radixThemePreset } from "radix-themes-tw";
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This pattern should include your Search component
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [radixThemePreset],
};
