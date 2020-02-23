import React from 'react'
import { mount } from 'enzyme'

import ImagesList from './ImagesList'
import ImageBox from './ImageBox'

describe('ImagesList', () => {
    let wrapper, mockProps

    beforeEach(() => {
        mockProps = {
            loadImages: jest.fn(),
        }
        wrapper = mount(<ImagesList {...mockProps} />)
    })

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined()
    })

    it('should have a class named "ImagesList" ', () => {
        expect(wrapper.find('.ImagesList').length).toEqual(1)
    })

    it('should call loadImages after it has been mounted', () => {
        expect(mockProps.loadImages).toHaveBeenCalled()
    })

    it('should call loadImages when a user scroll down the bottom', () => {
        // override window object
        const mockDocument = {}
        window.addEventListener = jest.fn((event, cb) => {
            mockDocument[event] = cb
        })
        mockProps = {
            loadImages: jest.fn(),
            images: [],
            scrolledToBottom: () => true,
        }
        wrapper = mount(<ImagesList {...mockProps} />)

        mockDocument.scroll()
        expect(mockProps.loadImages).toHaveBeenCalledTimes(2)
    })

    it('should not render ImageBox when there are no images', () => {
        mockProps = {
            loadImages: jest.fn(),
            images: [],
        }
        wrapper = mount(<ImagesList {...mockProps} />)
        expect(wrapper.contains(<ImageBox />)).toBe(false)
    })

    it('should render ImageItems when there are images in props', () => {
        mockProps = {
            loadImages: jest.fn(),
            images: [
                {
                    id: '3423',
                    images: {
                        fixed_height_downsampled: {
                            url: 'https://giphy.com/gifs/i1hiQy3uVZ0KQ',
                        },
                    },
                },
                {
                    id: 'fasdfasd',
                    images: {
                        fixed_height_downsampled: {
                            url:
                                'https://giphy.com/gifs/netflix-tonight-chill-l0HeoQamOjr4K2fKg',
                        },
                    },
                },
            ],
        }
        wrapper = mount(<ImagesList {...mockProps} />)
        expect(wrapper.find(ImageBox).length).toEqual(2)
    })
})
