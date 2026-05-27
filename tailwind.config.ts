import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
      "spin-slow": "spin 6s linear infinite",
    },
      backgroundImage: {
  
      },
      colors: {
   color1:"#FB5615",
   color2:"#047D00",
   color3:"#1CA0CD",
      },
    },
  },
  plugins: [],
};

export default config;
