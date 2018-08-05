import { ADD_PRODUCT } from '../reducers/basketReducer'

const addProduct = data => (dispatch, getState) => {
  const state = getState().basketReducer
  const basketArray = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
  basketArray.push(data)
  localStorage.setItem('basket', JSON.stringify(basketArray))
  
  dispatch({
    type: ADD_PRODUCT,
    state: {
      ...state,
      products: [...state.products, data]
    }
  })
}

export default addProduct