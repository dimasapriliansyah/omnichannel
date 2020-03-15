import {
  RTC_NEW_QUEUE,
  RTC_UPDATE_QUEUE,
  RESET_CHAT_COUNT
} from '../actions/types';
import { produce } from 'immer';

import getChannelBySessionId from '../../utils/getChannelBySessionId';

const initialState = {
  whatsapp: [],
  telegram: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RTC_NEW_QUEUE:
      return produce(state, draftState => {
        const { channelId } = payload;

        payload.messageCount = 0;
        draftState[channelId].push(payload);
      });
    case RTC_UPDATE_QUEUE:
      return produce(state, draftState => {
        let sessionExisted = -1;

        const { sessionId, actionType, messageType, message } = payload;

        const channelId = getChannelBySessionId(sessionId);

        draftState[channelId].forEach((data, index) => {
          if (data.sessionId === sessionId) {
            sessionExisted = index;
          }
        });

        if (sessionExisted >= 0) {
          if (messageType === 'text') {
            draftState[channelId][sessionExisted].lastChat = message;
            if (actionType === 'in') {
              draftState[channelId][sessionExisted].messageCount++;
            }
          }
        }
      });
    case RESET_CHAT_COUNT:
      return produce(state, draftState => {
        let sessionExisted = -1;
        const { sessionId, channelId } = payload;

        draftState[channelId].forEach((data, index) => {
          if (data.sessionId === sessionId) {
            sessionExisted = index;
          }
        });
        if (sessionExisted >= 0) {
          draftState[channelId][sessionExisted].messageCount = 0;
        }
      });
    default:
      return state;
  }
}
