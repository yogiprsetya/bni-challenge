// export const userInfo = progress => ({
//   type: LOGGIN_USER,
//   payload: progress
// });

// export const setUserInfo = res => dispatch => {
//   try {
//     dispatch(userInfo(res));
//   } catch (error) {
//     dispatch({
//       type: 'LOGGIN_FAIL',
//       payload: error
//     });
//   }
// };

import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import { LOGGIN_USER } from '../types';

export const setCurrentUser = decoded => ({
  type: LOGGIN_USER, payload: decoded
});

export const login = userData => dispatch => {
  axios.post(`${global.ApiHost}login`, userData)
    .then(res => {
      // const { token } = res.data;
      localStorage.setItem('@shipme:token', res.data.auth.accessToken);

      setAuthToken(res.data.user.accessToken);
      dispatch(setCurrentUser(res.data.user))
// console.log(res.data.auth.accessToken)
      // return true;
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
