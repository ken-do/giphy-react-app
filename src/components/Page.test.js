import React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'

describe('Page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <Page render={jest.fn()} />
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })
})
