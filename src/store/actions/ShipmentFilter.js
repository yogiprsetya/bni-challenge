import { SHIP_FILTER_PAGE, SHIP_FILTER_STATUS, SHIP_FILTER_NO } from '../types';

export const sortByPage = payload => ({
  type: SHIP_FILTER_PAGE,
  payload
});

export const sortByStatus = payload => ({
  type: SHIP_FILTER_STATUS,
  payload
});

export const sortByBooking = payload => ({
  type: SHIP_FILTER_NO,
  payload
});
