import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL,
  RESET_CHAT_COUNT,
  TAB_SET_SESSIONID_AND_PROFILE
} from './types';

import axios from 'axios';

export const loadInteraction = (
  channelId,
  sessionId,
  customerId
) => async dispatch => {
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

    const bodyCustomer = { custId: customerId };
    const responseGetCustomer = await axios.post(
      '/customer/getById',
      bodyCustomer,
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

    dispatch({
      type: TAB_SET_SESSIONID_AND_PROFILE,
      payload: { sessionId, profile: responseGetCustomer.data.data }
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_INTERACTION_FAIL, payload: error.response.data });
  }
};
