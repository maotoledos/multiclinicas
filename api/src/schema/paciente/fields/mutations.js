import {GraphQLString, GraphQLInt,GraphQLBoolean,GraphQLFloat} from 'graphql'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import PacienteType from '../type'
import {crearPaciente, actualizarPaciente, eliminarPaciente} from '../resolvers'


export const crearpaciente = {
  type: PacienteType,
  args: {
   nombre: {type: GraphQLString},
   apellido: {type: GraphQLString},
   email: {type: GraphQLString},
   fechanacimiento:{type:GraphQLString},
   estadocivil: {type: GraphQLString},
   nacionalidad: {type: GraphQLString},
   domicilio: {type: GraphQLString},
   ocupacion: {type: GraphQLString}   
  },
  resolve: crearPaciente
}


export const actualizarpaciente = {
 type: PacienteType,
 args: {
   id: {
     name: 'id',
     type: GraphQLInt
   },
   nombre: {
     name: 'nombre',
     type: GraphQLString
   },
   apellido: {
     name: 'apellido',
     type: GraphQLString
   },
   email: {
     name: 'email',
     type: GraphQLString
   },
   fechanacimiento: {
     name: 'fechanacimiento',
     type: GraphQLString
   },
   estadocivil: {
     name: 'estadocivil',
     type: GraphQLString
   },
   nacionalidad: {
     name: 'nacionalidad',
     type: GraphQLString
   },
   domicilio: {
     name: 'domicilio',
     type: GraphQLString
   },
   ocupacion: {
     name: 'ocupacion',
     type: GraphQLString
   }
 },
 resolve: actualizarPaciente
}

export const eliminarpaciente = {
 type: PacienteType,
 args: {
   id: {
     name: 'id',
     type: GraphQLInt
   }
 },
 resolve: eliminarPaciente
}