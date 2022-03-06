const express = require('express');
const middleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const app = express()
var ReactDOMServer = require('react-dom/server');

const compiler = webpack(require('./webpack.config.js'));

app.use(
    middleware(compiler)
)

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
