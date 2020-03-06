import {
  SET_AUTOIN,
  SET_AUTOIN_FAIL,
  SET_AUTOIN_LOADING
} from '../actions/types';
import { produce } from 'immer';

const initialState = {
  loading: false,
  played: false,
  paused: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTOIN_LOADING:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case SET_AUTOIN:
      return produce(state, draftState => {
        const { played, paused } = draftState;
        draftState.played = !played;
        draftState.paused = !paused;
        draftState.loading = false;
      });
    case SET_AUTOIN_FAIL:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = payload;
        draftState.loading = false;
      });
    default:
      return state;
  }
}
