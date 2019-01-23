# RxReactJS

RxReactJS is a new way of creating a single source of truth without using redux, mobx or some of those well-known alternatives. It uses rxjs plus high order components to compose your single state observable. To use it is not required to know rxjs, you just need to call 2 functions (one to share data, and another to receive it) and that's it.

### Installation:

`npm i rxjs rxreactjs`

### Usage:

First create a provider class to share the data.

Ex:

```js
//Provider.js
import React, { Component } from 'react';
import { createContext } from 'rxreactjs';

class Provider extends Component {
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
        <MyComponent />
      </React.Fragment>
    );
  }
}

export default Provider;
```

Now you can go to any file and call the value that you stored, don't need to be children of the provider.

Ex:

```js
import React from 'react';
import { mapContextToProps } from '../rxreactjs';

function OutterUsingContext(props) {
  const { state, actions } = props;
  return (
    <div>
      <div>
        {state && state.someData}
      </div>
      <button onClick={() => actions.changeSomeData()}>
        Change the data
      </button>
    </div>
  )
}

// This is how we inject it
export default mapContextToProps(OutterUsingContext, 'MY_CONTEXT');
```

And that is it. Simple no? You can call Outter whatever you want and it still will work.

The `mapContextToProps` function share the data only of the context that you want to receive. Contexts are small pieces of data with state and actions, like a redux store but componentized.

My suggestion is that you create small contexts for each complex component, like a Shelf of products, a MiniCart or etc. And keep those stateless using just the provider state and actions to change data.

But if you still want to receive all data in some component we also have the function `mapStoreToProps` that injects all contexts like redux does. I don't recommend this use in every component because it delivers too much unnecessary data just like redux and also needs to handle destructuring async in 2 levels. The large-scale use of this is a lack of data architecture organization and should be avoided unless you face no option.

Ex:

```js
import React from 'react';
import { mapStoreToProps } from '../rxreactjs';

const handleSomeData = (store) => (
  store && store.MY_CONTEXT && store.MY_CONTEXT.state.someData
);

function OutterUsingStore(props) {
  const { store } = props;
  return (
    <div>
      <div>
        {handleSomeData(store)}
      </div>
      <button onClick={() => store.MY_CONTEXT.actions.changeSomeData()}>
        Change the data
      </button>
    </div>
  )
}

// This is how we inject it
export default mapStoreToProps(OutterUsingStore);
```

### Test coverage

It is 100% tested :D

`npm run test`
