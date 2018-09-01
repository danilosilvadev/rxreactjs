import { isTypeAString, isStateAnObject, isActionsAnObject } from './typeChecker';
import { Store } from './store';

export function createContext(type = '', state = {}, actions = {}) {
  Store.next({...Store.value,
    [isTypeAString(type)]: {
      state: isStateAnObject(state),
      actions: isActionsAnObject(actions),
    },
  });
};
