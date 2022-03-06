const CompressioWebpackPlugin = require('compression-webpack-plugin')
const { commonPath } = require("./common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: [`${commonPath.entryApp}/index.js`],
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              }
        ]
    },
    devtool: 'source-map',
    output: {
        filename: 'static/[name]-[fullhash].bundle.js',
        clean: true,
    },
    plugins: [
        new CompressioWebpackPlugin({
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            filename: '[path][base].gz[query]',
        }),
    ]
}