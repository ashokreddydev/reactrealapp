// src/routes.js
import React from 'react';
import { Router, Route,IndexRoute } from 'react-router'



import App from './Components/Login';
import NotFound from './Components/NotFound';





const Routes = (props) => (
  <Router {...props}>
     <Route path="/" component={App} />
     <IndexRoute component={App} />
      <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
