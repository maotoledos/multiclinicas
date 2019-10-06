import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

//app imports
import {store} from './setup/store';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './components/users/api/actions';

//css imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/pe-icon-7-stroke.css";
import App from "./components/App";

require("react-big-calendar/lib/css/react-big-calendar.css");

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken))); 
}

ReactDOM.render(

  <Provider store={store}>
  
    <Router>
      
      <App/>
      
    </Router>
  
  </Provider>,

  document.getElementById("root")
);
