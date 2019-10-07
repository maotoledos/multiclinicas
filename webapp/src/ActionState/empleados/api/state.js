const empleadoInitialState = {
  isLoading: false,
  error: null,
  empleados: []
}

export const empleados = (state = empleadoInitialState, action) => {
  switch(action.type) {
      case 'GET_EMPLEADOS_REQUEST':
      return {
          ...state,
          isLoading: action.isLoading,
          error: null
      }
      case 'GET_EMPLEADOS_RESPONSE':
      return {
          ...state,
          isLoading: false,
          error: action.error,
          empleados: action.empleados
      }
      case 'GET_EMPLEADOS_FAILURE':
      return {
          ...state,
          isLoading: true,
          error: action.error
      }
      default:
          return state
  }
}