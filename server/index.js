import path from 'path'
import fs from 'fs'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import React from 'react'

import App from '../src/App'
import { Provider } from 'react-redux'
import store from './serverStore'

const app = express()
app.use('/static', express.static('build'))
const PORT = process.env.PORT || 5000

app.use(handleRender)

function handleRender(req, res) {
    const reactApp = ReactDOMServer.renderToString(
        <Provider store={store}>
            <App />
        </Provider>,
    )

    const indexFilePath = path.resolve('./build/index.html')
    fs.readFile(indexFilePath, 'utf8', function(err, pageData) {
        if (err) {
            console.error('Something went wrong:', err)
            return res.status(500).send('Oops, better luck next time!')
        }
        const preloadedState = store.getState()

        return res.send(renderFullPage(pageData, reactApp, preloadedState))
    })
}
function renderFullPage(pageData, reactApp, preloadedState) {
    return pageData.replace(
        '<div id="root"></div>',
        `<div id="root">${reactApp}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/recipes/server-rendering/#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c',
          )}
        </script>`,
    )
}
app.listen(PORT, () => {
    ;`APP LISTENS ON PORT ${PORT}`
})
