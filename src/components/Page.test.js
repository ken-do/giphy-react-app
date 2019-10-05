import React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'
import ImagesList from './HOC/ImagesListContainer'
import Heading from './Heading'

describe('Page', () => {
  let wrapper, mockProps

  beforeEach(() => {
    const title = ''
    wrapper = shallow(
      <Page render={jest.fn()} />
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })
})
