import { FETCH_IMAGES_SUCCESS } from '../actions/actionTypes'

export const initialState = []

export const imageReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return state.slice().concat(action.data)
    default:
      return state
  }
}
