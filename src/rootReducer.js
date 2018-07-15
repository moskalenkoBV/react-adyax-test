import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import stepsReducer from './reducers/stepsReducer'
import productsReducer from './reducers/productsReducer'
import basketReducer from './reducers/basketReducer'

export default combineReducers({
  i18n: i18nReducer,
  stepsReducer,
  productsReducer,
  basketReducer
})