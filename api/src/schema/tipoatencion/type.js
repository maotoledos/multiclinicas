import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';


const TipoAtencionType = new GraphQLObjectType({
  name: 'tipoatencion',
  description: 'emergencia, consulta...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString}   
  })
})

export default TipoAtencionType;