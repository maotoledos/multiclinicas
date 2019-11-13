import {GraphQLObjectType} from 'graphql'

import * as  paciente from './paciente/fields/mutations';
import * as habitacion from './habitacion/fields/mutations';
import * as medicina from './medicina/fields/mutations';


// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...paciente,
    ...habitacion,
    ...medicina
  }
})

export default mutation