// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'], // 👈 이렇게
      },
    },
  },
  // 나머지 설정
};

export default config;
