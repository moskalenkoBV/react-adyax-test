import { CLEAR_PRODUCTS } from '../types'

const clearProducts = () => dispatch => {
  dispatch({
    type: CLEAR_PRODUCTS
  })
}

export default clearProducts