// Imports
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import * as users from '../components/users/api/state';
import * as empleados from '../ActionState/empleados/api/state';
import * as pacientes from '../ActionState/pacientes/api/state';
import * as inventario from '../ActionState/inventario/api/state';
import * as estadohabitaciones from '../ActionState/estadohabitaciones/api/state';
import * as historialpaciente from '../ActionState/historialpaciente/api/state';

// Root Reducer, needs a previous state and action
const rootReducer = combineReducers({
  ...users,
  ...empleados,
  ...pacientes,
  ...inventario,
  ...estadohabitaciones,
  ...historialpaciente
});

// Store
export const store = 
createStore(  
  rootReducer,
  //initial state. thunk:async functions
  compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
)
