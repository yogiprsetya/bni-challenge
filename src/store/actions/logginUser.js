import { LOGGIN_USER } from "../types";

export const userInfo = progress => ({
  type: LOGGIN_USER,
  payload: progress
});

export const setUserInfo = res => dispatch => {
  try {
    dispatch(userInfo(res));
  } catch (error) {
    dispatch({
      type: 'LOGGIN_FAIL',
      payload: error
    });
  }
};
