module.exports = {
  env: {
    production: {
      ignore: [/\.test\.js$/, /\.stories\.js$/],
      presets: ['react-app'],
    },
    test: {
      ignore: [/\.stories\.js$/],
      presets: ['react-app'],
    },
  },
};
