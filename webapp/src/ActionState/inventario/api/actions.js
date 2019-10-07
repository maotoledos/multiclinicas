// Imports
import axios from 'axios';

import { queryBuilder } from '../../../setup/helpers';
import { routesApi } from '../../../setup/routes';

export function getInventario(isLoading = true) {
  return dispatch => {
      dispatch({
          type: 'GET_INVENTARIOS_REQUEST',
          isLoading
      });
      return axios.post(routesApi, queryBuilder({
          
          type: 'query',
          operation: 'inventarios',
          fields: ['id', 'nombre', 'sucursaleId{id, nombre}', 'cantidad' ]
      }))
      .then((response)=> {
          dispatch({
              type: 'GET_INVENTARIOS_RESPONSE',
              error: null,
              inventarios: response.data.data.inventarios
          })
      })
      .catch((error)=> {
          dispatch({
              type: 'GET_INVENTARIOS_FAILURE'
          })
      })
  }
}
