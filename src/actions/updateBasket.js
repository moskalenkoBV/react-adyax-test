import { UPDATE_BASKET } from '../types'

const updateBasket = data => dispatch => {
  dispatch({
    type: UPDATE_BASKET,
    data
  })
}

export default updateBasket