import { CREATE_SHIPMENTDATA } from '../types';

const initialState = {
  dataShipment: {}
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case CREATE_SHIPMENTDATA:
      return {
        ...state,
        dataShipment: action.payload,
      };
    default:
      return state;
  }
}
