import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import PacientesXHabitacionType from '../type'


export const pacientesxhabitaciones = {
  type: new GraphQLList(PacientesXHabitacionType),
  resolve: getAll
}