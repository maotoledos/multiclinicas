// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql'


// Sucursales type
const SucursalType = new GraphQLObjectType({
  name: 'sucursales',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString}   
  })
})

export default SucursalType;