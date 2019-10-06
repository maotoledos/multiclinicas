// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import SucursalType from '../sucursales/type';
import models from '../../models';


// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    tipo: {type: GraphQLString},
    apellido: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    first_users:{type:GraphQLBoolean},
    is_admin:{type:GraphQLBoolean},
    hire_date:{type:GraphQLString},
    sucursaleId: {
      type: SucursalType,
      resolve(parent, args){
        return models.Sucursales.findOne({where: {id: parent.sucursaleId}})
      }      
    },

    token: { type: GraphQLString}
   
  })
})

export default UserType;