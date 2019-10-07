// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './users/fields/query'
import * as sucursales from './sucursales/fields/query'
import * as paciente from './paciente/fields/query'
import * as historial from './historial/fields/query'
import * as habitaciones from './habitacion/fields/query'
import * as pacientesxhabitaciones from './pacientesxhabitacion/fields/query'
import * as inventarios from './inventario/fields/query'


// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: () => ({
    ...user,
    ...sucursales,
    ...paciente,
    ...historial,
    ...habitaciones,
    ...pacientesxhabitaciones,
    ...inventarios
  })
})

export default query