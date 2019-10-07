// App Imports
import models from '../../models';


// Get all inventarios
export async function getAll() {
  return await models.Inventario.findAll()
}

