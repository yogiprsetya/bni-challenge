import axios from 'axios';

axios.defaults.headers.common.Authorization = `Bearer 3pWE5byNyRLIgc8Mmg3NAkbyktbH5oCaEmWWgUTS`;

const axiosInstance = async (method, path, request) => {
  // store.dispatch(setLoading(true));

  return axios[method](`${global.ApiHost}${path}`, request)
    .then(response => response)
    .catch(error => error.response)
};

export const read = (url, request) => {
  return axiosInstance('get', url, request)
}

export const remove = (url, request) => {
  return axiosInstance('delete', url, request)
}

export const create = (url, request) => {
  return axiosInstance('post', url, request)
}

export const update = (url, request) => {
  return axiosInstance('put', url, request)
}
