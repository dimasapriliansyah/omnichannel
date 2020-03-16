import { SENDING_INTERACTION, SENT_SUCCESS, SENT_FAIL } from '../actions/types';
import { produce } from 'immer';

const initialState = {
  pending: [],
  delivered: [],
  failed: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SENDING_INTERACTION:
      return produce(state, draftState => {
        draftState.loading = true;
        draftState.pending.push(payload);
      });
    case SENT_SUCCESS:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = null;
      });
    case SENT_FAIL:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = payload;
      });
    default:
      return state;
  }
}
