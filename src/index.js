import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

import './scss/app.scss'

const rootElement = document.getElementById('root')
const AppWithContext = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.hydrate(<AppWithContext />, rootElement)

if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        ReactDOM.render(
            <Provider store={store}>
                <NextApp />
            </Provider>,
            rootElement,
        )
    })
}

export default AppWithContext
