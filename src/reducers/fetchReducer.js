import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from '../actions/actionTypes'

export const initialState = {
  loading: false,
  error: ''
}

export const fetchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST:
      return Object.assign({}, state, { loading: true })
    case FETCH_IMAGES_SUCCESS:
      return Object.assign({}, state, { loading: false, error: '' })
    case FETCH_IMAGES_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.error })
    default:
      return state
  }
}
