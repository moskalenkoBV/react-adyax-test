import { DEC_AMOUNT } from '../types'

const decAmount = id => dispatch => {
  dispatch({
    type: DEC_AMOUNT,
    id
  })
}

export default decAmount