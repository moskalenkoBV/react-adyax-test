import { CHANGE_BONUS } from '../types'

const changeBonus = (id, bonus) => dispatch => {
  dispatch({
    type: CHANGE_BONUS,
    id,
    bonus
  })
}

export default changeBonus