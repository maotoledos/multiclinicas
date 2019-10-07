// Imports
import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

// App Imports
import InventarioType from '../type'
import {getAll} from '../resolvers'

// Inventario All
export const inventarios = {
  type: new GraphQLList(InventarioType),
  resolve: getAll
}


