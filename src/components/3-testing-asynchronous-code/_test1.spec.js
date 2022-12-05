function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 100);
  });
}

function fetchDataWithErrorMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 100);
  });
}

function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('error'));
    }, 100);
  });
}

// Promises
test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// Async/Await
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataWithErrorMessage();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

// .resolves/.rejects with async/await
test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataWithErrorMessage()).rejects.toMatch('error');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataWithError()).rejects.toThrow('error');
});

// .resolves/.rejects with return
test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchDataWithErrorMessage()).rejects.toMatch('error');
});

// .catch and expect.assertions
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataWithErrorMessage().catch(e => expect(e).toMatch('error'));
});

// Callbacks
// Don't do this!
function fetchDataCB(callback) {
  setTimeout(() => {
    callback(null, 'peanut butter')
  }, 100);
}

test('the data is peanut butter', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchDataCB(callback);
});

test('the data is peanut butter', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchDataCB(callback);
});