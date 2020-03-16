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
    // dispatch({
    //   type: SENDING_INTERACTION,
    //   payload: { sessionId, from, fromName, username, message, convId }
    // });

    // const config = {
    //   headers: { 'Content-Type': 'application/json' }
    // };

    // const body = { sessionId, from, fromName, username, message, convId };

    // await axios.post('/outgoing/whatsapp', body, config);

    // dispatch({ type: SENT_SUCCESS });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: SENT_FAIL, payload: error.response.data });
  }
};
