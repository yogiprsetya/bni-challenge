import { combineReducers } from 'redux';
import auth from './logginUser';

export default combineReducers({
  user: auth
});
