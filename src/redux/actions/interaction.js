import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL,
  RESET_CHAT_COUNT
} from './types';

import axios from 'axios';

export const loadInteraction = (channelId, sessionId) => async dispatch => {
  try {
    dispatch({ type: GET_INTERACTION });
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { channelId, sessionId, type: 'interaction' };
    const response = await axios.post(
      '/interaction/getInteraction',
      body,
      config
    );

    dispatch({
      type: RESET_CHAT_COUNT,
      payload: { channelId, sessionId }
    });

    dispatch({
      type: INTERACTION_LOADED,
      payload: { response: response.data.data, sessionId }
    });
  } catch (error) {
    dispatch({ type: GET_INTERACTION_FAIL, payload: error.response.data });
  }
};
