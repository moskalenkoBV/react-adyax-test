import { INIT_PRODUCTS } from '../reducers/productsReducer'

const initProducts = data => (dispatch, getState) => {
  const state = getState().productsReducer
  dispatch({
    type: INIT_PRODUCTS,
    state: {
      ...state,
      products: data
    }
  })
}

export default initProducts