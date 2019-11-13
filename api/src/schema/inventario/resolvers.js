// App Imports
import models from '../../models';


// Get all inventarios
export async function getAll() {
  return await models.Inventario.findAll()
}

export async function crearInventario(parentValue, {
id, 
nombre,
cantidad,
lote,
sucursaleId,
medicinaId
}, request) {
  return await models.Inventario.create({
    id, 
    nombre,
    cantidad,
    lote,
    sucursaleId,
    medicinaId
  })
}

export async function actualizarInventario(parentValue, {
  id, 
  nombre,
  cantidad,
  lote,
  sucursaleId,
  medicinaId
}) {
  return await models.Inventario.update({
    id, 
nombre,
cantidad,
lote,
sucursaleId,
medicinaId
  }, {
    where: {
      id
    }
  })
}

export async function eliminarInventario(parentValue, { id }) {
  return await models.Inventario.destroy({ where: { id } });
}
