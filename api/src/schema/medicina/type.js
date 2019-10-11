import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLFloat} from 'graphql'


const MedicinaType = new GraphQLObjectType({
  name: 'medicina',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    marca: {type: GraphQLString},
    unidades: {type: GraphQLFloat}   
  })
})

export default MedicinaType;