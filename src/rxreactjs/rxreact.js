import React, { Component } from 'react';
import { BehaviorSubject } from 'rxjs';

export const Context = new BehaviorSubject({});

export function createContext(type, context) {
  Context.next({...Context.value,  [type]: context });
};

export const mapContextToProps = (ComposedComponent) => (
  class HOC extends Component {
    constructor(){
      super();
      this.state = {
        context: null,
      }
    }
    componentDidMount() {
      Context.subscribe({next: v => this.setState({ context: v})})
    }

    componentWillUnmount(){
      Context.unsubscribe();
    }

    render() {
      return(
        <ComposedComponent {...this.props} context={this.state.context} />
      );
    }
  }
);
