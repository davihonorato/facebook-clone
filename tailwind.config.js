/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.{html, js}'],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem',
        '290px': '290px',
        '396px': '396px',
        '472px': '472px',
        '980px': '980px',
      },
      fontSize: {
        'subtitle': '1.7rem'
      },
      colors: {
        'main-gray': '#f0f2f5',
        'main-blue': '#1877f2',
        'main-blue-hover': '#166fe5',
        'main-green': '#42b72a',
        'main-green-hover': '#36a420',
      }
    },
    container: {
      center: true,
      padding: '16px'
    }
  },
  plugins: [],
}

