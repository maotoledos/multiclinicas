import models from '../../models';

export async function getAll() {
  return await models.MedicinaXPaciente.findAll()
}

