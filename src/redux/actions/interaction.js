import {
  GET_INTERACTION,
  INTERACTION_LOADED,
  GET_INTERACTION_FAIL,
  SET_DRAFT_TEXT_INTERACTION,
  RTC_UPDATE_DRAFT_QUEUE
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
      // const response = await axios.post(
      //   '/interaction/getInteraction',
      //   body,
      //   config
      // );

      // dispatch({
      //   type: INTERACTION_LOADED,
      //   payload: { response: response.data.data, sessionId }
      // });
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

export const setDraftMessageText = (sessionId, message) => ({
  type: SET_DRAFT_TEXT_INTERACTION,
  payload: { sessionId, message }
});

export const updateRTCDraftMessage = (sessionId, actionType, messageType) => (
  dispatch,
  getState
) => {
  const { interaction } = getState();

  if (typeof interaction.drafts[sessionId] !== 'undefined') {
    let message = interaction.drafts[sessionId];
    dispatch({
      type: RTC_UPDATE_DRAFT_QUEUE,
      payload: { sessionId, message, isDraft: true }
    });
  }
};
