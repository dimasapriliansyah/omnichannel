import { SENDING_INTERACTION, SENT_SUCCESS, SENT_FAIL } from './types';

import axios from 'axios';

export const sendOutgoing = ({
  sessionId,
  from,
  fromName,
  username,
  message,
  convId
}) => async dispatch => {
  try {
    console.log({ sessionId, from, fromName, username, message, convId });
    dispatch({
      type: SENDING_INTERACTION,
      payload: { sessionId, from, fromName, username, message, convId }
    });

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { sessionId, from, fromName, username, message, convId };

    await axios.post('/outgoing/whatsapp', body, config);

    dispatch({ type: SENT_SUCCESS });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: SENT_FAIL, payload: error.response.data });
  }
};

export const sendOutgoingMedia = ({
  sessionId,
  from,
  fromName,
  username,
  media,
  convId
}) => async dispatch => {
  try {
    // console.log({ sessionId, from, fromName, username, media, convId });
    // dispatch({
    //   type: SENDING_INTERACTION,
    //   payload: { sessionId, from, fromName, username, media, convId }
    // });

    const fd = new FormData();
    fd.append('media', media, media.name);
    fd.append('sessionId', sessionId);
    fd.append('from', from);
    fd.append('fromName', fromName);
    fd.append('username', username);
    fd.append('convId', convId);

    await axios.post('/outgoing/whatsappxx', fd);

    // dispatch({ type: SENT_SUCCESS });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: SENT_FAIL, payload: error.response.data });
  }
};
