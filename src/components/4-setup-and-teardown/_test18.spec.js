let globalVariable = true;

// test('first test', () => {
//   expect(globalVariable).toBe(true);
//   globalVariable = false;
// });

test.only('first test', () => {
  expect(globalVariable).toBe(true);
  globalVariable = false;
});

test('second test', () => {
  expect(globalVariable).toBe(true);
});