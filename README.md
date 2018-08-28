# RxReactJS

RxReactJS is a new way of create a single source of truth without use redux, mobx or some of those well knew alternatives. It just uses rxjs plus high order components to compose your single state observable.

### Here what is:

```js
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
```

### Usage:

Just copy the code above and install rxjs at yout project.
Then create a class called provider, and inside it call createContext function.

```js
//Provider.js
class Provider extends Component {

  componentDidMount() {
    createContext('MY_CONTEXT_TYPE', 'Simple String');
  }

  render() {
    return (
      <div>
       ...
      </div>
    );
  }
}
```

Now you can go to any file and call the value that you stored.

```js
import React from 'react';
import { mapContextToProps } from '../rxreactjs/rxreact';

function Outter(props) {
  return (
    <div>
      <div>
        {props.context && props.context.MY_CONTEXT_TYPE}
      </div>
    </div>
  )
}

// This is how we inject the data
export default mapContextToProps(Outter);
```

And that is it. Simple no? You can call Outter whatever you want and it still will work.

Here a sugestion, create contexts to each block of information of your code, instead just a huge block with actions and state.

### Ex:

```js
class Provider extends Component {
  constructor() {
    super();
    this.initialState = {
      data: false,
      direction: 'right',
    };
    this.state = this.initialState;
  }

  componentDidMount() {
    fetchMinicart().then(res => this.setState({ data: res }));
    // Now there is a prop called MINICART_CONTEXT with all states
    // and actions that we will use only in the minicart component.
    createContext('MINICART_CONTEXT', this.MountContext());
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  MountContext() {
    return ({
      state: this.state,
      actions: {
        dropItem: (index) => {
         // some action using index
        },
        changeAmount: (index, amount) => {
          // some action using index and amount
        },
      },
    });
  }

  render() {
    return (
      <React.Fragment>
          <MiniCart />
      </React.Fragment>
    );
  }
}

export default Provider;
```
