import { ADD_PRODUCT } from '../types'

const addProduct = data => dispatch => {
  const basketArray = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
  basketArray.push(data)
  localStorage.setItem('basket', JSON.stringify(basketArray))
  
  dispatch({
    type: ADD_PRODUCT,
    data
  })
}

export default addProduct