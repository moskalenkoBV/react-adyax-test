import createReducer from '../helpers/createReducer'

export const TOGGLE_LOADER = 'TOGGLE_LOADER'

const initialState = {
  loading: false
}

const loaderReducer = createReducer({}, {
  TOGGLE_LOADER: (state, action) => ({ ...state, ...action.state })
})

export default (state = initialState, action) => (loaderReducer(state, action))