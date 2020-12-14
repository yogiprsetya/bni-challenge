import { CREATE_SHIPMENTDATA } from '../types';

export const createShipment = payload => ({
  type: CREATE_SHIPMENTDATA,
  payload
});
