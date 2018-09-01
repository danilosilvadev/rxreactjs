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
