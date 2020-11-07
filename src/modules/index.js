import { combineReducers } from 'redux'
import counter from './counter'
import locations from './locations'

export default combineReducers({
  counter,
  locations
})
