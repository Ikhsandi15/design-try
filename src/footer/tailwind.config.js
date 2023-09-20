/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#eee9ed",
        gray: {
          "100": "#1b1a21",
          "200": "rgba(27, 26, 33, 0.2)",
          "300": "rgba(13, 12, 17, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
      },
    },
    fontSize: {
      mid: "17px",
      "lgi-1": "19.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
