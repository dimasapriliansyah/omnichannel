import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL
} from '../actions/types';
import { produce } from 'immer';

const initialState = {
  loading: false,
  data: [],
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
        draftState.data = payload.response;
        draftState.loading = false;
      });
    default:
      return state;
  }
}
