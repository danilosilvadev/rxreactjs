import React, { Component } from 'react';
import { Store } from './store';

export const mapStoreToProps = (ComposedComponent) => (
  class HOC extends Component {
    constructor(){
      super();
      this.state = {
        store: null,
      }
    }
    componentDidMount() {
      this.subscription = Store.subscribe({next: s => this.setState({ store: s })});
    }
    componentWillUnMount() {
      this.subscription.unsubscribe();
    }

    render() {
      const { store } = this.state;
      return(
        <ComposedComponent
          {...this.props}
          store={store}
        />
      );
    }
  }
);
