import axios from 'axios';
import { startLoading } from 'store/actions/appsControl';
import store from 'store';

const axiosInstance = async (method, path, request) => {
  store.dispatch(startLoading(true));

  return axios[method](path, request)
    .then(response => {
      store.dispatch(startLoading(false));
      return response;
    })
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
  return axiosInstance('patch', url, request)
}
