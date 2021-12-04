module.exports = {
  mode: 'jit',
  purge: [  // must include any file where a css class name is referenced
    './dist/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'side': '39rem',
        'halfvh': '50vh',
        'quartervh': '25vh',
        'threeqvh': '75vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
