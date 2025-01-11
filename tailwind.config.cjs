/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C9A92', // sage green
          light: '#A5BDB7',
          dark: '#5C7A72',
        },
        secondary: {
          DEFAULT: '#E6B89C', // warm beige
          light: '#F2D4C2',
        },
        accent: {
          DEFAULT: '#D4B483', // warm brown
          light: '#E8D4B9',
        },
        nature: {
          leaf: '#94AF9F',
          stone: '#DBC8AC',
          sand: '#EEE3D3',
        }
      },
      fontFamily: {
        display: ['Quicksand', 'sans-serif'],
        body: ['Andika', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url('/patterns/leaves.svg')",
        'dots-pattern': "url('/patterns/dots.svg')",
      }
    },
  },
  plugins: [],
}