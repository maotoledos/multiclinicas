import axios from 'axios';

import { queryBuilder } from '../../../setup/helpers';
import { routesApi } from '../../../setup/routes';

export function getEmpleados(isLoading = true) {
  return dispatch => {
      dispatch({
          type: 'GET_EMPLEADOS_REQUEST',
          isLoading
      });
      return axios.post(routesApi, queryBuilder({
          
          type: 'query',
          operation: 'users',
          fields: ['id', 'nombre', 'apellido', 'tipousuarioId{id,nombre}', 
          'sucursaleId{id,nombre}', 'fechanacimiento', 'estadocivil',
          'nacionalidad','domicilio','ocupacion','email']
      }))
      .then((response)=> {
          dispatch({
              type: 'GET_EMPLEADOS_RESPONSE',
              error: null,
              empleados: response.data.data.users
          })
      })
      .catch((error)=> {
          dispatch({
              type: 'GET_EMPLEADOS_FAILURE'
          })
      })
  }
}
