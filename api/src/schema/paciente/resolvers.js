import models from '../../models';

export async function getAll() {
  return await models.Paciente.findAll()
}


export async function crearPaciente(parentValue, {
  nombre,
  apellido,
  email,
  fechanacimiento,
  estadocivil,
  nacionalidad,
  domicilio,
  ocupacion
}, request) {
  return await models.Paciente.create({
    nombre,
    apellido,
    email,
    fechanacimiento,
    estadocivil,
    nacionalidad,
    domicilio,
    ocupacion
  })
}

export async function actualizarPaciente(parentValue, {
  id,
  nombre,
  apellido,
  email,
  fechanacimiento,
  estadocivil,
  nacionalidad,
  domicilio,
  ocupacion
}) {
  return await models.Paciente.update({
    nombre,
    apellido,
    email,
    fechanacimiento,
    estadocivil,
    nacionalidad,
    domicilio,
    ocupacion
  }, {
    where: {
      id
    }
  })
}

export async function eliminarPaciente(parentValue, { id }) {
  return await models.Paciente.destroy({ where: { id } });
}