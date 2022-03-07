const webpack = require("webpack");
const { commonPath } = require("./common.js");

module.exports = (opts) => {

    return {
        target: ["web"],
        entry: {
            main:`${commonPath.entryApp}/index.js`,
            vendor: ['webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false']
        },
        output: {
            filename: '[name]-[fullhash].bundle.js',
            clean: true
        },
        devtool: 'inline-source-map',
        mode: "development",
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
            new webpack.HotModuleReplacementPlugin(),
        ],
    }
}