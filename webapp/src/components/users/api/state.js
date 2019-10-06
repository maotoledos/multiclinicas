// App Imports
import _ from 'lodash';


/* AUTHORIZATION LOGIN JWT */

const authInitialState = {
  isAuthenticated: false,
  user: {}
};

// const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const auth = (state= authInitialState, action ={})=> {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: !_.isEmpty(action.user),
        user: action.user
      }
    default: return state;
  }
}

const banktimeIdInitialState = {
  error: null,
  banktimeId: 0
}

export const banktime = (state = banktimeIdInitialState, action)=>{
  
  switch(action.type){
    case 'BANKTIMEID_GET_REQUEST':
    return {
      ...state,
      isLoading: false
    };
    case 'BANKTIMEID_GET_RESPONSE':
    return {
      ...state,
      isLoading: false,
      error: action.error,
      banktimeId: action.banktimeId
    };
    case 'BANKTIMEID_GET_FAILURE':
    return {
      ...state,
      isLoading: false
    }
    default: 
    return {
      ...state
    }
  }
}