const { merge } = require('webpack-merge');
const { constant } = require('./webpack-utils/common')
const common = require('./webpack-utils/webpack.common');

module.exports = (_, args) => {
    if(constant.WEBPACK_MODE.indexOf(args.mode) === -1) {
        throw new Error(`Mode parameter is invalid.`);
    }
    console.log(args.mode);
    const modeConfig = require(`./webpack-utils/webpack.${args.mode}`);

    return merge(common, modeConfig);
}
