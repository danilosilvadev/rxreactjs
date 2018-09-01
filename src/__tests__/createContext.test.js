import { createContext, mapStoreToProps, mapContextToProps } from '../../index';
import { shallow } from 'enzyme';
import OutterUsingStore from '../components/OutterUsingStore';
import OutterUsingContext from '../components/OutterUsingContext';

const contextMock = {
  state: { someData: 'blue' },
  actions: { someAction: () => 'An action' }
};

createContext('MY_CONTEXT', { someData: 'blue' });

describe('Minicart behavior tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapperContext = shallow(
      <OutterUsingContext />
    );
  });

  it('should test if the context mock is equal to context shared', () => {
      expect(wrapper.props().state).to.equal(contextMock.state);
    });
});
