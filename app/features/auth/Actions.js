import { push } from 'react-router-redux';
import Storage from '../../helpers/storage';
import PomidoriClient from '../../api/pomidoriClient';

import * as actionTypes from './ActionTypes';

function login (email, password, loginState) {
  return function(dispatch) {

    const client = new PomidoriClient()

    client.post(`/auth/${loginState}`, { email, password }).then((response) => {
      const { token } = response;

      const storage = new Storage();
      storage.storeToken(token);

      dispatch(push('/timer'));
    });
  }
}

export {
  login,
}


