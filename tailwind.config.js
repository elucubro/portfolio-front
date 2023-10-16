/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        'text': '#000000',
        //'background': '#f1fbf7',
        'background': '#ffffff',
        'primary': '#0fc7db',
        'secondary': '#041734',
        'accent': '#156cef',
       },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

