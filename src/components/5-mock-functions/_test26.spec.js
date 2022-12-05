jest.mock('./test26'); // this happens automatically with automocking
const test26 = require('./test26');

// mockImplementation
test('test26', () => {
  // test26 is a mock function
  test26.mockImplementation(() => 42);
  expect(test26()).toBe(42);
});

// mockImplementationOnce
test('mockImplementationOnce', () => {
  const myMockFn = jest
    .fn()
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false));

  // myMockFn((err, val) => console.log(val));
  // > true

  // myMockFn((err, val) => console.log(val));
  // > false
});

test('mockImplementationOnce', () => {
  const myMockFn = jest
    .fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

  // console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
  // > 'first call', 'second call', 'default', 'default'
});

// mockReturnThis
test('return this', () => {
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };

  // is the same as

  const otherObj = {
    myMethod: jest.fn(function () {
      return this;
    }),
  };

  // console.log(myObj.myMethod());
  // console.log(otherObj.myMethod());
});

// mockName
// test('mockName', () => {
//   const myMockFn = jest
//     .fn()
//     .mockReturnValue('default')
//     .mockImplementation(scalar => 42 + scalar)
//     .mockName('add42');

//   expect(myMockFn()).toBeCalled();
// });

test('custom matchers', () => {
  const mockFunc = jest.fn();

  const arg1 = 'arg1';
  const arg2 = 'arg2';

  mockFunc(arg1, arg2);

  // The mock function was called at least once
  // Hàm giả được gọi ít nhất một lần
  expect(mockFunc).toHaveBeenCalled();

  // The mock function was called at least once with the specified args
  // Hàm giả được gọi ít nhất một lần với các đối số được chỉ định
  expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

  // The last call to the mock function was called with the specified args
  // Lần gọi hàm giả cuối cùng được gọi với các đối số đã chỉ định
  expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);

  // All calls and the name of the mock is written as a snapshot
  // Tất cả các cuộc gọi và tên của mô phỏng được viết dưới dạng ảnh chụp nhanh
  expect(mockFunc).toMatchSnapshot();
});

// Viết thủ công
test('custom matchers', () => {
  const mockFunc = jest.fn();

  const arg1 = 'arg1';
  const arg2 = 'arg2';

  mockFunc(arg1, arg2);

  // The mock function was called at least once
  expect(mockFunc.mock.calls.length).toBeGreaterThan(0);

  // The mock function was called at least once with the specified args
  expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);

  // The last call to the mock function was called with the specified args
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
    arg1,
    arg2,
  ]);

  // The first arg of the last call to the mock function was `42`
  // (note that there is no sugar helper for this specific of an assertion)
  expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe('arg1');

  // A snapshot will check that a mock was invoked the same number of times,
  // in the same order, with the same arguments. It will also assert on the name.
  expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
  // expect(mockFunc.getMockName()).toBe('a mock name');
});