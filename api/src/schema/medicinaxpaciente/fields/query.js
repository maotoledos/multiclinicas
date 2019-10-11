import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import MedicinaXPacienteType from '../type'
import {getAll} from '../resolvers'

export const medicinasxpacientes = {
  type: new GraphQLList(MedicinaXPacienteType),
  resolve: getAll
}
