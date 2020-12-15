import { APPS_SIDEBAR } from '../types';

const initialState = {
  showSidebar: true
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case APPS_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    default:
      return state;
  }
}
