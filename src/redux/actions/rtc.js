import {
  RTC_NEW_QUEUE,
  RTC_NEW_INTERACTION,
  UPDATE_INTERACTION
} from './types';

export const newQueue = payload => dispatch => {
  dispatch({
    type: RTC_NEW_QUEUE,
    payload
  });
};

export const newInteraction = payload => dispatch => {
  dispatch({
    type: RTC_NEW_INTERACTION,
    payload
  });
  dispatch({
    type: UPDATE_INTERACTION,
    payload
  });
};
