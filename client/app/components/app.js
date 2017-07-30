import React from 'react';

import {Router, browserHistory} from 'react-router';
var Locations = Router.Locations
var Location = Router.Location
import routes from '../routes'

export default (props, location) => {
  
  return (
    <Router history={browserHistory} routes={routes} />
  );
};