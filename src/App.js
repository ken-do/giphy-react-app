import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Page from './components/Page'
import Heading from './components/Heading'
import ImagesList from './components/HOC/ImagesListContainer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Page
                    render={title => (
                        <>
                            <Heading title={title} />
                            <ImagesList />
                        </>
                    )}
                />
            </div>
        )
    }
}

export default hot(module)(App)
