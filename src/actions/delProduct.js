import { DEL_PRODUCT } from '../reducers/basketReducer'

const delProduct = id => (dispatch, getState) => {
  const state = getState().basketReducer
  
  if(localStorage.getItem('basket')) {
    let basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray = basketArray.filter(item => (item._id !== id))
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }
  
  dispatch({
    type: DEL_PRODUCT,
    state: {
      ...state,
      products: state.products.filter(item => item._id !== id)
    }
  })
}

export default delProduct