import { RTC_NEW_QUEUE } from './types';

export const newQueue = payload => dispatch => {
  dispatch({
    type: RTC_NEW_QUEUE,
    payload
  });
};
