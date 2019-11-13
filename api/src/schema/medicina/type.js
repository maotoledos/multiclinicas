import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLFloat} from 'graphql'


const MedicinaType = new GraphQLObjectType({
  name: 'Medicinas',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    marca: {type: GraphQLString},
    unidades: {type: GraphQLInt}   
  })
})

export default MedicinaType;