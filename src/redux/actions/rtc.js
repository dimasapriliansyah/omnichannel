import {
  RTC_NEW_QUEUE,
  RTC_UPDATE_QUEUE,
  UPDATE_INTERACTION,
  RESET_CHAT_COUNT
} from './types';

export const newQueue = payload => dispatch => {
  dispatch({
    type: RTC_NEW_QUEUE,
    payload
  });
};

export const newInteraction = payload => dispatch => {
  dispatch({
    type: RTC_UPDATE_QUEUE,
    payload
  });
  dispatch({
    type: UPDATE_INTERACTION,
    payload
  });
};

export const resetChatCount = (channelId, sessionId) => ({
  type: RESET_CHAT_COUNT,
  payload: { channelId, sessionId }
});
