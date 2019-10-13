import {GraphQLObjectType, GraphQLString, GraphQLInt,GraphQLBoolean} from 'graphql';
import {
  GraphQLDate
} from 'graphql-iso-date';
import SucursalType from '../sucursales/type';
import TipoUsuarioType from '../tipousuario/type';
import models from '../../models';


const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'empleados de clinicas',

  fields: () => ({
    id: {type: GraphQLInt},
    nombre: {type: GraphQLString},
    apellido: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString},
    first_users:{type:GraphQLBoolean},
    fechanacimiento:{type:GraphQLDate},
    estadocivil: {type: GraphQLString},
    nacionalidad: {type: GraphQLString},
    domicilio: {type: GraphQLString},
    ocupacion: {type: GraphQLString},
    sucursaleId: {
      type: SucursalType,
      resolve(parent, args){
        return models.Sucursales.findOne({where: {id: parent.sucursaleId}})
      }      
    },
    tipousuarioId: {
      type: TipoUsuarioType,
      resolve(parent, args){
        return models.TipoUsuario.findOne({where: {id: parent.tipousuarioId}})
      }      
    },
    token: { type: GraphQLString}
   
  })
})

export default UserType;