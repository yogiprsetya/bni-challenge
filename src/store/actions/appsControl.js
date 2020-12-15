import { APPS_SIDEBAR, APPS_LOADING } from '../types';

export const openSidebar = payload => ({
  type: APPS_SIDEBAR,
  payload
});

export const startLoading = progress => ({
  type: APPS_LOADING, payload: progress
});