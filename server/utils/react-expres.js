import path from 'path'
import fs from 'fs'
// el manifest tiene las rutas de vendors y common
export function renderFullPage(html, manifest) {
  const main = manifest ? manifest['app.js'] : ''
  const mainCss = manifest ? manifest['app.css'] : ''
  const common = manifest ? manifest['commons.js'] : ''
  const vendor = manifest ? manifest['vendors.js'] : ''

  const scripts = `
    <script src="${main}"></script>
    <script src="${common}"></script>
    <script src="${vendor}"></script>
    `

    return `
      <!doctype html>
      <html>
        <head>
          <title>Redux Universal Example</title>
          <link rel="stylesheet" type="text/css" href="${mainCss}" />
        </head>
        <body>
          <div id="root">${html}</div>
          <p>xd</p>
          ${scripts}
        </body>
      </html>
      `
}

export function getManifest() {
  try {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../public/manifest.json'))
    ) 
  } catch (err) {
    console.error('F')
  }
}