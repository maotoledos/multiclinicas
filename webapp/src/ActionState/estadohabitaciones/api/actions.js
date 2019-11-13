// Imports
import axios from 'axios';

import { queryBuilder } from '../../../setup/helpers';
import { routesApi } from '../../../setup/routes';

export function getPacientesXHabitaciones(isLoading = true) {
  return dispatch => {
      dispatch({
          type: 'GET_PACIENTESXHABITACION_REQUEST',
          isLoading
      });
      return axios.post(routesApi, queryBuilder({
          
          type: 'query',
          operation: 'pacientesxhabitaciones',
          fields: ['id', 'fechaocupada','fechadesocupada', 'pacienteId{id, nombre, apellido, email, fechanacimiento, estadocivil, nacionalidad, domicilio, ocupacion}', 'habitacionId{id, nombre}', 'sucursaleId{id, nombre}' ]
      }))
      .then((response)=> {
          dispatch({
              type: 'GET_PACIENTESXHABITACION_RESPONSE',
              error: null,
              pacientesxhabitaciones: response.data.data.pacientesxhabitaciones
          })
      })
      .catch((error)=> {
          dispatch({
              type: 'GET_PACIENTESXHABITACION_FAILURE'
          })
      })
  }
}
export function agregarHabitacion(data) {
    delete data.bloquear;
    return dispatch => {
     return axios.post(routesApi, queryBuilder({
      type: 'mutation',
      operation: 'crearhabitacion',
      data,
      fields: ['id']
     }))
    }
   }
   
   export function editarHabitacion(data) {
    delete data.bloquear;
    return dispatch => {
     return axios.post(routesApi, queryBuilder({
      type: 'mutation',
      operation: 'actualizarhabitacion',
      data,
      fields: ['id']
     }))
    }
   }
   
   export function eliminarHabitacion(id) {
    if (id){
      id = parseInt( id, 10 )
    }
    let data= {id}
    return dispatch => {
      return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'eliminarhabitacion', data, fields: ['id']}))
    }
   }