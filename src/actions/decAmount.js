import { DEC_AMOUNT } from '../types'

const decAmount = id => dispatch => {
  if(localStorage.getItem('basket')) {
    const basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray.forEach(item => {
      if(item._id === id) {
        item.amount -= 1
        return
      }
    })
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }
  dispatch({
    type: DEC_AMOUNT,
    id
  })
}

export default decAmount