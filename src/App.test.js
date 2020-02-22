import React from 'react'
import { mount } from 'enzyme'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './App'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('App', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = mockStore({
      images: [],
      fetch: { loading: false }
    })
    wrapper = mount(
      <Provider store={store}>
        <App {...store.getState()} />
      </Provider>
    )
  })

  it('should render the whole application without crashing', () => {
    expect(wrapper).toBeDefined()
  })
})
