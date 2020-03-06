import { RTC_NEW_QUEUE } from './types';

export const newQueue = payload => dispatch => {
  payload.messageCount = 0;
  dispatch({
    type: RTC_NEW_QUEUE,
    payload
  });
};
