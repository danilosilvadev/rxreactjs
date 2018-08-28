import React from 'react';
import { mapContextToProps } from '../rxreactjs/rxreact';

function Outter(props) {
  return (
    <div>
      <div>
        {props.context && props.context.MY_CONTEXT_TYPE}
        {props.context && props.context.MY_OTHER_CONTEXT_TYPE}
      </div>
    </div>
  )
}

// This is how we inject it
export default mapContextToProps(Outter);
