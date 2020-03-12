import {
  // TAB_SET_SESSIONID,
  TAB_SET_CURRENT_TAB,
  TAB_SET_PROFILE_TAB,
  TAB_SET_CWC_TAB,
  TAB_RESET_CWC_TAB
} from '../actions/types';

// export const setSessionId = sessionId => ({
//   type: TAB_SET_SESSIONID,
//   payload: sessionId
// });

export const tabSetProfile = (sessionId, data) => ({
  type: TAB_SET_PROFILE_TAB,
  payload: {
    sessionId,
    data
  }
});

export const tabSetCurrentTab = (sessionId, activeTab) => ({
  type: TAB_SET_CURRENT_TAB,
  payload: {
    sessionId,
    activeTab
  }
});
