import createReducer from '../helpers/createReducer'

export const TOGGLE_LOADER = 'TOGGLE_LOADER'

const initialState = {
  loading: false
}

const loaderReducer = createReducer({}, {
  TOGGLE_LOADER: (state, action) => ({ ...state, ...action.state })
})


// const loaderReducer = (state = initialState, action ) => {
//   switch(action.type) {
//     case TOGGLE_LOADER :
//       return { ...state, loading: !state.loading }; break
//     default :
//       return state
//   }
// }

export default (state = initialState, action) => (loaderReducer(state, action))