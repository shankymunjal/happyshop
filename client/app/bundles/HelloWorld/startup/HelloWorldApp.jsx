import React from 'react';
import ReactOnRails from 'react-on-rails';

import HelloWorld from '../containers/HelloWorld';
import App from '../../../components/app';

const HelloWorldApp = (props) => (
  <App {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp });

