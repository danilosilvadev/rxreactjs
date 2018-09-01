import React, { Component } from 'react';
import { Store } from './store';
import { isTypeAString } from './typeChecker';

export const mapContextToProps = (ComposedComponent, type) => (
  class HOC extends Component {
    constructor(){
      super();
      this.state = {
        context: null,
      }
    }
    componentDidMount() {
      this.subscription = Store.subscribe({next: s => this.setState({ context: s[isTypeAString(type)] })});
    }
    componentWillUnMount() {
      this.subscription.unsubscribe();
    }

    render() {
      const { context } = this.state;
      return(
        <ComposedComponent
          {...this.props}
          state={context && context.state}
          actions={context && context.actions}
        />
      );
    }
  }
);
