import express from 'express';
const app = express()
import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import App from '../frontend/';


require('dotenv').config();
if(process.env.NODE_ENV === 'development') {

    (async () => {
        const middleware = (await import('webpack-dev-middleware')).default;
        const webpack = (await import('webpack')).default;
        const configWebpack = (await import('../webpack.config.js')).default(null, {
            mode: process.env.NODE_ENV,
        })
        const compiler = webpack(configWebpack);
        app.use(
            middleware(compiler)
        )
    })()
}

app.get('*', (req, res) => {
    let html = renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )

    res.send('<!DOCTYPE html>' + html)
})

app.get('/testing', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use('/static', express.static('dist'))

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
