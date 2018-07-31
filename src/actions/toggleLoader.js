import { TOGGLE_LOADER } from '../reducers/loaderReducer'

const toggleLoader = () => (dispatch, getState) => {
  const state = getState().loaderReducer
  dispatch({
    type: TOGGLE_LOADER,
    state: {
      ...state,
      loading: !state.loading
    }
  })
}

export default toggleLoader