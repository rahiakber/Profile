/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-accent': '#6A5ACD',
        'secondary-accent': '#483D8B',
        'background-dark': '#0A192F',
        'surface-dark': '#112233',
        'text-light': '#E6E6FA',
        'text-muted': '#A0AEC0',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6A5ACD 0%, #483D8B 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(106, 90, 205, 0.4)',
      }
    },
  },
  plugins: [],
}
