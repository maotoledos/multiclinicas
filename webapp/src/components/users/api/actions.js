// Imports
import axios from 'axios';

// App Imports
// import { routesApi } from '../../../setup/routesApi';
// import {queryBuilder} from '../../../setup/helpers';
import setAuthorizationToken from '../../../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { routesApi } from '../../../setup/routes';
import { queryBuilder } from '../../../setup/helpers';

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export function logout(){
  return dispatch=> {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
};

export function loginJWT(data){
  return dispatch => {
    return axios.post('/api/auth', data)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    })
  }
};

export function getTimeBankId(id, isLoading = true){
  return dispatch => {
    dispatch({
      type: 'BANKTIMEID_GET_REQUEST',
      isLoading
    });
    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'user',
      data: { id },
      fields: [`banktimeId{id}`]
    }))
    .then((response)=> {
      dispatch({
        type: 'BANKTIMEID_GET_RESPONSE',
        error: null,
        banktimeId: response.data.data.user
      })
    })
    .catch((error)=> {
      dispatch({
        type: 'BANKTIMEID_GET_FAILURE'
      })
    })

  }
}
