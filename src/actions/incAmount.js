import { INC_AMOUNT } from '../types'

const incAmount = id => dispatch => {
  if(localStorage.getItem('basket')) {
    const basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray.forEach(item => {
      if(item._id === id) {
        item.amount += 1
        return
      }
    })
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }
  dispatch({
    type: INC_AMOUNT,
    id
  })
}

export default incAmount