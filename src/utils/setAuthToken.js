import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.baseURL = process.env.REACT_APP_APIHOST;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
