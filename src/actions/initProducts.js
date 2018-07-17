import { INIT_PRODUCTS } from '../types'

const initProducts = data => dispatch => {
  dispatch({
    type: INIT_PRODUCTS,
    data
  })
}

export default initProducts