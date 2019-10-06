// Imports
import React from 'react'
import {Route, Switch} from 'react-router-dom'

// App Imports
import {routes} from '../setup/routes';
import LoginPage from '../views/LoginPage/LoginPage';
import SchedulingLayout from '../layouts/SchedulingLayout/SchedulingLayout';
import requireAuth from '../utils/requireAuth';

// Component
const App = () => (
  <div>
    <Switch>
      
      <Route path={routes.home} component={LoginPage} exact/>
      <Route path={routes.about} component={requireAuth(SchedulingLayout)}/>

    </Switch>
  </div>
)

export default App