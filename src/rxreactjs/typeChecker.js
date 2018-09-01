export function isTypeAString(type) {
  if(typeof type !== 'string') throw new Error('Type must be a string');
  return type;
}

export function isStateAnObject(state) {
  if(typeof state !== 'object') throw new Error('State must be an object');
  return state;
}

export function isActionsAnObject(actions) {
  if(typeof actions !== 'object') throw new Error('Actions must be an object');
  return actions;
}
