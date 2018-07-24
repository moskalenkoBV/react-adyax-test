import { SIGN_IN, TOGGLE_LOGIN_FORM, SET_USER_DATA } from '../types'

const initialState = {
  token: '',
  loginForm: false,
  userData: {}
}

const userReducer = (state = initialState, action ) => {
  switch(action.type) {
    case SIGN_IN :
      return { ...state, token: action.token }; break
    case TOGGLE_LOGIN_FORM :
      return { ...state, loginForm: !state.loginForm }; break
    case SET_USER_DATA :
      return { ...state, userData: action.data }; break
    default :
      return state
  }
}

export default userReducer