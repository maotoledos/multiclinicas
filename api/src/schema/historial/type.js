// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import models from '../../models';
import UserType from '../users/type';
import PacienteType from '../paciente/type'



const HistorialType = new GraphQLObjectType({
  name: 'historial',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    examenes: {type: GraphQLString},
    diagnostico: {type: GraphQLString},
    fecha: {type: GraphQLString},
    userId:{
      type: UserType,
      resolve(parent, args){
        return models.User.findOne({where:{id:parent.userId}})
      }
    },
    pacienteId:{
      type: PacienteType,
      resolve(parent, args){
        return models.Paciente.findOne({where:{id:parent.pacienteId}})
      }
    }   
  })
})

export default HistorialType;