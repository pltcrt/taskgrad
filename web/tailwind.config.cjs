/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // чтобы Tailwind видел твой код
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d0d0d",  // фон
        text: "#ffffff",        // текст
        accent: "#4f46e5",      // красивый акцент (фиолетовый)
      },
    },
  },
  plugins: [],
}
