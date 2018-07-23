import { CHANGE_BONUS } from '../types'

const changeBonus = (id, bonus) => dispatch => {
  if(localStorage.getItem('basket')) {
    const basketArray = JSON.parse(localStorage.getItem('basket'))
    basketArray.forEach(item => {
      if(item._id === id) {
        item.bonus = bonus
        return
      }
    })
    localStorage.setItem('basket', JSON.stringify(basketArray))
  }
  dispatch({
    type: CHANGE_BONUS,
    id,
    bonus
  })
}

export default changeBonus