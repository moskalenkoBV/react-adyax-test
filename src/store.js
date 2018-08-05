import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, multi, createLogger()))

export default store