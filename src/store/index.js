import { createStore, combineReducers } from 'redux'
import { test } from './reducer.js'

const reducer = combineReducers({
  test
})

export const store = createStore(reducer)