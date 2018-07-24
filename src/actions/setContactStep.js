import { SET_CONTACT_STEP } from '../types'

const setContactStep = step => dispatch => {
  dispatch({
    type: SET_CONTACT_STEP,
    step
  })
}

export default setContactStep