import { CLEAR_BASKET } from '../reducers/basketReducer'

const clearBasket = () => (dispatch, getState) => {
  const state = getState().basketReducer

  localStorage.removeItem('basket')
  
  dispatch({
    type: CLEAR_BASKET,
    state: {
      ...state,
      products: []
    }
  })
}

export default clearBasket