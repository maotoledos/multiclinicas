// Imports
import axios from 'axios';

import {
 queryBuilder
} from '../../../setup/helpers';
import {
 routesApi
} from '../../../setup/routes';

export function getHistorialPaciente(isLoading = true) {
 return dispatch => {
  dispatch({
   type: 'GET_HISTORIAL_REQUEST',
   isLoading
  });
  return axios.post(routesApi, queryBuilder({

    type: 'query',
    operation: 'historial',
    fields: [
     'id',
     'nombre',
     'examenes',
     'diagnostico',
     'fecha',
     'observacion',
     'tipoatencionId{id,nombre}',
     'expedienteId{id, descripcion}',
     'userId{id, nombre, apellido, tipousuarioId{id,nombre}}',
     'pacienteId{id, nombre, apellido}'
    ]
   }))
   .then((response) => {
    dispatch({
     type: 'GET_HISTORIAL_RESPONSE',
     error: null,
     historial: response.data.data.historial
    })
   })
   .catch((error) => {
    dispatch({
     type: 'GET_HISTORIAL_FAILURE'
    })
   })
 }
}