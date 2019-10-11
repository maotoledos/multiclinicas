import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLFloat} from 'graphql'


const ExpedienteType = new GraphQLObjectType({
  name: 'expediente',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    descripcion: {type: GraphQLString}
  })
})

export default ExpedienteType;