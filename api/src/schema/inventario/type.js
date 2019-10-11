// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import SucursalType from '../sucursales/type';
import MedicinaType from '../medicina/type';
import models from '../../models';


// User type
const InventarioType = new GraphQLObjectType({
  name: 'inventarios',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    cantidad: {type: GraphQLInt},
    lote: {type: GraphQLString},
    sucursaleId: {
      type: SucursalType,
      resolve(parent, args){
        return models.Sucursales.findOne({where: {id: parent.sucursaleId}})
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

export default InventarioType;