// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import {
  GraphQLDate
} from 'graphql-iso-date';


const PacienteType = new GraphQLObjectType({
  name: 'pacientes',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    apellido: {type: GraphQLString},
    email: {type: GraphQLString},
    fechanacimiento:{type:GraphQLDate},
    estadocivil: {type: GraphQLString},
    nacionalidad: {type: GraphQLString},
    domicilio: {type: GraphQLString},
    ocupacion: {type: GraphQLString}   
  })
})

export default PacienteType;