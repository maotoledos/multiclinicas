import {GraphQLString, GraphQLInt,GraphQLBoolean,GraphQLFloat} from 'graphql'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import HabitacionType from '../type'
import {crearHabitacion, actualizarHabitacion, eliminarHabitacion} from '../resolvers'


export const crearhabitacion = {
  type: HabitacionType,
  args: {
   id: {type: GraphQLInt},   
   nombre: {type: GraphQLString},
   estado: {type: GraphQLBoolean} 
  },
  resolve: crearHabitacion
}

export const actualizarhabitacion = {
    type: HabitacionType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      },
      nombre: {
        name: 'nombre',
        type: GraphQLString
      },
      estado: {
        name: 'estado',
        type: GraphQLBoolean  
      }
    },
    resolve: actualizarHabitacion
   }
   
   export const eliminarhabitacion = {
    type: HabitacionType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      }
    },
    resolve: eliminarHabitacion
   }