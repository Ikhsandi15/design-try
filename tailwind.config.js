/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        "780px": "48.75rem",
        "1083px": "1083px",
        "36%": "36%"
      },
      "spacing": {
        "350px": "350px"
      },
      backgroundImage: {
        'diagonal-grid': "url('../src/img/diagonal-grid-trans5.png')",
        'leftImg': "url('../src/img/bg-left.jpg')",
        'hero-section': "url('../src/img/hero.jpg')",
        'pcb-background': "url('../src/img/pcbbg.png')",
        "bg-shape1": "url('../src/img/bg-shape1.jpg')",
        "bg-shape2": "url('../src/img/bg-shape2.jpg')"
      }
    },
  },

  plugins: [],
};
