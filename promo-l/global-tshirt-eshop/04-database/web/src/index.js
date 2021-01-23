import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import './stylesheets/index.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#root')
);
