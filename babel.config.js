module.exports = {
  env: {
    production: {
      ignore: [/\.test\.js$/, /\.stories\.js$/],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    test: {
      ignore: [/\.stories\.js$/],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};
