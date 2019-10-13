const historialInitialState = {
  historial: []
}

export const historial = (state = historialInitialState, action) => {
  switch(action.type) {
      case 'GET_HISTORIAL_REQUEST':
      return {
          ...state
      }
      case 'GET_HISTORIAL_RESPONSE':
      return {
          ...state,
          historial: action.historial
      }
      case 'GET_HISTORIAL_FAILURE':
      return {
          ...state,
          error: action.error
      }
      default:
          return state
  }
}