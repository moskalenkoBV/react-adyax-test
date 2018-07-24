import { UPDATE_PRODUCTS } from '../types'

const updateProducts = basket => dispatch => {
  dispatch({
    type: UPDATE_PRODUCTS,
    basket
  })
}

export default updateProducts