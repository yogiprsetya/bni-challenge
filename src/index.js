import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

global.ApiHost = process.env.REACT_APP_APIHOST;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
