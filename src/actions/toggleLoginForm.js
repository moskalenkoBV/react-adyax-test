import { TOGGLE_LOGIN_FORM } from '../types'

const toggleLoginForm = () => dispatch => {
  dispatch({
    type: TOGGLE_LOGIN_FORM
  })
}

export default toggleLoginForm