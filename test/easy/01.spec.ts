import { solution01Easy } from '../../src/easy/01';

test('should return empty array if the input array have length 0', () => {
  expect(solution01Easy([], 0)).toHaveLength(0);
});

test('should return empty array if the input target is 0', () => {
  expect(solution01Easy([2, 7, 9], 0)).toHaveLength(0);
});

test('should return array with the positions that sum is the input target', () => {
  const result = solution01Easy([2, 7, 11, 15], 9);

  expect(result).toHaveLength(2);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(1);
});

test('should return empty array if not find numbers that sum is the input target', () => {
  const result = solution01Easy([3, 7, 11, 15], 9);
  
  expect(result).toHaveLength(0);
});


test('should return array with the positions that sum is the input target', () => {
  const result = solution01Easy([123, 237, 211, 15, 2, 5, 23, 234, 223, 4, 7, 898, 67], 90);
  
  expect(result).toHaveLength(2);
  expect(result[0]).toBe(6);
  expect(result[1]).toBe(12);
});