import { SET_STEP } from '../types'

const setStep = (step) => dispatch => {
  dispatch({
    type: SET_STEP,
    step
  })
}

export default setStep