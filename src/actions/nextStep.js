import { NEXT_STEP } from '../types'

const nextStep = () => (dispatch) => {
  dispatch({
    type: NEXT_STEP
  })
}

export default nextStep