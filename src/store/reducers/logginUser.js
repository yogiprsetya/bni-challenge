import { LOGGIN_USER } from '../types';
import isEmpty from 'is-empty';

const initialState = {
  isAuthenticated: false,
  profile: {},
};

export default function index(state = initialState, action) {
  switch (action.type) {
    case LOGGIN_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
}
