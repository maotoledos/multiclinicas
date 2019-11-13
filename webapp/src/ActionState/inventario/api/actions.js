// Imports
import axios from 'axios';

import { queryBuilder } from '../../../setup/helpers';
import { routesApi } from '../../../setup/routes';

export function getInventarios(isLoading = true) {
  return dispatch => {
      dispatch({
          type: 'GET_INVENTARIOS_REQUEST',
          isLoading
      });
      return axios.post(routesApi, queryBuilder({
          
          type: 'query',
          operation: 'inventarios',
          fields: ['id', 'nombre', 'sucursaleId{id, nombre}', 'cantidad','lote','medicinaId{id,nombre, marca, unidades}' ]
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

export function agregarInventario(data) {
    delete data.bloquear;
    return dispatch => {
     return axios.post(routesApi, queryBuilder({
      type: 'mutation',
      operation: 'crearinventario',
      data,
      fields: ['id']
     }))
    }
   }
   
   export function editarInventario(data) {
    delete data.bloquear;
    return dispatch => {
     return axios.post(routesApi, queryBuilder({
      type: 'mutation',
      operation: 'actualizarinventario',
      data,
      fields: ['id']
     }))
    }
   }
   
   export function eliminarInventario(id) {
    if (id){
      id = parseInt( id, 10 )
    }
    let data= {id}
    return dispatch => {
      return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'eliminarinventario', data, fields: ['id']}))
    }
   }