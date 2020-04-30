import { createStore, combineReducers } from 'redux'
import { person } from './reducer.js'

const reducer = combineReducers({
  person
})

export const store = createStore(reducer)