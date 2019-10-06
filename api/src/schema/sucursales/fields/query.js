import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import SucursalType from '../type'
import {getAll} from '../resolvers'

export const sucursales = {
  type: new GraphQLList(SucursalType),
  resolve: getAll
}