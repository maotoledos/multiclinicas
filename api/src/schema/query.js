// Imports
import {GraphQLObjectType} from 'graphql'

// App Imports
import * as user from './users/fields/query';
import * as sucursales from './sucursales/fields/query';
import * as paciente from './paciente/fields/query';
import * as historial from './historial/fields/query';
import * as habitaciones from './habitacion/fields/query';
import * as pacientesxhabitaciones from './pacientesxhabitacion/fields/query';
import * as inventarios from './inventario/fields/query';
import * as tipousuario from './tipousuario/fields/query';
import * as tipoatencion from './tipoatencion/fields/query';
import * as medicina from './medicina/fields/query';
import * as medicinaxpaciente from './medicinaxpaciente/fields/query';
import * as expediente from './expediente/fields/query';

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'Consultas a la base de datos de Multiclinicas',

  fields: () => ({
    ...user,
    ...sucursales,
    ...paciente,
    ...historial,
    ...habitaciones,
    ...pacientesxhabitaciones,
    ...inventarios,
    ...tipousuario,
    ...tipoatencion,
    ...medicina,
    ...medicinaxpaciente,
    ...expediente
  })
})

export default query