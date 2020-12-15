import { APPS_SIDEBAR, APPS_LOADING, APPS_MODAL_STATUS } from '../types';

const initialState = {
  showSidebar: true,
  startLoading: false,
  showUpdateStatus: false
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
    case APPS_MODAL_STATUS:
      return {
        ...state,
        showModalStatus: action.payload,
      };
    default:
      return state;
  }
}
