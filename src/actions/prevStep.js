import { PREV_STEP } from '../types'

const prevStep = () => dispatch => {
  localStorage.setItem('currentStep', localStorage.getItem('currentStep') - 1)
  dispatch({
    type: PREV_STEP
  })
}

export default prevStep