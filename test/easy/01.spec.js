const solution01Easy = require('../../src/easy/01');

test('should return empty if the array have length 0', () => {
  expect(solution01Easy([], 0)).toHaveLength(0);
});