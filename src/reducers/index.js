import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import { reducer as formReducer } from 'redux-form'
import stepsReducer from './stepsReducer'
import productsReducer from './productsReducer'
import basketReducer from './basketReducer'
import userReducer from './userReducer'
import loaderReducer from './loaderReducer'

export default combineReducers({
  i18n: i18nReducer,
  stepsReducer,
  userReducer,
  loaderReducer,
  productsReducer,
  basketReducer,
  form: formReducer
})