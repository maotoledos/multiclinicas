import models from '../../models';


// Get all habitaciones
export async function getAll() {
  return await models.Habitacion.findAll()
}

export async function crearHabitacion(parentValue, {
  id,
  nombre,
  estado
}, request) {
  return await models.Habitacion.create({
   id,
   nombre,
   estado
  })
}

export async function actualizarHabitacion(parentValue, {
  id,
  nombre,
  estado
}) {
  return await models.Habitacion.update({
    id,
    nombre,
    estado
  }, {
    where: {
      id
    }
  })
}

export async function eliminarHabitacion(parentValue, { id }) {
  return await models.Habitacion.destroy({ where: { id } });
}