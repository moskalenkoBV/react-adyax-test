import { INC_AMOUNT } from '../types'

const incAmount = (id) => dispatch => {
  dispatch({
    type: INC_AMOUNT,
    id
  })
}

export default incAmount