import {GraphQLInt, GraphQLList, GraphQLString} from 'graphql'

import {getAll} from '../resolvers'
import HabitacionType from '../type'


export const habitaciones = {
  type: new GraphQLList(HabitacionType),
  resolve: getAll
}