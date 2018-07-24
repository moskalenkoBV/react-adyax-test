import { INC_CONTACT_STEP } from '../types'

const incContactStep = () => dispatch => {
  dispatch({
    type: INC_CONTACT_STEP
  })
}

export default incContactStep