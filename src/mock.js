export const contextMock = {
  actions: { someAction: () => 'An action' },
  state: { someData: 'blue' },
};

export const storeMock = {
  MY_CONTEXT: contextMock,
};
