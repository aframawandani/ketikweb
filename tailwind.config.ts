import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        baloobhai2: ["'Baloo Bhai 2'", 'sans-serif'],
        circularstdbook: ["'Circular Std Book'", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
