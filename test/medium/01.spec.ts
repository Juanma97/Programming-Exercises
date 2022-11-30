import { solution01Medium } from '../../src/medium/01';

test('should return empty array if the two input arrays have length 0', () => {
    expect(solution01Medium([], [])).toHaveLength(0);
});

test('should return empty array if the one of input arrays have length 0', () => {
    expect(solution01Medium([2, 4, 3], [])).toHaveLength(0);
    expect(solution01Medium([], [5])).toHaveLength(0);
});

test('should return array with sum if the two input arrays have numbers', () => {
    const result = solution01Medium([2, 4, 3], [5, 6, 4]);

    expect(result).toHaveLength(3);
    expect(result[0]).toBe(7);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(8);
});

test('should return array with sum if the two input arrays have numbers but different length', () => {
    const result = solution01Medium([6, 7, 4, 8], [7, 2]);

    expect(result).toHaveLength(4);
    expect(result[0]).toBe(3);
    expect(result[1]).toBe(0);
    expect(result[2]).toBe(5);
    expect(result[3]).toBe(8);
});