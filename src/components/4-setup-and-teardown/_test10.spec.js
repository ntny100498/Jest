let cities = [];

function initializeCityDatabase() {
  cities.push('Vienna');
  cities.push('San Juan');
}

function clearCityDatabase() {
  cities = [];
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

// beforeEach
// 1
// afterEach

// beforeEach
// 2
// afterEach

// beforeEach
// 3
// afterEach