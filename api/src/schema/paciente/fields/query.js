import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import PacienteType from '../type'


export const paciente = {
  type: new GraphQLList(PacienteType),
  resolve: getAll
}