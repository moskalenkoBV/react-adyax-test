import { CLEAR_PRODUCTS } from '../reducers/productsReducer'

const clearProducts = () => (dispatch, getState) => {
  const state = getState().productsReducer

  dispatch({
    type: CLEAR_PRODUCTS,
    state: {
      ...state,
      products: state.products.map(item => (
        { ...item, bonus: null, inBasket: false, amount: item.min }
      ))
    }
  })
}

export default clearProducts