const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const webpack = require("webpack");
const { commonPath } = require("./common.js");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    target: ["web"],
    entry: {
        main:`${commonPath.entryApp}/index.js`,
        reactRefreshSetup: '@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
        // vendor: ['webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false']
    },
    output: {
        filename: '[name]-[fullhash].bundle.js',
        clean: true
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    devtool: 'inline-source-map',
    mode: "development",
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
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3000,
        compress: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new ReactRefreshWebpackPlugin({
            overlay: {
                sockPath: '/ws',
                sockProtocol: 'ws',
            }
        }),
    ],
}