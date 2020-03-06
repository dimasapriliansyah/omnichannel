import {
  LOGIN_FAIL,
  USER_LOGGEDIN,
  USER_LOGGEDOUT,
  LOGOUT_FAIL
} from '../actions/types';
import { produce } from 'immer';

const initialState = {
  isAuthenticated: false,
  loading: true,
  user: {},
  groupSkill: {},
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGGEDIN:
      return produce(state, draftState => {
        const { data } = payload;
        draftState.isAuthenticated = true;
        draftState.loading = false;
        draftState.user = { ...data.user };
        draftState.groupSkill = { ...data.groupSkill };
        draftState.error = null;
      });
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
      return produce(state, draftState => {
        draftState.loading = false;
        draftState.error = payload;
      });
    case USER_LOGGEDOUT:
      return produce(state, draftState => {
        draftState.isAuthenticated = false;
        draftState.loading = false;
        draftState.error = null;
      });
    default:
      return state;
  }
}
