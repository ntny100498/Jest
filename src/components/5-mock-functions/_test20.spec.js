test('this 1', () => {
  const myMock1 = jest.fn();
  const a = new myMock1();
  console.log(myMock1.mock.instances);
  // > [ <a> ]
  // [ mockConstructor {} ]

  const myMock2 = jest.fn();
  const b = {};
  const bound = myMock2.bind(b);
  bound();
  console.log(myMock2.mock.contexts);
  // > [ <b> ]
  // [ {} ]
});


test('this 2', () => {
  const myMock = jest.fn();
  const a = new myMock();
  a.name = "a";
  const b = {};
  b.name = "b";
  const bound = myMock.bind(b);
  bound();

  console.log(myMock.mock.instances);
  // > [ <a>, <b> ]
  // [ mockConstructor { name: 'a' }, { name: 'b' } ]
});