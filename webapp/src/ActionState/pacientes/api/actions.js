// Imports
import axios from 'axios';

import {
 queryBuilder
} from '../../../setup/helpers';
import {
 routesApi
} from '../../../setup/routes';

export function getPacientes(isLoading = true) {
 return dispatch => {
  dispatch({
   type: 'GET_PACIENTES_REQUEST',
   isLoading
  });
  return axios.post(routesApi, queryBuilder({

    type: 'query',
    operation: 'pacientes',
    fields: ['id', 'nombre', 'apellido', 'email', 'fechanacimiento', 'estadocivil', 'nacionalidad', 'domicilio', 'ocupacion']
   }))
   .then((response) => {
    dispatch({
     type: 'GET_PACIENTES_RESPONSE',
     error: null,
     pacientes: response.data.data.pacientes
    })
   })
   .catch((error) => {
    dispatch({
     type: 'GET_PACIENTES_FAILURE'
    })
   })
 }
}


export function agregarPaciente(data) {
 delete data.bloquear;
 return dispatch => {
  return axios.post(routesApi, queryBuilder({
   type: 'mutation',
   operation: 'crearpaciente',
   data,
   fields: ['id']
  }))
 }
}

export function editarPaciente(data) {
 delete data.bloquear;
 return dispatch => {
  return axios.post(routesApi, queryBuilder({
   type: 'mutation',
   operation: 'actualizarpaciente',
   data,
   fields: ['id']
  }))
 }
}

export function eliminarPaciente(id) {
 if (id){
   id = parseInt( id, 10 )
 }
 let data= {id}
 return dispatch => {
   return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'eliminarpaciente', data, fields: ['id']}))
 }
}