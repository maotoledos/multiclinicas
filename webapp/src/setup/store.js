// Imports
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import * as users from '../components/users/api/state';
import * as empleados from '../ActionState/empleados/api/state'

// Root Reducer, needs a previous state and action
const rootReducer = combineReducers({
  ...users,
  ...empleados
});

// Store
export const store = 
createStore(  
  rootReducer,
  //initial state. thunk:async functions
  compose(
    applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
)
