/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'selector',
  content: [
    // Example content paths...
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  // Other Tailwind settings...
}

