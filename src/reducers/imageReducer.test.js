import { FETCH_IMAGES_SUCCESS } from '../actions/actionTypes'
import { initialState, imageReducer } from './imageReducer'

describe('imageReducer', () => {
  it('should return the initial state by default', () => {
    expect(imageReducer(initialState, {})).toEqual(initialState)
  })

  it('should handle FETCH_IMAGES_SUCCESS', () => {
    const mockData = [1, 2, 3]
    const mockAction = {
      type: FETCH_IMAGES_SUCCESS,
      data: mockData
    }
    expect(imageReducer(initialState, mockAction)).toEqual(mockData)
  })
})
