import React from 'react'
import { shallow } from 'enzyme'
import withImage from './withImage'

describe('withImage', () => {
  const MockComponent = (props) => {
    return (
      <div />
    )
  }
  const mockProps = {
    id: 'ZEGup5Op7AdTIfFaVO',
    url: 'https://giphy.com/gifs/running-elizabeth-warren-ZEGup5Op7AdTIfFaVO',
    images: {
      downsized: {
        url: 'https://media0.giphy.com/media/ZEGup5Op7AdTIfFaVO/200_d.gif?cid=76d4db6ca8b28d96356d677251063998403aec73132ef08d&rid=200_d.gif',
        height: 200,
        width: 200
      }
    }
  }

  const onClick = jest.fn()

  it('should return a component', () => {
    const EnhancedComponent = withImage(MockComponent, mockProps, onClick)
    const wrapper = shallow(<EnhancedComponent />)
    expect(wrapper).toBeDefined()
  })
})
