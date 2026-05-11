/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'amp-dark': '#8B3A3A',      // Vermelho escuro (logo/menu)
        'amp-gold': '#E8C547',       // Ouro (destaques/CTA)
        'amp-cream': '#F5F1DE',      // Bege/creme
        'amp-white': '#FFFFFF',      // Branco
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Lora', 'serif'],
        'sans': ['system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
