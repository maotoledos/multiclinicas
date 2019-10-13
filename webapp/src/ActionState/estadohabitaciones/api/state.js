const pacientesxhabitacionesInitialState = {
  pacientesxhabitaciones: []
}

export const pacientesxhabitaciones = (state = pacientesxhabitacionesInitialState, action) => {
  switch(action.type) {
      case 'GET_PACIENTESXHABITACION_REQUEST':
      return {
          ...state
      }
      case 'GET_PACIENTESXHABITACION_RESPONSE':
      return {
          ...state,
          pacientesxhabitaciones: action.pacientesxhabitaciones
      }
      case 'GET_PACIENTESXHABITACION_FAILURE':
      return {
          ...state,
          error: action.error
      }
      default:
          return state
  }
}