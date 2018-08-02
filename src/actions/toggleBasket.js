import { TOGGLE_BASKET } from '../types'

const toggleBasket = () => dispatch => {
  dispatch({
    type: TOGGLE_BASKET
  })
}

export default toggleBasket