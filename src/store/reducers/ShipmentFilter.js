import { SHIP_FILTER_PAGE, SHIP_FILTER_STATUS, SHIP_FILTER_NO } from '../types';

const initialState = {
  byPage: 1,
  byStatus: '',
  byBooking: ''
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case SHIP_FILTER_PAGE:
      return {
        ...state,
        byPage: action.payload,
      };
    case SHIP_FILTER_STATUS:
      return {
        ...state,
        byStatus: action.payload,
      };
    case SHIP_FILTER_NO:
      return {
        ...state,
        byBooking: action.payload,
      };
    default:
      return state;
  }
}
