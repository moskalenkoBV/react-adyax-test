import { SET_USER_DATA } from '../types'

const setUserData = data => dispatch => {
  dispatch({ 
    type: SET_USER_DATA,
    data
  })
}

export default setUserData