import {GraphQLObjectType} from 'graphql'

import * as  paciente from './paciente/fields/mutations';




// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...paciente

  }
})

export default mutation