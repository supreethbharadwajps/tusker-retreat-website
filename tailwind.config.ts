import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        brand: {
          green: '#2E7D32',
          lightgreen: '#4CAF50',
          gold: '#FFC107',
          dark: '#1B5E20',
        },
      },
    },
  },
  plugins: [],
};
export default config;