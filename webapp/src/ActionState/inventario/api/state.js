const inventariosInitialState = {
  inventarios: []
}

export const inventarios = (state = inventariosInitialState, action) => {
  switch(action.type) {
      case 'GET_INVENTARIOS_REQUEST':
      return {
          ...state
      }
      case 'GET_INVENTARIOS_RESPONSE':
      return {
          ...state,
          inventarios: action.inventarios
      }
      case 'GET_INVENTARIOS_FAILURE':
      return {
          ...state,
          error: action.error
      }
      default:
          return state
  }
}