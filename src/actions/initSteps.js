import { INIT_STEPS } from '../types'

const initSteps = (steps) => dispatch => {
  dispatch({
    type: INIT_STEPS,
    steps
  })
}

export default initSteps