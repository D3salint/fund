// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // 👈 Этот шаблон находит все файлы с расширениями js, ts, jsx, tsx в директории src
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
}