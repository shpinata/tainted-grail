import { combineReducers } from 'redux';
import hero from './heroes';
import statuses from './statuses';
import locations from './locations';

export default combineReducers({
  hero,
  statuses,
  locations
})
