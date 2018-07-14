import { SET_STEP, PREV_STEP, NEXT_STEP, INIT_STEPS } from '../types'

const initialState = {
  currentStep: 0,
  steps: {
    '0': 'Product list',
    '1': 'Contact details',
    '2': 'Confirmation'
  }
}

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_STEP :
      return { ...state, currentStep: action.step }
    case PREV_STEP :
      return { ...state, currentStep: state.currentStep - 1 }
    case NEXT_STEP :
      return { ...state, currentStep: state.currentStep + 1 }
    case INIT_STEPS :
      return { ...state, steps: action.steps }
    default: 
      return state
  }
}

export default stepsReducer