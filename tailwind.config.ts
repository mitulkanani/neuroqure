import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#E6F6FE',
        darkBlue: '#0D6EFD',
        darkBlack: '#011632',
        lightBlack: '#3C4959',
        lightGray: '#6B7280',
      },
      backgroundColor: {
        lightBlue: '#E6F6FE',
        darkBlue: '#0D6EFD',
        darkBlack: '#011632',
        lightBlack: '#3C4959',
        offlightBlue: '#25B4F8',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Sora: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
