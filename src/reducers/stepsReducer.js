import { SET_STEP, PREV_STEP, NEXT_STEP, INIT_STEPS } from '../types'

const initialState = {
  currentStep: 0,
  steps: []
}

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STEP :
      return { ...state, currentStep: action.step }; break
    case PREV_STEP :
      return { ...state, currentStep: state.currentStep - 1 }; break
    case NEXT_STEP :
      return { ...state, currentStep: state.currentStep + 1 }; break
    case INIT_STEPS :
      return { ...state, steps: action.steps }; break
    default: 
      return state
  }
}

export default stepsReducer