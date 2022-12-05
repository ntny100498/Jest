test('mocks', () => {
  const someMockFunction = jest.fn(() => 'return value');
  someMockFunction('first arg', 'second arg');

  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value');

  const someMockConstructor = jest.fn();
  const a = new someMockConstructor();
  a.name = 'test';
  const b = new someMockConstructor('test 2');

  // The function was called with a certain `this` context: the `element` object.
  // expect(someMockConstructor.mock.contexts[0]).toBe(element);

  // This function was instantiated exactly twice
  expect(someMockConstructor.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(someMockConstructor.mock.instances[0].name).toBe('test');

  // The first argument of the last call to the function was 'test 2'
  expect(someMockConstructor.mock.lastCall[0]).toBe('test 2');
});