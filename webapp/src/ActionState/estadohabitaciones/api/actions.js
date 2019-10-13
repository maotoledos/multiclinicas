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
