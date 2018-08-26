import React from 'react';
import ReactDOM from 'react-dom';
import { Context } from './lutterjs/lutter';
import Outter from './components/Outter';
import App from './App.jsx';

ReactDOM.render(
  <div>
    <Outter />
    <App />
  </div>, document.getElementById('root'));
