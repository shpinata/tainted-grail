import { combineReducers } from 'redux'
import statuses from './statuses'
import locations from './locations'

export default combineReducers({
  statuses,
  locations
})
