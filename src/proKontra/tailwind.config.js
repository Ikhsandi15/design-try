/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#212121",
          "200": "#1b1a21",
          "300": "#0d0c11",
          "400": "rgba(27, 26, 33, 0.2)",
          "500": "rgba(13, 12, 17, 0.1)",
        },
        whitesmoke: "#eee9ed",
        white: "#fff",
        lightgray: "#d1cfda",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        lato: "Lato",
        inherit: "inherit",
      },
    },
    fontSize: {
      "lgi-1": "19.1px",
      mid: "17px",
      "12xl-8": "31.8px",
      "72xl-2": "91.2px",
      "5xl": "24px",
      "108xl-3": "127.3px",
      "2xl-2": "21.2px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
