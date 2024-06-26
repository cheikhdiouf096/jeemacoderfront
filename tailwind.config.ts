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
        colors : {
            "base-blue" : "#15548E",
            "blue-muted" : "#D8E8F6",
            "white" : "#FFFFFF",
            "black" : "#141111",
            "gray-foreground" : "#D9D9D9",
            "muted" : "#F5F5F5",
            "destruction-red" : "#D93842",
            "foreground-green" : "#62D938"
      },
    },
  },
  plugins: [],
};
export default config;
