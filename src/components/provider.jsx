import React, { Component } from 'react';
import { createContext } from '../rxreactjs';
import OutterUsingContext from './OutterUsingContext';
import OutterUsingStore from './OutterUsingStore';

class ParentProvider extends Component {
  constructor() {
    super();
    this.state = {
      someData: null,
    };
    this.actions = {
      changeSomeData: this.handleChange = this.handleChange.bind(this),
    };
  }

componentDidMount() {
    this.setState({ someData: 'A data coming from fetching' });
  }

  componentDidUpdate() {
    createContext('MY_CONTEXT', this.state, this.actions);
  }

handleChange() {
    this.setState({ someData: 'some data changed by action'});
  }

  render() {
    return (
      <React.Fragment>
        <OutterUsingContext />
        <OutterUsingStore />
      </React.Fragment>
    );
  }
}

export default ParentProvider;
