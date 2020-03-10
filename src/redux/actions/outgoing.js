import { SENDING_INTERACTION, SENT_SUCCESS, SENT_FAIL } from './types';

import axios from 'axios';

export const sendInteraction = ({
  sessionId,
  from,
  fromName,
  username,
  message
}) => async dispatch => {
  try {
    dispatch({ type: SENDING_INTERACTION });

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { sessionId, from, fromName, username, message };

    await axios.post('/outgoing/whatsapp', body, config);

    dispatch({ type: SENT_SUCCESS });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: SENT_FAIL, payload: error.response.data });
  }
};
