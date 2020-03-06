import { RTC_NEW_QUEUE } from '../actions/types';

const initialState = {
  whatsapp: [],
  telegram: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case RTC_NEW_QUEUE:
      console.log(payload);
      return initialState;

    default:
      return initialState;
  }
}
