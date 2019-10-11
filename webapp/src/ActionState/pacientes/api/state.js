const pacienteInitialState = {
  pacientes: []
}

export const pacientes = (state = pacienteInitialState, action) => {
  switch(action.type) {
      case 'GET_PACIENTES_REQUEST':
      return {
          ...state
      }
      case 'GET_PACIENTES_RESPONSE':
      return {
          ...state,
          pacientes: action.pacientes
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