import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL
} from './types';

import axios from 'axios';

export const loadInteraction = (channelId, sessionId) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: GET_INTERACTION });
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { channelId, sessionId, type: 'interaction' };

    const { interaction } = getState();

    const { interactions } = interaction;

    const interactionExists = interactions[sessionId];

    if (typeof interactionExists === 'undefined') {
      return setTimeout(async () => {
        const response = await axios.post(
          '/interaction/getInteraction',
          body,
          config
        );

        dispatch({
          type: INTERACTION_LOADED,
          payload: { response: response.data.data, sessionId }
        });
      }, 2000);
    } else {
      dispatch({
        type: INTERACTION_LOADED,
        payload: { response: interactionExists, sessionId }
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_INTERACTION_FAIL, payload: error.response.data });
  }
};
