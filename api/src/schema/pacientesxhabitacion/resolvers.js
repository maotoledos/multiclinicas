import models from '../../models';


// Get all pacientes por habitaciones
export async function getAll() {
  return await models.PacientesXHabitacion.findAll()
}