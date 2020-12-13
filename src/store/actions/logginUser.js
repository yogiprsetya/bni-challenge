import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import { LOGGIN_USER } from '../types';

export const setCurrentUser = decoded => ({
  type: LOGGIN_USER, payload: decoded
});

export const login = userData => dispatch => {
  axios.post(`${global.ApiHost}login`, userData)
    .then(res => {
      localStorage.setItem('@shipme:token', res.data.auth.accessToken);

      setAuthToken(res.data.user.accessToken);
      dispatch(setCurrentUser(res.data.user))

      return true;
    })
    .catch(err => {
      dispatch({
        type: 'LOGGIN_FAIL',
        payload: err.response
      });
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('@shipme:token');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
