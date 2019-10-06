// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql'


const PacienteType = new GraphQLObjectType({
  name: 'pacientes',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString}   
  })
})

export default PacienteType;