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

// beforeEach và afterEach có thể xử lý mã không đồng bộ
beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});

test('has only 2 cities', () => {
  expect(cities.length).toBe(2);
});