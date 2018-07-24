import { DEC_CONTACT_STEP } from '../types'

const decContactStep = () => dispatch => {
  dispatch({
    type: DEC_CONTACT_STEP
  })
}

export default decContactStep