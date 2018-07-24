import { CLEAR_BASKET } from '../types'

const clearBasket = () => dispatch => {
  localStorage.removeItem('basket')
  dispatch({
    type: CLEAR_BASKET
  })
}

export default clearBasket