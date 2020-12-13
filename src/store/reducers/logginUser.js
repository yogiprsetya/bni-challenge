import { LOGGIN_USER } from '../types';

const initialState = {
  currentUser: {},
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case LOGGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}
