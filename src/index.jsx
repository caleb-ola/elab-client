import React from 'react';
import ReactDOM from 'react-dom/client';
import HttpsRedirect from 'react-https-redirect';
import './sass/index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HttpsRedirect>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HttpsRedirect>,
);
