import React, { Component } from 'react';
import Provider from './components/provider';
import Outter from './components/Outter';
import { createContext } from './lutterjs/lutter';

class App extends Component {
  render() {
    return (
      <div>
        <Outter />
        <Provider />
      </div>
    );
  }
}

export default App;
