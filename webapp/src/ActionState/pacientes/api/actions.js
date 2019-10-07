// Imports
import axios from 'axios';

import { queryBuilder } from '../../../setup/helpers';
import { routesApi } from '../../../setup/routes';

export function getPacientes(isLoading = true) {
  return dispatch => {
      dispatch({
          type: 'GET_PACIENTES_REQUEST',
          isLoading
      });
      return axios.post(routesApi, queryBuilder({
          
          type: 'query',
          operation: 'paciente',
          fields: ['id', 'nombre' ]
      }))
      .then((response)=> {
          dispatch({
              type: 'GET_PACIENTES_RESPONSE',
              error: null,
              paciente: response.data.data.paciente
          })
      })
      .catch((error)=> {
          dispatch({
              type: 'GET_PACIENTES_FAILURE'
          })
      })
  }
}
