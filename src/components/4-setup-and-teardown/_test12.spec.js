let cities = [];

function initializeCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities.push('Vienna');
      cities.push('San Juan');
      resolve();
    }, 100);
  });
}

function clearCityDatabase() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      cities = [];
      resolve();
    }, 100);
  });
}

function isCity(name) {
  return cities.includes(name);
}

beforeEach(() => {
  console.log('beforeEach');
  return initializeCityDatabase();
});

afterEach(() => {
  console.log('afterEach');
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  console.log('1');
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  console.log('2');
  expect(isCity('San Juan')).toBeTruthy();
});

test('has only 2 cities', () => {
  console.log('3');
  expect(cities.length).toBe(2);
});

beforeAll(() => {
  console.log('beforeAll');
  return initializeCityDatabase();
});

afterAll(() => {
  console.log('afterAll');
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  console.log('4');
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  console.log('5');
  expect(isCity('San Juan')).toBeTruthy();
});

test('has only 2 cities', () => {
  console.log('6');
  expect(cities.length).toBe(2);
});

// beforeAll

// beforeEach
// 1
// afterEach

// beforeEach
// 2
// afterEach

// beforeEach
// 3
// afterEach

// beforeEach
// 4
// afterEach

// beforeEach
// 5
// afterEach

// beforeEach
// 6
// afterEach

// afterAll