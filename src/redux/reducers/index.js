import { combineReducers } from 'redux';

import { USER_LOGGEDOUT } from '../actions/types';

import auth from './auth';
import autoin from './autoin';
import rtc from './rtc';
import interaction from './interaction';
import outgoing from './outgoing';
import cwc from './cwc';

const appReducer = combineReducers({
  auth,
  autoin,
  rtc,
  interaction,
  outgoing,
  cwc
});
const rootReducer = (state, action) => {
  if (action.type === USER_LOGGEDOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
