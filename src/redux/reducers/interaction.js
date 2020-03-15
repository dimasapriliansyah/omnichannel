import {
  GET_INTERACTION,
  GET_INTERACTION_FAIL,
  INTERACTION_LOADED
} from '../actions/types';
import { produce } from 'immer';

const initialState = {
  loading: false,
  messages: [],
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INTERACTION:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case GET_INTERACTION_FAIL:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = payload;
      });
    case INTERACTION_LOADED:
      return produce(state, draftState => {
        draftState.messages = payload.response;
        draftState.loading = false;
      });
    default:
      return state;
  }
}
