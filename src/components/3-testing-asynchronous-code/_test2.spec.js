function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter')
  }, 100);
}

// Don't do this!
test('the data is peanut butter', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }
  
  fetchData(callback);
});