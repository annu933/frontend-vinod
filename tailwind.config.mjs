/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FEA116",
        // orange: "#F75416",
        blue: "#0F172B",
        black: "#000",
        white: "#fff",
        green: "#7ab730",
        gray: "#666565",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Default font for the entire application
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat to the fontFamily
      },
    },
  },
  plugins: [],
};
