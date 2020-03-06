import {
  LOGIN_FAIL,
  USER_LOGGEDIN,
  USER_LOGGEDOUT,
  LOGOUT_FAIL
} from './types';

import axios from 'axios';

export const login = ({ username, password }) => async dispatch => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { username, password };
    const response = await axios.post('/auth/login', body, config);

    dispatch({ type: USER_LOGGEDIN, payload: response.data });
  } catch (error) {
    console.log('error', error);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data });
  }
};

export const logout = username => async dispatch => {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const body = { username };
    await axios.post('/auth/logout', body, config);

    dispatch({ type: USER_LOGGEDOUT });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data });
  }
};
