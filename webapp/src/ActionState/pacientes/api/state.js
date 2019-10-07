const pacienteInitialState = {
  paciente: []
}

export const paciente = (state = pacienteInitialState, action) => {
  switch(action.type) {
      case 'GET_PACIENTES_REQUEST':
      return {
          ...state
      }
      case 'GET_PACIENTES_RESPONSE':
      return {
          ...state,
          paciente: action.paciente
      }
      case 'GET_PACIENTES_FAILURE':
      return {
          ...state,
          error: action.error
      }
      default:
          return state
  }
}