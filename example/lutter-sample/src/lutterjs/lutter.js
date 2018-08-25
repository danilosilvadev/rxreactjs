import React, { Component } from 'react';
import { BehaviorSubject } from 'rxjs';

export const Context = new BehaviorSubject({});


// Next step is to add prevContext into the new without overriding
export function createContext(prevContext, context, type) {
  Context.next({...prevContex.get,  [type]: context });
};

export const mapContextToProps = (ComposedComponent, Cont) => (
  class HOC extends Component {
    constructor(){
      super();
      this.state = {
        context: null,
      }
    }
    componentDidMount() {
      Cont.subscribe({next: v => this.setState({ context: v})})
    }

    render() {
      return(
        <ComposedComponent {...this.props} context={this.state.context} />
      );
    }
  }
);
