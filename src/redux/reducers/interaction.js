import {
  GET_INTERACTION,
  GET_INTERACTION_FAIL,
  INTERACTION_LOADED,
  UPDATE_INTERACTION,
  SET_DRAFT_TEXT_INTERACTION
} from '../actions/types';
import { produce } from 'immer';

const initialState = {
  interactions: {},
  drafts: {},
  loading: false,
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
        const { response, sessionId } = payload;
        draftState.interactions[sessionId] = response;
        draftState.loading = false;
      });
    case UPDATE_INTERACTION:
      return produce(state, draftState => {
        const { sessionId } = payload;
        const interactionExists = state.interactions[sessionId];
        if (interactionExists) {
          draftState.interactions[sessionId].push(payload);
        }
      });
    case SET_DRAFT_TEXT_INTERACTION:
      return produce(state, draftState => {
        const { sessionId, message } = payload;
        draftState.drafts[sessionId] = message;
      });
    default:
      return state;
  }
}
