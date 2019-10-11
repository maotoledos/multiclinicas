import {GraphQLList} from 'graphql'

import TipoUsuarioType from '../type'
import {getAll} from '../resolvers'

export const tiposusuarios = {
  type: new GraphQLList(TipoUsuarioType),
  resolve: getAll
}