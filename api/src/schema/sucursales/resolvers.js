import models from '../../models';


// Get all sucursales
export async function getAll() {
  return await models.Sucursales.findAll()
}