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
          operation: 'pacientes',
          fields: ['id', 'nombre', 'apellido','email','fechanacimiento','estadocivil','nacionalidad','domicilio','ocupacion' ]
      }))
      .then((response)=> {
          dispatch({
              type: 'GET_PACIENTES_RESPONSE',
              error: null,
              pacientes: response.data.data.pacientes
          })
      })
      .catch((error)=> {
          dispatch({
              type: 'GET_PACIENTES_FAILURE'
          })
      })
  }
}
