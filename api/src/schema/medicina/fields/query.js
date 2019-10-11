import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import MedicinaType from '../type'


export const medicinas = {
  type: new GraphQLList(MedicinaType),
  resolve: getAll
}