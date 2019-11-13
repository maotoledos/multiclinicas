import models from '../../models';


export async function getAll() {
  return await models.Medicina.findAll()
}

export async function crearMedicina(parentValue, {
  id,
  nombre,
  marca,
  unidades
}, request) {
  return await models.Medicina.create({
   id,
   nombre,
   marca,
   unidades
  })
}

export async function actualizarMedicina(parentValue, {
  id,
  nombre,
  marca,
  unidades
}) {
  return await models.Medicina.update({
    id,
    nombre,
    marca,
    unidades
  }, {
    where: {
      id
    }
  })
}

export async function eliminarMedicina(parentValue, { id }) {
  return await models.Medicina.destroy({ where: { id } });
}