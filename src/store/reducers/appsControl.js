import { APPS_SIDEBAR, APPS_LOADING } from '../types';

const initialState = {
  showSidebar: true,
  startLoading: false
};

export default function index(state = initialState, action = null) {
  switch (action.type) {
    case APPS_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case APPS_LOADING:
      return {
        ...state,
        startLoading: action.payload,
      };
    default:
      return state;
  }
}
