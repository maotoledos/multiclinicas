import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLFloat} from 'graphql';
import MedicinaType from '../medicina/type';
import PacienteType from '../paciente/type';
import models from '../../models';


const MedicinaXPacienteType = new GraphQLObjectType({
  name: 'medicinaxpaciente',
  description: 'Medicina recetada a cada paciente',

  fields: () => ({
    id: {type: GraphQLInt},
    descripcion: {type: GraphQLString},
    dosis: {type: GraphQLFloat},
    pacienteId: {
      type: PacienteType,
      resolve(parent, args){
        return models.Paciente.findOne({where: {id: parent.pacienteId}})
      }    
    },
    medicinaId: {
      type: MedicinaType,
      resolve(parent, args){
        return models.Medicina.findOne({where: {id: parent.medicinaId}})
      }      
    }

  })
})

export default MedicinaXPacienteType;