import { SET_STEP } from '../types'

const setStep = step => dispatch => {
  localStorage.setItem('currentStep', step)
  dispatch({
    type: SET_STEP,
    step
  })
}

export default setStep