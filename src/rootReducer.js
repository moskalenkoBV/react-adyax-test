import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import stepsReducer from './reducers/stepsReducer'
import productsReducer from './reducers/productsReducer'
import basketReducer from './reducers/basketReducer'
import userReducer from './reducers/userReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  i18n: i18nReducer,
  stepsReducer,
  userReducer,
  productsReducer,
  basketReducer,
  form: formReducer
})