// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import SucursalType from '../sucursales/type';
import models from '../../models';


// User type
const InventarioType = new GraphQLObjectType({
  name: 'inventarios',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    cantidad: {type: GraphQLInt},
    sucursaleId: {
      type: SucursalType,
      resolve(parent, args){
        return models.Sucursales.findOne({where: {id: parent.sucursaleId}})
      }      
    },
  })
})

export default InventarioType;