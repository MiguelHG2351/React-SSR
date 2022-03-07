import express from 'express';
const app = express()
import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { getManifest, renderFullPage } from './utils/react-expres'

require('dotenv').config();

app.use((req, res, next) => {
    if(!req.hashManifest) {
        req.hashManifest = getManifest()
    }
    next()
})


app.get('/testing', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', async (req, res) => {
    const App = (await import('../frontend/App')).default

    let html = renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )
    const code = renderFullPage(html, req.hashManifest)

    res.send(code)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
