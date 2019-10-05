import React from 'react'
import { shallow } from 'enzyme'
import ImageFullScreen from './ImageFullScreen'

describe('ImageFullScreen', () => {
  let wrapper

  const mockProps = {
    id: 'ZEGup5Op7AdTIfFaVO',
    url: 'https://giphy.com/gifs/running-elizabeth-warren-ZEGup5Op7AdTIfFaVO',
    images: {
      downsized: {
        url: 'https://media0.giphy.com/media/ZEGup5Op7AdTIfFaVO/200_d.gif?cid=76d4db6ca8b28d96356d677251063998403aec73132ef08d&rid=200_d.gif',
        height: 200,
        width: 200
      }
    },
    onClick: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(
      <ImageFullScreen {...mockProps} />
    )
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  })

  it('should have a class named "ImageFullScreen" ', () => {
    expect(wrapper.find('.ImageFullScreen').length).toEqual(1)
  })

  it('should have a close button ', () => {
    expect(wrapper.find('.close-btn').length).toEqual(1)
  })

  it('should call onClick when the close button is clicked', () => {
    wrapper.find('.close-btn').simulate('click')
    expect(mockProps.onClick).toHaveBeenCalled()
  })
})
