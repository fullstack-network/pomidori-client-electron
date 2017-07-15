import { push } from 'react-router-redux';
import Storage from '../../helpers/storage';

import * as actionTypes from './ActionTypes';

function login (email, password) {
  return function(dispatch) {

    let headers = new Headers();
    headers.append("Content-type", "application/json");

    const requestObject = {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    }

    fetch('http://localhost:4040/api/auth/register', requestObject).then(res => res.json()).then((response) => {
      const { token } = response;


      const storage = new Storage();
      storage.storeToken(token);

      console.log(`token is ${token}`);

      dispatch(push('/timer'));
    });
  }
}

export {
  login,
}


