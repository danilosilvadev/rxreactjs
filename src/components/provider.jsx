import React, { Component } from 'react';
import Inner from './Inner';
import Outter from './Outter';
import { createContext, Context } from '../lutterjs/lutter';

class ParentProvider extends Component {

  componentDidMount() {
    /* This is how we create a context
    createContext(Context.value, 'Simple String', 'MY_CONTEXT_TYPE');
    createContext(Context.value, 'another String', 'MY_OTHER_CONTEXT_TYPE');
    createContext(Context.value, 'Replacing String', 'MY_CONTEXT_TYPE');
    */
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
