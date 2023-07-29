/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './public/**/*.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        colorful: {
            blue : {
              DEFAULT: "#3da9fc",
              dark:"#094067"
            },
            red:{
              DEFAULT:"#ef4565"
            },
            sky:{
              DEFAULT:"#d8eefe"
            }
        }
      }
    },
  },
  plugins: [require('flowbite/plugin',"daisyui")],
}
