import { APPS_SIDEBAR, APPS_LOADING, APPS_MODAL_STATUS } from '../types';

export const openSidebar = payload => ({
  type: APPS_SIDEBAR,
  payload
});

export const startLoading = progress => ({
  type: APPS_LOADING, payload: progress
});

export const openModalStatus = payload => ({
  type: APPS_MODAL_STATUS, payload
});
