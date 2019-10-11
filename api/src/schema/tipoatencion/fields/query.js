import {GraphQLList} from 'graphql'

import TipoAtencionType from '../type'
import {getAll} from '../resolvers'

export const tiposatenciones = {
  type: new GraphQLList(TipoAtencionType),
  resolve: getAll
}