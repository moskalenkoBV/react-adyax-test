import { TOGGLE_LOADER } from '../types'

const toggleLoader = () => dispatch => {
  dispatch({
    type: TOGGLE_LOADER
  })
}

export default toggleLoader