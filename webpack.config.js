const CopyPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin([{ from: '.', to: '../dist' }], { context: 'public' })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  entry: {
    background: path.resolve(__dirname, 'src/background.ts'),
    contentScript: path.resolve(__dirname, 'src/contentScript.ts'),
    devtools: path.resolve(__dirname, 'src/devtools.ts'),
    injectible: path.resolve(__dirname, 'src/injectible.ts'),
    panel: path.resolve(__dirname, 'src/panel.tsx')
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      }
    ]
  }
};
