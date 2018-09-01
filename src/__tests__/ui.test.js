import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import OutterUsingStore from '../components/OutterUsingStore';
import OutterUsingContext from '../components/OutterUsingContext';
import Provider from '../components/provider';

describe('UI tests', () => {
  const wrapperProvider = shallow(
    <Provider />
  );

  it('should render Provider correctly', () => {
  const tree = renderer
      .create(wrapperProvider)
      .toJSON();
  expect(tree).toMatchSnapshot();
  });

  const wrapperStore = shallow(
    <OutterUsingStore />
  );

  it('should render OutterUsingStore correctly', () => {
  const tree = renderer
      .create(OutterUsingStore)
      .toJSON();
  expect(tree).toMatchSnapshot();
  });

  const wrapperContext = shallow(
    <OutterUsingContext />
  );

  it('should render OutterUsingContext correctly', () => {
  const tree = renderer
      .create(OutterUsingContext)
      .toJSON();
  expect(tree).toMatchSnapshot();
  });
});
