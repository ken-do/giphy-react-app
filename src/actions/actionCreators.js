import { FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from './actionTypes'
import axios from 'axios'
import * as endpoints from '../constants/endpoints'

export const loadImages = () => {
  return (dispatch, getState) => {
    if (!getState().fetch.loading) {
      dispatch(fetchImagesRequets())

      let url = endpoints.GIPHY_TRENDING_IMAGES + `?api_key=${process.env.GIPHY_API_KEY}&limit=20`

      if (getState().images && getState().images.length) {
        url += '&offset=' + getState().images.length
      }

      return axios.get(url)
        .then(response => {
          dispatch(fetchImagesSuccess(response.data.data))
        })
        .catch(error => {
          dispatch(fetchImagesFailure(error))
        })
    }
  }
}

const fetchImagesRequets = () => {
  return {
    type: FETCH_IMAGES_REQUEST
  }
}

const fetchImagesSuccess = (data) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    data
  }
}

const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    error
  }
}
