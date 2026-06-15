import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        panel: '#101827',
        cyanx: '#38BDF8',
        mint: '#34D399',
        amberx: '#FBBF24',
        rosex: '#FB7185',
      },
      boxShadow: {
        glow: '0 0 45px rgba(56,189,248,.28)',
      },
    },
  },
  plugins: [],
};

export default config;
