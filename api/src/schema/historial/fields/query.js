import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import HistorialType from '../type'


export const historial = {
  type: new GraphQLList(HistorialType),
  resolve: getAll
}