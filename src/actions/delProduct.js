import { DEL_PRODUCT } from '../types'

const delProduct = id => dispatch => {
  if(localStorage.getItem('basket')) {
    let basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray = basketArray.filter(item => (item._id !== id))
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }
  
  dispatch({
    type: DEL_PRODUCT,
    id
  })
}

export default delProduct