const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require("webpack");
const { commonPath } = require("./common.js");

module.exports = {
    entry: [
        `${commonPath.entryApp}/index.js`,
    ],
    output: {
        clean: true
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: []
    },
    devServer: {
        port: 3000,
        hot: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
}