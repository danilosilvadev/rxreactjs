import React from 'react';
import { Context, mapContextToProps } from '../lutterjs/lutter';

function Outter(props) {
  return (
    <div>
      <div>
        {console.log(props)}
        {props.context && props.context.MY_OTHER_CONTEXT_TYPE}
      </div>
    </div>
  )
}

export default mapContextToProps(Outter, Context);
