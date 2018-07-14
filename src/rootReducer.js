import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import stepsReducer from './reducers/stepsReducer'

export default combineReducers({
  i18n: i18nReducer,
  stepsReducer
})