import {
  RTC_NEW_QUEUE,
  RTC_NEW_INTERACTION,
  RESET_CHAT_COUNT
} from '../actions/types';
import { produce } from 'immer';
const initialState = {
  whatsapp: [],
  telegram: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RTC_NEW_QUEUE:
      return produce(state, draftState => {
        let sessionExisted = -1;

        const { channelId, sessionId, lastChat } = payload;

        draftState[channelId].forEach((data, index) => {
          if (data.sessionId === sessionId) {
            sessionExisted = index;
          }
        });

        if (sessionExisted >= 0) {
          draftState[channelId][sessionExisted].lastChat = lastChat;
          draftState[channelId][sessionExisted].messageCount++;
        } else {
          payload.messageCount = 0;
          draftState[channelId].push(payload);
        }
      });
    case RTC_NEW_INTERACTION:
      return produce(state, draftState => {
        let sessionExisted = -1;

        const { sessionId, actionType, messageType, message } = payload;

        const channelIndex = sessionId.indexOf('-');
        const channelId = sessionId.substring(0, channelIndex);

        draftState[channelId].forEach((data, index) => {
          if (data.sessionId === sessionId) {
            sessionExisted = index;
          }
        });

        if (sessionExisted >= 0) {
          if (messageType == 'text') {
            draftState[channelId][sessionExisted].lastChat = message;
            if (actionType == 'in') {
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
