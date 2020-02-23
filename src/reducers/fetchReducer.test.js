import {
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_FAILURE,
    FETCH_IMAGES_SUCCESS,
} from '../actions/actionTypes'
import { initialState, fetchReducer } from './fetchReducer'

describe('fetchReducer', () => {
    it('should return the initial state by default', () => {
        expect(fetchReducer(initialState, {})).toEqual(initialState)
    })

    it('should handle FETCH_IMAGES_REQUEST', () => {
        const mockAction = { type: FETCH_IMAGES_REQUEST }

        expect(fetchReducer(initialState, mockAction)).toEqual({
            loading: true,
            error: '',
        })
    })

    it('should handle FETCH_IMAGES_SUCCESS', () => {
        const mockData = []
        const mockAction = { type: FETCH_IMAGES_SUCCESS, data: mockData }

        expect(fetchReducer(initialState, mockAction)).toEqual({
            loading: false,
            error: '',
        })
    })

    it('should handle FETCH_IMAGES_FAILURE', () => {
        const mockError = 'mockError'
        const mockAction = { type: FETCH_IMAGES_FAILURE, error: mockError }

        expect(fetchReducer(initialState, mockAction)).toEqual({
            loading: false,
            error: mockError,
        })
    })
})
