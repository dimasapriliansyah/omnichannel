import { SET_AUTOIN, SET_AUTOIN_FAIL, SET_AUTOIN_LOADING } from './types';

import axios from 'axios';

export const setAutoIn = username => async (dispatch, getState) => {
  try {
    dispatch({ type: SET_AUTOIN_LOADING });

    const { autoin } = getState();

    const paused = autoin.paused;

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { username, auxStatus: !paused };

    await axios.post('/autoin/updateAux', body, config);

    dispatch({ type: SET_AUTOIN });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: SET_AUTOIN_FAIL, payload: error.response.data });
  }
};
