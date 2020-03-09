import { RTC_NEW_QUEUE } from '../actions/types';
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
        let sessionExisted = false;

        const { channelId, sessionId, lastChat } = payload;

        draftState[channelId].forEach((data, index) => {
          if (data.sessionId === sessionId) {
            sessionExisted = index;
          }
        });

        if (sessionExisted) {
          draftState[channelId][sessionExisted].lastChat = lastChat;
          draftState[channelId][sessionExisted].messageCount++;
        } else {
          payload.messageCount = 0;
          draftState[channelId].push(payload);
        }
      });

    default:
      return state;
  }
}
