import React from 'react';
import ReactDOM from 'react-dom';
import HttpsRedirect from 'react-https-redirect';
import './sass/index.scss';
import App from './App';

// eslint-disable-next-line function-paren-newline
ReactDOM.render(
  <HttpsRedirect>
    <App />
  </HttpsRedirect>, document.getElementById('root'));
