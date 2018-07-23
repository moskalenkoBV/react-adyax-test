import { NEXT_STEP } from '../types'

const nextStep = () => dispatch => {
  localStorage.getItem('currentStep') ? 
    localStorage.setItem('currentStep', localStorage.getItem('currentStep') + 1) :
      localStorage.setItem('currentStep', 1)
  
  dispatch({
    type: NEXT_STEP
  })
}

export default nextStep