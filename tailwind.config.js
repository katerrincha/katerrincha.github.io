/** @type {import('tailwindcss').Config} */
//module.exports
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/js/**/*.js'
  ],
  plugins: [require('tw-elements/plugin.cjs')],
  darkMode: 'class'
}
