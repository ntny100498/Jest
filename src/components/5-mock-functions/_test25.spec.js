// Mock Implementations
test('mockImplementation', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  // > True
})