import React from 'react';
import { Context } from '../lutterjs/lutter';

export default function Inner(props) {
  return (
    <div>{Context.MY_CONTEXT_TYPE && Context.MY_CONTEXT_TYPE.myContext}</div>
  )
}
