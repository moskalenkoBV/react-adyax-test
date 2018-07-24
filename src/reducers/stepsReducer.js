import { SET_STEP, PREV_STEP, NEXT_STEP, INIT_STEPS, SET_CONTACT_STEP, INC_CONTACT_STEP, DEC_CONTACT_STEP } from '../types'

const initialState = {
  currentStep: 0,
  steps: [],
  contactCurrentStep: 0
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
    case SET_CONTACT_STEP :
      return { ...state, contactCurrentStep: action.step }; break
    case INC_CONTACT_STEP :
      return { ...state, contactCurrentStep: state.contactCurrentStep + 1 }; break
    case DEC_CONTACT_STEP :
      return { ...state, contactCurrentStep: state.contactCurrentStep - 1 }; break
    default: 
      return state
  }
}

export default stepsReducer