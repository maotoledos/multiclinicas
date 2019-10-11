import Sequelize from 'sequelize'

import databaseConnection from '../setup/databaseConnection'


const models = {
  User  : databaseConnection.import('./usersData/user'),
  Sucursales: databaseConnection.import('./sucursal/sucursal'),
  Paciente: databaseConnection.import('./paciente/paciente'),
  Historial: databaseConnection.import('./historial/historial'),
  Inventario: databaseConnection.import('./inventario/inventario'),
  Habitacion: databaseConnection.import('./habitacion/habitacion'),
  PacientesXHabitacion: databaseConnection.import('./pacientesxhabitacion/pacientesxhabitacion'),
  TipoUsuario: databaseConnection.import('./tipousuario/tipousuario'),
  TipoAtencion: databaseConnection.import('./tipoatencion/tipoatencion'),
  Medicina: databaseConnection.import('./medicina/medicina'),
  MedicinaXPaciente: databaseConnection.import('./medicinaxpaciente/medicinaxpaciente'),
  Expediente: databaseConnection.import('./expediente/expediente')
}

//object.keys fk pk
Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models)
  }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models
