import React from 'react'
import { shallow } from 'enzyme'
import Spinner from './Spinner'

describe('Spinner', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Spinner />)
    })

    it('should render without crashing', () => {
        expect(wrapper).toBeDefined()
    })

    it('should have a class named "Spinner" ', () => {
        expect(wrapper.find('.Spinner').length).toEqual(1)
    })
})
