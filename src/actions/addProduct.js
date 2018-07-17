import { ADD_PRODUCT } from '../types'

const addProduct = data => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    data
  })
}

export default addProduct