import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(124deg, rgba(25, 25, 27, 1) 0%, rgba(41, 3, 71, 1) 100%)',
      },
      colors: {
        purple: {
          500: '#8f49c7',
          800: '#760EC8',
        },
        white: '#FFFFFF',
        white70: '#FFFFFFB2',
        black: '#060606',
      },
    },
  },
  plugins: [],
}
export default config
