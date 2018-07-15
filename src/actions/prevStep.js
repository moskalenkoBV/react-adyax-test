import { PREV_STEP } from '../types'

const prevStep = () => dispatch => {
  dispatch({
    type: PREV_STEP
  })
}

export default prevStep