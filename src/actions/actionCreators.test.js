import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { loadImages } from './actionCreators'
import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from './actionTypes'
import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios')

describe('loadImages action', () => {
  it('should create FETCH_IMAGES_SUCCESS when fetching images has been done', () => {
    const store = mockStore({ images: [], fetch: { loading: false } })

    const mockData = ['1', '2', '3']

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { data: mockData } }))

    const expectedActions = [
      { type: FETCH_IMAGES_REQUEST },
      { type: FETCH_IMAGES_SUCCESS, data: mockData }
    ]

    return store.dispatch(loadImages()).then(response => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create FETCH_IMAGES_FAILURE when fetching images has failed', () => {
    const store = mockStore({ images: [], fetch: { loading: false } })

    const mockError = 'mock error message'

    axios.get.mockImplementationOnce(() => Promise.reject(mockError))

    const expectedActions = [
      { type: FETCH_IMAGES_REQUEST },
      { type: FETCH_IMAGES_FAILURE, error: mockError }
    ]

    return store.dispatch(loadImages()).then(response => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
