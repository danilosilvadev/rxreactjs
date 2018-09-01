import React from 'react';
import { createContext, mapStoreToProps, mapContextToProps } from '../../index';
import { shallow } from 'enzyme';
import OutterUsingStore from '../components/OutterUsingStore';
import OutterUsingContext from '../components/OutterUsingContext';
import { contextMock, storeMock } from '../mock';

// sharing global data
createContext('MY_CONTEXT', contextMock.state, contextMock.actions);

describe('Behavior tests', () => {
  let wrapperContext = shallow(
    <OutterUsingContext />
  );
  let wrapperStore = shallow(
    <OutterUsingStore />
  );

  it('should test if the context mock is equal to context shared', () => {
      expect(wrapperContext.props().state).toEqual(contextMock.state);
    });

  it('should test if the store mock is equal to store shared', () => {
      expect(wrapperStore.props().store).toEqual(storeMock);
    });
});
