// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql'


const HabitacionType = new GraphQLObjectType({
  name: 'Habitaciones',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    estado: {type: GraphQLBoolean}   
  })
})

export default HabitacionType;