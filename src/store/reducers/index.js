import { combineReducers } from 'redux';
import auth from './logginUser';
import shipmentFilter from './shipmentFilter';
import createShipment from './createShipment';
import appsControl from './appsControl';

export default combineReducers({
  user: auth,
  shipmentFilter,
  createShipment,
  appsControl
});
