/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "780px": "48.75rem",
        "1083px": "1083px",
        "36%": "36%",
        "32%": "32%",
        "80px": "80px"
      },
      "spacing": {
        "350px": "350px"
      },
      height: {
        '861px': '861px',
        '900px': '900px',
        '990px': '990px',
        '800px': '800px'
      },
      backgroundImage: {
        'diagonal-grid': "url('../src/img/diagonal-grid-trans5.png')",
        'leftImg': "url('../src/img/bg-left.jpg')",
        'hero-section': "url('../src/img/hero.jpg')",
        'pcb-background': "url('../src/img/pcbbg.png')",
        "bg-shape1": "url('../src/img/bg-shape1.jpg')",
        "bg-shape2": "url('../src/img/bg-shape2.jpg')",
        'bg-wave1': 'url(../src/img/bg-wave1.jpg)'
      }
    },
  },

  plugins: [],
};
