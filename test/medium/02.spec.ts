import { solution02Medium } from '../../src/medium/02';

test('should return 0 if the given string is empty', () => {
    expect(solution02Medium('')).toBe(0);
});

test('should return 1 if the given string have one character', () => {
    expect(solution02Medium('b')).toBe(1);
});

test('should return the length of biggest subtring given a non-empty string', () => {
    expect(solution02Medium('abcabcbb')).toBe(3);
    expect(solution02Medium('bbbbb')).toBe(1);
    expect(solution02Medium('pwwkew')).toBe(3);
    expect(solution02Medium('bbbbba')).toBe(2);
    expect(solution02Medium('abc abc abcde')).toBe(5);
});