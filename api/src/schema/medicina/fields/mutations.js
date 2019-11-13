import {GraphQLString, GraphQLInt,GraphQLBoolean,GraphQLFloat} from 'graphql'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import MedicinaType from '../type'
import {crearMedicina, actualizarMedicina, eliminarMedicina} from '../resolvers'


export const crearmedicina = {
  type: MedicinaType,
  args: {
   id: {type: GraphQLInt},   
   nombre: {type: GraphQLString},
   marca: {type: GraphQLString},
   unidades: {type: GraphQLInt}
  },
  resolve: crearMedicina
}

export const actualizarmedicina = {
    type: MedicinaType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      },
      nombre: {
        name: 'nombre',
        type: GraphQLString
      },
      marca: {
        name: 'marca',
        type: GraphQLString  
      },
      unidades: {
        name: 'unidades',
        type: GraphQLInt 
      }
    },
    resolve: actualizarMedicina
   }
   
   export const eliminarmedicina = {
    type: MedicinaType,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt
      }
    },
    resolve: eliminarMedicina
   }