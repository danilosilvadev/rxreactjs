import React, { Component } from 'react';
import Inner from './Inner';
import Outter from './Outter';
import { createContext, Context } from '../lutterjs/lutter';

class ParentProvider extends Component {

  componentDidMount() {
    createContext(Context, 'Simple String', 'MY_CONTEXT_TYPE');
    createContext(Context, 'another String', 'MY_OTHER_CONTEXT_TYPE');
  }

  render() {
    return (
      <div>
        <Inner />
        <Outter />
      </div>
    );
  }
}

export default ParentProvider;
