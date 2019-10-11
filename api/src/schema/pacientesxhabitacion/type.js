import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import HabitacionType from '../habitacion/type';
import PacienteType from '../paciente/type';
import SucursalType from '../sucursales/type';
import models from '../../models';



const PacientesXHabitacionType = new GraphQLObjectType({
  name: 'PacientesXHabitacionType',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    fechaocupada: {type: GraphQLString},
    fechadesocupada: {type: GraphQLString},
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
    },
    sucursalId:{
      type: SucursalType,
      resolve(parent, args){
        return models.Sucursal.findOne({where:{id:parent.sucursalId}})
      }
    }   
  })
})

export default PacientesXHabitacionType;