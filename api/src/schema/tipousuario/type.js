import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';


const TipoUsuarioType = new GraphQLObjectType({
  name: 'tipousuario',
  description: 'Doctor, enfermera...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString}   
  })
})

export default TipoUsuarioType;