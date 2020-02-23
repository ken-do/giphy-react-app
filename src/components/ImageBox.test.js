import React from 'react'
import { shallow } from 'enzyme'
import ImageBox from './ImageBox'

describe('ImageBox', () => {
    let wrapper, mockProps

    beforeEach(() => {
        mockProps = {
            id: 'ZEGup5Op7AdTIfFaVO',
            url:
                'https://giphy.com/gifs/running-elizabeth-warren-ZEGup5Op7AdTIfFaVO',
            images: {
                fixed_height_downsampled: {
                    url:
                        'https://media0.giphy.com/media/ZEGup5Op7AdTIfFaVO/200_d.gif?cid=76d4db6ca8b28d96356d677251063998403aec73132ef08d&rid=200_d.gif',
                    height: 200,
                    width: 200,
                },
            },
            onClick: jest.fn(),
        }

        wrapper = shallow(<ImageBox {...mockProps} />)
    })

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined()
    })

    it('should have a class named "ImageBox" ', () => {
        expect(wrapper.find('.ImageBox').length).toEqual(1)
    })

    it('should call onClick when the box is clicked', () => {
        wrapper.find('.ImageBox').simulate('click')
        expect(mockProps.onClick).toHaveBeenCalled()
    })
})
