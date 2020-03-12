import {
  TAB_SET_SESSIONID_AND_PROFILE,
  TAB_GET_PROFILE,
  TAB_SET_CURRENT_TAB,
  TAB_SET_PROFILE_TAB,
  TAB_SET_CWC_TAB,
  TAB_RESET_CWC_TAB
} from '../actions/types';

import { produce } from 'immer';

const initialState = {
  tab: [
    // {
    //   sessionId: '',
    //   currentTab: '',
    //   profile: {},
    //   profileTab: {},
    //   cwcTab: {}
    // }
  ],
  loading: true,
  currentSessionId: ''
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TAB_SET_SESSIONID_AND_PROFILE:
      return produce(state, draftState => {
        let tabExisted = -1;

        const { sessionId, profile } = payload;

        draftState.tab.forEach((data, index) => {
          if (data.sessionId === sessionId) {
            tabExisted = index;
          }
        });

        if (tabExisted < 0) {
          draftState.tab.push({
            sessionId,
            profile,
            currentTab: 'profile',
            profileTab: {
              type: 'view',
              id: profile.id,
              name: profile.name || '',
              gender: profile.gender || '',
              address: profile.address || '',
              city: profile.city || '',
              company: profile.company || '',
              priority: profile.priority,
              updater: profile.updaterUsername || 'system'
            },
            cwcTab: {}
          });
        }
        draftState.loading = false;
        draftState.currentSessionId = sessionId;
      });
    case TAB_SET_PROFILE_TAB:
      return produce(state, draftState => {
        let tabExisted = -1;

        const { sessionId, data } = payload;
        const { value, formName } = data;

        draftState.tab.forEach((data, index) => {
          if (data.sessionId === sessionId) {
            tabExisted = index;
          }
        });

        if (tabExisted >= 0) {
          draftState.tab[tabExisted].profileTab[formName] = value;
          draftState.tab[tabExisted].profileTab.type = 'edit';
        }
      });
    case TAB_SET_CURRENT_TAB:
      return produce(state, draftState => {
        let tabExisted = -1;

        const { sessionId, activeTab } = payload;

        draftState.tab.forEach((data, index) => {
          if (data.sessionId === sessionId) {
            tabExisted = index;
          }
        });

        if (tabExisted >= 0) {
          draftState.tab[tabExisted].currentTab = activeTab;
        }
      });
    default:
      return state;
  }
}
