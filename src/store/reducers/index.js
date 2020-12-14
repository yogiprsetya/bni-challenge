import { combineReducers } from 'redux';
import Auth from './logginUser';
import ShipmentFilter from './ShipmentFilter';

export default combineReducers({
  user: Auth,
  shipmentFilter: ShipmentFilter
});
