import { TOGGLE_LOADER } from '../types'

const initialState = {
  loading: false
}

const loaderReducer = (state = initialState, action ) => {
  switch(action.type) {
    case TOGGLE_LOADER :
      return { ...state, loading: !state.loading }; break
    default :
      return state
  }
}

export default loaderReducer