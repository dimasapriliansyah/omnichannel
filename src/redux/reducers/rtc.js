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
        draftState[payload.channelId].push(payload);
      });

    default:
      return state;
  }
}
