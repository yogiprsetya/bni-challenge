import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.baseURL = global.ApiHost;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
