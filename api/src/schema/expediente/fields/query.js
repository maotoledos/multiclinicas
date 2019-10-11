import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import ExpedienteType from '../type'


export const expedientes = {
  type: new GraphQLList(ExpedienteType),
  resolve: getAll
}