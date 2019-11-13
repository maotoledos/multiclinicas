import {GraphQLString, GraphQLInt,GraphQLBoolean,GraphQLFloat} from 'graphql'
import {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime
} from 'graphql-iso-date';
import InventarioType from '../type'
import {crearInventario, actualizarInventario, eliminarInventario} from '../resolvers'


export const crearinventario = {
  type: InventarioType,
  args: {
   nombre: {type: GraphQLString},
   cantidad: {type: GraphQLInt},
   lote: {type: GraphQLInt},
   sucursaleId:{type:GraphQLInt},
   medicinaId: {type: GraphQLInt}, 
  },
  resolve: crearInventario
}


export const actualizarinventario = {
 type: InventarioType,
 args: {
   id: {
     name: 'id',
     type: GraphQLInt
   },
   nombre: {
     name: 'nombre',
     type: GraphQLString
   },
   cantidad: {
     name: 'cantidad',
     type: GraphQLInt
   },
   lote: {
     name: 'lote',
     type: GraphQLInt
   },
   sucursaleId: {
     name: 'sucursaleId',
     type: GraphQLInt
   },
   medicinaId: {
     name: ' medicinaId',
     type: GraphQLInt
   },
 },
 resolve: actualizarInventario
}

export const eliminarinventario = {
 type: InventarioType,
 args: {
   id: {
     name: 'id',
     type: GraphQLInt
   }
 },
 resolve: eliminarInventario
}