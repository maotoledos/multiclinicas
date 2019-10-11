// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import models from '../../models';
import UserType from '../users/type';
import PacienteType from '../paciente/type'
import TipoAtencionType from '../tipoatencion/type';
import ExpedienteType from '../expediente/type';


const HistorialType = new GraphQLObjectType({
  name: 'historial',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    examenes: {type: GraphQLString},
    diagnostico: {type: GraphQLString},
    fecha: {type: GraphQLString},
    observacion: {type:GraphQLString},
    tipoatencionId: {
      type: TipoAtencionType,
      resolve(parent, args){
        return models.TipoAtencion.findOne({where: {id: parent.tipoatencionId}})
      }      
    },
    expedienteId: {
      type: ExpedienteType,
      resolve(parent, args){
        return models.Expediente.findOne({where: {id: parent.expedienteId}})
      }      
    },
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