// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx,html}",
      // Ajusta estas rutas según tu estructura
    ],
    theme: {
      extend: {
        backgroundImage: {
          'grad-141': 'linear-gradient(141deg, #3fe5ed, #005593 42%, #005593)',
        }
      },
    },
    plugins: [],
  }