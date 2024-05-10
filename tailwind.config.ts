import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          light: '#F2F2F2',
          dark: '#15191C'
        },
        secondary: {
          light: '#FFFFFF',
          dark: '#1D232A'
        },
        tertiary: {
          light: '#F7F6FE',
          dark: '#1D232A'
        }
      },
      plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('tailwind-scrollbar')
      ],
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
