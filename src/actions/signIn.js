import { SIGN_IN } from '../types'

const signIn = token => dispatch => {
  localStorage.setItem('token', token)
  dispatch({
    type: SIGN_IN,
    token
  })
}

export default signIn