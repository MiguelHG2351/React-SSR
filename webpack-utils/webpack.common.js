const HtmlWebpackPlugin = require('html-webpack-plugin');
const { commonPath } = require('./common')

module.exports = {
  output: {
    publicPath: '/',
    path: commonPath.output,
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/public/index.html',
    }),
  ]
};
