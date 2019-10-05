import { combineReducers } from 'redux'
import { imageReducer } from './imageReducer'
import { fetchReducer } from './fetchReducer'

export default combineReducers({
  images: imageReducer,
  fetch: fetchReducer
})
