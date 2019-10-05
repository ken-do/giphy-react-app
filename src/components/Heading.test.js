import React from 'react'
import { shallow } from 'enzyme'
import Heading from './Heading'

describe('Heading', () => {
  let wrapper
  const title = 'abc'

  beforeEach(() => {
    wrapper = shallow(
      <Heading title={title} />
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should show the input title', () => {
    expect(wrapper.text()).toEqual(title)
  })

  it('should have a class named "Heading" ', () => {
    expect(wrapper.find('.Heading').length).toEqual(1)
  })
})
