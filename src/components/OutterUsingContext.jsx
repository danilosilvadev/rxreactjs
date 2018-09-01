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
