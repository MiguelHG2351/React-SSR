const HtmlWebpackPlugin = require('html-webpack-plugin');
const { commonPath } = require('./common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
  output: {
    // URL to the output directory resolved relative to the HTML page
    publicPath: '/',
    path: commonPath.output,
    // para tener un nombre facil filename-sdasdsad.bundle.js
    chunkFilename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CSSMinimizerWebpackPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['optipng', { optimizationLevel: 5 }],
            ],
          }
        },
    }),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
        // Como en unix usan / en windows \ la REGEX es: [\\/]
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          name: 'commons',
          filename: 'assets/common.[chunkhash].js',
          reuseExistingChunk: true,
          enforce: true,
          priority: 20,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendors',
          filename: 'assets/vendor.[chunkhash].js',
          reuseExistingChunk: true,
          enforce: true,
          priority: 10,
        },
      }
    }
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].chunk.css',
    }),
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
    }),
  ]
};
