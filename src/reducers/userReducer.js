import { SIGN_IN, TOGGLE_LOGIN_FORM } from '../types'

const initialState = {
  token: '',
  loginForm: false
}

const userReducer = (state = initialState, action ) => {
  switch(action.type) {
    case SIGN_IN :
      return { ...state, token: action.token }; break
    case TOGGLE_LOGIN_FORM :
      return { ...state, loginForm: !state.loginForm }; break
    default :
      return state
  }
}

export default userReducer