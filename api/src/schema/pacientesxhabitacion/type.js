// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import HabitacionType from '../habitacion/type';
import PacienteType from '../paciente/type';
import models from '../../models';



const PacientesXHabitacionType = new GraphQLObjectType({
  name: 'PacientesXHabitacionType',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    fecha: {type: GraphQLString},
    pacienteId:{
      type: PacienteType,
      resolve(parent, args){
        return models.Paciente.findOne({where:{id:parent.pacienteId}})
      }
    },
    habitacionId:{
      type: HabitacionType,
      resolve(parent, args){
        return models.Habitacion.findOne({where:{id:parent.habitacionId}})
      }
    }   
  })
})

export default PacientesXHabitacionType;