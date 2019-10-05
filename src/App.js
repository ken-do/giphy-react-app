import React, { Component, Fragment, Suspense } from 'react'
import { hot } from 'react-hot-loader'
import Page from './components/Page'
import Heading from './components/Heading'
const ImagesList = React.lazy(() => import('./components/HOC/ImagesListContainer'));


class App extends Component {

  render() {
    return (
      <div className='App'>
        <Page render={(title) => (
          <Fragment>
              <Heading title={title} />
              <Suspense fallback={<div></div>}>
                <ImagesList />
              </Suspense>
          </Fragment>
        )} />
      </div>
    )
  }
}

export default hot(module)(App)
