import models from '../../models';


// Get all historiales
export async function getAll() {
  return await models.Historial.findAll()
}