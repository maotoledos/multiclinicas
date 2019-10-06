import models from '../../models';


// Get all habitaciones
export async function getAll() {
  return await models.Habitacion.findAll()
}