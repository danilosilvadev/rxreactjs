import React, { Component } from 'react';
import Outter from './Outter';
import { createContext } from '../rxreactjs/rxreact';

class ParentProvider extends Component {

  componentDidMount() {
    createContext('MY_CONTEXT_TYPE', 'Simple String');
    createContext('MY_OTHER_CONTEXT_TYPE', 'another String');
    createContext('MY_CONTEXT_TYPE', 'Replacing String');
    createContext('MY_CONTEXT_TYPE', this.MountContext());
  }

  MountContext() {
    return 'string';
  }

  render() {
    return (
      <div>
        <Outter />
      </div>
    );
  }
}

export default ParentProvider;
