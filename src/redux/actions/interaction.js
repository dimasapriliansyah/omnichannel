import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL
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
      type: INTERACTION_LOADED,
      payload: { response: response.data.data, sessionId }
    });
  } catch (error) {
    console.log('error', error);
    // dispatch({ type: GET_INTERACTION_FAIL, payload: error.response.data });
  }
};
