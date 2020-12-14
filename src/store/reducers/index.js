import { combineReducers } from 'redux';
import Auth from './logginUser';
import ShipmentFilter from './shipmentFilter';
import CreateShipment from './createShipment';

export default combineReducers({
  user: Auth,
  shipmentFilter: ShipmentFilter,
  createShipment: CreateShipment
});
