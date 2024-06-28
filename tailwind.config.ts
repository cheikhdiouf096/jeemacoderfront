import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial-home": "linear-gradient(40deg, rgba(2,6,23,1) 5%, rgba(0,139,139,1) 70%);"
        
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
